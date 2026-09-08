/**
 * Hero 用イラスト（B案：落ち着いたビジネスイラスト風）。
 * 顔を描かない匿名の人物が、反復作業を穏やかなアシスタントへ手渡し、
 * 時間（時計・立ちのぼる点）が戻ってくる、という「時間を取り戻す」の含意を表す。
 * - 完全な装飾。意味は隣接する見出し・本文が担うため aria-hidden
 * - 配色は globals.css のトークンを参照（テーマ追従／文字は一切埋め込まない）
 */
export default function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 340"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* 背景パネル */}
      <rect
        x="6"
        y="10"
        width="448"
        height="320"
        rx="20"
        fill="var(--color-bg-card)"
        stroke="var(--color-border)"
      />
      {/* 机のライン */}
      <path d="M38 262h384" stroke="var(--color-border)" />

      {/* 匿名の人物（顔は描かない・机に向かって座っている） */}
      <circle cx="112" cy="150" r="22" fill="var(--color-bg)" stroke="var(--color-text-sub)" />
      <path
        d="M58 262c0-44 24-72 54-72s54 28 54 72"
        fill="var(--color-bg-card)"
        stroke="var(--color-text-sub)"
      />
      {/* アシスタントへ差し出す腕 */}
      <path d="M152 210c24 3 44 -1 60 -14" stroke="var(--color-text-sub)" />

      {/* 反復作業：少し重なる書類＋くり返しの弧 */}
      <g stroke="var(--color-text-sub)" fill="var(--color-bg)">
        <rect x="184" y="172" width="48" height="34" rx="4" transform="rotate(-6 208 189)" />
        <rect x="196" y="166" width="48" height="34" rx="4" />
      </g>
      <path d="M200 158a19 15 0 0 1 36 3" stroke="var(--color-accent)" opacity="0.5" />
      <path d="M236 162l1-9-8 3" stroke="var(--color-accent)" opacity="0.5" />

      {/* 手渡しの矢印 */}
      <path d="M270 184h42m0 0-9-7m9 7-9 7" stroke="var(--color-text-sub)" />

      {/* アシスタント（AI）タイル */}
      <rect
        x="322"
        y="134"
        width="100"
        height="100"
        rx="20"
        fill="var(--color-bg-card)"
        stroke="var(--color-accent)"
      />
      <path
        d="M372 154c3 16 9 22 25 25-16 3-22 9-25 25-3-16-9-22-25-25 16-3 22-9 25-25Z"
        fill="var(--color-accent)"
        fillOpacity="0.16"
        stroke="var(--color-accent)"
      />

      {/* 戻ってくる時間：時計＋立ちのぼる点 */}
      <circle cx="374" cy="72" r="19" stroke="var(--color-accent)" />
      <path d="M374 59v13l8 5" stroke="var(--color-accent)" />
      <circle cx="338" cy="116" r="3.2" fill="var(--color-accent)" stroke="none" />
      <circle cx="351" cy="99" r="2.7" fill="var(--color-accent)" fillOpacity="0.6" stroke="none" />
      <circle cx="343" cy="84" r="2.2" fill="var(--color-accent)" fillOpacity="0.35" stroke="none" />
    </svg>
  );
}
