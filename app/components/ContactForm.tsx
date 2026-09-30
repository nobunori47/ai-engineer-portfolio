"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { cases } from "@/lib/cases";
import { INQUIRY_TYPES } from "@/lib/contact-options";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * 相談フォーム（Phase 3D-2 で短縮）。
 * - 表示する項目は5つ：お名前／返信先メールアドレス／会社名（任意）／今、困っていること／プライバシーポリシーへの同意
 * - 送信先・送信内容の形（POST /api/contact の契約）は変えない：
 *   「今、困っていること」は message として送る。inquiryType は画面に出さず、既存の許可値
 *   「まだ具体的に決まっていない」を送る。currentIssue・timeline・budget は空で送る（API は空を許容し null 保存）
 * - スパム対策の隠し項目（website）と、事例詳細からの参照事例（?case=<slug> → sourceCase）は維持する
 */
const DEFAULT_INQUIRY_TYPE = INQUIRY_TYPES.find((t) => t === "まだ具体的に決まっていない") ?? "まだ具体的に決まっていない";

const inputClass =
  "w-full rounded-lg border border-[var(--color-line)] bg-white px-3.5 py-3 text-base text-[var(--color-ink)] placeholder:text-[var(--color-ink-sub)]/70 focus:outline-none focus:border-[var(--color-navy)] focus:ring-2 focus:ring-[var(--color-gold-soft)] transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [sourceCaseSlug, setSourceCaseSlug] = useState<string>("");
  const submittingRef = useRef(false);

  // Works詳細ページからの「?case=<slug>」を読み取り、参照事例をフォームへ安全に引き継ぐ。
  // URLのtitle等の任意テキストは信用せず、slugを自サイトのCase一覧と突き合わせた結果だけを使う。
  // サーバー側レンダリング時点ではURLのクエリを参照できないため、hydrationミスマッチを
  // 避ける目的で、意図的にマウント後のuseEffectで初期値を補完している。
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("case");
      if (!slug) return;
      const matched = cases.find((c) => c.slug === slug);
      if (!matched) return;
      setSourceCaseSlug(matched.slug);
      setMessage((prev) => prev || `「${matched.title}」のような仕組みについて相談したいです。`);
    } catch {
      // window.location等が利用できない環境では何もしない
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const referencedCase = sourceCaseSlug ? cases.find((c) => c.slug === sourceCaseSlug) : undefined;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 二重送信防止（連打対策）。stateの更新は非同期なため、refでも即座にガードする。
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name")?.toString() ?? "",
      company: data.get("company")?.toString() ?? "",
      email: data.get("email")?.toString() ?? "",
      inquiryType: DEFAULT_INQUIRY_TYPE,
      currentIssue: "",
      message: data.get("message")?.toString() ?? "",
      timeline: "",
      budget: "",
      sourceCase: sourceCaseSlug,
      consent: data.get("consent") === "on",
      website: data.get("website")?.toString() ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.error ?? "送信に失敗しました。時間をおいて再度お試しください。");
        submittingRef.current = false;
        return;
      }
      setStatus("success");
      form.reset();
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("送信に失敗しました。通信環境をご確認のうえ、再度お試しください。");
      submittingRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-[var(--color-line)] bg-white p-6 sm:p-8">
        <p className="font-medium text-[var(--color-navy)]">送信ありがとうございました。</p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-sub)]">
          内容を確認のうえ、通常1〜2営業日以内にご返信します。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot: 通常のユーザーには見えない項目。埋まっていたらボットとみなす */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {referencedCase && (
        <p className="rounded-lg border border-[var(--color-line)] bg-[var(--color-ivory)] px-4 py-3 text-xs leading-relaxed text-[var(--color-ink-sub)]">
          「{referencedCase.title}」の事例についてのご相談として送信されます。内容は下の欄で自由に編集できます。
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="お名前" name="name" required autoComplete="name" />
        <Field label="会社名（任意）" name="company" autoComplete="organization" />
      </div>

      <Field label="返信先メールアドレス" name="email" type="email" required autoComplete="email" />

      <label className="block">
        <span className="block mb-1.5 text-sm text-[var(--color-ink)]">
          今、困っていること<span className="ml-1 text-[var(--color-gold-text)]" aria-hidden="true">*</span>
          <span className="sr-only">（必須）</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          placeholder="例：問い合わせへの返信に毎日時間がかかっている、Excelへの転記が多い など"
          className={`${inputClass} leading-relaxed resize-y`}
        />
      </label>

      <label className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--color-ink-sub)]">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-navy)]"
        />
        <span>
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-4"
          >
            プライバシーポリシー
          </Link>
          に同意する<span className="ml-1 text-[var(--color-gold-text)]" aria-hidden="true">*</span>
          <span className="sr-only">（必須）</span>
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-busy={status === "submitting"}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-8 min-h-[52px] text-[0.95rem] font-medium text-[var(--color-ivory)] hover:bg-[var(--color-navy-deep)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "送信中..." : "相談内容を送る"}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block mb-1.5 text-sm text-[var(--color-ink)]">
        {label}
        {required && (
          <>
            <span className="ml-1 text-[var(--color-gold-text)]" aria-hidden="true">*</span>
            <span className="sr-only">（必須）</span>
          </>
        )}
      </span>
      <input type={type} name={name} required={required} autoComplete={autoComplete} className={inputClass} />
    </label>
  );
}
