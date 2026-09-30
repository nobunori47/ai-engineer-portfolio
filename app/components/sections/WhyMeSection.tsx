/**
 * ⑥ WHY ME（私について）— Phase 3C。旧 About・Strength・Values を統合。
 * - 中心は「AIエンジニアだから」ではなく「総務・バックオフィスの実務経験 × AI開発」
 * - 旧 About の3つの要点と、旧 Strength の「小さく作って、使いながら改善する」を再構成して使う
 * - 旧 Values の「時間を取り戻す。」は①〜④で表現済みのため、ここでは繰り返さない
 * - ⑤のカードと見分けがつくよう、カードは使わず、細い金の番号と罫線の編集的なレイアウトにする
 * - 顔写真・フルネーム・勤務先など個人を特定する情報は載せない。技術は補助情報として1行だけ
 */
const reasons: { no: string; title: string; body: string }[] = [
  {
    no: "01",
    title: "現場の感覚を持っている",
    body: "総務・バックオフィスの実務経験を踏まえ、実際に使う人の目線で考えます。",
  },
  {
    no: "02",
    title: "業務の言葉から整理する",
    body: "専門用語から始めず、「何が面倒か」「どこで止まっているか」を一緒に整理します。",
  },
  {
    no: "03",
    title: "小さく作って、使いながら改善する",
    body: "ヒアリングから設計・実装・検証まで一人で担当。まず小さく形にし、実際に使いながら改善します。",
  },
];

export default function WhyMeSection() {
  return (
    <section id="about" aria-labelledby="whyme-title" className="whyme-world px-5 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-xs tracking-[0.12em] text-[var(--color-gold-text)]">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-gold)]" />
            WHY ME ／ 私について
          </p>
          <h2
            id="whyme-title"
            className="mt-4 font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)] text-[1.4rem] sm:text-3xl lg:text-[2.1rem] leading-snug"
          >
            <span className="block">現場を知っているから、</span>
            <span className="block">“作れるもの”ではなく</span>
            <span className="block">“役に立つもの”から考えます。</span>
          </h2>
          <p className="mt-5 text-[0.975rem] sm:text-base leading-[1.9] text-[var(--color-ink-sub)]">
            総務・バックオフィスの仕事で、確認、転記、資料探し、問い合わせ対応、報告書づくりといった、一つひとつは小さくても積み重なると時間を奪う仕事を経験してきました。
          </p>
          <p className="mt-4 text-[0.975rem] sm:text-base leading-[1.9] text-[var(--color-ink-sub)]">
            だから、AIやシステムありきではなく、まず「何に時間がかかっているのか」「どこを人が判断すべきなのか」から考えます。
          </p>
        </div>

        <div>
          <ol className="border-t border-[var(--color-line)]">
            {reasons.map((r) => (
              <li key={r.no} className="grid grid-cols-[3rem_1fr] gap-x-3 py-5 sm:py-6 border-b border-[var(--color-line)]">
                <span
                  aria-hidden="true"
                  className="font-[family-name:var(--font-display)] text-2xl leading-none text-[var(--color-gold)] tabular-nums"
                >
                  {r.no}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-navy)]">{r.title}</h3>
                  <p className="mt-1.5 text-sm sm:text-[0.95rem] leading-relaxed text-[var(--color-ink-sub)]">{r.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-relaxed text-[var(--color-ink-sub)]">
            主な技術：Claude API、OpenAI Embeddings、RAG（社内文書検索）、Next.js、Supabase、Google Apps Script、Slack・LINE連携 など
          </p>
        </div>
      </div>
    </section>
  );
}
