import type { Metadata } from "next";
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

// トップページ固有の metadata（layout の既定値に依存させず、ここで明示的に管理する）。
// OGP 画像は Phase 4C-2 で CEO が承認した正式版（1200×630、byte-identical で配置）。layout には置かない（OAuth 用ページ等へ継承させないため）。
const TITLE = "AIで、会社の「面倒」を減らす。｜中小企業のAI業務改善";
const DESCRIPTION =
  "中小企業・小規模事業者のためのAI業務改善。問い合わせ対応、資料探し、集計・報告など日々の手間を、総務・バックオフィスの実務経験とAI開発の両面から一緒に減らしていきます。相談内容が固まっていなくても大丈夫です。";
const OG_IMAGE = {
  url: "/og/portfolio-og-final-1200x630.png",
  width: 1200,
  height: 630,
  alt: "AIで、会社の「面倒」を減らす。中小企業・小規模事業者のためのAI業務改善",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    type: "website",
    locale: "ja_JP",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

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
