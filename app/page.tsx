import Link from "next/link";
import { cases } from "@/lib/cases";

const workCases = cases.filter((c) => c.slug !== "case-0-portfolio");

const highlights = [
  {
    number: "92%",
    label: "社内文書検索AIの検索精度",
    href: "/works/case-3-rag-search",
  },
  {
    number: "83%削減",
    label: "月次売上レポート作成時間の削減設計",
    href: "/works/case-7-sales-dashboard",
  },
  {
    number: "5分以内",
    label: "問い合わせ自動振り分けの初動SLA設計",
    href: "/works/case-5-switchboard-notification-hub",
  },
];

const painPoints = [
  "Excelへの二重入力が多い",
  "毎月同じレポートを手作業で作っている",
  "問い合わせ対応に時間がかかっている",
  "社内資料を探すのに時間がかかる",
  "AIを導入したいが、何から始めればいいか分からない",
  "まずは小さくAIを試してみたい",
];

const services = [
  {
    name: "AIチャットボット",
    desc: "FAQ・問い合わせ対応をAIで自動化",
  },
  {
    name: "社内RAG検索",
    desc: "社内文書・マニュアルをAIで検索・回答",
  },
  {
    name: "業務自動化",
    desc: "Excel・スプレッドシート・メールなどの定型業務を自動化",
  },
  {
    name: "AIダッシュボード",
    desc: "売上・顧客データをAIが分析しレポート化",
  },
  {
    name: "Webアプリ・MVP開発",
    desc: "新規サービスのプロトタイプ〜MVPを一気通貫で開発",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FFFFFF]/80 border-b border-[var(--color-border)]">
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
      <section className="pt-40 pb-20 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] mb-6">
            AI Engineer
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl font-bold leading-[1.15] max-w-3xl">
            AIで、面倒な業務を
            <br />
            自動化します。
          </h1>
          <p className="mt-8 text-lg text-[var(--color-text-sub)] max-w-xl leading-relaxed">
            AIチャットボット・社内RAG検索・業務自動化システムなどを、要件のヒアリングから設計・開発・改善まで一貫して対応します。実務で使えるシステムを短期間で形にします。
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              無料相談・お見積もりはこちら
              <span className="font-[family-name:var(--font-mono)]">→</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex items-center gap-2 flex-wrap font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-sub)]">
            {[
              `開発実績 ${workCases.length}件+`,
              "AI / Webアプリ開発",
              "Next.js / TypeScript / Supabase",
              "要件整理〜実装まで対応",
              "GitHub公開",
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Process line — signature element */}
          <div className="mt-6 flex items-center gap-2 sm:gap-4 flex-wrap font-[family-name:var(--font-mono)] text-xs sm:text-sm text-[var(--color-text-sub)]">
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

      {/* Numbers */}
      <section className="py-16 px-6 border-b border-[var(--color-border)] bg-[var(--color-bg-card)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)] mb-8">
            Numbers
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="group block rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6 hover:border-[var(--color-accent)] transition-colors"
              >
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-[var(--color-accent)]">
                  {h.number}
                </p>
                <p className="mt-3 text-sm text-[var(--color-text-sub)] leading-relaxed">
                  {h.label}
                </p>
                <p className="mt-4 text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-sub)] group-hover:text-[var(--color-accent)] transition-colors">
                  詳しく見る →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-24 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)] mb-4">
            Pain Points
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
            こんなお悩みありませんか？
          </h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl">
            {painPoints.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed text-[var(--color-text-sub)]">
                <span className="text-[var(--color-accent)] font-[family-name:var(--font-mono)] shrink-0">→</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <p className="font-medium">
              その業務、AIで自動化できるかもしれません。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-accent)] hover:opacity-80 transition-opacity"
            >
              ご相談はこちら →
            </a>
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
            {workCases.map((c) => (
              <Link
                key={c.slug}
                href={`/works/${c.slug}`}
                className="group block p-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                    {c.number}
                  </span>
                  {c.metric && (
                    <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-accent)] text-right leading-tight">
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

                {c.beforeAfter && (
                  <div className="mt-4 flex flex-col gap-1.5 text-xs leading-relaxed border-l-2 border-[var(--color-border)] pl-3">
                    <p className="text-[var(--color-text-sub)]">
                      <span className="font-[family-name:var(--font-mono)] text-[var(--color-text-sub)]">Before　</span>
                      {c.beforeAfter.before}
                    </p>
                    <p>
                      <span className="font-[family-name:var(--font-mono)] text-[var(--color-accent)]">After　</span>
                      {c.beforeAfter.after}
                    </p>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-sub)]"
                    >
                      {tag}
                    </span>
                  ))}
                  {c.demo && (
                    <span className="text-xs px-2 py-1 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] font-[family-name:var(--font-mono)]">
                      Demoあり
                    </span>
                  )}
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
          <ul className="max-w-2xl space-y-5">
            {services.map((service) => (
              <li key={service.name} className="flex gap-3 leading-relaxed">
                <span className="text-[var(--color-accent)] font-[family-name:var(--font-mono)] shrink-0">→</span>
                <span>
                  <span className="font-medium">{service.name}</span>
                  <span className="block text-sm text-[var(--color-text-sub)] mt-0.5">
                    {service.desc}
                  </span>
                </span>
              </li>
            ))}
          </ul>
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
            これまで、LINE Bot、AIブログ自動生成、RAG検索システム、CSチャットボットなど、実際の業務を想定した開発案件に取り組み、要件整理から実装・納品までのプロセスを経験してきました。
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

      {/* Process */}
      <section className="py-24 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
            Process
          </p>
          <div className="max-w-2xl">
            <p className="leading-relaxed text-[var(--color-text-sub)] mb-10">
              ご相談から納品後の運用サポートまで、一貫して対応します。初めてご発注いただく方にも安心して進めていただけるよう、各ステップを明確にしています。
            </p>
            <ol className="space-y-8">
              {[
                {
                  step: "1",
                  title: "ヒアリング",
                  desc: "現在の課題や実現したいことを、業務の背景から丁寧にお伺いします。",
                },
                {
                  step: "2",
                  title: "要件定義・お見積もり",
                  desc: "ヒアリング内容をもとに実装範囲・スケジュール・費用感をご提示します。",
                },
                {
                  step: "3",
                  title: "開発・テスト",
                  desc: "MVP思考で素早く形にし、動作確認・テストを重ねながら仕上げます。",
                },
                {
                  step: "4",
                  title: "納品・運用サポート",
                  desc: "納品後も、改善提案や機能追加、運用面のサポートまで継続してご対応します。",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-5">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-[family-name:var(--font-mono)] text-sm">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-sub)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
            Contact
          </p>
          <div className="max-w-2xl">
            <p className="leading-relaxed mb-3">
              「これ、AIで自動化できる？」という段階でも大丈夫です。
            </p>
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
