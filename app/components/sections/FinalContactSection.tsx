import ContactForm from "@/app/components/ContactForm";

/**
 * ⑨ FINAL CTA ＋ CONTACT — Phase 3D-2。ページ最後の相談の入口（#contact を維持）。
 * - アイボリーの上に深いネイビーの面を置き、静かに締める（④のような演出はしない）
 * - 相談の主役はフォーム。メールは小さな補助導線。GitHub はここから外す
 * - 返信の目安は「通常1〜2営業日以内」のみ（保証・自動返信は書かない）。料金・無料相談等は書かない
 */
export default function FinalContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact-world px-4 sm:px-6 py-12 sm:py-20">
      <div className="contact-panel max-w-6xl mx-auto rounded-[28px] px-5 py-10 sm:px-10 sm:py-14 lg:px-14 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
        <div className="lg:pt-2">
          <p className="flex items-center gap-3 text-xs tracking-[0.12em] text-[var(--color-gold-soft)]">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-gold-soft)]" />
            CONTACT ／ ご相談
          </p>
          <h2
            id="contact-title"
            className="mt-4 font-[family-name:var(--font-display)] font-bold text-[var(--color-ivory)] text-[1.55rem] sm:text-3xl lg:text-[2.2rem] leading-snug"
          >
            <span className="inline-block">AIで減らせる業務を</span>
            <span className="inline-block">相談する</span>
          </h2>
          <p className="mt-5 text-[0.975rem] sm:text-base leading-[1.9] text-[var(--color-ivory)]/85">
            まだ相談内容がまとまっていなくても大丈夫です。
            <br className="hidden sm:block" />
            今の業務で「面倒だな」と感じていることから、お聞かせください。
          </p>
          <p className="mt-5 text-sm leading-relaxed text-[var(--color-ivory)]/75">
            内容を確認のうえ、通常1〜2営業日以内にご返信します。
          </p>
        </div>

        <div className="contact-form-panel rounded-2xl p-5 sm:p-8">
          <ContactForm />
          <p className="mt-6 pt-5 border-t border-[var(--color-line)] text-xs leading-relaxed text-[var(--color-ink-sub)]">
            フォームを利用できない場合は、メールでもご連絡いただけます。
            <a
              href="mailto:nobunori47@gmail.com"
              className="ml-2 inline-flex items-center min-h-[44px] text-[var(--color-navy)] underline decoration-[var(--color-gold)] underline-offset-4"
            >
              メールで連絡する
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
