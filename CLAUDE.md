# CLAUDE.md — ai-engineer-portfolio

## このプロジェクトの目的
案件獲得のための営業用ポートフォリオサイト。実績（Works/Case）と提供できる価値を発注検討者に伝え、問い合わせにつなげることが目的。「完璧な作り込みより先に公開し、実案件で育てる」というMVP思考で運用している（case-0のproposal本文より）。

## 技術スタック
- Next.js 16.2.10（App Router）/ React 19.2.4 / TypeScript
- Tailwind CSS v4
- Supabase（@supabase/supabase-js）— 問い合わせフォームの保存に使用
- Vercelでホスティング（各Caseのdemoリンクが *.vercel.app）
- テスト自動化の仕組みは未設定（package.jsonにtestスクリプトなし）

## 主要ディレクトリの役割
- `app/page.tsx` — トップページ全体（Hero〜Contactまで1ファイル）
- `app/works/[slug]/page.tsx` — Case詳細ページ（`lib/cases.ts`から動的生成）
- `lib/cases.ts` — 全Case（Works）データの唯一のソース。CaseStudy型の配列
- `app/api/contact/route.ts` / `app/components/ContactForm.tsx` — 問い合わせフォーム
- `lib/contact-options.ts` — 問い合わせフォームの「相談内容の種類」選択肢（クライアント・サーバー共通の唯一のソース）
- `lib/supabase-server.ts` — サーバー専用Supabaseクライアント
- `app/privacy/page.tsx` — 本サイト（トップページ）の問い合わせフォーム向けプライバシーポリシー。`app/sales-sheet-write/privacy` とは対象が異なるため混同しないこと
- `supabase/proposals/` — 本番Supabaseへ未適用のSQL案を置く場所。AIはここに置いたSQLを本番へ自動実行しない
- `public/works/caseN/` — Case別のスクリーンショット

## 開発時に守るルール
- Case情報は `lib/cases.ts` の `cases` 配列のみで管理する。他ファイルに複製しない
- `lib/supabase-server.ts` はAPI Route以外から呼び出さない（コード内コメントで明示）
- `NEXT_PUBLIC_` を付けない環境変数はクライアントに露出させない
- `.env*` はコミットしない（.gitignore対象）
- `AGENTS.md` はNext.jsが `next dev` 実行時に自動生成・上書きするファイル。編集しても再生成されるため、プロジェクト固有のルールはこのCLAUDE.mdに直接書く

## 既存実装を壊さないための注意点
- 作業開始前に必ず `git status` を確認し、既存の未コミット変更を把握してから作業する
- `CaseStudy` 型のフィールドはほぼoptional。既存Caseのキー名・構造を変更すると詳細ページの表示に影響する
- `slug` はURLに直結するため、既存Caseのsluggは変更しない

## 変更後に最低限実行する確認
- `npm run build`
- `npm run lint`
- 変更したページの表示を目視確認（自動テストなし）

## Git運用
- mainブランチで運用（featureブランチのmerge実績はあるが基本は直push）
- コミットメッセージは日本語、「Add Case N」「Case Nに〜を追加」のように変更内容を簡潔に要約する

## ドキュメント更新ルール
- 現状 `docs/` ディレクトリは存在しない
- README.mdはcreate-next-app標準のまま、プロジェクト固有の説明はない
- Case追加時は `lib/cases.ts` の型定義がそのままドキュメントを兼ねる

## 誰に見せるポートフォリオか
サイト自体に明記された記述はないが、Contactセクションの文言や各Caseの `target` フィールド（「〜様」表記）から、案件発注を検討する企業・担当者向けの営業資料であることが実装から一貫して読み取れる。

## Works/Caseの構成
`lib/cases.ts` の `cases` 配列（現在9件、case-0〜case-8）。トップページのWorksセクションは `case-0-portfolio` を除外して表示。過去に存在した `case-9`（AI Sales Agent）はコミット `33cfd0f` で削除済み。

## 新しいCaseを追加するときの既存フォーマット
`CaseStudy` 型に沿って追記する。必須: `slug, number, title, oneLiner, tags, stack`。任意: `metric, beforeAfter, target, challenge, proposal, implementation[], effort, result[], github, demo, images[]/screenshots[]`（未使用の拡張フィールド `overview, value, features, useCases, architecture, techNotes, differentiation, futureScope` もあり、値を入れた場合のみ詳細ページに表示される）。

## Services/Contact等の構成
Servicesは5項目（AIチャットボット／社内RAG検索／業務自動化／AIダッシュボード／Webアプリ・MVP開発）を `page.tsx` 内にハードコード。Contactは `ContactForm` コンポーネント＋メール（nobunori47@gmail.com）・GitHub（github.com/nobunori47）への直接リンクを併記。

## 問い合わせ機能
- `app/api/contact/route.ts` が name/company/email/inquiryType/currentIssue/message/timeline/budget/sourceCase/consent を受け取り、サーバー側バリデーション（必須項目・メール形式・相談内容の種類のホワイトリスト・プライバシー同意チェック・簡易サニタイズ）を経てSupabaseの `contact_inquiries` テーブルへ保存する。
- 「相談内容の種類」「参照事例（Works詳細ページ経由の場合）」「プライバシーポリシー同意日時」は、既存テーブルのスキーマ変更を避けるため `message` カラム冒頭にメタ情報として付記している（専用カラムへ分離する場合の案は `supabase/proposals/` を参照。本番へは未適用）。
- Supabaseへは `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`（サービスロールキー）でサーバーからのみ接続し、クライアント（ブラウザ）から直接Supabaseへアクセスする経路は存在しない。
- 成功後、`SLACK_WEBHOOK_URL` が設定されていればベストエフォートでSlack通知（失敗してもDB保存の成功は取り消さない）。
- ハニーポット項目（`website`）、簡易レート制限（IPごと・インメモリ、サーバーレス環境では完全ではない旨をコード内に明記）、60秒間の同一内容二重送信防止を実装。
- Works詳細ページの「このような仕組みについて相談する」導線は `/?case=<slug>#contact` でトップページへ遷移し、`ContactForm` が `lib/cases.ts` と突き合わせて安全に事例名を解決する（URLの任意テキストをそのまま信用しない）。

## ブランドメッセージ・提供価値
Hero文言「AIで、面倒な業務を自動化します。」、Footer「Built with MVP thinking. Improved through real projects.」。Google Drive「提供価値の整理」にある共通メッセージ・「何を作るかではなく、何を減らすか」という価値観・Hear→Design→Build→Improveの進め方は、サイトのPain Points/Processセクションと矛盾しないため参考にしてよい。ただし同文書にある「中小企業を中心に」という対象限定の記述は、サイト本文には明記されていない（矛盾はしないが事実として断定はしない）。

## 日本語表現のトーン
敬体（です・ます調）。専門用語には簡潔な補足を添える（例:「RAG（検索拡張生成）」）。見出しラベルは英語（Hero, Works, Services, Process等）、本文は日本語。

## 実績を誇張しないためのルール
- 実データで検証済みの数値（例:「テスト12問中11問正解、92%の精度」）と、設計上の想定値（例:「5分以内SLA」は"を想定した設計"と明記）を書き分ける
- 実在しない顧客を扱う場合は「架空クライアント◯◯を想定」と明記する（case-3, 4, 5, 7で採用）
- 効果（result）は「〜が期待できる」「〜につながる」など、断定を避けた表現を基本とする
- 新しいCaseを追加する際は、何らかの定量的な指標（時間・件数・％等）を必ず含める

## GitHub・デモリンクの扱い
`github?` / `demo?` はoptional。値がある場合のみ詳細ページ下部にリンクを表示する（例: case-6・case-8はgithubのみでdemoなし）。
