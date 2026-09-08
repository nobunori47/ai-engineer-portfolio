/**
 * 事例詳細ページの処理フロー表示。
 * サイト既存の「ヒアリング → 設計 → …」ピル表現と同じ言語で統一する。
 * 旧 flow.svg（ダークテーマ＋画像内テキスト）の置き換え。
 * - 文言はすべて HTML。SVG やビットマップに文字を埋め込まない
 * - 単純な順序リストとして読め、キーボード／スクリーンリーダーでも自然
 */
export type FlowStep = { label: string; sub?: string };

export default function CaseFlow({
  steps,
  branches,
  caption,
  className,
}: {
  steps: FlowStep[];
  /** 最終ステップから分岐する場合の並列アウトカム */
  branches?: FlowStep[];
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 sm:p-6">
        <ol className="flex flex-wrap items-stretch gap-2 sm:gap-3">
          {steps.map((step, i) => (
            <li key={step.label} className="flex items-center gap-2 sm:gap-3">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2">
                <span className="block text-sm font-medium">{step.label}</span>
                {step.sub && (
                  <span className="block text-xs text-[var(--color-text-sub)] mt-0.5">
                    {step.sub}
                  </span>
                )}
              </div>
              {(i < steps.length - 1 || branches) && (
                <span
                  aria-hidden="true"
                  className="font-[family-name:var(--font-mono)] text-[var(--color-accent)]"
                >
                  →
                </span>
              )}
            </li>
          ))}

          {branches && (
            <li className="flex flex-col gap-2">
              {branches.map((b) => (
                <div
                  key={b.label}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2"
                >
                  <span className="block text-sm font-medium">{b.label}</span>
                  {b.sub && (
                    <span className="block text-xs text-[var(--color-text-sub)] mt-0.5">
                      {b.sub}
                    </span>
                  )}
                </div>
              ))}
            </li>
          )}
        </ol>
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-[var(--color-text-sub)] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
