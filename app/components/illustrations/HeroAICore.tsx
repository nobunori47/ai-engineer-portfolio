/**
 * ③ SOLUTION の補助図「業務の中枢」（Phase 2A で再構成。旧：発光する球体＋周回軌道＋粒子）。
 * 左から入る業務（書類・表・メール・チャット）を、中央の中枢が
 * 受付 → 分類 → 検索 → 返信案 の4段で順に処理し、右へ「片付いた仕事・整ったデータ・戻った時間」として出す。
 *
 * - 宇宙・惑星・魔法のコアに見せない：球体・軌道・漂う粒子は使わない
 * - 画像内に文字は入れない（4段の名称は呼び出し側の HTML で併記する）
 * - 完全な装飾。aria-hidden かつ pointer-events-none
 * - 動きは入力→中枢→出力の流れを示す線のみ（prefers-reduced-motion: reduce で停止）
 * - 配色：ネイビー × ゴールド。光は右下から（サイト全体で共通の光源方向）
 */
export default function HeroAICore({ className }: { className?: string }) {
  // 中枢の4段（受付・分類・検索・返信案）
  const stages = [0, 1, 2, 3];
  return (
    <svg
      viewBox="0 0 520 424"
      className={`pointer-events-none ${className ?? ""}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="hac-light" cx="78%" cy="88%" r="70%">
          <stop offset="0%" stopColor="#E8C889" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#E8C889" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hac-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A961" stopOpacity="0" />
          <stop offset="50%" stopColor="#B8955A" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hac-hub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#F3EEE3" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="hac-tile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* 光（装飾） */}
      <rect x="0" y="0" width="520" height="424" fill="url(#hac-light)" />

      {/* ===== コネクター（入力→中枢→出力）＋流れる光 ===== */}
      <g stroke="#7B8AA8" strokeOpacity="0.45" strokeWidth="1.1" fill="none">
        <path d="M96 118 C150 150 180 176 200 196" />
        <path d="M94 207 C140 207 170 207 200 207" />
        <path d="M96 302 C150 270 180 240 200 218" />
        <path d="M320 196 C350 170 390 140 430 116" />
        <path d="M320 207 C360 207 410 210 450 212" />
        <path d="M320 218 C350 246 390 276 430 298" />
      </g>
      <g fill="none" stroke="url(#hac-flow)" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="22 150">
        <path className="hac-flow" d="M96 118 C150 150 180 176 200 196" />
        <path className="hac-flow hac-flow-d1" d="M94 207 C140 207 170 207 200 207" />
        <path className="hac-flow hac-flow-d2" d="M96 302 C150 270 180 240 200 218" />
        <path className="hac-flow hac-flow-d1" d="M320 196 C350 170 390 140 430 116" />
        <path className="hac-flow hac-flow-d3" d="M320 207 C360 207 410 210 450 212" />
        <path className="hac-flow hac-flow-d2" d="M320 218 C350 246 390 276 430 298" />
      </g>

      {/* ===== 左：入ってくる業務 ===== */}
      <g strokeWidth="1.5" stroke="#3A4D75" strokeOpacity="0.85" fill="url(#hac-tile)" strokeLinejoin="round">
        <g transform="translate(44 92)">
          <rect width="46" height="56" rx="7" />
          <path d="M11 16h24M11 27h24M11 38h16" stroke="#4A5A80" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
        </g>
        <g transform="translate(40 184)">
          <rect width="52" height="46" rx="7" />
          <path d="M0 17h52M0 32h52M18 3v40M35 3v40" stroke="#4A5A80" strokeOpacity="0.55" fill="none" />
        </g>
        <g transform="translate(44 282)">
          <rect width="50" height="40" rx="7" />
          <path d="M5 8l20 16 20-16" stroke="#4A5A80" strokeOpacity="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g transform="translate(112 138)">
          <path d="M6 2h34a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H20l-11 8V32H6a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Z" />
          <path d="M12 13h22M12 21h14" stroke="#4A5A80" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* ===== 中央：業務の中枢（4段の処理） ===== */}
      <g>
        <rect x="200" y="128" width="120" height="158" rx="18" fill="url(#hac-hub)" stroke="#B8955A" strokeOpacity="0.7" strokeWidth="1.2" />
        {stages.map((i) => {
          const y = 146 + i * 34;
          const last = i === stages.length - 1;
          return (
            <g key={i}>
              <rect x="216" y={y} width="88" height="24" rx="7" fill={last ? "#1B2A4A" : "#FFFFFF"} stroke="#1B2A4A" strokeOpacity={last ? 1 : 0.18} />
              <circle cx="230" cy={y + 12} r="4" fill={last ? "#E8C889" : "#B8955A"} fillOpacity={last ? 1 : 0.8} />
              <path d={`M242 ${y + 12}h${last ? 48 : 40}`} stroke={last ? "#FAF7F0" : "#1B2A4A"} strokeOpacity={last ? 0.8 : 0.25} strokeWidth="3" strokeLinecap="round" />
              {!last && <path d={`M260 ${y + 25}v8`} stroke="#B8955A" strokeOpacity="0.7" strokeWidth="1.2" />}
            </g>
          );
        })}
      </g>

      {/* ===== 右：片付いた仕事・整ったデータ・戻った時間 ===== */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g transform="translate(430 92)">
          <circle cx="24" cy="24" r="22" fill="#FFFFFF" stroke="#B8955A" strokeOpacity="0.9" strokeWidth="1.5" />
          <path d="M14 25l7 7 13-15" stroke="#1B2A4A" strokeWidth="2.2" />
        </g>
        <g transform="translate(452 190)">
          <rect x="0" y="0" width="46" height="44" rx="7" fill="#FFFFFF" stroke="#3A4D75" strokeOpacity="0.7" strokeWidth="1.4" />
          <path d="M11 33v-11M22 33v-19M33 33v-8" stroke="#B8955A" strokeWidth="2.4" />
        </g>
        <g transform="translate(430 282)">
          <circle cx="24" cy="24" r="22" fill="#FFFFFF" stroke="#3A4D75" strokeOpacity="0.7" strokeWidth="1.5" />
          <path d="M24 12v13l9 5" stroke="#1B2A4A" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );
}
