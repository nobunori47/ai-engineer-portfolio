export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  oneLiner: string;
  tags: string[];
  metric?: string;
  challenge: string;
  proposal: string;
  implementation: string[];
  effort: string;
  result: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "case-0-portfolio",
    number: "00",
    title: "ポートフォリオサイト",
    oneLiner: "このサイト自体もMVP思考で構築した成果物です。",
    tags: ["Next.js", "TypeScript", "Vercel"],
    challenge:
      "案件獲得のために、実績と強みを一目で伝えられる場所が必要だった。",
    proposal:
      "完璧な作り込みより先に公開すること自体を優先し、最小構成から実案件で育てる方針にした。",
    implementation: [
      "Next.js (App Router) + TypeScriptで構築",
      "Tailwind CSSでデザイントークンを管理",
      "Vercelへ即時デプロイできるパイプラインを構築",
    ],
    effort: "設計〜公開まで1日",
    result: [
      "URLを持つ営業資産として即公開",
      "Case追加が容易な構成で今後も育てていく",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "case-1-line-bot",
    number: "01",
    title: "美容サロン向け LINE Bot",
    oneLiner: "AI自動応答によるお問い合わせ対応の自動化。",
    tags: ["LINE Bot", "Claude API", "Supabase"],
    challenge:
      "美容サロンにおける日常的な問い合わせ対応の負荷を軽減し、対応品質を安定させたい。",
    proposal:
      "LINE Messaging APIとClaude APIを組み合わせ、よくある質問には自動応答、複雑な相談は人へエスカレーションする設計とした。",
    implementation: [
      "Next.js + TypeScriptでバックエンドを構築",
      "Supabaseで会話・ユーザーデータを管理",
      "LINE Messaging APIと連携したメッセージ送受信",
      "統合テストスイート(50/50 PASS)を整備",
      "未認証のデバッグ用エンドポイントを削除するセキュリティ監査を実施",
    ],
    effort: "要件整理〜実装〜テスト〜デプロイまで一貫して対応",
    result: [
      "統合テスト50/50 PASSで品質を担保",
      "モバイルUIのレスポンシブ対応を実施",
      "Vercelへ本番デプロイ",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "LINE Messaging API"],
    github: "https://github.com/nobunori47/line-bot-mvp",
  },
  {
    slug: "case-2-blog-automation",
    number: "02",
    title: "AIブログ記事 自動生成パイプライン",
    oneLiner: "Google Sheets起点でWordPressまで自動投稿。",
    tags: ["GAS", "Claude API", "WordPress"],
    challenge:
      "ブログ記事の企画から執筆、投稿までの作業負荷を減らし、継続的な情報発信を仕組み化したい。",
    proposal:
      "Google Sheetsをトリガーに、GAS経由でClaude APIが記事を生成し、WordPress REST API経由で自動投稿するパイプラインを設計した。",
    implementation: [
      "Google Sheetsで記事テーマを管理",
      "GASでClaude APIを呼び出し記事本文を生成",
      "WordPress REST API経由で自動投稿",
      "HTML属性内のダブルクォートとJSONの競合バグをシングルクォート指定で解消",
    ],
    effort: "パイプライン設計〜実装〜検証",
    result: [
      "手動投稿の手間を削減する自動化パイプラインを構築",
      "実際に記事シリーズ4本を公開",
    ],
    stack: ["Google Apps Script", "Claude API", "WordPress REST API"],
    github: "https://github.com/nobunori47/case2-blog-gas",
  },
  {
    slug: "case-3-rag-search",
    number: "03",
    title: "社内文書検索AI (RAG)",
    oneLiner: "92%の精度を実現した社内向けRAG検索システム。",
    tags: ["RAG", "Supabase pgvector", "OpenAI Embeddings"],
    metric: "92%",
    challenge:
      "社内ドキュメントが散在し、必要な情報を探すのに時間がかかっていた（架空クライアント TechBridge を想定）。",
    proposal:
      "Supabase pgvectorとOpenAI Embeddingsを用いたRAG構成を設計し、Claude APIで自然な回答を生成する検索システムを提案した。",
    implementation: [
      "Next.js + TypeScriptでフロントエンド・APIを構築",
      "Supabase pgvectorでベクトル検索基盤を構築",
      "OpenAI Embeddingsで文書をベクトル化",
      "章単位のチャンク分割(chapter-aware chunking)に変更し類似度スコアを改善",
      "マッチング閾値を0.5→0.45に調整し精度を最適化",
      "Supabase Authでマジックリンク+メールドメイン制限を実装",
    ],
    effort: "設計〜実装〜精度検証まで一貫対応",
    result: [
      "テスト12問中11問正解、92%の精度を達成",
      "Vercel上に本番稼働（rag-search-ai.vercel.app）",
      "Qiita記事として技術解説を公開",
    ],
    stack: ["Next.js", "TypeScript", "Supabase pgvector", "OpenAI Embeddings", "Claude API"],
    github: "https://github.com/nobunori47/rag-search-ai",
    demo: "https://rag-search-ai.vercel.app",
  },
  {
    slug: "case-4-cs-chatbot",
    number: "04",
    title: "カスタマーサポート チャットボット",
    oneLiner: "FAQ自動応答とエスカレーションを備えたフルスタックCSツール。",
    tags: ["Next.js", "Supabase Realtime", "Claude API"],
    challenge:
      "問い合わせ対応をFAQベースで自動化しつつ、対応できない相談は運用担当者へスムーズに引き継ぎたい（架空クライアント BOTANICA を想定）。",
    proposal:
      "Next.js App Router + Supabase Realtimeで会話をリアルタイム管理し、Claude APIがFAQに基づき回答、必要に応じて人へエスカレーションする設計とした。",
    implementation: [
      "Next.js App Router + TypeScript + Tailwind CSSで構築",
      "Supabaseにconversations/messages/faqsテーブルとRLSを設計",
      "Supabase Realtimeでオペレーターへの即時反映を実現",
      "Claude APIによるFAQベース応答とエスカレーションロジックを実装",
      "オペレーター管理画面を構築",
    ],
    effort: "WBS見積り約24時間 → 実績約33時間(約37%超過)。差分は振り返りとして記録し次案件に活用",
    result: [
      "Vercelへ本番デプロイ(cs-chatbot-flame.vercel.app)",
      "技術解説記事を公開",
      "Git Worktreeは概念学習に留め、次回Case 5での実践を計画",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Claude API"],
    github: "https://github.com/nobunori47/cs-chatbot",
    demo: "https://cs-chatbot-flame.vercel.app",
  },
];
