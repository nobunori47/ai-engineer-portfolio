import Link from "next/link";

export const metadata = {
  title: "AIカンパニー日次更新 | 利用規約",
  description: "AIカンパニー日次更新ツールの利用条件を定める利用規約です。",
};

const linkClass = "text-[var(--color-accent)] underline underline-offset-2";

export default function DailyUpdateTermsPage() {
  return (
    <main className="flex flex-col min-h-full">
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/daily-update"
            className="text-sm text-[var(--color-text-sub)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← AIカンパニー日次更新
          </Link>
        </div>
      </header>

      <article className="flex-1 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] mb-4">
            Terms of Service
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold leading-tight">
            利用規約
          </h1>
          <p className="mt-4 text-sm text-[var(--color-text-sub)]">
            適用日：2026年9月28日
          </p>

          <div className="mt-12 space-y-10 leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                1. 本規約の対象
              </h2>
              <p>
                本規約は、「AIカンパニー日次更新」（以下「本ツール」）の利用条件を定めるものです。本ツールは、管理者本人（中村信規）が自身の営業管理表（Google
                スプレッドシート）を読み取り、本人専用の業務管理ダッシュボードへ日次で反映するために使用する、非公開・単一ユーザー向けのローカルツールです。不特定多数へ提供するサービスではありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                2. 利用者・利用目的
              </h2>
              <p>
                本ツールの利用者は管理者本人のみです。本ツールは、営業活動の件数と応募の記録を業務管理ダッシュボードへ反映する目的にのみ利用します。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                3. 利用条件
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  利用者は、自身に正当な権限のあるGoogleアカウント、および自身がアクセス権を持つ対象スプレッドシートのみを用いて本ツールを利用するものとします。
                </li>
                <li>
                  本ツールがGoogleアカウントに要求する権限は、スプレッドシートの閲覧用（読み取り専用）スコープのみです。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                4. 禁止事項
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>自身がアクセス権を持たないGoogleアカウント・スプレッドシートを対象として利用すること</li>
                <li>本ツールを第三者に提供・配布し、または第三者のデータの取得に利用すること</li>
                <li>
                  取得したデータを、
                  <Link href="/daily-update/privacy" className={linkClass}>
                    プライバシーポリシー
                  </Link>
                  に定める目的以外に利用すること
                </li>
                <li>Googleの利用規約その他の関連する規約・ポリシーに違反する方法で利用すること</li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                5. Googleサービスとの関係
              </h2>
              <p>
                本ツールはGoogle Sheets APIを利用していますが、Google、Google
                Workspace、またはそれらの関連サービスが提供・運営・保証する公式サービスではありません。Googleのサービスの利用には、Googleが定める利用規約・ポリシーが適用されます。Googleのサービスの仕様変更・停止等により、本ツールが動作しなくなる場合があります。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                6. 保証・免責
              </h2>
              <p>
                本ツールは現状有姿で提供され、集計結果の正確性・完全性、継続的な動作を保証するものではありません。本ツールの利用または利用できないことによって生じた結果について、法令上認められる範囲で、運営者は責任を負わないものとします。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                7. 本ツールの変更・停止
              </h2>
              <p>
                運営者は、事前の告知なく本ツールの内容を変更し、または提供・運用を一時停止もしくは終了することがあります。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                8. プライバシーポリシーとの関係
              </h2>
              <p>
                本ツールにおけるGoogleユーザーデータの取得・利用・保存・削除の扱いは、
                <Link href="/daily-update/privacy" className={linkClass}>
                  プライバシーポリシー
                </Link>
                に定めます。本規約とプライバシーポリシーの内容が異なる場合、データの扱いについてはプライバシーポリシーが優先します。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                9. お問い合わせ
              </h2>
              <p>本規約および本ツールに関するお問い合わせは、下記の連絡先までご連絡ください。</p>
              <a
                href="mailto:nobunori47@gmail.com"
                className="mt-3 inline-block text-[var(--color-accent)] underline underline-offset-2"
              >
                nobunori47@gmail.com
              </a>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                10. 改定について
              </h2>
              <p>
                本規約の内容を変更する場合は、本ページの内容を更新し、ページ上部の適用日を改めます。
              </p>
            </section>
          </div>
        </div>
      </article>

      <footer className="px-6 py-8 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--color-text-sub)]">
          <span>© {new Date().getFullYear()} Nobunori Nakamura</span>
          <div className="flex gap-4 font-[family-name:var(--font-mono)]">
            <Link
              href="/daily-update"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              ← Tool Overview
            </Link>
            <Link
              href="/daily-update/privacy"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
