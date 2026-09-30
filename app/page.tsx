import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import SiteHeader from "@/app/components/SiteHeader";
import HeroSection from "@/app/components/sections/HeroSection";
import ProblemSection from "@/app/components/sections/ProblemSection";
import SolutionSection from "@/app/components/sections/SolutionSection";
import FlagshipGate from "@/app/components/sections/FlagshipGate";
import FlagshipSection from "@/app/components/sections/FlagshipSection";
import CaseStudiesSection from "@/app/components/sections/CaseStudiesSection";
import WhyMeSection from "@/app/components/sections/WhyMeSection";
import ProcessSection from "@/app/components/sections/ProcessSection";

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

      {/* ⑥ WHY ME（旧 About・Strength・Values を統合）＋ ⑦ PROCESS（旧 Process を置き換え）— Phase 3C */}
      <WhyMeSection />
      <ProcessSection />

      {/* ここから下は既存セクション（FAQ・FINAL CTA・Contact は Phase 3D で刷新） */}
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
