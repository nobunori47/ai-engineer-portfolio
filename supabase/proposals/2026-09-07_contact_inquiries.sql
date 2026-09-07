-- ============================================================================
-- 提案SQL（未適用）: contact_inquiries テーブルの整備
--
-- このファイルは中村信規の確認・承認を得てから、Supabaseの管理画面またはCLIで
-- 手動実行することを想定した「案」です。AI（Claude Code）はこのSQLを本番環境へ
-- 自動実行していません。実行前に必ず内容を確認し、既存データ・既存ポリシーへの
-- 影響がないことを確認してください。
--
-- 背景:
-- - app/api/contact/route.ts はSupabaseへ SUPABASE_SERVICE_ROLE_KEY（サービスロール
--   キー）で接続し、サーバー側からのみ contact_inquiries テーブルへ INSERT する設計。
--   サービスロールキーはRLSをバイパスするため、この設計自体は「ブラウザから直接
--   Supabaseへアクセスする経路が存在しない」という意味で安全側に倒れている。
-- - ただし、将来的な設定ミスや構成変更（例: 匿名/公開キーを使うクライアントの追加）
--   に備えた多層防御として、RLSを有効化した上でanon/publicロールに一切の権限を
--   与えない（デフォルト拒否）状態にしておくことを推奨する。
-- - 現状のアプリケーションコードは、既存想定カラム（name, company, email,
--   current_issue, message, timeline, budget, status）のみを使用しており、
--   「相談内容の種類」「参照事例」「プライバシーポリシー同意日時」は、スキーマ変更を
--   避けるため message カラム冒頭にテキストとして埋め込む運用としている。
--   下記は、将来的にこれらを専用カラムへ分離したい場合の追加案（任意・オプション）。
-- ============================================================================

-- 1. テーブルが存在しない場合の作成案（既に本番に存在する場合はこのブロックは不要）
--    ※ 本番に既存のテーブルがある前提のため、実行前に既存スキーマを必ず確認すること。
create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  email text not null,
  current_issue text,
  message text not null,
  timeline text,
  budget text,
  status text not null default 'new',
  -- 以下は将来の拡張用（任意で追加。既存運用に影響しないnullable列）
  inquiry_type text,
  source_case text,
  privacy_consent boolean,
  privacy_consent_at timestamptz
);

-- 2. RLSを有効化し、デフォルトで全ロールのアクセスを拒否する（多層防御）。
--    サービスロールキーはRLSをバイパスするため、サーバー側からのINSERT/参照には影響しない。
alter table public.contact_inquiries enable row level security;

-- 3. anon/authenticated ロールに対する明示的なポリシーは作成しない
--    （ポリシーが1つも無ければ、RLS有効時はデフォルトで全操作が拒否される）。
--    誤って将来ポリシーを追加する場合は、最小権限の原則を厳守すること。
--    例: 匿名ユーザーからの直接INSERTを許可する場合でも、SELECT/UPDATE/DELETEは
--    絶対に許可しないこと。
--
--    参考（今回は作成しない。将来anonキーを使う設計に変える場合のみ検討）:
--    create policy "anon can insert only" on public.contact_inquiries
--      for insert to anon
--      with check (true);

-- 4. anon/publicロールからのSELECTを明示的に拒否する（RLS用ポリシーが無い状態を維持）。
--    以下は既存ポリシーが誤って作られていないかの確認用クエリ（実行して確認するだけ、変更は加えない）。
-- select policyname, cmd, roles from pg_policies where tablename = 'contact_inquiries';

-- 5. （任意・将来的な移行）専用カラムを使う場合のUPDATE例
--    アプリ側のコードを、message冒頭のテキスト埋め込みから専用カラム書き込みへ切り替える際は、
--    既存の埋め込み済みメタ情報テキストを一括で構造化データへ移す移行スクリプトを別途検討すること。
