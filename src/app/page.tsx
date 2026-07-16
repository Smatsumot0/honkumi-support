import Link from "next/link"

const faqs = [
  {
    question: "Honkumiはどんなアプリですか？",
    answer:
      "Honkumiは、iPhone/iPadで小説本文の編集、縦書きプレビュー、入稿用PDF作成を行うためのアプリです。同人誌・個人出版向けの原稿作成を支援します。",
  },
  {
    question: "PDFは印刷所への入稿に使えますか？",
    answer:
      "入稿用PDFの作成を目的としていますが、印刷所ごとに入稿条件が異なるため、最終的には利用する印刷所の仕様に合わせて確認してください。",
  },
  {
    question: "有料機能には何が含まれますか？",
    answer:
      "ノンブルフォントの変更、サークルロゴ、整形機能、powered by Honkumiの非表示、広告非表示などを予定しています。",
  },
  {
    question: "作成した原稿や作品データはどう扱われますか？",
    answer:
      "アプリ内で作成したデータの扱いは、アプリの仕様およびプライバシーポリシーに従います。詳しくはプライバシーポリシーをご確認ください。",
  },
  {
    question: "問い合わせはどこからできますか？",
    answer:
      "不具合報告、ご意見、ご要望は honkumi-support@orca-web.jp までご連絡ください。",
  },
]

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Honkumi Support</p>
        <h1>Honkumi サポート</h1>
        <p className="lead">
          Honkumiは、同人小説・小説原稿の編集から入稿用PDF作成までを
          iPhone/iPadで完結させるためのアプリです。
        </p>
      </section>

      <section className="card">
        <h2>お問い合わせ</h2>
        <p>
          不具合報告、ご意見、ご要望は以下のメールアドレスまでご連絡ください。
        </p>
        <p>
          <a className="button" href="mailto:honkumi-support@orca-web.jp">
            honkumi-support@orca-web.jp
          </a>
        </p>
      </section>

      <section className="card">
        <h2>よくある質問</h2>
        <div className="faqList">
          {faqs.map((faq) => (
            <article className="faqItem" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>関連ページ</h2>
        <p>
          <Link href="/privacy">プライバシーポリシー</Link>
        </p>
      </section>

      <footer className="footer">
        <p>© 2026 Honkumi</p>
      </footer>
    </main>
  )
}

