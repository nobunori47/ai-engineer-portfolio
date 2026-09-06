import Link from "next/link";

export const metadata = {
  title: "AIカンパニー営業管理表書込み | 利用規約",
  description:
    "AIカンパニー営業管理表書込みツールの利用条件を定める利用規約です。",
};

export default function SalesSheetWriteTermsPage() {
  return (
    <main className="flex flex-col min-h-full">
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/sales-sheet-write"
            className="text-sm text-[var(--color-text-sub)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← AIカンパニー営業管理表書込み
          </Link>
        </div>
      </header>

      <article className="flex-1 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] mb-4">
            Terms of Use
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold leading-tight">
            利用規約
          </h1>
          <p className="mt-4 text-sm text-[var(--color-text-sub)]">
            適用日：2026年9月6日
          </p>

          <div className="mt-12 space-y-10 leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                1. 本規約の対象
              </h2>
              <p>
                本規約は、「AIカンパニー営業管理表書込み」（以下「本ツール」）の利用条件を定めるものです。本ツールは、管理者本人（中村信規）が自身の営業活動記録をGoogle
                スプレッドシートへ反映するために使用する、非公開・単一ユーザー向けのローカルツールです。不特定多数へ提供するサービスではありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                2. 利用者・利用範囲
              </h2>
              <p>
                本ツールの利用者は管理者本人のみです。利用者は、自身に正当な権限のあるGoogleアカウント、および自身がアクセス権を持つ対象スプレッドシートのみを用いて本ツールを利用するものとします。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                3. 実行時の注意事項
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  誤操作や書込みの競合を避けるため、本ツールの実行中は、人間・別端末・他ツールから対象シートを同時に編集しないものとします。
                </li>
                <li>
                  本番データへの書込みを行う前には、書込みを伴わない事前確認（dry-run）を実行し、実行後には対象セル・対象行の内容を確認するものとします。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                4. 外部サービスへの依存
              </h2>
              <p>
                本ツールはGoogle
                Sheets・Google認可（OAuth）等の外部サービスに依存しています。これらの外部サービスの停止、仕様変更、提供終了等により、本ツールの一部または全部が利用できなくなる可能性があります。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                5. アクセス権の取消・利用停止
              </h2>
              <p>
                利用者は、いつでもGoogleアカウントの設定から本ツールへのアクセス権を取り消すことができます。取り消し方法の詳細は
                <Link
                  href="/sales-sheet-write/privacy"
                  className="text-[var(--color-accent)] underline underline-offset-2"
                >
                  プライバシーポリシー
                </Link>
                をご確認ください。アクセス権が取り消された場合、本ツールはGoogle
                スプレッドシートへアクセスできなくなり、利用を継続できません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                6. プライバシーポリシー
              </h2>
              <p>
                本ツールが取得・利用するGoogleユーザーデータの取り扱いについては、
                <Link
                  href="/sales-sheet-write/privacy"
                  className="text-[var(--color-accent)] underline underline-offset-2"
                >
                  プライバシーポリシー
                </Link>
                に定めるとおりとします。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                7. Google公式サービスではないこと
              </h2>
              <p>
                本ツールはGoogle、Google
                Workspace、またはそれらの関連サービスが提供・運営する公式サービスではありません。中村信規が個人で開発・運用する非公開ツールです。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                8. お問い合わせ
              </h2>
              <p>
                本規約に関するお問い合わせは、下記の連絡先までご連絡ください。
              </p>
              <a
                href="mailto:nobunori47@gmail.com"
                className="mt-3 inline-block text-[var(--color-accent)] underline underline-offset-2"
              >
                nobunori47@gmail.com
              </a>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                9. 改定について
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
          <Link
            href="/sales-sheet-write"
            className="hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-mono)]"
          >
            ← Tool Overview
          </Link>
        </div>
      </footer>
    </main>
  );
}
