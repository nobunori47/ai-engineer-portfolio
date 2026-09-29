import SpotIcon, { type SpotIconName } from "@/app/components/illustrations/SpotIcon";

/**
 * ② PROBLEM：「うちのことだ」と思わせる。旧 Pain Points を現場の言葉へ書き換えたもの。
 * - 6項目。各項目で「AI」を連呼しない（ここは共感を優先）
 * - PC は 3×2 のカード、スマホはアイコン＋1行の短いリスト
 */
const problems: { text: string; icon: SpotIconName }[] = [
  { text: "問い合わせへの返信に追われる", icon: "hearing" },
  { text: "必要な資料や情報が見つからない", icon: "search" },
  { text: "Excelへの転記・集計を繰り返している", icon: "automate" },
  { text: "複数のツールを開いて状況を確認している", icon: "route" },
  { text: "日報・報告書の作成に時間がかかる", icon: "time" },
  { text: "社長しか分からない仕事が増えている", icon: "person" },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="world-problem px-5 sm:px-6 py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <p className="flex items-center gap-3 text-xs tracking-[0.12em] text-[var(--color-gold-text)]">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-gold)]" />
          PROBLEM
        </p>
        <h2
          id="problem-title"
          className="mt-4 font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)] text-2xl sm:text-3xl lg:text-[2.1rem] leading-snug"
        >
          こんな仕事に、
          <br className="sm:hidden" />
          時間を取られていませんか？
        </h2>

        <ul className="mt-8 sm:mt-12 grid gap-0 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <li
              key={p.text}
              className="flex items-center gap-4 py-4 border-b border-[var(--color-line)] sm:border sm:rounded-2xl sm:bg-white/70 sm:px-6 sm:py-6 sm:border-[var(--color-line)]"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold-soft)] text-[var(--color-navy)]"
              >
                <SpotIcon name={p.icon} size={20} />
              </span>
              <span className="text-[0.975rem] sm:text-base leading-relaxed text-[var(--color-ink)] [word-break:auto-phrase]">
                {p.text}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 sm:mt-10 text-[0.975rem] leading-relaxed text-[var(--color-ink-sub)]">
          ひとつでも当てはまれば、その仕事は減らせるかもしれません。
        </p>
      </div>
    </section>
  );
}
