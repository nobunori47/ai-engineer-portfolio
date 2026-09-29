/**
 * ③→④ THE GATE（CEO-1：案A「静止したガラス扉」＋ 案B「夜明けの地平線」）。
 * - CSS のみ（.gate / .gate-beam / .gate-horizon）。スクロール連動・JS・アニメーションなし
 * - 扉は少し開いた静止状態で、隙間から差す朝の光が④の縦の光へ続く。動きがなくても意味が伝わる
 * - 完全な装飾のため読み上げ対象外
 */
export default function FlagshipGate() {
  return (
    <div aria-hidden="true" className="gate">
      <span className="gate-beam" />
      <span className="gate-horizon" />
    </div>
  );
}
