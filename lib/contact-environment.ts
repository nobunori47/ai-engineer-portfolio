/**
 * 問い合わせAPI（/api/contact）が外部への副作用（Supabaseへの保存・Slack通知）を
 * 実行してよい環境かを判定する。副作用・import なしの純粋な関数。
 *
 * - Vercel の Production（VERCEL_ENV が "production" と完全一致）の場合だけ true
 * - Preview・Development・未設定・空文字・大文字小文字違い・前後の空白・想定外の値はすべて false（fail-closed）
 * - trim や小文字化などの補正はしない。環境の判定を「親切に解釈」しない
 * - 利用者が操作できる値（クエリ・ヘッダー・Cookie 等）は判定に使わない
 *
 * 前提：Vercel の「System Environment Variables」が有効であること。
 * 無効な場合は Production でも VERCEL_ENV が無く、false（送信停止）になる。
 */
export function isContactExternalWriteAllowed(
  env: Record<string, string | undefined> = process.env
): boolean {
  return env.VERCEL_ENV === "production";
}
