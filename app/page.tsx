import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import HeroSection from "@/app/components/sections/HeroSection";
import ProblemSection from "@/app/components/sections/ProblemSection";
import SolutionSection from "@/app/components/sections/SolutionSection";
import FlagshipGate from "@/app/components/sections/FlagshipGate";
import FlagshipSection from "@/app/components/sections/FlagshipSection";
import CaseStudiesSection from "@/app/components/sections/CaseStudiesSection";
import WhyMeSection from "@/app/components/sections/WhyMeSection";
import ProcessSection from "@/app/components/sections/ProcessSection";
import FaqSection from "@/app/components/sections/FaqSection";
import FinalContactSection from "@/app/components/sections/FinalContactSection";

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

      {/* ⑧ FAQ ＋ ⑨ FINAL CTA / CONTACT（短縮フォーム）＋ 最小フッター — Phase 3D-2 */}
      <FaqSection />
      <FinalContactSection />

      <footer className="site-footer px-5 sm:px-6 py-8">
        <div className="max-w-6xl mx-auto flex justify-center sm:justify-start text-xs text-[var(--color-ink-sub)]">
          <Link href="/privacy" className="inline-flex items-center min-h-[44px] hover:text-[var(--color-navy)] transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </footer>
    </main>
  );
}
