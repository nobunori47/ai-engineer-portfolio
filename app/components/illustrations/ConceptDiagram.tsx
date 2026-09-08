/**
 * Values セクションの概念図（C案）。
 * 「面倒な手作業のくり返し → AIで自動化 → 戻ってきた時間」を、
 * 装飾ではなく価値の流れが直感的に伝わる形で示す。
 * - 図形は SVG、ラベルは HTML（figcaption）で実装（画像内にテキストを埋め込まない）
 * - SVG には role="img" と要約 aria-label を付与
 */
export default function ConceptDiagram({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 480 200"
        className="w-full h-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="面倒な手作業のくり返しをAIで自動化し、空いた時間を取り戻すまでの流れを表した図"
      >
        {/* 左：手作業のくり返し（くすんだ色） */}
        <g stroke="var(--color-text-sub)">
          <rect x="46" y="92" width="40" height="30" rx="4" transform="rotate(-6 66 107)" fill="var(--color-bg)" />
          <rect x="56" y="88" width="40" height="30" rx="4" fill="var(--color-bg)" />
        </g>
        <path d="M58 82a20 15 0 0 1 37 2" stroke="var(--color-text-sub)" opacity="0.75" />
        <path d="M95 86l1-9-8 3" stroke="var(--color-text-sub)" opacity="0.75" />

        {/* 手渡しの矢印 1 */}
        <path d="M120 100h44m0 0-8-6m8 6-8 6" stroke="var(--color-text-sub)" />

        {/* 中央：AIで自動化（アクセント） */}
        <rect
          x="196"
          y="66"
          width="68"
          height="68"
          rx="15"
          fill="var(--color-bg-card)"
          stroke="var(--color-accent)"
        />
        <path
          d="M230 82c2.2 12 6 16 18 18-12 2.2-15.8 6-18 18-2.2-12-6-16-18-18 12-2.2 15.8-6 18-18Z"
          fill="var(--color-accent)"
          fillOpacity="0.14"
          stroke="var(--color-accent)"
        />

        {/* 手渡しの矢印 2 */}
        <path d="M296 100h44m0 0-8-6m8 6-8 6" stroke="var(--color-accent)" />

        {/* 右：戻ってきた時間（アクセント／余白を広めに） */}
        <circle cx="408" cy="104" r="17" stroke="var(--color-accent)" />
        <path d="M408 92v12l8 5" stroke="var(--color-accent)" />
        <circle cx="386" cy="78" r="3" fill="var(--color-accent)" stroke="none" />
        <circle cx="398" cy="58" r="2.6" fill="var(--color-accent)" fillOpacity="0.6" stroke="none" />
        <circle cx="390" cy="42" r="2.2" fill="var(--color-accent)" fillOpacity="0.35" stroke="none" />
      </svg>

      <figcaption className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-sm">
        <span className="text-[var(--color-text-sub)]">
          <span className="font-[family-name:var(--font-mono)] text-xs block">01</span>
          面倒な手作業のくり返し
        </span>
        <span className="text-[var(--color-text-sub)]">
          <span className="font-[family-name:var(--font-mono)] text-xs block text-[var(--color-accent)]">02</span>
          必要な範囲からAIで自動化
        </span>
        <span className="text-[var(--color-text-sub)]">
          <span className="font-[family-name:var(--font-mono)] text-xs block text-[var(--color-accent)]">03</span>
          人が本来やるべき仕事へ時間を戻す
        </span>
      </figcaption>
    </figure>
  );
}
