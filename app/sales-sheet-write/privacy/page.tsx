import Link from "next/link";

export const metadata = {
  title: "AIカンパニー営業管理表書込み | プライバシーポリシー",
  description:
    "AIカンパニー営業管理表書込みツールが、Googleユーザーデータをどのように取得・利用・保存・削除するかを説明するプライバシーポリシーです。",
};

export default function SalesSheetWritePrivacyPage() {
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
            Privacy Policy
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold leading-tight">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm text-[var(--color-text-sub)]">
            最終更新日：2026年9月6日
          </p>

          <div className="mt-12 space-y-10 leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                1. このポリシーの対象
              </h2>
              <p>
                本ポリシーは、「AIカンパニー営業管理表書込み」（以下「本ツール」）が、Google
                アカウントの認可を通じて取得・利用するユーザーデータの扱いについて説明するものです。本ツールは、中村信規（本サイト運営者）本人が自分自身の営業活動記録を更新するために使用する、非公開・単一ユーザー向けのローカルコマンドラインツールです。第三者への提供・配布は行っていません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                2. アクセスするGoogleユーザーデータの種類・範囲
              </h2>
              <p>
                本ツールが要求するGoogleアカウントの権限は、Google スプレッドシートの読み取り・作成・編集用スコープ（
                <code className="font-[family-name:var(--font-mono)] text-sm bg-[var(--color-bg-card)] px-1.5 py-0.5 rounded">
                  https://www.googleapis.com/auth/spreadsheets
                </code>
                ）1件のみです。氏名・メールアドレス等のプロフィール情報、Gmail、カレンダー、Google
                ドライブ全体など、スプレッドシート以外のGoogleサービスへのアクセス権は要求していません。
              </p>
              <p className="mt-3">
                このスコープはGoogleアカウント内の任意のスプレッドシートへアクセスできる技術的な権限を含みますが、本ツールのコード実装は、あらかじめコード上で指定した特定1件の営業管理用スプレッドシート（本番用）、またはテスト用に明示指定した1件のスプレッドシートにのみアクセス対象を限定しています（下記4.）。それ以外のスプレッドシートを読み書きする機能は実装していません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                3. 利用目的
              </h2>
              <p>
                クラウドソーシング等での案件応募・クライアントからの返信・受注といった営業活動の進捗を、手作業での二重入力なしに営業管理表へ記録・更新することを唯一の目的としています。取得したデータを本目的以外（統計分析、マーケティング、第三者への提供等）に利用することはありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                4. 読み取り・更新する範囲（対象シートの限定）
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  アクセス先のスプレッドシートIDおよびタブ名は、コード上にハードコードされた値、または明示的に設定したテスト用の値のみが有効です。実行時にコードが検証し、一致しない場合は処理を中断します（設定ミス・取り違えによる意図しないスプレッドシートへのアクセスを防止するためのallowlist方式）。
                </li>
                <li>
                  更新できる列は、営業管理表内の「返信有無」「受注有無」「返信日」「受注日」の4列、または新規行の追加時に限られた項目（期間区分・案件ID/URL・プラットフォーム・応募日・クライアント名・案件ジャンル・案件名）のみです。これら以外の列・シート全体の一括書き換えを行う機能は実装していません。
                </li>
                <li>
                  1回の実行につき、書込みは1件（1セルの更新、または1行の追加）に限定されます。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                5. 認証情報の保存方法
              </h2>
              <p>
                Google
                アカウントの認可によって発行されるOAuthクライアント情報およびリフレッシュトークンは、中村信規個人が使用するmacOS端末のKeychain（macOS標準のパスワード管理機能）にのみ保存します。アプリケーションのコードやリポジトリ、ログファイルには一切保存しません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                6. 記録・ログに関する方針
              </h2>
              <p>
                本ツールの実行結果として画面・ログに出力する情報は、実行モード、成功・失敗の別、日時、更新件数、対象シートの行番号、あらかじめ定義された固定の理由コードに限られます。スプレッドシートのセル内容、案件名、クライアント名、URL、OAuthのクライアントID・クライアントシークレット・リフレッシュトークンなどの秘密情報・識別情報を、ログや外部へ出力することはありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                7. 第三者提供・広告利用・AIモデルの学習利用について
              </h2>
              <p>
                取得したGoogleユーザーデータを、第三者への販売・提供、広告目的での利用、本ツールの目的外の利用、または人間による閲覧を伴わない自動化された手段を含むAIモデル（生成AIを含む）の学習・改善目的での利用に用いることはありません。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                8. 保存期間・削除方法
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  リフレッシュトークンは、上記5.のKeychainに、ユーザー本人が手動で削除するまで保存されます。
                </li>
                <li>
                  本ツールが現在利用しているGoogleアカウントの認可設定（公開ステータス：テスト中・外部ユーザー向け）では、Google側の仕様により、利用の有無にかかわらず、認可（トークン発行）から7日でリフレッシュトークンが自動的に失効します。
                </li>
                <li>
                  Google スプレッドシート本体に書き込まれた内容（応募状況等の記録）は、営業管理表の運用ルールに従って管理され、本ツール自体が独自に別途複製・保存することはありません。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                9. アクセス権の取り消し方法
              </h2>
              <p>
                ユーザー（中村信規）はいつでも、
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-2"
                >
                  Googleアカウントの「サードパーティ アプリとサービス」の設定ページ
                </a>
                から本ツールへのアクセス権を取り消すことができます。あわせて、macOSのKeychain
                Access（キーチェーンアクセス）アプリから、本ツールに関連する認証情報の項目を削除することで、ローカルに保存された情報も削除できます。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                10. Google API サービス ユーザーデータ ポリシーへの準拠
              </h2>
              <p>
                本ツールによるGoogle
                APIから取得した情報の利用は、限定使用の要件を含む
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-2"
                >
                  Google API サービス ユーザーデータ ポリシー
                </a>
                を遵守します。
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3">
                11. お問い合わせ
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
                12. 改定について
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
