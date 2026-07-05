import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nobunori Nakamura | AI Engineer Portfolio",
  description:
    "AIを活用したWebアプリケーションや業務効率化システムを設計・開発するAIエンジニアのポートフォリオ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0F1417] text-[#E8EAED]">
        {children}
      </body>
    </html>
  );
}
