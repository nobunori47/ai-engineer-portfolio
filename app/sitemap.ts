import type { MetadataRoute } from "next";

// 現時点ではトップページだけを載せる（事例詳細は表現の見直し後に追加を判断）。
// priority・changeFrequency は設定しない。根拠のある更新日時をまだ持たないため lastModified も省略する。
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://ai-engineer-portfolio-dun.vercel.app" }];
}
