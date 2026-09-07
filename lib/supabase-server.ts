import { createClient } from "@supabase/supabase-js";

/**
 * サーバーサイド専用のSupabaseクライアント。
 * SERVICE_ROLE_KEYを使うため、APIルート(サーバー)以外からは絶対に呼び出さないこと。
 * NEXT_PUBLIC_を付けていない環境変数のみを使用し、クライアントバンドルに含まれないようにしている。
 */
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase環境変数(SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)が設定されていません。"
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
