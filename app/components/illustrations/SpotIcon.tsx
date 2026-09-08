import type { SVGProps } from "react";

/**
 * 統一トーンの線アイコン集。
 * - 24x24 viewBox / stroke=currentColor / fill=none / strokeWidth=1.5
 * - 色は親要素の text-* で制御する
 * - 既定は装飾扱い(aria-hidden)。title を渡すと role="img" になり読み上げ対象になる
 * - 画像内にテキストは持たない（ラベルは呼び出し側の HTML で実装する）
 */

export type SpotIconName =
  | "hearing"
  | "design"
  | "build"
  | "improve"
  | "time"
  | "bot"
  | "search"
  | "automate"
  | "dashboard"
  | "mvp"
  | "person"
  | "route";

const paths: Record<SpotIconName, React.ReactNode> = {
  // ヒアリング: 吹き出し＋耳を傾けるニュアンス
  hearing: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V15H5.5A1.5 1.5 0 0 1 4 13.5Z" />
      <path d="M8.5 8.5h7M8.5 11h4.5" />
    </>
  ),
  // 設計: 製図的なノードとガイド
  design: (
    <>
      <circle cx="6.5" cy="6.5" r="2.2" />
      <circle cx="17.5" cy="17.5" r="2.2" />
      <path d="M8.7 8.7 15.3 15.3" />
      <path d="M17.5 4.5v3M4.5 17.5h3" />
    </>
  ),
  // 開発: ブロックを組む
  build: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.4" />
      <rect x="13" y="13" width="7" height="7" rx="1.4" />
      <path d="M13 6.5h7M6.5 13v7" />
    </>
  ),
  // 改善: 循環して良くしていく
  improve: (
    <>
      <path d="M5 12a7 7 0 0 1 11.9-5M19 12a7 7 0 0 1-11.9 5" />
      <path d="M17 3.5V7h-3.5M7 20.5V17h3.5" />
    </>
  ),
  // 時間
  time: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  // チャットボット
  bot: (
    <>
      <rect x="4.5" y="7" width="15" height="11" rx="2.4" />
      <path d="M12 4v3M9 12h.01M15 12h.01M9.5 15.5h5" />
    </>
  ),
  // 検索
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.3-4.3" />
    </>
  ),
  // 自動化
  automate: (
    <>
      <path d="M13 3 4 14h6l-1 7 9-11h-6z" />
    </>
  ),
  // ダッシュボード
  dashboard: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 15v-3M12 15V9M16 15v-5" />
    </>
  ),
  // MVP開発
  mvp: (
    <>
      <path d="M12 3c3 1.5 4.5 4.5 4.5 8 0 2.2-.8 4.3-2 6h-5c-1.2-1.7-2-3.8-2-6C7.5 7.5 9 4.5 12 3Z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M9.5 18c-1 .8-1.5 2-1.5 3 1.2 0 2.3-.4 3-1M14.5 18c1 .8 1.5 2 1.5 3-1.2 0-2.3-.4-3-1" />
    </>
  ),
  // 人物(顔なし)
  person: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20c.7-3.6 3.3-5.5 6.5-5.5s5.8 1.9 6.5 5.5" />
    </>
  ),
  // 分岐する導線
  route: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M6 8v3.5A2.5 2.5 0 0 0 8.5 14H18v2M18 14V8" />
    </>
  ),
};

type SpotIconProps = SVGProps<SVGSVGElement> & {
  name: SpotIconName;
  /** 指定すると読み上げ対象になる。未指定なら装飾(aria-hidden) */
  title?: string;
  size?: number;
};

export default function SpotIcon({ name, title, size = 24, ...rest }: SpotIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
