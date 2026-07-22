import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Privacy Policy</p>
        <h1>プライバシーポリシー</h1>
        <p className="lead">
          Honkumiにおけるユーザー情報の取り扱いについて説明します。
        </p>
      </section>

      <section className="card">
        <h2>取得する情報</h2>
        <p>
          Honkumiは、アプリの機能提供、改善、不具合対応のために必要な範囲で情報を取り扱う場合があります。
        </p>
        <p>
          原稿本文や作品データについては、アプリの仕様に従い、ユーザーの端末内で管理されます。
        </p>
      </section>

      <section className="card">
        <h2>広告配信について</h2>
        <p>
          本アプリでは、広告配信のためにGoogle AdMob等の広告配信サービスを利用する場合があります。
        </p>
        <p>
          広告配信事業者は、広告の表示、広告効果の測定、不正利用防止、サービス改善のために、端末情報、広告識別子、利用状況データ、診断情報等を取得する場合があります。
        </p>
        <p>
          本アプリで作成された小説本文・作品データは、広告配信のために送信されることはありません。
        </p>
      </section>

      <section className="card">
        <h2>利用目的</h2>
        <p>取得した情報は、以下の目的で利用します。</p>
        <ul>
          <li>アプリ機能の提供</li>
          <li>不具合対応およびサポート対応</li>
          <li>アプリの品質改善</li>
          <li>利用状況の把握</li>
        </ul>
      </section>

      <section className="card">
        <h2>第三者提供</h2>
        <p>
          法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
        </p>
      </section>

      <section className="card">
        <h2>お問い合わせ</h2>
        <p>
          本ポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください。
        </p>
        <p>
          <a href="mailto:honkumi-support@orca-web.jp">
            honkumi-support@orca-web.jp
          </a>
        </p>
      </section>

      <section className="card">
        <h2>改定</h2>
        <p>
          本ポリシーは、必要に応じて変更する場合があります。変更後の内容は本ページに掲載します。
        </p>
      </section>

      <footer className="footer">
        <p>制定日：2026年7月16日</p>
        <p>
          <Link href="/">サポートページへ戻る</Link>
        </p>
      </footer>
    </main>
  )
}
