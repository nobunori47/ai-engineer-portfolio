/**
 * ① HERO：3秒で「自分の会社の話かもしれない」と思わせる、静かなBtoBのファーストビュー。
 * - AI本社・AI社員・クロノ・Morning は見せない（④まで温存する）
 * - 右側は縦長のガラス窓（PC）。背景は右下から漏れる朝の光と縦の桟（world-hero、CSS のみ）
 */
export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="world-hero overflow-hidden bg-[var(--color-ivory)] px-5 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 lg:min-h-[min(100svh,820px)] lg:flex lg:items-center"
    >
      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[7fr_5fr] lg:gap-12 items-center">
        <div>
          <p className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.08em] text-[var(--color-ink-sub)]">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-[var(--color-gold)]" />
            中小企業・小規模事業者のためのAI業務改善
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-[family-name:var(--font-display)] font-bold text-[var(--color-navy)] text-[clamp(1.55rem,7.2vw,1.85rem)] leading-[1.35] sm:text-[2.6rem] sm:leading-[1.25] lg:text-[2.6rem] xl:text-[3.1rem] lg:leading-[1.2] tracking-tight"
          >
            AIで、
            <br />
            会社の「面倒」を減らす。
          </h1>

          <p className="mt-6 sm:mt-7 max-w-[34em] text-[0.975rem] sm:text-lg leading-[1.85] text-[var(--color-ink-sub)]">
            問い合わせ、確認、検索、転記、報告。
            <br className="hidden sm:block" />
            毎日の小さな手間をAIに任せて、
            <br className="hidden sm:block" />
            人は判断と、本当に大切な仕事に集中する。
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] text-[var(--color-ivory)] px-7 min-h-[52px] text-[0.95rem] font-medium hover:bg-[var(--color-navy-deep)] transition-colors"
            >
              AIで減らせる業務を相談する
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center sm:justify-start gap-2 min-h-[44px] text-sm font-medium text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-1 underline-offset-[6px] hover:decoration-2"
            >
              事例を見る
            </a>
          </div>

          <p className="mt-4 text-xs text-[var(--color-ink-sub)] text-center sm:text-left">
            相談内容が固まっていなくても大丈夫です。
          </p>
        </div>

        {/* 縦長のガラス窓（装飾・PC のみ）。奥にある空間の予告で、④の実画面の枠と同じ形。文字・UI・人物は入れない */}
        <div aria-hidden="true" className="hidden lg:flex justify-center items-center pointer-events-none select-none">
          <div className="glass-window w-[236px] xl:w-[260px]" />
        </div>
      </div>
    </section>
  );
}
