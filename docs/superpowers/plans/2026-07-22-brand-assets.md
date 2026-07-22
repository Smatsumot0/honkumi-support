# Honkumi Brand Assets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `logo.svg` をブラウザのファビコンに設定し、`title.svg` をトップページのヒーローに表示する。

**Architecture:** Next.js App Router のファイル規約を使い、正方形ロゴを `src/app/icon.svg` として配信する。横長のタイトル画像は `public/title.svg` に置き、`next/image` からトップページの静的ブランド画像として読み込む。

**Tech Stack:** Next.js 16、React 19、TypeScript、CSS、SVG

## Global Constraints

- `logo.svg` はブラウザタブのファビコンとして使用する。
- `title.svg` はトップページのヒーロー上部に表示する。
- 既存の見出し「Honkumi サポート」と説明文は残す。
- SVG の縦横比を維持し、狭い画面でははみ出さないようにする。
- 既存の `src/app/privacy/page.tsx` の作業中変更には触れない。

---

### Task 1: ブランド素材の配置とページへの組み込み

**Files:**
- Create: `src/app/icon.svg`
- Create: `public/title.svg`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: 指定素材 `C:/Users/yis13/Downloads/logo.svg` と `C:/Users/yis13/Downloads/title.svg`
- Produces: `/icon.svg` のファビコンと `/title.svg` のヒーローワードマーク

- [ ] **Step 1: 現状確認を実行する**

Run:

```powershell
Test-Path src/app/icon.svg
Test-Path public/title.svg
Select-String -Path src/app/page.tsx -Pattern 'src="/title.svg"'
```

Expected: 画像ファイル2点が存在せず、ページにも `/title.svg` の参照がない。

- [ ] **Step 2: SVG素材をアプリ内へ追加する**

`logo.svg` の内容を変更せず `src/app/icon.svg` に、`title.svg` の内容を変更せず `public/title.svg` に追加する。

- [ ] **Step 3: タイトル画像をヒーローへ追加する**

`src/app/page.tsx` で `next/image` を直接読み込み、既存の eyebrow テキストを次の画像へ置き換える。

```tsx
import Image from "next/image"

<Image
  className="brandTitle"
  src="/title.svg"
  alt="Honkumi"
  width={2400}
  height={1000}
  priority
/>
```

- [ ] **Step 4: レスポンシブ表示を設定する**

`src/app/globals.css` の `.eyebrow` を `.brandTitle` に置き換え、次の表示規則を設定する。

```css
.brandTitle {
  position: relative;
  z-index: 1;
  width: clamp(220px, 32vw, 280px);
  max-width: 72vw;
  height: auto;
  margin: 0 0 12px;
}
```

モバイル用の `.eyebrow` 規則も `.brandTitle` に変更し、余白だけを調整する。

- [ ] **Step 5: 静的確認を実行する**

Run:

```powershell
Test-Path src/app/icon.svg
Test-Path public/title.svg
Select-String -Path src/app/page.tsx -Pattern 'src="/title.svg"'
```

Expected: 画像ファイル2点が存在し、ページに `/title.svg` の参照がある。

- [ ] **Step 6: lint と production build を実行する**

Run:

```powershell
npm run lint
npm run build
```

Expected: 両コマンドが終了コード0で完了する。

- [ ] **Step 7: 変更内容を確認する**

Run:

```powershell
git diff -- src/app/icon.svg public/title.svg src/app/page.tsx src/app/globals.css
git status --short
```

Expected: 対象4ファイルだけが今回の実装差分で、既存の `src/app/privacy/page.tsx` は今回の差分に含まれない。
