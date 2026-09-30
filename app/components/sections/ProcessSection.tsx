/**
 * ⑦ PROCESS（ご相談の流れ）— Phase 3C。旧 Process（4段階の受託開発の流れ）を置き換え。
 * - 「話す → 小さく試す → 育てる」の3ステップ。いきなり大きな発注は不要と伝える
 * - 旧「要件定義・お見積もり」「開発・テスト」「納品・運用サポート」「MVP思考」はステップ名にせず、
 *   必要な事実（進め方と費用の目安は試す前に提示する／導入後も改善を続ける）を顧客の言葉で統合する
 * - 具体的な価格は載せない。相談の主役 CTA は⑨（Phase 3D）。ここでは控えめな一文とリンク1つだけ
 * - ⑤⑥と見分けがつくよう、カードではなく罫線でつないだ時系列（PC は横、スマホ・タブレットは縦）
 */
const steps: { no: string; title: string; body: string }[] = [
  {
    no: "01",
    title: "話す",
    body: "今いちばん手間に感じている業務を教えてください。「AIで何ができるか」を決めておく必要はありません。今の流れ、時間がかかっている部分、人が判断すべき部分を一緒に整理します。",
  },
  {
    no: "02",
    title: "小さく試す",
    body: "効果が出やすい業務をひとつ選び、小さな範囲で試します。進め方と費用の目安は、試す前にご提示します。",
  },
  {
    no: "03",
    title: "育てる",
    body: "実際に使いながら改善し、必要に応じてほかの業務へ広げます。導入後の調整や改善のご相談にも対応します。",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-title" className="process-world px-5 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <p className="flex items-center gap-3 text-xs tracking-[0.12em] text-[var(--color-gold-text)]">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-gold)]" />
          PROCESS ／ ご相談の流れ
        </p>
        <h2
          id="process-title"
          className="mt-4 font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)] text-2xl sm:text-3xl lg:text-[2.1rem] leading-snug [word-break:auto-phrase]"
        >
          いきなり大きく作らず、小さく始めます。
        </h2>

        <ol className="process-steps mt-10 sm:mt-14">
          {steps.map((s) => (
            <li key={s.no} className="process-step">
              <span aria-hidden="true" className="process-step-mark">
                {s.no}
              </span>
              <div className="process-step-body">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-xl text-[var(--color-navy)]">{s.title}</h3>
                <p className="mt-2 text-sm sm:text-[0.95rem] leading-[1.85] text-[var(--color-ink-sub)]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.975rem] text-[var(--color-ink)]">
          まずは、今の業務を整理するところから。
          <a
            href="#contact"
            className="inline-flex items-center gap-1 min-h-[44px] text-sm font-medium text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-[6px] hover:decoration-2"
          >
            相談する <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>
    </section>
  );
}
