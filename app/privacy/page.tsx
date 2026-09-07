import Link from "next/link";

export const metadata = {
  title: "Nobunori Nakamura Portfolio | プライバシーポリシー",
  description:
    "本ポートフォリオサイトの問い合わせフォームで取得する情報の取り扱いについて説明するプライバシーポリシーです。",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold leading-tight">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm text-[var(--color-text-sub)]">
            最終更新日：2026年9月7日
          </p>

          <div className="mt-12 space-y-10 leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                1. このポリシーの対象
              </h2>
              <p>
                本ポリシーは、本ポートフォリオサイト（
                <span className="font-[family-name:var(--font-mono)] text-sm">
                  ai-engineer-portfolio-dun.vercel.app
                </span>
                、以下「本サイト」）のトップページに設置している問い合わせフォームで取得する情報の取り扱いについて説明するものです。運営者は中村信規（本サイト運営者）です。
              </p>
              <p className="mt-3 text-sm text-[var(--color-text-sub)]">
                本サイト内の「AIカンパニー営業管理表書込み」（
                <span className="font-[family-name:var(--font-mono)]">/sales-sheet-write</span>
                ）配下のページに掲載している別のプライバシーポリシーは、そのツール固有のGoogleユーザーデータの取り扱いについて説明するものであり、本ポリシーとは対象が異なります。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                2. 取得する情報
              </h2>
              <p>問い合わせフォームの送信時に、以下の情報を取得します。</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>お名前（必須）</li>
                <li>会社名（任意）</li>
                <li>返信先メールアドレス（必須）</li>
                <li>相談内容の種類（必須・選択式）</li>
                <li>現在お困りのこと（任意）</li>
                <li>ご相談内容（必須）</li>
                <li>希望時期・予算感（いずれも任意）</li>
                <li>プライバシーポリシーへの同意の有無、および同意した日時</li>
                <li>
                  Works詳細ページ経由でお問い合わせいただいた場合、参照元の事例名（自動的に本文へ記載されます）
                </li>
              </ul>
              <p className="mt-3 text-sm text-[var(--color-text-sub)]">
                なお、スパム対策（簡易レート制限）のため、送信元のIPアドレスをサーバー上で一時的に処理に利用しますが、データベースへ保存することはありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                3. 利用目的
              </h2>
              <p>
                取得した情報は、お問い合わせ内容の確認およびご返信のためにのみ利用します。マーケティング目的での第三者提供や、本目的以外での利用は行いません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                4. 保存先・アクセス制限
              </h2>
              <p>
                取得した情報はSupabase（データベースサービス）上に保存します。データベースへの書き込みはサーバー側の処理からのみ行い、サーバー専用の認証情報（サービスロールキー）はクライアント（ブラウザ）側のコードには一切含めていません。
              </p>
              <p className="mt-3">
                また、匿名の利用者や一般公開されたAPIキーから問い合わせデータを閲覧・一覧取得できない構成としており、保存された内容を確認できるのは運営者（中村信規）本人に限られます。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                5. 通知
              </h2>
              <p>
                新しいお問い合わせがあったことを運営者本人が把握するため、Slack（チャットツール）へ内容を通知する場合があります。この通知は運営者本人が確認するためのものであり、通知に失敗した場合でも、お問い合わせ内容はデータベースに保存されます。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                6. 保存期間・削除依頼
              </h2>
              <p>
                お問い合わせ内容は、対応の記録として一定期間保存します。保存期間について明確な自動削除の仕組みは現時点で設けていません。ご自身の情報の削除をご希望の場合は、下記の連絡先までご連絡ください。確認の上、対応いたします。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                7. 第三者提供
              </h2>
              <p>
                法令に基づく場合を除き、取得した情報を本人の同意なく第三者へ提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                8. お問い合わせ
              </h2>
              <p>
                本ポリシーおよび取得した情報の取り扱いに関するお問い合わせ・削除依頼は、下記の連絡先までご連絡ください。
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
                本ポリシーの内容を変更する場合は、本ページの内容を更新し、ページ上部の最終更新日を改めます。
              </p>
            </section>
          </div>
        </div>
      </article>

      <footer className="px-6 py-8 border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs text-[var(--color-text-sub)]">
          <span>© {new Date().getFullYear()} Nobunori Nakamura</span>
          <Link href="/#contact" className="hover:text-[var(--color-accent)] transition-colors font-[family-name:var(--font-mono)]">
            ← Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
