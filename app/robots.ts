import type { MetadataRoute } from "next";

// 本番 URL で固定する（Preview の URL を載せない）。OAuth 用ページは Disallow しない。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://ai-engineer-portfolio-dun.vercel.app/sitemap.xml",
  };
}
