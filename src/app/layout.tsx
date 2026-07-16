import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Honkumi サポート",
  description:
    "Honkumiは、小説原稿の編集から入稿用PDF作成までを支援するiPhone/iPad向けアプリです。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

