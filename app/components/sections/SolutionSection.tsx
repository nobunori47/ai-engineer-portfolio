import HeroAICore from "@/app/components/illustrations/HeroAICore";

/**
 * ③ SOLUTION：AIに詳しくない人でも「こうやって楽になるのか」と分かる Before / After。
 * - 技術名（Next.js / Supabase / RAG / LLM / API 等）は主役にしない
 * - HeroAICore は「業務の中枢」の補助図（装飾・aria-hidden）。4段の名称は figcaption の HTML で示す
 * - 下へ行くほど縦の桟と朝焼けの光が増え、直後の Gate（③→④）へつながる（world-solution、CSS のみ）
 * - ここに並べる流れは仕組みの説明であり、実績の数値主張ではない
 */
type Flow = { before: string[]; after: string[]; human: string };

const featured: Flow & { title: string } = {
  title: "問い合わせ対応",
  before: ["問い合わせを読む", "内容を判断", "情報を探す", "返信を書く"],
  after: ["AIが受付", "分類", "情報検索", "返信案作成"],
  human: "人は最後の確認だけ。",
};

const others: (Flow & { title: string })[] = [
  {
    title: "資料・情報探し",
    before: ["フォルダを開く", "ファイルを探す", "詳しい人に聞く"],
    after: ["質問を入力", "AIが資料を検索", "出典付きで回答"],
    human: "人は内容を確かめて使うだけ。",
  },
  {
    title: "集計・報告",
    before: ["数字を転記", "集計する", "報告書を書く"],
    after: ["データを取り込み", "AIが集計", "要点をまとめる"],
    human: "人は確認して共有するだけ。",
  },
];

function Steps({ steps, tone }: { steps: string[]; tone: "before" | "after" }) {
  return (
    <ol className="space-y-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2 sm:gap-3 [word-break:auto-phrase]">
          <span
            aria-hidden="true"
            className={`flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full text-[10px] sm:text-[11px] font-[family-name:var(--font-mono)] ${
              tone === "after"
                ? "bg-[var(--color-navy)] text-[var(--color-ivory)]"
                : "border border-[var(--color-line)] text-[var(--color-ink-sub)]"
            }`}
          >
            {i + 1}
          </span>
          <span className={tone === "after" ? "text-[var(--color-ink)]" : "text-[var(--color-ink-sub)]"}>{s}</span>
        </li>
      ))}
    </ol>
  );
}

function Label({ children, tone }: { children: React.ReactNode; tone: "before" | "after" }) {
  return (
    <p
      className={`text-[11px] tracking-[0.14em] font-medium ${
        tone === "after" ? "text-[var(--color-gold-text)]" : "text-[var(--color-ink-sub)]"
      }`}
    >
      {children}
    </p>
  );
}

export default function SolutionSection() {
  return (
    <section
      id="solution"
      aria-labelledby="solution-title"
      className="world-solution"
    >
      <div className="px-5 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <p className="flex items-center gap-3 text-xs tracking-[0.12em] text-[var(--color-gold-text)]">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-gold)]" />
            SOLUTION
          </p>
          <h2
            id="solution-title"
            className="mt-4 font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)] text-2xl sm:text-3xl lg:text-[2.1rem] leading-snug"
          >
            AIが下ごしらえをして、
            <br className="sm:hidden" />
            人は判断するだけ。
          </h2>
          <p className="mt-5 max-w-[40em] text-[0.975rem] sm:text-base leading-[1.85] text-[var(--color-ink-sub)]">
            毎日の手順を、AIが受け持てる部分と、人が判断すべき部分に分けます。
            仕事の流れは変えすぎず、手間のかかる作業だけを減らします。
          </p>

          {/* 中心の Before / After */}
          <article
            aria-labelledby="solution-featured-title"
            className="glass-card mt-10 sm:mt-14 rounded-3xl p-6 sm:p-10"
          >
            <h3
              id="solution-featured-title"
              className="font-[family-name:var(--font-display)] font-semibold text-lg sm:text-xl text-[var(--color-navy)]"
            >
              例：{featured.title}
            </h3>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_minmax(0,300px)_1fr] lg:items-center">
              <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-ivory)] p-5 sm:p-6">
                <Label tone="before">BEFORE ／ 今</Label>
                <div className="mt-4 text-[0.975rem]">
                  <Steps steps={featured.before} tone="before" />
                </div>
              </div>

              <figure className="flex flex-col items-center">
                <HeroAICore className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[300px]" />
                <figcaption className="mt-2 text-xs tracking-wide text-[var(--color-ink-sub)]">
                  受付 → 分類 → 検索 → 返信案
                </figcaption>
              </figure>

              <div className="rounded-2xl border border-[var(--color-gold-soft)] bg-white p-5 sm:p-6 shadow-[0_20px_40px_-32px_rgba(27,42,74,0.4)]">
                <Label tone="after">AFTER ／ AIと分担</Label>
                <div className="mt-4 text-[0.975rem]">
                  <Steps steps={featured.after} tone="after" />
                </div>
                <p className="mt-5 pt-4 border-t border-[var(--color-line)] font-medium text-[var(--color-navy)]">
                  {featured.human}
                </p>
              </div>
            </div>
          </article>

          {/* そのほかの Before / After */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((f) => (
              <article
                key={f.title}
                aria-labelledby={`solution-${f.title}`}
                className="rounded-3xl border border-[var(--color-line)] bg-white/75 p-5 sm:p-8"
              >
                <h3
                  id={`solution-${f.title}`}
                  className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-navy)]"
                >
                  例：{f.title}
                </h3>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5">
                  <div>
                    <Label tone="before">BEFORE</Label>
                    <div className="mt-3 text-[0.85rem] sm:text-[0.95rem]">
                      <Steps steps={f.before} tone="before" />
                    </div>
                  </div>
                  <div>
                    <Label tone="after">AFTER</Label>
                    <div className="mt-3 text-[0.85rem] sm:text-[0.95rem]">
                      <Steps steps={f.after} tone="after" />
                    </div>
                  </div>
                </div>
                <p className="mt-5 pt-4 border-t border-[var(--color-line)] font-medium text-[var(--color-navy)]">
                  {f.human}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm leading-relaxed text-[var(--color-ink-sub)]">
            どの業務から始めるかは、実際の仕事の流れを伺ってから一緒に決めます。
          </p>
        </div>
      </div>

    </section>
  );
}
