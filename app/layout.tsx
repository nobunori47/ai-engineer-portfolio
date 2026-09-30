import type { Metadata } from "next";
import "./globals.css";

// サイト全体の既定 metadata（子ページが title / description を持たない場合の既定値）。
// - metadataBase は本番 URL で固定する（Preview の URL を canonical 等に使わないため）
// - canonical・openGraph.url 等のトップ固有の値はここに置かない（OAuth 用ページ等へ継承させないため。app/page.tsx で設定）
// - title.template・siteName は使わない（OAuth 用ページの title を変えない／正式サービス名は未決定）
export const metadata: Metadata = {
  metadataBase: new URL("https://ai-engineer-portfolio-dun.vercel.app"),
  title: "AIで、会社の「面倒」を減らす。｜中小企業のAI業務改善",
  description:
    "中小企業・小規模事業者のためのAI業務改善。問い合わせ対応、資料探し、集計・報告など日々の手間を、総務・バックオフィスの実務経験とAI開発の両面から一緒に減らしていきます。相談内容が固まっていなくても大丈夫です。",
  verification: {
    google: "fIIT9bALHVrhw9zBGAVkGjPtyhpHRiYgGwHc4PiHB3o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
