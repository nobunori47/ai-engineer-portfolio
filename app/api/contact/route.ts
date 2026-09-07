import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase-server";
import { isValidInquiryType } from "@/lib/contact-options";
import { cases } from "@/lib/cases";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  inquiryType?: string;
  currentIssue?: string;
  message?: string;
  timeline?: string;
  budget?: string;
  sourceCase?: string; // Works詳細ページからの参照事例slug（任意）
  consent?: boolean; // プライバシーポリシーへの同意
  website?: string; // honeypot（人には見えない項目。埋まっていたらボット扱い）
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const CONTROL_CHARS_REGEX = new RegExp(
  "[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F\\u007F]",
  "g"
);

/**
 * 簡易サニタイズ。
 * このフォームで受け取った文字列は現状どこにもHTMLとして描画していないが、
 * 将来の表示先（管理画面等）でHTMLとして扱われても安全なように、
 * 制御文字を除去し、山括弧を全角に変換してタグ注入を無効化する。
 */
function sanitizeText(input: string, maxLen: number): string {
  return input
    .replace(CONTROL_CHARS_REGEX, "")
    .replace(/</g, "＜")
    .replace(/>/g, "＞")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLen);
}

/** Slackのmrkdwnで意味を持つ文字をエスケープする（Slack公式仕様: & < > のみでよい） */
function escapeForSlack(input: string): string {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * 簡易レート制限・簡易二重送信防止用のインメモリストア。
 *
 * 【重要な制限事項】
 * Vercel等のサーバーレス環境では、関数の実行インスタンスが頻繁に入れ替わるため、
 * このメモリは常に共有されるわけではない（インスタンスごとに別々になりうる）。
 * そのため、これは「簡易的な」防止策であり、悪意ある攻撃者による分散的な連投を
 * 確実に防げるものではない。より強固なレート制限が必要になった場合は、
 * Supabase等の永続ストアやUpstash Redis等の外部レート制限サービスへの
 * 置き換えを検討すること。
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10分
const RATE_LIMIT_MAX = 5; // 10分あたり5件まで
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  rateLimitStore.set(key, timestamps);
  // メモリが際限なく増えないようにする簡易クリーンアップ
  if (rateLimitStore.size > 5000) rateLimitStore.clear();
  return timestamps.length > RATE_LIMIT_MAX;
}

const DEDUPE_WINDOW_MS = 60 * 1000; // 60秒
const recentSubmissions = new Map<string, number>();

function isDuplicateSubmission(key: string): boolean {
  const now = Date.now();
  const last = recentSubmissions.get(key);
  recentSubmissions.set(key, now);
  if (recentSubmissions.size > 5000) recentSubmissions.clear();
  return last !== undefined && now - last < DEDUPE_WINDOW_MS;
}

function getClientKey(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim();
  return ip || "unknown";
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "リクエスト形式が不正です。" },
      { status: 400 }
    );
  }

  // Honeypot: 埋まっていたらボットとみなし、成功したふりをして何もしない。
  if (body.website && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const clientKey = getClientKey(req);
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        ok: false,
        error: "送信回数が多すぎます。しばらく時間をおいて再度お試しください。",
      },
      { status: 429 }
    );
  }

  const name = sanitizeText((body.name ?? "").trim(), 200);
  const email = (body.email ?? "").trim().slice(0, 200);
  const company = sanitizeText((body.company ?? "").trim(), 200);
  const inquiryType = (body.inquiryType ?? "").trim();
  const currentIssue = sanitizeText((body.currentIssue ?? "").trim(), 2000);
  const message = sanitizeText((body.message ?? "").trim(), 4000);
  const timeline = sanitizeText((body.timeline ?? "").trim(), 200);
  const budget = sanitizeText((body.budget ?? "").trim(), 200);
  const consent = body.consent === true;

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "お名前・メールアドレス・ご相談内容は必須です。" },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "メールアドレスの形式が正しくありません。" },
      { status: 400 }
    );
  }
  if (!inquiryType || !isValidInquiryType(inquiryType)) {
    return NextResponse.json(
      { ok: false, error: "相談内容の種類を選択してください。" },
      { status: 400 }
    );
  }
  if (!consent) {
    return NextResponse.json(
      {
        ok: false,
        error: "プライバシーポリシーへの同意が必要です。",
      },
      { status: 400 }
    );
  }
  if (name.length > 200 || email.length > 200) {
    return NextResponse.json(
      { ok: false, error: "入力内容が長すぎます。" },
      { status: 400 }
    );
  }
  if (message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "ご相談内容が長すぎます（4000文字以内でご記入ください）。" },
      { status: 400 }
    );
  }

  // 参照元Case（Works詳細ページからの導線）。slugはクライアントの自己申告値のため、
  // 既知のCase一覧に存在するものだけを信頼し、タイトル等はサーバー側で解決した値のみ使用する。
  const sourceCaseSlug = (body.sourceCase ?? "").trim();
  const referencedCase = sourceCaseSlug
    ? cases.find((c) => c.slug === sourceCaseSlug)
    : undefined;

  // 二重送信防止（同一内容の連続送信を60秒間だけ抑止し、成功扱いで返す）
  const dedupeKey = `${email}::${message.slice(0, 200)}`;
  if (isDuplicateSubmission(dedupeKey)) {
    return NextResponse.json({ ok: true });
  }

  const consentAt = new Date().toISOString();

  // 相談内容の種類・参照事例・同意記録は、既存テーブルのスキーマ変更を避けるため
  // messageカラムの先頭にメタ情報として付記する（本番DBへのDDLは今回実施していない）。
  // 将来的に専用カラムへ分離する場合はsupabase/proposals/配下のSQL案を参照。
  const metaLines = [
    `【相談内容の種類】${inquiryType}`,
    referencedCase
      ? `【参照事例】${referencedCase.title}（/works/${referencedCase.slug}）`
      : null,
    `【プライバシーポリシー同意】同意済み（${consentAt}）`,
  ].filter((line): line is string => line !== null);

  const composedMessage = `${metaLines.join("\n")}\n\n${message}`;

  try {
    const supabase = getSupabaseServerClient();
    const { error: insertError } = await supabase.from("contact_inquiries").insert({
      name,
      company: company || null,
      email,
      current_issue: currentIssue || null,
      message: composedMessage,
      timeline: timeline || null,
      budget: budget || null,
      status: "new",
    });

    if (insertError) {
      console.error("[contact] Supabase insert error:", insertError.message);
      return NextResponse.json(
        {
          ok: false,
          error: "送信中にエラーが発生しました。時間をおいて再度お試しください。",
        },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error(
      "[contact] unexpected error:",
      err instanceof Error ? err.message : "unknown error"
    );
    return NextResponse.json(
      {
        ok: false,
        error: "送信中にエラーが発生しました。時間をおいて再度お試しください。",
      },
      { status: 500 }
    );
  }

  // Slack通知はベストエフォート。失敗してもユーザーへの成功レスポンスは止めない
  // （問い合わせ自体はSupabaseに保存済みのため、通知が届かなくてもデータは失われない）。
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blocks: [
            {
              type: "header",
              text: { type: "plain_text", text: "🔔 新規お問い合わせ", emoji: true },
            },
            {
              type: "section",
              fields: [
                { type: "mrkdwn", text: `*お名前*\n${escapeForSlack(name)}` },
                { type: "mrkdwn", text: `*会社名*\n${escapeForSlack(company || "未記入")}` },
                { type: "mrkdwn", text: `*メール*\n${escapeForSlack(email)}` },
                { type: "mrkdwn", text: `*相談内容の種類*\n${escapeForSlack(inquiryType)}` },
                { type: "mrkdwn", text: `*予算感*\n${escapeForSlack(budget || "未記入")}` },
                { type: "mrkdwn", text: `*希望時期*\n${escapeForSlack(timeline || "未記入")}` },
              ],
            },
            ...(referencedCase
              ? [
                  {
                    type: "section",
                    text: {
                      type: "mrkdwn",
                      text: `*参照事例*\n${escapeForSlack(referencedCase.title)}`,
                    },
                  },
                ]
              : []),
            ...(currentIssue
              ? [
                  {
                    type: "section",
                    text: { type: "mrkdwn", text: `*現在のお困りごと*\n${escapeForSlack(currentIssue)}` },
                  },
                ]
              : []),
            {
              type: "section",
              text: { type: "mrkdwn", text: `*ご相談内容*\n${escapeForSlack(message)}` },
            },
          ],
        }),
      });
    } catch (err) {
      console.error(
        "[contact] Slack notify error:",
        err instanceof Error ? err.message : "unknown error"
      );
    }
  }

  return NextResponse.json({ ok: true });
}
