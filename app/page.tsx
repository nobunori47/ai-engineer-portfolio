import Link from "next/link";
import { cases } from "@/lib/cases";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0F1417]/80 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-[family-name:var(--font-display)] font-bold tracking-tight">
            N. Nakamura
          </span>
          <nav className="flex gap-6 text-sm text-[var(--color-text-sub)]">
            <a href="#about" className="hover:text-[var(--color-text)] transition-colors">About</a>
            <a href="#works" className="hover:text-[var(--color-text)] transition-colors">Works</a>
            <a href="#services" className="hover:text-[var(--color-text)] transition-colors">Services</a>
            <a href="#contact" className="hover:text-[var(--color-text)] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] mb-6">
            AI Engineer
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl font-bold leading-[1.15] max-w-3xl">
            AIで業務を
            <br />
            もっとシンプルに。
          </h1>
          <p className="mt-8 text-lg text-[var(--color-text-sub)] max-w-xl leading-relaxed">
            AIを活用したWebアプリケーションや業務効率化システムを設計・開発しています。
            ヒアリングから設計、MVP開発、改善まで一貫して対応し、実務で使えるシステムを短期間で形にします。
          </p>

          {/* Process line — signature element */}
          <div className="mt-16 flex items-center gap-2 sm:gap-4 flex-wrap font-[family-name:var(--font-mono)] text-xs sm:text-sm text-[var(--color-text-sub)]">
            {["ヒアリング", "設計", "MVP開発", "改善"].map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-4">
                <span className="px-3 py-1.5 border border-[var(--color-border)] rounded-full">
                  {step}
                </span>
                {i < 3 && <span className="text-[var(--color-accent)]">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
            About
          </p>
          <div className="space-y-6 max-w-2xl">
            <p className="leading-relaxed">
              私は、AIを活用した業務効率化やWebシステム開発に取り組むAIエンジニアです。
            </p>
            <p className="leading-relaxed text-[var(--color-text-sub)]">
              Next.js、TypeScript、Supabase、Claude APIなどを活用し、実務を想定したAIアプリケーションの設計・開発を行っています。
            </p>
            <p className="leading-relaxed text-[var(--color-text-sub)]">
              AI講座では、LINE Bot、AIブログ自動生成、RAG検索システム、CSチャットボットなど、実際の業務を想定した開発案件に取り組み、要件整理から実装・納品までのプロセスを経験してきました。
            </p>
          </div>
        </div>
      </section>

      {/* Strength */}
      <section className="py-24 px-6 border-b border-[var(--color-border)] bg-[var(--color-bg-card)]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
            Strength
          </p>
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-medium leading-snug">
              「まず動くものを作り、
              <br />
              実際に使いながら改善すること」
            </p>
            <p className="mt-6 leading-relaxed text-[var(--color-text-sub)]">
              最小限の機能で素早く価値を届け、その後の改善を前提とした開発を行うことで、スピードと品質を両立したシステム開発を目指しています。
            </p>
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-24 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)] mb-10">
            Works
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/works/${c.slug}`}
                className="group block p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                    {c.number}
                  </span>
                  {c.metric && (
                    <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-sub)]">
                      {c.metric}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold group-hover:text-[var(--color-accent)] transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-sub)] leading-relaxed">
                  {c.oneLiner}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-sub)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 border-b border-[var(--color-border)] bg-[var(--color-bg-card)]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
            Services
          </p>
          <ul className="max-w-2xl space-y-4">
            {[
              "AIチャットボット開発",
              "RAG（社内文書検索・FAQ検索）",
              "業務効率化システム開発",
              "Webアプリケーション開発",
              "MVP開発・プロトタイプ開発",
            ].map((service) => (
              <li key={service} className="flex items-center gap-3 leading-relaxed">
                <span className="text-[var(--color-accent)] font-[family-name:var(--font-mono)]">→</span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
            Contact
          </p>
          <div className="max-w-2xl">
            <p className="leading-relaxed text-[var(--color-text-sub)] mb-8">
              ご相談・お仕事のご依頼はお気軽にご連絡ください。
            </p>
            <div className="flex flex-col gap-3 font-[family-name:var(--font-mono)] text-sm">
              <a href="mailto:nobunori47@gmail.com" className="hover:text-[var(--color-accent)] transition-colors w-fit">
                → Email
              </a>
              <a href="https://github.com/nobunori47" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors w-fit">
                → GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--color-text-sub)]">
          <span>© {new Date().getFullYear()} Nobunori Nakamura</span>
          <span className="font-[family-name:var(--font-mono)]">
            Built with MVP thinking. Improved through real projects.
          </span>
        </div>
      </footer>
    </main>
  );
}
