# Next.js × microCMS Portfolio Site & Blog

https://www.mismith.me/blog

## ブログ機能

- 記事一覧
- カテゴリー別記事一覧
- 記事詳細
  - 関連記事
- Google Analytics
- RSS
- Site Map

## 技術構成

- Next（SSG）
- microCMS（コンテンツ）
- Vercel（Hosting）
- TypeScript
- ESLint
- Prettier
- emotion

## microCMS の API スキーマ設定

### ブログ

endpoint: blog
type: リスト形式

| フィールド ID | 表示名   | 種類                             |
| ------------- | -------- | -------------------------------- |
| title         | タイトル | テキストフィールド               |
| description   | 概要     | テキストフィールド               |
| category      | カテゴリ | コンテンツ参照（ブログカテゴリ） |
| related_post  | 関連記事 | 複数コンテンツ参照（ブログ）     |

### ブログカテゴリ

endpoint: blog-category
type: リスト形式

| フィールド ID | 表示名     | 種類               |
| ------------- | ---------- | ------------------ |
| category_name | カテゴリ名 | テキストフィールド |

## 環境変数

プロジェクトルートに.env ファイルを作成し、以下の項目を設定してください。

```
NEXT_PUBLIC_WEB_URL={URL}
API_KEY={microCMS API Key}
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID={Google Analytics ID} ※任意
```

## Development

### yarn

```
// package install
yarn

// develop
yarn start

// build
yarn build
```
