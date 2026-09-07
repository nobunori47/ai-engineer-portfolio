/**
 * 問い合わせフォームの「相談内容の種類」選択肢。
 * クライアント（ContactForm）とサーバー（/api/contact）の両方から参照し、
 * 許可される値の唯一のソースとする（ホワイトリスト検証に使用）。
 */
export const INQUIRY_TYPES = [
  "AI・業務自動化の相談",
  "AIチャットボット・RAG",
  "Webアプリ・MVP開発",
  "総務・バックオフィス改善",
  "まだ具体的に決まっていない",
  "その他",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export function isValidInquiryType(value: string): value is InquiryType {
  return (INQUIRY_TYPES as readonly string[]).includes(value);
}
