/**
 * ④ FLAGSHIP CASE「AIバーチャル本社」— Phase 2A は“聖域の建築前の骨格”。
 * - まだ使わない：R20 HQ 背景・Morning 実画面・クロノ・AI社員画像・似せたUI・プレースホルダー
 * - 背景は .flagship（深いネイビー＋右下の朝焼け＋建築の桟、CSS のみ）
 * - PC は左に文章、右は将来 Morning 実画面を置く場所として“何も置かない空間”を確保する
 * - CTA の役割は「もっと知る」。相談（⑧）とは分ける。リンク先は作らず、ページ内の開閉式の説明にする
 * - AI社員8人は名前と役割の文字だけで示す（画像は使わない）
 */
const employees: { name: string; role: string }[] = [
  { name: "クロノ", role: "CEO参謀 / オーケストレーター" },
  { name: "コトハ", role: "受付・コミュニケーション" },
  { name: "トワ", role: "秘書・スケジュール" },
  { name: "カケル", role: "営業・案件" },
  { name: "ヒカリ", role: "SNS・集客" },
  { name: "タクト", role: "開発・システム" },
  { name: "リコ", role: "セキュリティ・監査" },
  { name: "シオン", role: "AI研修・ナレッジ" },
];

const howSteps: { title: string; body: string }[] = [
  {
    title: "集める",
    body: "問い合わせ・案件・予定・タスクなどの情報を、担当のAI社員が集めて整理します。",
  },
  {
    title: "進める",
    body: "定型の作業はAI社員が担当ごとに進め、必要に応じて次の担当へ引き継ぎます。",
  },
  {
    title: "判断する",
    body: "人の判断が必要なことだけが、優先度と所要時間の目安をつけて届きます。",
  },
];

export default function FlagshipSection() {
  return (
    <>
      <section id="flagship" aria-labelledby="flagship-title" className="flagship px-5 sm:px-6 pt-16 pb-16 lg:pt-28 lg:pb-24 lg:min-h-[760px]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,46%)_1fr] lg:gap-12">
          <div>
            <p className="flex items-center gap-3 text-xs tracking-[0.14em] text-[var(--color-gold-soft)]">
              <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-gold-soft)]" />
              FLAGSHIP CASE ／ 自社で実運用中
            </p>
            <h2
              id="flagship-title"
              className="mt-5 font-[family-name:var(--font-display)] font-bold text-[1.75rem] leading-[1.35] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.25] tracking-tight"
            >
              AIが働き、
              <br />
              人が判断する。
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[var(--color-gold-soft)]">
              私自身も、この働き方を実践しています。
            </p>
            <p className="mt-6 max-w-[30em] text-[0.975rem] sm:text-base leading-[1.9] text-[var(--color-ivory)]/85">
              AIバーチャル本社では、8人のAI社員が情報整理・営業支援・問い合わせ対応・ナレッジ管理・業務状況の整理を進め、私には判断が必要なことだけが届きます。
              目指しているのは、AIを使うことではなく、時間を取り戻すことです。
            </p>

            <ul aria-label="AI社員と担当" className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 max-w-[34em] text-sm">
              {employees.map((e) => (
                <li key={e.name} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 py-1 border-b border-[var(--color-ivory)]/10">
                  <span className="font-medium text-[var(--color-ivory)]">{e.name}</span>
                  <span className="text-xs text-[var(--color-ivory)]/70">{e.role}</span>
                </li>
              ))}
            </ul>

            {/* 「もっと知る」CTA：ページ内で開閉する仕組みの説明（JS なし・新しいページは作らない） */}
            <details id="flagship-how" className="group mt-10 max-w-[34em]">
              <summary className="list-none cursor-pointer inline-flex items-center gap-2 min-h-[48px] rounded-full border border-[var(--color-gold-soft)] px-6 text-sm font-medium text-[var(--color-ivory)] hover:bg-[var(--color-ivory)]/10 transition-colors [&::-webkit-details-marker]:hidden">
                AIバーチャル本社の仕組みを見る
                <span aria-hidden="true" className="transition-transform group-open:rotate-90">→</span>
              </summary>
              <ol className="mt-6 space-y-5">
                {howSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold-soft)] text-xs font-[family-name:var(--font-mono)] text-[var(--color-gold-soft)]"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-medium text-[var(--color-ivory)]">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-ivory)]/80">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </details>
          </div>

          {/* 将来 Morning 実画面を置く空間（Phase 2A では何も置かない。枠・文字・似せたUIを置かない） */}
          <div aria-hidden="true" className="hidden lg:block" />
        </div>
      </section>
      {/* ④→⑤：ネイビー → ネイビーグレー → アイボリーへ帰還する出口（装飾） */}
      <div aria-hidden="true" className="flagship-exit" />
    </>
  );
}
