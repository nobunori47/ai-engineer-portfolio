/**
 * ⑧ FAQ（よくあるご質問）— Phase 3D-2。6問・初期状態はすべて閉じる。
 * - ネイティブの details / summary（キーボード操作・開閉状態の読み上げはブラウザ標準、JS なし）
 * - 回答は現在の事実と CEO 決定の範囲だけ。安全の断定・固定料金・無料相談・最低料金などは書かない
 * - ⑤のカード、⑥の罫線リスト、⑦の時系列と見分けがつくよう、細い罫線と＋／−のアコーディオンにする
 */
const faqs: { q: string; a: string[] }[] = [
  {
    q: "AIに詳しくなく、何を頼めるか分からなくても相談できますか？",
    a: [
      "はい。AIで何を作るかを決めておく必要はありません。",
      "今の業務で時間がかかっていることや、面倒に感じていることを伺い、AIや自動化が役立ちそうな部分を一緒に整理します。",
    ],
  },
  {
    q: "小さな業務だけでも相談できますか？",
    a: [
      "はい。最初から大きなシステムを作るのではなく、まず一つの業務や小さな範囲から試す考え方です。",
      "実際に使いながら、必要に応じて改善や対象業務を広げていきます。",
    ],
  },
  {
    q: "ChatGPTを使うのと何が違いますか？",
    a: [
      "ChatGPTなどのAIを単体で使うだけでなく、必要に応じて社内資料や既存の業務の流れ、各種ツールと組み合わせ、実際の仕事の中で使える形にすることを考えます。",
      "例えば資料検索、問い合わせ対応、通知、集計など、業務に合わせた仕組みとして設計します。",
    ],
  },
  {
    q: "今使っているツールを活かせますか？",
    a: [
      "ツールによりますが、既存の仕組みを活かせる場合があります。",
      "これまで、Google スプレッドシート、Slack、LINE、CSV などを組み合わせた仕組みを設計・検証してきました。まず現在の環境を確認したうえで、無理のない方法を検討します。",
    ],
  },
  {
    q: "情報の取り扱い・セキュリティはどう考えていますか？",
    a: [
      "扱う情報の内容や、利用するサービスを確認したうえで、必要な範囲や方法をご相談しながら設計します。",
      "案件に応じて、アクセスできる範囲や認証、ログの扱いなども含めて検討します。",
    ],
  },
  {
    q: "費用はどう決まりますか？",
    a: [
      "ご相談内容を伺い、まず試す範囲と進め方を整理したうえで、開始前に費用の目安をご提示します。",
      "業務内容によって必要な仕組みが異なるため、固定料金は設けていません。",
    ],
  },
];

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="faq-world px-5 sm:px-6 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <p className="flex items-center gap-3 text-xs tracking-[0.12em] text-[var(--color-gold-text)]">
          <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-gold)]" />
          FAQ ／ よくあるご質問
        </p>
        <h2
          id="faq-title"
          className="mt-4 font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)] text-[1.4rem] sm:text-3xl lg:text-[2.1rem] leading-snug"
        >
          <span className="inline-block">相談する前の、</span>
          <span className="inline-block">よくある疑問にお答えします。</span>
        </h2>

        <div className="mt-8 sm:mt-10 border-t border-[var(--color-line)]">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq-item group border-b border-[var(--color-line)]">
              <summary className="faq-summary flex cursor-pointer list-none items-start justify-between gap-4 py-4 sm:py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[0.975rem] sm:text-base font-medium leading-relaxed text-[var(--color-navy)] [word-break:auto-phrase]">
                  <span aria-hidden="true" className="mr-2 font-[family-name:var(--font-display)] text-[var(--color-gold-text)] tabular-nums">
                    Q{i + 1}
                  </span>
                  {f.q}
                </h3>
                <span aria-hidden="true" className="faq-indicator mt-1 shrink-0" />
              </summary>
              <div className="pb-5 pr-8 text-sm sm:text-[0.95rem] leading-[1.85] text-[var(--color-ink-sub)]">
                {f.a.map((p) => (
                  <p key={p} className="mt-1 first:mt-0">
                    {p}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
