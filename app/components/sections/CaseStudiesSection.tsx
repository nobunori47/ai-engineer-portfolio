import Image from "next/image";
import Link from "next/link";
import { cases, classificationBadgeLabel, type CaseStudy } from "@/lib/cases";

/**
 * ⑤ CASE STUDIES（取り組み事例）— Phase 3B。
 * ④（AIバーチャル本社）で見せた考え方を、お客様の身近な業務（探す・答える・見落とさない・まとめる）へ置き換えて見せる。
 * - 技術名ではなく「面倒な仕事」から始める。技術スタックは詳細ページ（/works/[slug]）に残す
 * - 事例の事実は lib/cases.ts が唯一の出典。ここでは表示用の言い換え（課題起点のタイトル等）だけを定義し、
 *   lib/cases.ts と矛盾する成果・実績は書かない
 * - 有償の顧客実績は現時点で0件。「導入実績」「代表実績」等は使わず、区分（自主開発／学習・検証）と
 *   架空クライアントの想定を各カードで明示する。数値は検証条件・設計上の想定であることを同じ場所で示す
 * - ④はそのまま（FREEZE）。⑤側で白からアイボリーへ静かに戻す（.cases-world）
 */
type CasePresentation = {
  slug: string;
  title: string;
  problem: string;
  ai: string;
  human: string;
  /** 架空クライアント等の前提（lib/cases.ts の記載に基づく） */
  premise?: string;
  /** 数値を出す場合は、検証条件・設計上の想定であることを同じ文に含める */
  evidence?: string;
  visual: { src: string; alt: string; width: number; height: number };
};

const featured: CasePresentation[] = [
  {
    slug: "case-3-rag-search",
    title: "探す時間を減らす",
    problem: "社内の資料やマニュアルが散らばり、必要な情報を探すのに時間がかかる。",
    ai: "質問すると、関連する資料を探して出典付きで答える",
    human: "内容を確かめて、判断や対応に使う",
    premise: "架空企業（TechBridge）を想定",
    evidence: "12問の検証で11問正解（92%）",
    visual: {
      src: "/works/case3/chat-preview.png",
      alt: "社内文書検索AIのチャット画面。有給休暇に関する質問へ出典付きでAIが回答している例",
      width: 1650,
      height: 618,
    },
  },
  {
    slug: "case-1-line-bot",
    title: "問い合わせ対応を減らす",
    problem: "接客や施術の最中にも、予約・料金などの問い合わせが次々に届く。",
    ai: "よくある質問に、LINEで24時間自動で答える",
    human: "判断が必要な相談だけに対応する",
    visual: {
      src: "/works/case1/admin-dashboard.png",
      alt: "美容サロン向けLINE Botの管理画面。FAQ件数・問い合わせ数・エスカレーション件数のダッシュボード（サンプルデータ）",
      width: 2940,
      height: 1100,
    },
  },
  {
    slug: "case-5-switchboard-notification-hub",
    title: "問い合わせを見落とさない",
    problem: "メールやLINEなど窓口が複数あると、確認・振り分けの手間や対応漏れが起きやすい。",
    ai: "内容を分類し、担当のチャンネルへすぐ通知する",
    human: "通知を見て、対応が必要なものから動く",
    premise: "架空の不動産管理会社を想定",
    evidence: "5分以内の初動対応を想定した設計",
    visual: {
      src: "/works/case5/control-board.png",
      alt: "問い合わせ管制盤（結線図でリアルタイムの処理経路を可視化）",
      width: 1512,
      height: 788,
    },
  },
  {
    slug: "case-7-sales-dashboard",
    title: "毎月の集計・報告を減らす",
    problem: "CSVやExcelの集計、グラフ作り、コメント書きに毎月時間がかかる。",
    ai: "データを集計し、傾向と改善のヒントをコメントにまとめる",
    human: "数字を見て、次の打ち手を決める",
    premise: "架空のアパレルEC（LUMINA）を想定",
    evidence: "月3時間の作業を数分規模にする設計（83%削減は設計上の見込み）",
    visual: {
      src: "/works/case8/dashboard-preview.png",
      alt: "AI売上分析ダッシュボードのCSVアップロード画面（架空クライアントLUMINAを想定）",
      width: 1527,
      height: 572,
    },
  },
];

const featuredSlugs = featured.map((f) => f.slug);
// 主役4件以外（詳細ページは維持）。case-0（このサイト自体）はトップに出さない
const otherCases: CaseStudy[] = cases.filter((c) => c.slug !== "case-0-portfolio" && !featuredSlugs.includes(c.slug));

function findCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export default function CaseStudiesSection() {
  return (
    <section id="works" aria-labelledby="cases-title" className="cases-world px-5 sm:px-6 pt-10 pb-12 sm:pt-20 sm:pb-24">
      <div className="max-w-6xl mx-auto">
        <p className="flex items-center gap-3 text-xs tracking-[0.12em] text-[var(--color-gold-text)]">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-gold)]" />
          CASE STUDIES ／ 取り組み事例
        </p>
        <h2
          id="cases-title"
          className="mt-4 font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)] text-2xl sm:text-3xl lg:text-[2.1rem] leading-snug [word-break:auto-phrase]"
        >
          その“面倒”、AIでこう減らせます。
        </h2>
        <p className="mt-5 max-w-[40em] text-[0.975rem] sm:text-base leading-[1.85] text-[var(--color-ink-sub)]">
          AIは、大きなシステムだけのものではありません。資料を探す、問い合わせに答える、見落としを防ぐ、毎月の集計をまとめる。日々の小さな手間から減らせます。
        </p>
        <p className="mt-3 max-w-[44em] text-xs leading-relaxed text-[var(--color-ink-sub)]">
          いずれも、業務を想定して自分で設計・開発し、動作を検証した仕組みです（お客様への導入事例ではありません）。
        </p>

        <ul className="mt-8 sm:mt-12 grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {featured.map((f) => {
            const c = findCase(f.slug);
            const badge = c ? classificationBadgeLabel(c.classification) : null;
            return (
              <li key={f.slug} className="case-card flex flex-col overflow-hidden rounded-2xl">
                <div className="relative aspect-[8/3] overflow-hidden border-b border-[var(--color-line)] bg-white">
                  <Image
                    src={f.visual.src}
                    alt={f.visual.alt}
                    fill
                    sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-[var(--color-ink-sub)]">
                    {badge && (
                      <span className="rounded-full border border-[var(--color-line)] bg-white px-2.5 py-0.5">{badge}</span>
                    )}
                    {f.premise && <span>{f.premise}</span>}
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] font-bold text-lg sm:text-xl text-[var(--color-navy)]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-sub)]">{f.problem}</p>
                  <dl className="mt-3 sm:mt-4 grid gap-1.5 sm:gap-2 text-sm">
                    <div className="flex gap-3">
                      <dt className="shrink-0 w-[4.5em] text-[11px] leading-6 tracking-wide text-[var(--color-gold-text)]">AIが</dt>
                      <dd className="leading-6 text-[var(--color-ink)]">{f.ai}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="shrink-0 w-[4.5em] text-[11px] leading-6 tracking-wide text-[var(--color-ink-sub)]">人は</dt>
                      <dd className="leading-6 text-[var(--color-ink)]">{f.human}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-3 sm:pt-4 flex flex-wrap items-end justify-between gap-x-3 gap-y-1">
                    {f.evidence ? (
                      <p className="text-xs text-[var(--color-ink-sub)]">{f.evidence}</p>
                    ) : (
                      <span />
                    )}
                    <Link
                      href={`/works/${f.slug}`}
                      aria-label={`「${f.title}」の事例（${c?.title ?? f.slug}）を詳しく見る`}
                      className="inline-flex items-center gap-1 min-h-[44px] text-sm font-medium text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-[6px] hover:decoration-2"
                    >
                      詳しく見る <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {otherCases.length > 0 && (
          <details className="group/others mt-8">
            <summary className="list-none cursor-pointer inline-flex items-center gap-2 min-h-[44px] text-sm text-[var(--color-ink-sub)] hover:text-[var(--color-navy)] [&::-webkit-details-marker]:hidden">
              <span aria-hidden="true" className="transition-transform group-open/others:rotate-90">→</span>
              その他の取り組みを見る（{otherCases.length}件）
            </summary>
            <ul className="mt-3 grid gap-x-8 sm:grid-cols-2 border-t border-[var(--color-line)]">
              {otherCases.map((c) => (
                <li key={c.slug} className="border-b border-[var(--color-line)]">
                  <Link
                    href={`/works/${c.slug}`}
                    className="flex items-center justify-between gap-3 min-h-[48px] py-2 text-sm text-[var(--color-ink)] hover:text-[var(--color-navy)]"
                  >
                    <span>{c.title}</span>
                    <span className="shrink-0 text-[11px] text-[var(--color-ink-sub)]">
                      {classificationBadgeLabel(c.classification) ?? ""} <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}
