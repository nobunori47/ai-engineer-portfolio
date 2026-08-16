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
  target?: string;
  challenge?: string;
  proposal?: string;
  implementation?: string[];
  effort?: string;
  result?: string[];
  stack: string[];
  github?: string;
  demo?: string;
  images?: string[];
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
    oneLiner:
      "美容サロンの問い合わせ対応をAIで効率化し、スタッフが接客に集中できる環境を構築。",
    tags: ["LINE Bot", "Claude API", "Supabase"],
    target:
      "予約・問い合わせ対応に追われる美容サロン・エステサロンなどのオーナー様・スタッフ様",
    challenge:
      "美容サロンでは、予約・営業時間・料金などの問い合わせが電話やLINEで日常的に発生する。施術中のスタッフが手を止めて対応したり、同じ質問に何度も答えたりする負担が生じやすい。特に営業時間外の問い合わせには翌営業日まで返信できず、予約機会を逃すリスクもある。",
    proposal:
      "LINE Messaging APIとClaude APIを組み合わせ、よくある質問（営業時間・料金・予約方法など）にはAIが24時間自動応答し、判断が必要な相談は人へエスカレーションする設計とした。会話・顧客データはSupabaseで管理している。",
    implementation: [
      "Next.js + TypeScriptでバックエンドを構築",
      "Supabaseで会話・ユーザーデータを管理",
      "LINE Messaging APIと連携したメッセージ送受信",
      "統合テストスイート(50/50 PASS)を整備し応答品質を担保",
      "未認証のデバッグ用エンドポイントを削除するセキュリティ監査を実施",
    ],
    effort: "要件整理 → 設計 → 実装 → テスト → デプロイまで一貫対応",
    result: [
      "営業時間外でも問い合わせ対応が可能となり、予約検討中のお客様への対応機会を逃しにくい環境を実現",
      "よくある質問対応をAIが肩代わりすることで、スタッフの接客業務への集中につながり、業務負担軽減が見込める",
      "本番環境へのデプロイまで完了し、実運用を想定したAI問い合わせ対応基盤を構築",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "LINE Messaging API"],
    github: "https://github.com/nobunori47/line-bot-mvp",
    demo: "https://line-bot-mvp.vercel.app",
    screenshots: [
      {
        src: "https://github.com/user-attachments/assets/40a37596-f24d-41a6-80c4-4ad2d8367100",
        alt: "管理画面 ダッシュボード",
      },
      {
        src: "https://github.com/user-attachments/assets/0f716a6e-4be2-4c4f-88d2-709f9c705afd",
        alt: "FAQ管理画面",
      },
      {
        src: "https://github.com/user-attachments/assets/c2707b3c-bee1-4ef2-a45a-1672c7f48b7f",
        alt: "会話ログ画面",
      },
      { src: "/works/case1/flow.svg", alt: "LINE Bot 自動応答フロー図" },
    ],
  },
  {
    slug: "case-2-blog-automation",
    number: "02",
    title: "AIブログ記事 自動生成パイプライン",
    oneLiner: "Google Sheets起点でWordPressまで自動投稿。",
    tags: ["GAS", "Claude API", "WordPress"],
    screenshots: [
      {
        src: "/works/case2/screenshot-sheet.png",
        alt: "Google Sheetsによるキーワード・ステータス管理画面",
      },
      {
        src: "/works/case2/screenshot-article.png",
        alt: "Claude APIによる記事本文の自動生成結果",
      },
      {
        src: "/works/case2/screenshot-log.png",
        alt: "GAS実行ログ（記事生成の処理状況を確認）",
      },
    ],
    target:
      "オウンドメディアを運営する担当者様・Webマーケター様・個人ブロガー様",
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
    target:
      "社内マニュアルや規程の検索に時間を取られているバックオフィス担当者様・情報システム担当者様（架空クライアント TechBridge を想定）",
    challenge:
      "社内資料が複数の場所に散在し、必要な情報を探すのに時間がかかる。マニュアル化されていない知識も多く、都度担当者に確認しないと分からない情報が発生していた（架空クライアント TechBridge を想定）。",
    proposal:
      "Supabase pgvectorとOpenAI Embeddingsを用いたRAG検索システムを設計し、キーワード完全一致に頼らず、自然文での質問に対応できる検索精度92%を実現した。",
    implementation: [
      "Next.js + TypeScriptでフロントエンド・APIを構築",
      "Supabase pgvectorでベクトル検索基盤を構築",
      "OpenAI Embeddingsで文書をベクトル化",
      "章単位のチャンク分割(chapter-aware chunking)に変更し類似度スコアを改善",
      "マッチング閾値を0.5→0.45に調整し精度を最適化",
      "Supabase Authでマジックリンク+メールドメイン制限を実装",
      "Vercel上に本番稼働（rag-search-ai.vercel.app）、Qiita記事として技術解説を公開",
    ],
    effort: "設計 → 実装 → 精度検証まで一貫対応",
    result: [
      "資料を探し回る手間や、担当者への都度確認にかかる工数の削減が期待できる",
      "従来のキーワード検索では見つけにくかった関連情報も、質問文の意図を理解して検索できるため、社内ナレッジ活用の促進につながる",
      "テスト12問中11問正解、92%の精度を達成。誤情報を拾うリスクを抑えた実用レベルの検索体験を実現",
      "平均応答時間2,622ms、テスト全12問で5秒以内に回答を返却し、実務利用に耐える応答速度を確認",
    ],
    futureScope: [
      "Word・Confluenceなど対応ファイル形式の拡張",
      "部署別アクセス制御（RLS）の実装",
      "Slack連携によるBot化",
      "差分更新パイプラインの構築",
      "質問ログ・分析ができる管理画面の追加",
    ],
    stack: ["Next.js", "TypeScript", "Supabase pgvector", "OpenAI Embeddings", "Claude API"],
    screenshots: [
      {
        src: "/works/case3/02-chat-answer.png",
        alt: "実際のチャット画面（有給休暇に関する質問への回答例）",
      },
      { src: "/works/case3/flow.svg", alt: "社内文書検索AI 検索フロー図" },
    ],
    github: "https://github.com/nobunori47/rag-search-ai",
    demo: "https://rag-search-ai.vercel.app",
  },
  {
    slug: "case-4-cs-chatbot",
    number: "04",
    title: "カスタマーサポート チャットボット",
    oneLiner: "FAQ自動応答とエスカレーションを備えたフルスタックCSツール。",
    tags: ["Next.js", "Supabase Realtime", "Claude API"],
    screenshots: [
      {
        src: "/works/case4/chat-widget.png",
        alt: "顧客側チャットウィジェット（FAQ自動応答の様子）",
      },
      {
        src: "/works/case4/operator-dashboard.png",
        alt: "オペレーター管理画面（会話一覧・返信対応の様子）",
      },
    ],
    target:
      "FAQ対応の負荷が高く、複雑な相談への引き継ぎ体制を整えたいECサイト様・SaaS事業者様のカスタマーサポートチーム（架空クライアント BOTANICA を想定）",
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
    title: "問い合わせ対応自動振り分けAI（SwitchBoard）",
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
    screenshots: [
      {
        src: "/works/case5/control-board.png",
        alt: "問い合わせ管制盤（結線図でリアルタイムの処理経路を可視化）",
      },
      {
        src: "/works/case5/inquiry-log.png",
        alt: "問い合わせ一覧（AIによるカテゴリ分類・信頼度スコア・状態管理）",
      },
    ],
    metric: "5分以内SLA",
    target:
      "複数チャネルからの問い合わせが集中し、振り分けに時間がかかる不動産管理会社様などの営業・サポート部門（架空クライアント 不動産管理会社 を想定）",
    challenge:
      "メール・LINEなど複数チャネルからの問い合わせが窓口に集中し、内容の分類や適切な担当への振り分けに時間がかかる。対応漏れ・対応遅延が発生するリスクがあり、特に問い合わせ量が多い店舗や営業チームでは機会損失につながりやすい（架空クライアント 不動産管理会社 を想定）。",
    proposal:
      "メール・LINEからの問い合わせをAIが自動分類し、内容に応じて最適な経路（Slack・LINE）へリアルタイム通知するマルチチャネル通知Hubを構築。Webhook/Cronによる自動処理で、人手を介さず一次振り分けを完結させ、5分以内の初動対応を想定したSLA設計とした。",
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
      "問い合わせの見落とし・対応遅延のリスク軽減につながる",
      "分類作業の自動化により、初動対応のスピードアップが期待できる（5分以内SLAを想定した設計）",
      "複数チャネルの問い合わせをSlack上で一元的に把握できる体制になり、運用状況に応じて効果測定が可能",
      "デモ環境で総受信758件・通知成功率99.6%を実データ相当のフィクスチャで検証済み",
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
    screenshots: [
      {
        src: "/works/case6/slack-thread.png",
        alt: "Slackでのメンション質問と、出典付きで返答するBotのスレッド画面",
      },
      {
        src: "/works/case6/query-logs.png",
        alt: "Supabaseのquery_logsテーブル（質問・回答・根拠チャンクを記録した監査ログ）",
      },
    ],
    metric: "部署別アクセス制御",
    target:
      "部署ごとに機密度の異なる情報を扱う企業の情報システム部門様・Slack運用チーム様",
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
    slug: "case-7-sales-dashboard",
    number: "07",
    title: "LUMINA AI売上分析ダッシュボード",
    oneLiner:
      "CSVアップロードした売上データをAIが分析し、KPI・ランキング・改善アクションを自動生成する業務支援システム。",
    tags: ["Next.js", "Supabase", "Claude API"],
    metric: "レポート作成 83%削減",
    target:
      "毎月の売上レポート作成に時間を取られているアパレルEC様等の店舗運営者様・経営層様（架空クライアント アパレルEC「LUMINA」を想定）",
    challenge:
      "月次レポート作成(グラフ作成・数値集計・コメント執筆)に毎回3時間かかり、翌月のアクション提案も感覚頼りになっていた(架空クライアント アパレルEC「LUMINA」を想定)。",
    proposal:
      "CSVアップロード→Supabaseへの蓄積→KPI自動計算→Claude APIの構造化出力(JSON Schema)によるAI分析コメント生成という一気通貫のパイプラインを設計し、AI・データ分析に詳しくない経営層でも数値の意味を数十秒で理解できるダッシュボードとして提案した。",
    implementation: [
      "Next.js App Router + TypeScriptでCSVアップロード〜KPI集計〜AI分析までのAPIを構築",
      "PapaParseで全行事前検証するCSVバリデーション(行番号つきエラー返却)を実装",
      "Supabaseにcsv_imports / sales_transactions / ai_analysesの3テーブルを設計し、月次データを蓄積する構成に",
      "Claude APIのoutput_config(JSON Schema)で構造化出力を強制し、パース失敗しない分析コメント生成を実現",
      "AI分析結果をアプリ側でも型検証する二重防御を実装し、Vitestのスナップショットテストで回帰を検知",
      "GitHub Actions(TypeCheck→Lint→Test→Build)とVercelのGit連携による自動デプロイ(CI/CD)を構築",
    ],
    effort: "要件定義〜DB設計〜API実装〜AI連携〜CI/CD構築〜本番デプロイまで一貫対応",
    result: [
      "CSVアップロードからAI分析コメント生成までを実データでE2E検証(ローカル・本番URL双方)",
      "月次レポート作成時間を3時間→数分規模に短縮する設計を実現",
      "APIキー等のシークレットをコードに一切含めない設計とし、Vercel環境変数のみで運用",
      "GitHub Actions CIとVercel本番デプロイまで公開済み",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Claude API",
      "Recharts",
      "Vercel",
      "GitHub Actions",
    ],
    github: "https://github.com/nobunori47/case8-sales-dashboard",
    demo: "https://case8-sales-dashboard.vercel.app",
    images: [
      "/works/case8/01-dashboard-home.png",
      "/works/case8/02-csv-upload.png",
      "/works/case8/03-ai-analysis.png",
    ],
  },
  {
    slug: "case-8-headless-wordpress",
    number: "08",
    title: "ヘッドレスWordPress × Next.js 事例管理基盤",
    oneLiner:
      "WordPressをヘッドレスCMSとして活用し、カスタム投稿タイプ・タクソノミー設計からNext.js連携まで構築した事例管理基盤。",
    tags: ["Next.js", "TypeScript", "WordPress REST API", "Docker"],
    target:
      "案件事例やブログなど構造化コンテンツの更新頻度が高く、表示速度・SEOを重視するWeb担当者様・事業者様",
    challenge:
      "案件事例やブログ記事のような構造化されたコンテンツを、コードを触らずに更新できる仕組みが欲しい。かつ、表示側はNext.jsのパフォーマンス・開発体験を維持したい。",
    proposal:
      "WordPressをヘッドレスCMSとして採用し、カスタム投稿タイプ「事例（case_study）」とカスタムタクソノミー「技術スタック（tech_stack）」を設計。表示側はNext.js（App Router）で構築し、REST API経由でコンテンツを取得することで、コンテンツ更新の柔軟性とフロントエンドのパフォーマンス・開発体験を両立する構成を提案した。",
    implementation: [
      "WordPressプラグインとしてカスタム投稿タイプ・カスタムタクソノミーをREST API公開込みで登録（register_post_type / register_taxonomy / register_post_meta）",
      "成果指標（result_summary）をカスタムフィールドとして追加し、REST APIレスポンスに技術タグ名の配列を含めるフィルタを実装",
      "Next.js（App Router）側でISR（60秒キャッシュ）を使い、WordPress REST APIから一覧・詳細ページを取得・表示",
      "Docker Compose + wp-cliで環境構築を完全自動化し、docker compose up -d だけでWordPress・MySQL・サンプルデータ投入まで完了する構成に",
    ],
    effort: "環境設計〜実装〜動作確認まで1日",
    result: [
      "コード変更なしにコンテンツ更新が可能な基盤を構築",
      "Docker Composeによる自動セットアップで、環境構築の再現性を担保",
    ],
    stack: ["Next.js", "TypeScript", "WordPress REST API", "Docker"],
    github: "https://github.com/nobunori47/wp-nextjs-headless-demo",
  },
];