/**
 * About セクションの補助ビジュアル。
 * Hero の「AIコア＋ノード」ビジュアル言語に合わせ、
 * 小さな抽象シルエットの人物の業務が、ノードを通って小さな発光コアで整理され、
 * 整った成果として出ていく様子を描く。
 * - 装飾（aria-hidden・pointer-events-none）。人物像は隣接する短い言葉が担う
 * - 配色は Hero と同じ濃紺・ブルー・シアン・わずかな紫
 * - 動きは持たない（Hero を最も強くするため静止）
 */
export default function WorkspaceScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 200"
      className={`pointer-events-none ${className ?? ""}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ws-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ws-core" cx="40%" cy="34%" r="76%">
          <stop offset="0%" stopColor="#EAF6FF" />
          <stop offset="42%" stopColor="#7DD3FC" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ws-node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CFFAFE" />
          <stop offset="55%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#2563EB" />
        </radialGradient>
        <radialGradient id="ws-node-muted" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#AFC6EE" />
          <stop offset="100%" stopColor="#4C6BB0" />
        </radialGradient>
        <linearGradient id="ws-sil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A5AA8" />
          <stop offset="100%" stopColor="#22407E" />
        </linearGradient>
        <filter id="ws-soft" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <ellipse cx="196" cy="100" rx="150" ry="92" fill="url(#ws-halo)" />
      <path d="M24 150h292" stroke="#8FB4F0" strokeOpacity="0.35" strokeWidth="1.3" />

      {/* 抽象シルエットの人物（顔なし・小さめ） */}
      <g fill="url(#ws-sil)" opacity="0.92">
        <circle cx="52" cy="86" r="12" />
        <path d="M30 122c0-16 10-27 22-27s22 11 22 27Z" />
      </g>

      {/* 散らばったタスク → 整理されたノード列 */}
      <g stroke="#5B87E8" strokeOpacity="0.45" strokeWidth="1.1" fill="none">
        <path d="M80 100C104 100 116 92 132 90" />
        <path d="M78 112C100 120 116 108 134 104" />
        <path d="M150 92h26" />
        <path d="M150 104h22" />
      </g>
      <g fill="url(#ws-node-muted)">
        <circle cx="100" cy="100" r="3.6" />
        <circle cx="100" cy="118" r="3" />
      </g>
      <g fill="url(#ws-node)">
        <circle cx="140" cy="90" r="3.6" />
        <circle cx="138" cy="108" r="3" />
      </g>

      {/* 小さな発光コア */}
      <g>
        <ellipse cx="204" cy="98" rx="46" ry="19" transform="rotate(-16 204 98)" stroke="#5AA9FF" strokeOpacity="0.4" />
        <ellipse cx="204" cy="98" rx="42" ry="16" transform="rotate(20 204 98)" stroke="#5AA9FF" strokeOpacity="0.24" />
        <circle cx="204" cy="98" r="26" fill="#3B82F6" fillOpacity="0.12" filter="url(#ws-soft)" />
        <circle cx="204" cy="98" r="22" fill="#1E3A8A" fillOpacity="0.15" stroke="#9CC6FF" strokeOpacity="0.5" strokeWidth="1" />
        <g stroke="#AFD3FF" strokeOpacity="0.4" strokeWidth="0.8" fill="none">
          <ellipse cx="204" cy="98" rx="22" ry="9" />
          <ellipse cx="204" cy="98" rx="9" ry="22" />
          <ellipse cx="204" cy="98" rx="16" ry="22" />
        </g>
        <path d="M189 88a22 22 0 0 1 22-3" stroke="#EAF4FF" strokeOpacity="0.65" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <circle cx="204" cy="98" r="13" fill="url(#ws-core)" />
        <circle cx="204" cy="97" r="4" fill="#FFFFFF" opacity="0.95" />
        <g>
          {[[204, 76], [226, 90], [226, 108], [204, 120], [182, 108], [182, 90]].map(
            ([cx, cy], i) => (
              <g key={i}>
                <line x1="204" y1="98" x2={cx} y2={cy} stroke="#6FA8FF" strokeOpacity="0.32" strokeWidth="0.8" />
                <circle cx={cx} cy={cy} r="2.6" fill="url(#ws-node)" />
              </g>
            )
          )}
        </g>
      </g>

      {/* 流出コネクター＋整った成果 */}
      <g stroke="#38BDF8" strokeOpacity="0.5" strokeWidth="1.1" fill="none">
        <path d="M238 98C264 98 280 92 300 88" />
        <path d="M238 108C262 118 280 112 298 110" />
      </g>
      <g fill="url(#ws-node)">
        <circle cx="306" cy="86" r="3.4" />
        <circle cx="302" cy="110" r="3" />
      </g>
      <path d="M288 66l4 4 8-9" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <g fill="#7DD3FC">
        <circle cx="150" cy="44" r="1.5" opacity="0.6" />
        <circle cx="286" cy="130" r="1.5" opacity="0.5" />
        <circle cx="120" cy="164" r="1.4" opacity="0.5" />
      </g>
    </svg>
  );
}
