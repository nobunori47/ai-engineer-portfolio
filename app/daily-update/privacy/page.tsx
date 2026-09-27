import Link from "next/link";

export const metadata = {
  title: "AIカンパニー日次更新 | プライバシーポリシー",
  description:
    "AIカンパニー日次更新ツールが、Googleユーザーデータをどのように取得・利用・保存・削除するかを説明するプライバシーポリシーです。",
};

const codeClass =
  "font-[family-name:var(--font-mono)] text-sm bg-[var(--color-bg-card)] px-1.5 py-0.5 rounded break-all";
const linkClass = "text-[var(--color-accent)] underline underline-offset-2";

export default function DailyUpdatePrivacyPage() {
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
            Privacy Policy
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold leading-tight">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm text-[var(--color-text-sub)]">
            最終更新日：2026年9月28日
          </p>

          <div className="mt-12 space-y-10 leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                1. このポリシーの対象
              </h2>
              <p>
                本ポリシーは、「AIカンパニー日次更新」（以下「本ツール」）が、Googleアカウントの認可を通じて取得・利用するユーザーデータの扱いについて説明するものです。本ツールは、中村信規（本サイト運営者）本人が自分自身の業務管理ダッシュボードを更新するために使用する、非公開・単一ユーザー向けのローカルコマンドラインツールです。第三者への提供・配布は行っていません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                2. アクセスするGoogleユーザーデータ
              </h2>
              <p>
                本ツールが要求するGoogleアカウントの権限は、Google スプレッドシートの閲覧用スコープ（
                <code className={codeClass}>https://www.googleapis.com/auth/spreadsheets.readonly</code>
                ）1件のみです。氏名・メールアドレス等のプロフィール情報、Gmail、カレンダー、Google
                ドライブなど、スプレッドシート以外のGoogleサービスへのアクセス権は要求していません。
              </p>
              <p className="mt-3">
                このスコープはGoogleアカウントが閲覧できるスプレッドシートを読み取れる技術的な権限を含みますが、本ツールが読み取るのは、設定で指定した1件の営業管理表スプレッドシートの、指定した1つのタブ（A列〜AL列の範囲）のみです。そのうち処理に使用するのは、次の列の値です。
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>期間区分、応募日、返信の有無、返信日、受注の有無、受注日（件数の集計に使用）</li>
                <li>クライアント名、案件ジャンル（応募の記録の表示に使用）</li>
                <li>
                  案件ID／URL、プラットフォーム、案件名（同じ応募を二重に記録しないための識別値の計算にのみ使用）
                </li>
              </ul>
              <p className="mt-3">
                取得範囲に含まれるその他の列の値は、処理に使用せず、保存もしません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                3. 利用目的
              </h2>
              <p>
                営業活動の状況（案件への応募・返信・受注の件数、および応募の記録）を、中村信規本人専用の業務管理ダッシュボードに表示することを唯一の目的としています。取得したデータを本目的以外（マーケティング、広告、第三者への提供等）に利用することはありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                4. 保存する情報
              </h2>
              <p>
                スプレッドシートから読み取ったデータのうち、次の情報のみを、中村信規本人専用の業務管理ダッシュボードのデータベースに保存します。
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>今週・今月ごとの応募数・返信数・受注数（集計した件数）</li>
                <li>
                  返信・受注の日付が未記入のため集計できなかった行の件数（件数のみ）
                </li>
                <li>
                  応募1件ごとの記録：応募日、クライアント名、案件ジャンル、および二重記録を防ぐための識別値（案件ID／URL等から計算した、元の値に戻せない形式のハッシュ値）
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                5. 保存しない情報
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>スプレッドシート全体や、行・シートの複製</li>
                <li>
                  案件ID／URL、プラットフォーム、案件名の元の値（上記の識別値の計算にのみ使用し、値そのものは保存しません）
                </li>
                <li>個々の行の返信・受注の有無や日付（件数の集計にのみ使用します）</li>
                <li>上記2.で使用する列以外の列の値</li>
                <li>
                  本ツールの実行ログには、スプレッドシートのセル内容を記録しません（記録するのは、日時・成功／失敗の別・件数・あらかじめ定めた理由コードのみです）
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                6. Google スプレッドシートへの書き込みについて
              </h2>
              <p>
                本ツールはスプレッドシートの値を読み取る処理のみを実装しており、スプレッドシートへの書き込み・編集・削除を行う処理はありません。また、要求する権限自体が閲覧用（読み取り専用）のスコープに限られています。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                7. 第三者提供・外部サービスへの送信について
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  取得したGoogleユーザーデータを、第三者へ販売・提供することはありません。広告目的（広告のパーソナライズ、リターゲティング等）で利用することもありません。
                </li>
                <li>
                  保存先のデータベースにはSupabaseを、ダッシュボードの表示にはVercelを、本ツール運用のための基盤（ホスティング）として利用しています。これらは上記3.の目的のためにのみ利用し、それ以外の第三者へデータを送信することはありません。
                </li>
                <li>
                  現在の実装では、取得したGoogleユーザーデータを生成AI・大規模言語モデル（LLM）等の外部AIサービスへ送信する処理は、本ツールおよびダッシュボードのいずれにもありません。この点を変更する場合は、変更前に本ポリシーを改定します。
                </li>
                <li>
                  本ツールの運用上、中村信規本人以外の人が取得したGoogleユーザーデータを閲覧する仕組みはありません。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                8. Google API サービス ユーザーデータ ポリシーへの準拠
              </h2>
              <p>
                本ツールによる、Google APIから受け取った情報の利用、および他のアプリへの転送は、限定使用（Limited
                Use）の要件を含む
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Google API サービス ユーザーデータ ポリシー
                </a>
                を遵守します。
              </p>
              <p className="mt-3 text-sm text-[var(--color-text-sub)]">
                AIカンパニー日次更新&apos;s use and transfer to any other app of information received
                from Google APIs will adhere to the Google API Services User Data Policy, including the
                Limited Use requirements.
              </p>
              <p className="mt-3">
                これに従い、取得したデータは上記3.の目的を提供するためにのみ利用し、広告目的での利用・販売は行わず、Google
                Workspace APIを通じて取得したデータを汎用的なAI・機械学習モデルの開発・改善・学習に利用することもありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                9. データの保持期間
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  データベースに保存した件数・応募の記録は、中村信規本人が削除するまで保持します。現時点で、一定期間後に自動的に削除する仕組みはありません。同じ期間・同じ応募の情報は、日次の実行時に上書き更新されます。
                </li>
                <li>
                  本ツールの実行ログ（セル内容を含みません）は、30日を過ぎたものを実行時に自動的に削除します。
                </li>
                <li>
                  Googleアカウントの認可で発行されるリフレッシュトークンは、下記10.のKeychainに、本人が削除するかアクセス権を取り消すまで保存されます。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                10. セキュリティ
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  OAuthクライアント情報およびリフレッシュトークンは、中村信規個人が使用するmacOS端末のKeychain（macOS標準のパスワード管理機能）にのみ保存し、コード・リポジトリ・ログファイルには保存しません。
                </li>
                <li>
                  Google APIおよびデータベースとの通信は、HTTPSで暗号化されています。
                </li>
                <li>
                  データベースの内容は、中村信規本人のアカウントでログインした場合にのみ閲覧できるようアクセスを制限しています。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                11. アクセス権の取り消し・データの削除
              </h2>
              <p>
                ユーザー（中村信規）はいつでも、
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Googleアカウントの「サードパーティ アプリとサービス」の設定ページ
                </a>
                から本ツールへのアクセス権を取り消すことができます。取り消し後、本ツールはスプレッドシートを読み取れなくなります。あわせて、macOSのKeychain
                Access（キーチェーンアクセス）アプリから本ツールに関連する認証情報の項目を削除することで、ローカルに保存された情報も削除できます。データベースに保存した情報の削除を希望する場合は、下記の連絡先までご連絡ください。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                12. お問い合わせ
              </h2>
              <p>
                本ポリシーおよび本ツールに関するお問い合わせは、下記の連絡先までご連絡ください。
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
                13. 改定について
              </h2>
              <p>
                本ポリシーの内容を変更する場合は、本ページの内容を更新し、ページ上部の最終更新日を改めます。取得するデータの範囲や利用目的を変更する場合は、変更前に本ページへ反映します。
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
