/**
 * About セクション用の小さな場面イラスト。
 * 顔を描かない人物が、机で落ち着いて業務改善に取り組む様子。
 * マグカップ・小さな観葉植物・整えられた書類など、温かみのある小物を添える。
 * - 装飾（aria-hidden）。人物像は隣接する短い言葉が担う
 * - HeroArt / ConceptDiagram と同じ配色トークン・線幅で統一
 */
export default function WorkspaceScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 320"
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
        width="388"
        height="300"
        rx="20"
        fill="var(--color-bg-card)"
        stroke="var(--color-border)"
      />

      {/* 壁のフレーム（穏やかな作業環境） */}
      <rect x="46" y="44" width="66" height="48" rx="4" stroke="var(--color-border)" />
      <path d="M56 80l14-16 11 10 9-7 12 12" stroke="var(--color-border)" />

      {/* 匿名の人物（顔は描かない） */}
      <circle cx="138" cy="150" r="22" fill="var(--color-bg)" stroke="var(--color-text-sub)" />
      <path
        d="M96 250C96 206 114 180 138 180s42 26 42 70"
        fill="var(--color-bg-card)"
        stroke="var(--color-text-sub)"
      />
      {/* 机に伸ばした腕 */}
      <path d="M174 210c20 3 36 15 46 32" stroke="var(--color-text-sub)" />

      {/* 机 */}
      <path d="M40 250h320" stroke="var(--color-text-sub)" />
      <path d="M86 250v34M300 250v34" stroke="var(--color-border)" />

      {/* ノートPC（画面に簡単なグラフ） */}
      <rect x="222" y="196" width="86" height="52" rx="4" fill="var(--color-bg)" stroke="var(--color-text-sub)" />
      <path d="M214 248h102" stroke="var(--color-text-sub)" />
      <path d="M238 234v-12M254 234v-22M270 234v-8M286 234v-16" stroke="var(--color-accent)" />

      {/* 整えられた書類の束 */}
      <rect x="66" y="234" width="38" height="13" rx="2" fill="var(--color-bg)" stroke="var(--color-text-sub)" />
      <rect x="72" y="226" width="38" height="13" rx="2" fill="var(--color-bg)" stroke="var(--color-text-sub)" />

      {/* マグカップ */}
      <path
        d="M120 224h22v13a6 6 0 0 1-6 6h-10a6 6 0 0 1-6-6z"
        fill="var(--color-bg)"
        stroke="var(--color-text-sub)"
      />
      <path d="M142 228h4a5 5 0 0 1 0 10h-1" stroke="var(--color-text-sub)" />
      <path d="M126 217c0-4 3-4 3-8M135 217c0-4 3-4 3-8" stroke="var(--color-border)" />

      {/* 小さな観葉植物 */}
      <path d="M326 228h28l-3 19h-22z" fill="var(--color-bg)" stroke="var(--color-text-sub)" />
      <path
        d="M340 228c-2-15 4-22 4-22M340 228c3-12 12-15 12-15M340 228c-7-8-6-19-6-19"
        stroke="var(--color-accent)"
      />
    </svg>
  );
}
