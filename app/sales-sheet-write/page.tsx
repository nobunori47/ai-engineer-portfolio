import Link from "next/link";

export const metadata = {
  title: "AIカンパニー営業管理表書込み | ツール概要",
  description:
    "中村信規本人が管理する営業活動記録（Googleスプレッドシート）を更新するための、非公開・単一ユーザー向けのローカルツールの概要です。",
};

export default function SalesSheetWriteOverviewPage() {
  return (
    <main className="flex flex-col min-h-full">
      <header className="border-b border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/"
            className="text-sm text-[var(--color-text-sub)] hover:text-[var(--color-accent)] transition-colors"
          >
            ← Home
          </Link>
        </div>
      </header>

      <article className="flex-1 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)] mb-4">
            Tool Overview
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-bold leading-tight">
            AIカンパニー営業管理表書込み
          </h1>
          <p className="mt-6 text-lg text-[var(--color-text-sub)] max-w-2xl leading-relaxed">
            中村信規（本サイト運営者）本人が、自分自身の営業活動記録を更新するために使っている、非公開・単一ユーザー向けのローカルツールです。
          </p>

          <section className="mt-14 space-y-6 leading-relaxed">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              これは何をするツールですか
            </h2>
            <p>
              クラウドソーシング等での案件応募・返信・受注といった営業活動の進捗を、中村信規が管理するGoogle
              スプレッドシート上の営業管理表へ記録・更新するためのコマンドラインツールです。中村信規のパソコン上でのみ動作し、記録先はあらかじめコード上で指定された特定のスプレッドシートに限定されています。
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold pt-4">
              誰が使うツールですか
            </h2>
            <p>
              利用者は中村信規本人のみです。不特定多数のユーザーや他社・他者へ提供するサービスではなく、外部からのアカウント登録や利用申し込みも受け付けていません。
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold pt-4">
              Googleアカウントとの関わり
            </h2>
            <p>
              本ツールはGoogle Sheets
              APIを介して、中村信規のGoogleアカウントが所有・アクセス権を持つ特定の営業管理表スプレッドシートへ読み書きを行います。アクセス範囲・保存方法などの詳細は
              <Link
                href="/sales-sheet-write/privacy"
                className="text-[var(--color-accent)] underline underline-offset-2"
              >
                プライバシーポリシー
              </Link>
              を、利用条件の詳細は
              <Link
                href="/sales-sheet-write/terms"
                className="text-[var(--color-accent)] underline underline-offset-2"
              >
                利用規約
              </Link>
              をご確認ください。
            </p>

            <div className="mt-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-sm text-[var(--color-text-sub)] leading-relaxed">
              本ツールはGoogle、Google Workspace、またはそれらの関連サービスが提供・運営する公式サービスではありません。中村信規が個人で開発・運用する非公開ツールです。
            </div>
          </section>
        </div>
      </article>

      <footer className="px-6 py-8 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between gap-4 text-xs text-[var(--color-text-sub)]">
          <span>© {new Date().getFullYear()} Nobunori Nakamura</span>
          <div className="flex gap-4 font-[family-name:var(--font-mono)]">
            <Link
              href="/sales-sheet-write/privacy"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/sales-sheet-write/terms"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
