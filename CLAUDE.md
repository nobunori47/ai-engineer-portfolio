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
Hero文言は「面倒な作業を手放して、時間を取り戻す。」（2026-09-07変更。旧文言「AIで、面倒な業務を自動化します。」から、AIカンパニーの経営理念「時間を取り戻す。」との関係が伝わる案へ切り替え。判断の詳細は意思決定ログ的な位置づけとして本セクションに残す）。Footer「Built with MVP thinking. Improved through real projects.」。Google Drive「提供価値の整理」にある共通メッセージ・「何を作るかではなく、何を減らすか」という価値観・Hear→Design→Build→Improveの進め方は、サイトのPain Points/Processセクションと矛盾しないため参考にしてよい。ただし同文書にある「中小企業を中心に」という対象限定の記述は、サイト本文には明記されていない（矛盾はしないが事実として断定はしない）。

## トップページの情報設計（2026-09-07改訂）
「イラスト＋キャッチコピー → 人物紹介(About) → 得意なこと・仕事への向き合い方(Strength) → なぜこの仕事をしているか・価値観(Values) → 顧客の悩み(Pain Points) → 提供できる支援(Services) → 実績サマリ(Numbers) → 制作実績(Works) → 仕事の進め方(Process) → 問い合わせ(Contact)」の順に並べる。制作実績を先頭に大量表示しない方針のため、Worksは代表実績3件（case-1, case-3, case-7。理由: 実データでの検証・Vercelへのデプロイ・スクリーンショット等の裏付けが厚い3件を選定）を大きく表示し、残り5件は`<details>`要素（JS不要・キーボード操作可能）で展開表示する。

## 人物紹介・画像に関する制約（2026-09-07時点）
- 本人の実写顔写真、および副業活動用に承認済みのイラストアイコンは、本リポジトリおよび `public/` 配下に存在しない（`public/`には create-next-app 標準のSVGのみ）。そのため画像は「画像未確定」として扱い、Hero等に新規画像を追加していない。承認済み画像が別途用意された場合は、出所・利用可否を確認した上でHeroセクション等に追加を検討する。
- 「好きなこと・趣味」についてリポジトリ内に公開可能な事実を記載した正本資料は見つかっていない（README.md/AGENTS.mdはcreate-next-app標準のまま）。そのため「好きなこと」はサイトに記載していない（未確定のまま、推測で作成しない）。
- 現在の勤務先名・住所・年齢・家族構成・電話番号等、本人を過度に特定できる情報は追加していない。

## 制作実績の自主制作表示（2026-09-07追加）
`lib/cases.ts` の case-1〜case-8は、現時点ですべて個人の学習・検証目的の自主制作であり、実際の受注・納品実績ではない（case-3, 4, 5, 7は「架空クライアントを想定」と明記済み、case-1, 2, 6, 8も同様に自主制作）。トップページのWorksセクションには自主制作である旨の説明文と、各Caseカードに「自主制作」バッジを表示している。将来、実際の受注案件（実案件）をCaseとして追加する場合は、自主制作と明確に区別できるフィールド（例: `CaseStudy`型への`isRealClient`等の追加）を検討し、実案件のみに「納品実績」「顧客導入」等の表現を用いること。自主制作のCaseにこれらの表現を使わない。

## Aboutセクションの表現修正（2026-09-07）
旧Aboutセクションにあった「要件整理から実装・納品までのプロセスを経験してきました」という表現は、案件がすべて自主制作（実クライアントへの納品ではない）であるにもかかわらず「納品」という語が実際の受注案件であるかのような誤解を招くため、「要件整理から設計・実装・検証までを一人で担当してきました」に修正した。Processセクションの「納品・運用サポート」は、今後受注する案件に対して提供する予定のサービス内容の説明であり、過去実績の事実主張ではないため、そのまま維持している。

## 日本語表現のトーン
敬体（です・ます調）。専門用語には簡潔な補足を添える（例:「RAG（検索拡張生成）」）。見出しラベルは英語（Hero, Works, Services, Process等）、本文は日本語。

## 実績を誇張しないためのルール
- 実データで検証済みの数値（例:「テスト12問中11問正解、92%の精度」）と、設計上の想定値（例:「5分以内SLA」は"を想定した設計"と明記）を書き分ける
- 実在しない顧客を扱う場合は「架空クライアント◯◯を想定」と明記する（case-3, 4, 5, 7で採用）
- 効果（result）は「〜が期待できる」「〜につながる」など、断定を避けた表現を基本とする
- 新しいCaseを追加する際は、何らかの定量的な指標（時間・件数・％等）を必ず含める

## GitHub・デモリンクの扱い
`github?` / `demo?` はoptional。値がある場合のみ詳細ページ下部にリンクを表示する（例: case-6・case-8はgithubのみでdemoなし）。
