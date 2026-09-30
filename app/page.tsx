import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import SiteHeader from "@/app/components/SiteHeader";
import HeroSection from "@/app/components/sections/HeroSection";
import ProblemSection from "@/app/components/sections/ProblemSection";
import SolutionSection from "@/app/components/sections/SolutionSection";
import FlagshipGate from "@/app/components/sections/FlagshipGate";
import FlagshipSection from "@/app/components/sections/FlagshipSection";
import CaseStudiesSection from "@/app/components/sections/CaseStudiesSection";
import ConceptDiagram from "@/app/components/illustrations/ConceptDiagram";
import WorkspaceScene from "@/app/components/illustrations/WorkspaceScene";
import SpotIcon, { type SpotIconName } from "@/app/components/illustrations/SpotIcon";

// About: 事実として確認できる範囲での人物像（現場感／伝わる説明／一貫対応）
const aboutPoints: { icon: SpotIconName; title: string; body: string }[] = [
  {
    icon: "person",
    title: "現場の感覚を持っている",
    body: "総務・バックオフィス業務の経験を踏まえ、実際に使う人の目線で考えます。",
  },
  {
    icon: "hearing",
    title: "伝わる言葉で話す",
    body: "専門用語だけで終わらせず、業務の言葉で提案・説明することを大切にしています。",
  },
  {
    icon: "build",
    title: "要件整理から検証まで一人で",
    body: "ヒアリング・設計・実装・検証まで一貫して担当。小さく作って使いながら改善します。",
  },
];

const processSteps: {
  step: string;
  title: string;
  desc: string;
  icon: SpotIconName;
}[] = [
  {
    step: "1",
    title: "ヒアリング",
    desc: "現在の課題や実現したいことを、業務の背景から丁寧にお伺いします。",
    icon: "hearing",
  },
  {
    step: "2",
    title: "要件定義・お見積もり",
    desc: "ヒアリング内容をもとに実装範囲・スケジュール・費用感をご提示します。",
    icon: "design",
  },
  {
    step: "3",
    title: "開発・テスト",
    desc: "MVP思考で素早く形にし、動作確認・テストを重ねながら仕上げます。",
    icon: "build",
  },
  {
    step: "4",
    title: "納品・運用サポート",
    desc: "納品後も、改善提案や機能追加、運用面のサポートまで継続してご対応します。",
    icon: "improve",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 刷新：ナビゲーション ＋ ① HERO ② PROBLEM ③ SOLUTION（Phase 1）＋ ③→④ Gate ＋ ④ FLAGSHIP の骨格（Phase 2A） */}
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FlagshipGate />
      <FlagshipSection />
      {/* ⑤ CASE STUDIES（Phase 3B）：④の直後。旧 Works・Numbers はここへ統合し、トップでの二重表示をなくす */}
      <CaseStudiesSection />

      {/* ここから下は既存セクション（⑥以降は後続Phaseで刷新） */}
      {/* About: どのような人物か */}
      <section id="about" className="py-24 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
            About
          </p>
          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-12 lg:items-center">
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-medium leading-relaxed">
                総務・バックオフィスの現場感を持ち、要件整理から実装・改善まで一人で対応するAIエンジニアです。
              </p>
              <ul className="mt-8 space-y-6">
                {aboutPoints.map((point) => (
                  <li key={point.title} className="flex gap-4">
                    <span
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-accent)]"
                      aria-hidden="true"
                    >
                      <SpotIcon name={point.icon} size={20} />
                    </span>
                    <span>
                      <span className="font-medium">{point.title}</span>
                      <span className="mt-1 block text-sm text-[var(--color-text-sub)] leading-relaxed">
                        {point.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-[var(--color-text-sub)] leading-relaxed">
                個人開発として LINE Bot・AIブログ自動生成・RAG検索・CSチャットボットなどに取り組み、Next.js／TypeScript／Supabase／Claude API を主に活用しています。
              </p>
            </div>
            <WorkspaceScene className="w-full max-w-xs mx-auto lg:max-w-none" />
          </div>
        </div>
      </section>

      {/* Strength: 得意なこと・仕事への向き合い方 */}
      <section className="py-24 px-6 border-b border-[var(--color-border)] bg-[var(--color-bg-card)]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <div className="flex sm:flex-col items-center sm:items-start gap-4">
            <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
              Strength
            </p>
            <SpotIcon
              name="improve"
              size={28}
              className="text-[var(--color-accent)]"
              aria-hidden="true"
            />
          </div>
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-medium leading-snug">
              「まず動くものを作り、
              <br />
              実際に使いながら改善すること」
            </p>
            <p className="mt-6 leading-relaxed text-[var(--color-text-sub)]">
              面倒な定型作業や、必要な情報を探し回る時間をどう減らせるか。そこから逆算して設計することを心がけています。完璧な作り込みより先に小さく形にし、実際に使いながら改善を重ねることで、スピードと実用性を両立したいと考えています。
            </p>
          </div>
        </div>
      </section>

      {/* Values: なぜこの仕事に取り組んでいるのか・大切にしている価値観 */}
      <section className="py-24 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-[120px_1fr] gap-8">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-sub)]">
            Values
          </p>
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
              時間を取り戻す。
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-sub)]">
              面倒な作業を減らす → 時間が戻る → 人が本来やるべき仕事へ集中できる。AIの導入自体が目的ではなく、この流れをつくるために使います。
            </p>

            <ConceptDiagram className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:p-6" />
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
              {processSteps.map((item) => (
                <li key={item.step} className="flex gap-5">
                  <span className="relative shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-[family-name:var(--font-mono)] text-sm">
                    {item.step}
                  </span>
                  <div>
                    <p className="flex items-center gap-2 font-medium">
                      <SpotIcon
                        name={item.icon}
                        size={18}
                        className="text-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                      {item.title}
                    </p>
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
              「これ、AIで減らせる？」という段階からご相談いただけます。
            </p>
            <p className="leading-relaxed text-[var(--color-text-sub)] mb-10">
              相談内容が具体的に決まっていなくても、現在困っている作業や業務を簡単にお知らせください。フォームからのご連絡は、内容を確認のうえ通常1〜2営業日以内にご返信します。
            </p>

            <ContactForm />

            <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex flex-col gap-3 font-[family-name:var(--font-mono)] text-sm">
              <p className="text-xs text-[var(--color-text-sub)] mb-1 font-[family-name:var(--font-body)]">
                メールやGitHubから直接ご連絡いただくことも可能です。
              </p>
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
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">
              Privacy Policy
            </Link>
            <span className="font-[family-name:var(--font-mono)]">
              Built with MVP thinking. Refined through hands-on iteration.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
