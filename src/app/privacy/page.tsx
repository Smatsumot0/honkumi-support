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
          原稿本文や作品データについては、アプリの仕様に従い、ユーザーの端末内またはユーザーが選択した保存先で管理されます。
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
        <p>制定日：2026年6月24日</p>
        <p>
          <Link href="/">サポートページへ戻る</Link>
        </p>
      </footer>
    </main>
  )
}

