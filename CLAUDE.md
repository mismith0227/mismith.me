# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Project Name:** mismith.me - 写真ポートフォリオサイト
**Live Site:** https://www.mismith.me

### Technology Stack

- **Framework:** Next.js 15 (App Router) with React 19
- **Language:** TypeScript 5 (strict mode)
- **Package Manager:** npm
- **Styling:** Tailwind CSS v4 (utility-first)
- **CMS:** microCMS (headless CMS)
- **Testing:** Playwright (E2E)
- **Deployment:** Vercel

---

## Directory Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # ルートレイアウト（Navigation含む）
│   │   ├── page.tsx           # トップページ（写真スライダー）
│   │   ├── blog/              # ブログ（カテゴリ・ページネーション付き）
│   │   ├── note/              # ノート
│   │   ├── series/            # シリーズ（ポートフォリオ）
│   │   ├── photos/            # フォトギャラリー（カテゴリ別）
│   │   ├── about/             # About
│   │   └── request/           # リクエスト
│   ├── components/            # 共有UIコンポーネント
│   ├── styles/                # グローバルCSS・セクション別CSS
│   └── libs/                  # microCMSクライアント
├── types/                      # TypeScript型定義
├── utils/                      # ユーティリティ関数
├── settings/                   # サイト設定定数
├── test/                       # Playwright E2Eテスト
└── public/                     # 静的アセット
```

---

## Development Workflows

### よく使うコマンド

| コマンド | 用途 |
|---|---|
| `npm run dev` | 開発サーバー起動（Turbopack） |
| `npm run build` | プロダクションビルド |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | 型チェック |
| `npm run test:e2e` | E2Eテスト（Playwright） |
| `npm run test:e2e:ui` | PlaywrightをUIモードで実行 |
| `npx playwright test --grep "テスト名"` | 特定テストのみ実行 |

### 環境変数

`.env.local` に以下が必要:

| 変数名 | 用途 |
|---|---|
| `NEXT_PUBLIC_WEB_URL` | サイトURL |
| `NEXT_PUBLIC_API_KEY` | microCMS APIキー |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | GAトラッキングID |

---

## Key Conventions & Patterns

### データフロー

全ページがサーバーコンポーネント。`generateStaticParams()` でビルド時に全ルートを静的生成する。

```
microCMS → src/libs/client.ts → src/app/*/api/ → Page Component
```

各セクション（blog, note, photos, series）は `src/app/[section]/api/` 配下に専用の fetch 関数を持つ。

### 動的ルートのパターン

Next.js 15 では params が `Promise` になるため `await` が必要:

```ts
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
}
```

### ナビゲーション

`Navigation` コンポーネントはデスクトップで固定サイドバー、モバイル（`max-sm`）でハンバーガーメニューとして動作。`usePathname()` でアクティブ状態を管理。

### ダークモード

`<html>` に `.dark` クラスを付与する方式。フラッシュ防止のためルートレイアウトにインラインスクリプトで localStorage を読む。

### スタイリング

Tailwind CSS v4 をユーティリティファーストで使用。グローバルなコンポーネントスタイル（`.navContainer`, `.categoryItem` 等）は `src/styles/globals.css` の `@layer components` に定義。ブログ・ノートの本文スタイルは `src/styles/blogBody.css`, `noteBody.css` で管理。

---

## コーディングルール

- コンポーネントはすべて TypeScript で書く
- CSS Modules は使わない、Tailwind に統一
- `console.log` は必ず消してからコミット
- コメントは日本語でOK

## 変更時のルール

- 1ファイル変更するごとに動作確認してから次へ進む
- 大きな変更の前は必ず確認する
- 変更内容は CHANGELOG.md に追記する

## 絶対に触らないディレクトリ

- `node_modules/`
