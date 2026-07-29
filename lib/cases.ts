export type Screenshot = {
  src: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  oneLiner: string;
  tags: string[];
  metric?: string;
  challenge?: string;
  proposal?: string;
  implementation?: string[];
  effort?: string;
  result?: string[];
  stack: string[];
  github?: string;
  demo?: string;
  // 顧客価値を軸にしたケーススタディ用の拡張フィールド（既存ケースは未設定のため表示に影響しない）
  overview?: string;
  value?: string;
  features?: string[];
  useCases?: string[];
  architecture?: string;
  techNotes?: string[];
  differentiation?: string;
  futureScope?: string[];
  screenshots?: Screenshot[];
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
  {
    slug: "case-5-switchboard-notification-hub",
    number: "05",
    title: "AI Multi-Channel Notification Hub (SwitchBoard)",
    oneLiner:
      "メール・LINEの問い合わせをAIで自動分類し、Slack・LINEへ最適な経路で通知するマルチチャネル通知システム。",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Claude API",
      "Slack API",
      "LINE Messaging API",
      "Webhook",
      "Cron",
    ],
    metric: "5分以内SLA",
    challenge:
      "メール・LINEなど複数チャネルから届く問い合わせを手作業で振り分けており、対応漏れや緊急案件の見落としが発生していた（架空クライアント 不動産管理会社 を想定）。",
    proposal:
      "Webhookで各チャネルを統合し、AIによる自動分類・緊急判定・Slack通知・LINE Push通知を組み合わせることで、取りこぼし防止と迅速な対応を実現する。",
    implementation: [
      "LINE Webhook署名検証（HMAC-SHA256、タイミングセーフ比較）",
      "external_idによる冪等性（重複通知防止）",
      "Headless Cronによる1分ごとのキュー処理",
      "Claude APIによるカテゴリ分類（賃貸・売買・内見・クレーム）",
      "confidence・classification_reasonの保存によるAI判断の可視化",
      "キーワード一次判定＋Claude再確認による二段階緊急判定",
      "Slack通知（カテゴリ別チャンネル振り分け）",
      "LINE Push通知（クレーム時の緊急連絡）",
      "retry_count・last_errorによる障害追跡",
      "ダッシュボードUI（結線図・通知ログ・問い合わせ一覧）",
    ],
    effort: "T-11（リスク管理）→ヒアリング→設計・提案→実装→デプロイ→セキュリティ監査まで一貫対応",
    result: [
      "署名検証付きWebhook受信器を実装",
      "AI自動分類と通知フローを構築",
      "5分以内SLAを満たす緊急通知パスを設計",
      "重複通知防止・状態管理・リトライを実装",
      "GitHub公開・Vercelデプロイ完了",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Anthropic Claude API",
      "Slack Web API",
      "LINE Messaging API",
      "Vercel",
    ],
    github: "https://github.com/nobunori47/switchboard-ai-notify",
    demo: "https://switchboard-ai-notify.vercel.app",
  },
  {
    slug: "case-6-rag-slack-bot",
    number: "06",
    title: "RAGナレッジ検索 + Slack連携Bot",
    oneLiner: "部署別アクセス制御を備えた企業向けRAGシステム",
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "pgvector",
      "OpenAI Embeddings",
      "Slack API",
      "Claude Code",
    ],
    metric: "部署別アクセス制御",
    challenge:
      "社内のナレッジは部署ごとに存在しており、Slackから自然言語で横断検索できる仕組みがない一方、無秩序に検索可能にすると部署をまたいだ情報漏洩のリスクが生じる（案件7を想定）。",
    proposal:
      "pgvector・OpenAI Embeddingsによる社内文書のRAG検索をSlack Botとして提供し、部署ごとのアクセス制御・監査ログ・Fail-Closed設計を組み込むことで、利便性と安全性を両立するアーキテクチャを設計した。",
    implementation: [
      "Next.js App Router + TypeScriptでSlack Events APIエンドポイントを構築（署名検証・URL検証・リトライ制御）",
      "Supabase pgvector + OpenAI Embeddingsでベクトル検索基盤を構築",
      "match_chunks SQL関数内でSlackユーザーの所属部署によるフィルタリングを実装（Supabase RLSではなくSQL関数フィルタ、fail-closed設計）",
      "slack_user_departmentsテーブルでユーザー×部署の権限を管理",
      "query_logsに質問・回答・根拠チャンク・ステータスを記録する監査ログを実装",
      "Claude Codeと協働し、コードレビュー・実データ検証・ドキュメントと実装の整合性チェックを実施",
    ],
    effort: "設計〜実装〜Slack実地検証〜レビュー対応まで一貫対応",
    result: [
      "IT部署ユーザーが他部署文書にアクセスできないことを実データで検証",
      "Slack実チャンネルでのメンション→出典付き回答のE2E動作を確認",
      "query_logsにより「誰が・いつ・何を質問したか」を追跡可能な監査ログを実現",
      "README・ガバナンス手順書を実装と整合させ、提出物としてクローズ可能な状態に整理",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "pgvector",
      "OpenAI Embeddings",
      "Slack API",
      "Claude Code",
    ],
    github: "https://github.com/nobunori47/case7-rag-slack",
  },
  {
    slug: "case-9-ai-sales-agent",
    number: "09",
    title: "AI営業アシスタント",
    oneLiner:
      "自分自身の営業課題から生まれた、案件分析とValue First応募文生成を支援するAI営業アシスタント。",
    tags: ["Next.js", "Supabase", "Claude API"],
    overview:
      "クラウドソーシングでの営業活動を、AIに任せられる部分はAIに任せ、人は「どの案件に、どう向き合うか」という本来の判断だけに集中できるようにするAI営業アシスタント。模擬案件ではなく、自分自身が実際に抱えていた営業上の課題を題材に、要件定義から設計・実装・公開までを一人で行った。",
    challenge:
      "クラウドソーシングでの営業活動では、案件ごとに内容を読み込み、自分の経験との適合度を判断し、相手に響く提案文を作成する必要がある。この準備作業に時間を取られるほど、本来注力すべき「顧客が何を求めているか」の理解や、提案内容そのものの改善に使える時間が減っていく。さらに、提案文は技術力のアピールに寄りがちで、発注者が本当に評価する「顧客が得られる価値」が伝わりにくいという課題もあった。",
    value:
      "「Next.js + Claude APIで作った」ことが価値なのではなく、提案作成に時間を取られる営業担当者が、本来注力すべき顧客理解や提案改善に時間を使えるようにすることを価値の中心に置いた。AIが案件情報とプロフィールを照合して適合度と根拠を示し、技術説明ではなく顧客価値中心の応募文（Value First）を自動生成することで、準備時間を削減し、浮いた時間を顧客理解や提案の質に再投資できるようにしている。",
    features: [
      "案件登録（テキスト貼り付け）",
      "案件一覧（AIのおすすめ度・応募ステータスを一覧表示し、優先順位を即座に判断できる）",
      "AI案件分析（おすすめ度・一致理由・要約。分析失敗時も誠実にフォールバック表示）",
      "Value Firstの応募文自動生成（編集・コピー・応募済み記録まで一気通貫）",
    ],
    useCases: [
      "クラウドワークス・ランサーズで案件が増えてきて、どれから見るべきか判断に迷ったとき",
      "案件文を読んで応募するか迷っている、応募文を書く時間が取れないとき",
      "技術説明に寄りがちな提案文を、顧客価値中心の文章に整えたいとき",
    ],
    architecture:
      "[スマホ (PWA)]\n   ↓\n[Next.js (App Router) + Tailwind CSS]\n   ↓ API Routes\n[Supabase (Postgres)] ← profiles / jobs / applications\n   ↓\n[Claude API (Anthropic)] ← 案件分析・応募文生成",
    techNotes: [
      "Presentational / Container分離で、AI呼び出し・DB操作とUI表示を分離し、改修・テストをしやすくしている",
      "Supabase Row Level Securityを設計段階から組み込み、将来のマルチユーザー化に備えている",
      "zodによる入出力バリデーションで、AI出力が崩れた場合も画面側で誠実にフォールバック表示する",
      "applicationsテーブルはjob_idをuniqueにせず、将来の「再応募・下書き履歴管理」を見据えた設計にしている",
    ],
    differentiation:
      "案件7（社内ナレッジ活用AI／RAG + Slack Bot）は社内向けに情報アクセスを効率化するツールだったが、案件9は自分自身の外部営業活動という実際のビジネス課題を対象にしている。ツールを作ったのではなく、課題発見→価値設計→実装→運用まで一貫して経験したプロダクト開発として提示できる点が、案件9固有の強み。",
    futureScope: [
      "KPIダッシュボードによる応募・返信・受注実績の可視化",
      "応募実績が一定量たまった段階でのAI案件コーチ機能",
      "Chrome連携による入力補助など、営業活動全体の段階的な自動化",
    ],
    screenshots: [
      { src: "/works/case-9-ai-sales-agent/jobs-list.jpg", alt: "案件一覧画面 — AIのおすすめ度と応募ステータスを一覧表示" },
      { src: "/works/case-9-ai-sales-agent/job-detail.jpg", alt: "案件詳細画面 — AIによる適合度・一致理由・要約の分析結果" },
      { src: "/works/case-9-ai-sales-agent/application-draft.jpg", alt: "応募文作成画面 — Value First応募文の自動生成" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Claude API"],
    github: "https://github.com/nobunori47/ai-sales-agent",
  },
];