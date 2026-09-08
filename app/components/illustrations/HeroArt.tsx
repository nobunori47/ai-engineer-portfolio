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
      viewBox="0 0 480 380"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* 背景パネル */}
      <rect
        x="10"
        y="40"
        width="460"
        height="300"
        rx="22"
        fill="var(--color-bg-card)"
        stroke="var(--color-border)"
      />
      {/* 机のライン */}
      <path d="M44 300h392" stroke="var(--color-border)" />

      {/* 匿名の人物（顔は描かない） */}
      <circle cx="112" cy="150" r="22" fill="var(--color-bg)" stroke="var(--color-text-sub)" />
      <path
        d="M74 300C74 236 84 184 112 184s38 52 38 116"
        fill="var(--color-bg-card)"
        stroke="var(--color-text-sub)"
      />
      {/* アシスタントへ差し出す腕 */}
      <path d="M140 214c22 3 42 0 58-10" stroke="var(--color-text-sub)" />

      {/* 反復作業：少し重なる書類＋くり返しの弧 */}
      <g stroke="var(--color-text-sub)" fill="var(--color-bg)">
        <rect x="182" y="196" width="44" height="32" rx="4" transform="rotate(-6 204 212)" />
        <rect x="192" y="192" width="44" height="32" rx="4" />
      </g>
      <path
        d="M196 186a18 14 0 0 1 33 2"
        stroke="var(--color-accent)"
        opacity="0.5"
      />
      <path d="M229 190l1-8-7 2" stroke="var(--color-accent)" opacity="0.5" />

      {/* 手渡しの矢印 */}
      <path d="M262 204h40m0 0-8-6m8 6-8 6" stroke="var(--color-text-sub)" />

      {/* アシスタント（AI）タイル */}
      <rect
        x="330"
        y="158"
        width="94"
        height="94"
        rx="18"
        fill="var(--color-bg-card)"
        stroke="var(--color-accent)"
      />
      <path
        d="M377 178c3 15 8 20 23 23-15 3-20 8-23 23-3-15-8-20-23-23 15-3 20-8 23-23Z"
        fill="var(--color-accent)"
        fillOpacity="0.16"
        stroke="var(--color-accent)"
      />

      {/* 戻ってくる時間：時計＋立ちのぼる点 */}
      <circle cx="396" cy="96" r="18" stroke="var(--color-accent)" />
      <path d="M396 84v12l8 5" stroke="var(--color-accent)" />
      <circle cx="360" cy="146" r="3" fill="var(--color-accent)" stroke="none" />
      <circle cx="374" cy="128" r="2.6" fill="var(--color-accent)" fillOpacity="0.6" stroke="none" />
      <circle cx="366" cy="112" r="2.2" fill="var(--color-accent)" fillOpacity="0.35" stroke="none" />
    </svg>
  );
}
