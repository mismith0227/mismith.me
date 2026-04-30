# Performance Guidelines

## ビルド・出力設定

- Vercelへのデプロイを前提とし、`output: 'export'` は使用しない（Vercel最適化を活かす）
- `next.config.js` で不要な機能を無効化してバンドルサイズを削減する
- バンドル分析は `@next/bundle-analyzer` で行う

## 画像

- `next/image` を必ず使用する（VercelがImage Optimizationを自動処理）
- `priority` はAbove the foldの画像のみに付ける
- `sizes` 属性を適切に設定してレスポンシブ画像を最適化する
- フォーマット変換はVercelに任せるため明示指定不要

## フォント

- `next/font` を使用してフォントをセルフホストする
- `display: 'swap'` を設定してCLSを防ぐ
- 日本語フォントを使う場合はサブセット化必須（フルフォントは数MB級になるため）
  - Google Fontsの `subsets` で絞るか、`unicode-range` で使用文字を限定する

## Tailwind

- 本番ビルドでは自動的にPurge（未使用クラス除去）が走るため、動的クラス名は文字列結合せず完全な形で書く
  - ❌ `text-${color}-500`
  - ✅ `text-red-500` / `text-blue-500`
- プラグインは使用するものだけに絞る（`@tailwindcss/typography` 等）
- `@apply` の多用はバンドルサイズ増加につながるため最小限にする

## コンポーネント・バンドル

- `dynamic()` による遅延読み込みを活用する（重いライブラリ・非表示コンテンツ）
- `'use client'` は本当に必要なコンポーネントのみに付ける
- barrel export（`index.ts` でまとめてexport）はTree Shakingを妨げるため避ける
- サードパーティスクリプトは `next/script` の `strategy` を適切に設定する
  - `beforeInteractive` は最小限に、基本は `lazyOnload`

## データフェッチ

- Server Componentsでのfetchを基本とする
- Vercelのキャッシュ（`revalidate`）を活用してビルド負荷を下げる
- クライアントフェッチが必要な場合はSWRまたはTanStack Queryを使用する

## Vercel固有の最適化

- Edge Functionsを活用できる処理はEdgeランタイムに寄せる
- `vercel.json` でキャッシュヘッダーを静的アセットに設定する
- Analytics / Speed Insightsを有効化してCore Web Vitalsを継続監視する

## Core Web Vitals の目標値

| 指標 | 目標 |
|------|------|
| LCP  | < 2.5s |
| INP  | < 200ms |
| CLS  | < 0.1 |

## 計測・チェック

- Lighthouseスコアはモバイルで90以上を目標とする
- 本番デプロイ前に PageSpeed Insights で確認する
- Vercel Speed Insightsで実ユーザーデータを継続監視する