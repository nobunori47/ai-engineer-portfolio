/**
 * Values セクションの概念図。Hero の「AIコア＋ノード」ビジュアル言語に統一。
 * 「面倒な手作業のくり返し（散らばったノード） → AIコアで整理・自動化 → 空いた時間を取り戻す（整ったノード＋時計）」
 * - 図形は SVG、ラベルは HTML（figcaption）で実装（画像内にテキストを埋め込まない）
 * - SVG には role="img" と要約 aria-label を付与
 * - 動きは持たない（Hero を最も強くするため静止）。配色は Hero と同じ濃紺・ブルー・シアン・わずかな紫
 */
export default function ConceptDiagram({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 480 156"
        className="w-full h-auto"
        fill="none"
        role="img"
        aria-label="散らばった手作業のくり返しをAIコアで整理・自動化し、空いた時間を取り戻すまでの流れを表した図"
      >
        <defs>
          <radialGradient id="cd-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cd-core" cx="40%" cy="34%" r="76%">
            <stop offset="0%" stopColor="#EAF6FF" />
            <stop offset="40%" stopColor="#7DD3FC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cd-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CFFAFE" />
            <stop offset="55%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#2563EB" />
          </radialGradient>
          <radialGradient id="cd-node-muted" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#AFC6EE" />
            <stop offset="100%" stopColor="#4C6BB0" />
          </radialGradient>
          <filter id="cd-soft" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <ellipse cx="240" cy="78" rx="150" ry="70" fill="url(#cd-halo)" />

        {/* 左：散らばった手作業のくり返し（くすんだノード＋絡んだ線） */}
        <g stroke="#4C6BB0" strokeOpacity="0.5" strokeWidth="1" fill="none">
          <path d="M40 44C64 58 52 84 78 92" />
          <path d="M34 96C58 96 70 70 92 62" />
          <path d="M44 122C62 110 84 118 96 100" />
          <path d="M78 92C96 84 92 108 96 100" />
        </g>
        <g fill="url(#cd-node-muted)">
          <circle cx="40" cy="44" r="4" />
          <circle cx="34" cy="96" r="3.4" />
          <circle cx="44" cy="122" r="3.6" />
          <circle cx="78" cy="92" r="4.4" />
          <circle cx="96" cy="100" r="3" />
        </g>

        {/* 流入コネクター */}
        <g stroke="#5B87E8" strokeOpacity="0.45" strokeWidth="1.2" fill="none">
          <path d="M104 96C150 96 176 82 202 78" />
          <path d="M96 100C140 116 168 92 198 88" />
        </g>

        {/* 中央：AIコア */}
        <g>
          <ellipse cx="240" cy="78" rx="52" ry="22" transform="rotate(-18 240 78)" stroke="#5AA9FF" strokeOpacity="0.42" />
          <ellipse cx="240" cy="78" rx="48" ry="19" transform="rotate(22 240 78)" stroke="#5AA9FF" strokeOpacity="0.26" />
          <circle cx="240" cy="78" r="30" fill="#3B82F6" fillOpacity="0.12" filter="url(#cd-soft)" />
          <circle cx="240" cy="78" r="25" fill="#1E3A8A" fillOpacity="0.16" stroke="#9CC6FF" strokeOpacity="0.5" strokeWidth="1" />
          <g stroke="#AFD3FF" strokeOpacity="0.4" strokeWidth="0.8" fill="none">
            <ellipse cx="240" cy="78" rx="25" ry="10" />
            <ellipse cx="240" cy="78" rx="10" ry="25" />
            <ellipse cx="240" cy="78" rx="18" ry="25" />
          </g>
          <path d="M223 66a25 25 0 0 1 25-3" stroke="#EAF4FF" strokeOpacity="0.7" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <circle cx="240" cy="78" r="15" fill="url(#cd-core)" />
          <circle cx="240" cy="77" r="5" fill="#FFFFFF" opacity="0.95" />
          {/* コア接続ノード */}
          <g>
            {[[240, 48], [270, 66], [270, 92], [240, 108], [210, 92], [210, 66]].map(
              ([cx, cy], i) => (
                <g key={i}>
                  <line x1="240" y1="78" x2={cx} y2={cy} stroke="#6FA8FF" strokeOpacity="0.35" strokeWidth="0.9" />
                  <circle cx={cx} cy={cy} r="3" fill="url(#cd-node)" />
                </g>
              )
            )}
          </g>
        </g>

        {/* 流出コネクター */}
        <g stroke="#38BDF8" strokeOpacity="0.5" strokeWidth="1.2" fill="none">
          <path d="M278 78C316 78 340 72 372 68" />
          <path d="M278 88C312 100 340 96 368 96" />
        </g>

        {/* 右：整った成果ノード＋時計（時間が戻る） */}
        <g fill="url(#cd-node)">
          <circle cx="384" cy="60" r="4" />
          <circle cx="392" cy="78" r="3.6" />
          <circle cx="382" cy="96" r="3.4" />
        </g>
        <g transform="translate(414 56)">
          <circle cx="18" cy="18" r="17" fill="#7C6FF0" fillOpacity="0.1" stroke="#8B7FF5" strokeOpacity="0.8" strokeWidth="1.4" />
          <path d="M18 8v10l7 4" stroke="#A9A2F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* 粒子 */}
        <g fill="#7DD3FC">
          <circle cx="150" cy="26" r="1.5" opacity="0.6" />
          <circle cx="330" cy="24" r="1.6" opacity="0.5" />
          <circle cx="240" cy="140" r="1.5" opacity="0.5" />
        </g>
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
