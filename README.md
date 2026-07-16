# Honkumi Support

Honkumi Support は、iPhone/iPad 向け小説原稿作成アプリ「Honkumi」のサポートサイトです。

アプリの概要、問い合わせ先、よくある質問、プライバシーポリシーを掲載します。

## 主なページ

- `/` - サポートトップ、問い合わせ先、よくある質問
- `/privacy` - プライバシーポリシー

## 技術構成

- Next.js 16
- React 19
- TypeScript
- ESLint

## 開発環境

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認します。

## 利用できるコマンド

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## ディレクトリ構成

```text
src/
  app/
    page.tsx          サポートトップ
    privacy/page.tsx  プライバシーポリシー
    layout.tsx        共通レイアウトとメタデータ
    globals.css       グローバルスタイル
```

## 問い合わせ先

Honkumi に関する不具合報告、ご意見、ご要望は以下までご連絡ください。

<honkumi-support@orca-web.jp>
