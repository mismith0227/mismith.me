# プロジェクト概要

Next.js 15 App Router で作った写真ポートフォリオサイト。

## 必ず最初に読むファイル
- docs/design-brief.md   ← デザイン方針
- docs/current-structure.md ← 現在の構成

## 技術スタック
- Next.js 15 (App Router)
- Tailwind CSS v4

## 絶対に触らないファイル・ディレクトリ
- node_modules/ 以下すべて

## コーディングルール
- コンポーネントはすべてTypeScriptで書く
- CSS Modulesは使わない、Tailwindに統一
- console.log は必ず消してからコミット
- コメントは日本語でOK

## 変更時のルール
- 1ファイル変更するごとに動作確認してから次へ進む
- 大きな変更の前は必ず私に確認する
- 変更内容は CHANGELOG.md に追記する

## よく使うコマンド
- 開発サーバー: npm run dev
- ビルド確認: npm run build
- 型チェック: npx tsc --noEmit
