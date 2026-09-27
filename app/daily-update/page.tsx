import Link from "next/link";

export const metadata = {
  title: "AIカンパニー日次更新 | ツール概要",
  description:
    "中村信規本人の営業管理表（Googleスプレッドシート）を読み取り専用で参照し、本人専用の業務管理ダッシュボードへ日次で集計・反映する、非公開・単一ユーザー向けのローカルツールの概要です。",
};

export default function DailyUpdateOverviewPage() {
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
            AIカンパニー日次更新
          </h1>
          <p className="mt-6 text-lg text-[var(--color-text-sub)] max-w-2xl leading-relaxed">
            中村信規（本サイト運営者）本人が、自分自身の業務管理ダッシュボードを最新の状態に保つために使っている、非公開・単一ユーザー向けのローカルツールです。
          </p>

          <section className="mt-14 space-y-6 leading-relaxed">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              これは何をするツールですか
            </h2>
            <p>
              中村信規が管理する営業管理表（Googleスプレッドシート）を読み取り、案件への応募数・返信数・受注数を今週・今月の単位で集計して、本人専用の業務管理ダッシュボードへ反映するコマンドラインツールです。あわせて、本人のパソコン内にあるタスク記録などのファイルも読み取り、同じダッシュボードへまとめて反映します。
            </p>
            <p>
              中村信規のパソコン（macOS）上でのみ動作し、原則として1日1回、定時に自動実行されます。手作業での転記や集計をなくし、日々の状況をひと目で確認できるようにすることが目的です。
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
              APIを介して、中村信規のGoogleアカウントがアクセス権を持つ特定の営業管理表スプレッドシートを<strong>読み取り専用</strong>で参照します。要求するGoogleアカウントの権限は、スプレッドシートの閲覧用スコープ（
              <code className="font-[family-name:var(--font-mono)] text-sm bg-[var(--color-bg-card)] px-1.5 py-0.5 rounded break-all">
                https://www.googleapis.com/auth/spreadsheets.readonly
              </code>
              ）1件のみです。スプレッドシートへの書き込み・編集・削除は行いません。
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold pt-4">
              取得したデータの利用目的
            </h2>
            <p>
              読み取ったデータは、本人専用の業務管理ダッシュボードに営業活動の件数（応募・返信・受注）と応募の記録を表示するためだけに利用します。第三者への提供、広告、AIモデルの学習などには利用しません。取得・保存するデータの詳細は
              <Link
                href="/daily-update/privacy"
                className="text-[var(--color-accent)] underline underline-offset-2"
              >
                プライバシーポリシー
              </Link>
              を、利用条件は
              <Link
                href="/daily-update/terms"
                className="text-[var(--color-accent)] underline underline-offset-2"
              >
                利用規約
              </Link>
              をご確認ください。
            </p>

            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold pt-4">
              お問い合わせ
            </h2>
            <p>本ツールに関するお問い合わせは、下記の連絡先までご連絡ください。</p>
            <a
              href="mailto:nobunori47@gmail.com"
              className="inline-block text-[var(--color-accent)] underline underline-offset-2"
            >
              nobunori47@gmail.com
            </a>

            <div className="mt-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 text-sm text-[var(--color-text-sub)] leading-relaxed">
              本ツールはGoogle、Google Workspace、またはそれらの関連サービスが提供・運営する公式サービスではありません。中村信規が個人で開発・運用する非公開ツールです。営業管理表への書き込みを行う別ツール（
              <Link
                href="/sales-sheet-write"
                className="text-[var(--color-accent)] underline underline-offset-2"
              >
                AIカンパニー営業管理表書込み
              </Link>
              ）とは、Googleアカウントの認可・権限を共有しない独立したツールです。
            </div>
          </section>
        </div>
      </article>

      <footer className="px-6 py-8 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between gap-4 text-xs text-[var(--color-text-sub)]">
          <span>© {new Date().getFullYear()} Nobunori Nakamura</span>
          <div className="flex gap-4 font-[family-name:var(--font-mono)]">
            <Link
              href="/daily-update/privacy"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/daily-update/terms"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
