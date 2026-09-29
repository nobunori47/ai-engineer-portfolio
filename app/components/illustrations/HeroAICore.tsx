/**
 * ③ SOLUTION の補助図（AIコア＋業務フロー）。2026-09 刷新で Hero から移設。
 * 左から入る業務データ（書類・表・メール・チャットの抽象）が中央の発光する
 * AIコアで整理・分類・自動処理され、右へ「片付いたタスク・整ったデータ・時計」
 * として出ていく——「複雑な業務がAIで整理され、時間が戻る」を一目で表す。
 *
 * - 完全な装飾。意味は隣接する見出し・本文・アイコンが担うため aria-hidden かつ pointer-events-none
 * - 画像内に文字は入れない
 * - 動きは軽微（光の流れ／コアのごく弱い呼吸／粒子のゆっくりした移動）。
 *   prefers-reduced-motion: reduce では globals.css のルールで停止する
 * - 配色: ネイビー × ゴールド（刷新デザインのトークンに合わせた固定色）。アイボリーの面へ自然になじむ
 */
export default function HeroAICore({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 424"
      className={`pointer-events-none ${className ?? ""}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {/* 背景へにじむ大きなグロー */}
        <radialGradient id="hac-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2B3F6B" stopOpacity="0.30" />
          <stop offset="42%" stopColor="#1B2A4A" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hac-halo-cyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A961" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
        </radialGradient>
        {/* コア本体（半透明・立体感） */}
        <radialGradient id="hac-core" cx="38%" cy="32%" r="78%">
          <stop offset="0%" stopColor="#E9DDBF" stopOpacity="0.55" />
          <stop offset="46%" stopColor="#3A5080" stopOpacity="0.38" />
          <stop offset="82%" stopColor="#1B2A4A" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#0B1630" stopOpacity="0.42" />
        </radialGradient>
        {/* コアの核 */}
        <radialGradient id="hac-nucleus" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="24%" stopColor="#FBF5E6" />
          <stop offset="52%" stopColor="#D9BE84" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#2B3F6B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hac-node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FBF3DE" />
          <stop offset="55%" stopColor="#C9A961" />
          <stop offset="100%" stopColor="#1B2A4A" />
        </radialGradient>
        <radialGradient id="hac-node-purple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3EEE3" />
          <stop offset="60%" stopColor="#8A96B3" />
          <stop offset="100%" stopColor="#4A5A80" />
        </radialGradient>
        {/* コネクターを流れる光 */}
        <linearGradient id="hac-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C9A961" stopOpacity="0" />
          <stop offset="50%" stopColor="#D9BE84" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hac-tile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4A" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#1B2A4A" stopOpacity="0.07" />
        </linearGradient>
        <filter id="hac-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="hac-blur-lg" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
      </defs>

      {/* ===== 背景グロー（白ページへにじむ） ===== */}
      <ellipse cx="272" cy="210" rx="272" ry="204" fill="url(#hac-halo)" />
      <ellipse cx="404" cy="278" rx="164" ry="132" fill="url(#hac-halo-cyan)" />
      <circle cx="286" cy="212" r="92" fill="#1B2A4A" opacity="0.18" filter="url(#hac-blur-lg)" />

      {/* ===== コネクター（入力→コア→出力）＋流れる光 ===== */}
      <g stroke="#7B8AA8" strokeOpacity="0.4" strokeWidth="1.1" fill="none">
        <path d="M96 118 C160 150 210 176 250 200" />
        <path d="M84 210 C150 210 196 210 244 210" />
        <path d="M96 306 C160 274 212 246 250 224" />
        <path d="M322 200 C360 178 402 150 446 120" />
        <path d="M330 212 C380 212 420 214 458 214" />
        <path d="M322 224 C360 250 402 280 442 300" />
      </g>
      <g
        fill="none"
        stroke="url(#hac-flow)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="22 150"
      >
        <path className="hac-flow" d="M96 118 C160 150 210 176 250 200" />
        <path className="hac-flow hac-flow-d1" d="M84 210 C150 210 196 210 244 210" />
        <path className="hac-flow hac-flow-d2" d="M96 306 C160 274 212 246 250 224" />
        <path className="hac-flow hac-flow-d1" d="M322 200 C360 178 402 150 446 120" />
        <path className="hac-flow hac-flow-d3" d="M330 212 C380 212 420 214 458 214" />
        <path className="hac-flow hac-flow-d2" d="M322 224 C360 250 402 280 442 300" />
      </g>

      {/* ===== 左：業務データ（抽象化） ===== */}
      <g strokeWidth="1.5" stroke="#3A4D75" strokeOpacity="0.9" fill="url(#hac-tile)" strokeLinejoin="round">
        {/* 書類 */}
        <g transform="translate(44 92)">
          <rect width="46" height="56" rx="7" />
          <path d="M11 16h24M11 27h24M11 38h16" stroke="#4A5A80" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
        </g>
        {/* 表 */}
        <g transform="translate(40 184)">
          <rect width="52" height="46" rx="7" />
          <path d="M0 17h52M0 32h52M18 3v40M35 3v40" stroke="#4A5A80" strokeOpacity="0.55" fill="none" />
        </g>
        {/* メール */}
        <g transform="translate(44 282)">
          <rect width="50" height="40" rx="7" />
          <path d="M5 8l20 16 20-16" stroke="#4A5A80" strokeOpacity="0.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {/* チャット */}
        <g transform="translate(112 138)">
          <path d="M6 2h34a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H20l-11 8V32H6a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Z" />
          <path d="M12 13h22M12 21h14" stroke="#4A5A80" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* ===== 中央：AIコア ===== */}
      <g>
        {/* 周回リング（傾き違いの3本） */}
        <g stroke="#B8955A" fill="none">
          <ellipse cx="286" cy="212" rx="108" ry="44" transform="rotate(-20 286 212)" strokeOpacity="0.45" />
          <ellipse cx="286" cy="212" rx="100" ry="38" transform="rotate(26 286 212)" strokeOpacity="0.28" />
          <ellipse cx="286" cy="212" rx="84" ry="84" strokeOpacity="0.18" strokeDasharray="2 6" />
        </g>
        {/* 周回ノード */}
        <g className="hac-orbit">
          <circle className="hac-orbit-a" cx="394" cy="212" r="4.5" fill="url(#hac-node)" />
        </g>
        <g className="hac-orbit hac-orbit-rev">
          <circle className="hac-orbit-b" cx="184" cy="212" r="3.6" fill="url(#hac-node-purple)" />
        </g>

        {/* コア本体（多層・半透明・立体） */}
        <circle cx="286" cy="212" r="72" fill="#2B3F6B" opacity="0.16" filter="url(#hac-blur-lg)" />
        <g className="hac-breathe">
          {/* 透過する球体 */}
          <circle cx="286" cy="212" r="52" fill="url(#hac-core)" />
          <circle cx="286" cy="212" r="52" fill="none" stroke="#DCC9A0" strokeOpacity="0.55" strokeWidth="1" />
          {/* 経線・緯線（構造をもった“設計された”核であることを示す） */}
          <g fill="none" stroke="#DCC9A0" strokeOpacity="0.4" strokeWidth="0.9">
            <ellipse cx="286" cy="212" rx="52" ry="20" />
            <ellipse cx="286" cy="212" rx="20" ry="52" />
            <ellipse cx="286" cy="212" rx="38" ry="52" />
          </g>
          {/* 六角ワイヤーフレーム */}
          <path
            d="M286 168l38 22v44l-38 22-38-22v-44z"
            fill="none"
            stroke="#EFE4CC"
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* 上部ハイライト */}
          <path
            d="M258 178a52 52 0 0 1 52-6"
            stroke="#FFFFFF"
            strokeOpacity="0.75"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          {/* 発光する核 */}
          <circle cx="286" cy="212" r="34" fill="url(#hac-nucleus)" />
          <circle cx="286" cy="212" r="30" fill="url(#hac-nucleus)" filter="url(#hac-soft)" />
          <circle cx="286" cy="211" r="9" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* コアに接続するノード群 */}
        <g>
          {[
            [286, 146],
            [345, 172],
            [352, 234],
            [316, 276],
            [256, 276],
            [220, 234],
            [227, 172],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <line
                x1="286"
                y1="212"
                x2={cx}
                y2={cy}
                stroke="#9AA6C0"
                strokeOpacity="0.4"
                strokeWidth="1"
              />
              <circle cx={cx} cy={cy} r={i % 3 === 0 ? 5 : 3.6} fill="url(#hac-node)" />
              <circle
                cx={cx}
                cy={cy}
                r={i % 3 === 0 ? 5 : 3.6}
                fill="none"
                stroke="#F3EEE3"
                strokeOpacity="0.5"
                strokeWidth="0.8"
              />
            </g>
          ))}
        </g>
      </g>

      {/* ===== 右：成果（片付いたタスク・整ったデータ・時計） ===== */}
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* チェック済みバッジ */}
        <g transform="translate(430 92)">
          <circle cx="24" cy="24" r="22" fill="#C9A961" fillOpacity="0.12" stroke="#C9A961" strokeOpacity="0.85" strokeWidth="1.6" />
          <path d="M14 25l7 7 13-15" stroke="#C9A961" strokeWidth="2.4" />
        </g>
        {/* 整ったデータ（棒グラフ） */}
        <g transform="translate(452 190)">
          <rect x="0" y="0" width="46" height="44" rx="7" fill="#1B2A4A" fillOpacity="0.10" stroke="#2B3F6B" strokeOpacity="0.7" strokeWidth="1.4" />
          <path d="M11 33v-11M22 33v-19M33 33v-8" stroke="#C9A961" strokeWidth="2.4" />
        </g>
        {/* 時計（時間が戻る） */}
        <g transform="translate(430 282)">
          <circle cx="24" cy="24" r="22" fill="#4A5A80" fillOpacity="0.10" stroke="#8A96B3" strokeOpacity="0.8" strokeWidth="1.6" />
          <path d="M24 12v13l9 5" stroke="#8A96B3" strokeWidth="2.2" />
        </g>
      </g>

      {/* ===== 粒子 ===== */}
      <g fill="#D9BE84">
        <circle className="hac-drift" cx="150" cy="70" r="1.7" opacity="0.7" />
        <circle className="hac-drift hac-drift-d1" cx="360" cy="60" r="2.1" opacity="0.6" />
        <circle className="hac-drift hac-drift-d2" cx="470" cy="150" r="1.6" opacity="0.55" />
        <circle className="hac-drift hac-drift-d1" cx="120" cy="352" r="2" opacity="0.5" />
        <circle className="hac-drift hac-drift-d3" cx="326" cy="352" r="1.7" opacity="0.6" />
        <circle className="hac-drift hac-drift-d2" cx="250" cy="120" r="1.5" opacity="0.7" />
        <circle className="hac-drift hac-drift-d3" cx="196" cy="300" r="1.6" opacity="0.5" />
      </g>
    </svg>
  );
}
