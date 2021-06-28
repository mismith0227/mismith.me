---
title: 'チェック項目'
date: '2021-07-01'
slug: 'checklist'
order: 5
---

コーディング時に抜け漏れがないかをセルフチェックする項目  
スペースやインデント、クオート（"")などは、人力チェックせずに prettier でルール化する

## コーディング前もしくは序盤に確認すること

- ターゲットやサイトの目的を聞く
- 対応ブラウザ（Chrome、Firefox、Safari、Edge, etc...）
- 対応デバイス（Mac, Windows, iOS, Android, etc...）
- メタ情報関連
  - title
  - description
  - keywords
  - OGP
- レスポンシブか PC と SP のソースコードを分けるか
  - レスポンシブの場合ブレイクポイントをどうするか
- デザインデータのツール（Figma, XD, Sketch, Photoshop, etc...）
- フォント
  - フォントファイルがあるか
  - ライセンス的に使えるか（Adobe font などクライアントワークでは難しいものがある）
- マウスオーバー時のデザインがあるかどうか
- その他アニメーション
- 動的コンテンツの場合
  - コンテンツが空の場合の表示を考慮しているか
  - コンテンツの増減による表示崩れが起きないか
- フォーム関連
  - エラーメッセージ
  - エラーメッセージのスタイリング
  - エラーメッセージの表示方法（送信時かリアルタイムか）
  - 送信ボタンのアクティブ化
- URL 構造
- ディレクトリ構造に指定はあるか
- サーバー
- CMS

## 共通

- 対応ブラウザで表示崩れがないか、アニメーションなどが動作しているか
  - 対応ブラウザ
  - 実機確認（Mac / Windows / スマートフォン）
  - レスポンシブの場合はブラウザサイズを変えてみる
- ビルド後のファイルでも問題なく動作するか
- 誤字脱字がないか
- 不要なコメントが残っていないか
- 動的コンテンツの場合
  - コンテンツが空の場合の表示を考慮しているか
  - コンテンツの増減による表示崩れが起きないか

## HTML

- meta タグ
  - doctype 宣言
  - title タグ
  - description タグ
  - keyword タグ
  - OGP（Twitter や Facebook）
  - ファビコン
- リンク貼り忘れがないか
- `target="_blank"` を使って外部リンクを開く場合は `rel="noopener` をつけているか
- head 内の script タグには、defer、async 属性を指定する

## CSS

- フォント関連（フォント指定、フォントサイズは合っているか）
- 画像が潰れたりしないか
- 横スクロールが発生しないか
- プロダクション用のコードは圧縮しているか

## JavaScript

- console でエラーが発生していないか
- プロダクション用のコードは圧縮しているか

## 画像

- WebP が使えるかを検討する

### 画像を最適化しているか

Lighthouse で JPEG の画像圧縮レベルを 85 に圧縮して 4KB 以上減らせる場合、通知対象となる

### 大きすぎる画像を使っていないか

Lighthouse で実際の表示サイズが、画像のサイズより 25KB 以上小さい場合は通知対象となる

## アクセシビリティ

アクセシビリティをどの程度対応するかは案件によるが、マークアップで対応できるようなものは対応するようにする。

参考

[Web サービスのアクセシビリティについて 考慮すべきポイントを挙げてく](https://zenn.dev/catnose99/scraps/8dd52a640e440ce1e265)

### 正しいマークアップ

大前提として正しくマークアップするように心がける

[WHATWG Living Standard（日本語訳）](https://momdo.github.io/html/)

### alt

- alt 属性は必須（alt がないと、一部のスクリーンリーダーが画像の src をそのまま読み上げてしまうことがあるため）
- 装飾や見栄えのために表示する画像など、意味を持たない画像の値は空白でも可。

[alt 属性の良い事例](http://jis8341.net/jirei_sample/jirei_chapter_01.html#section1-1)

### SVG

- SVG に `aria-label` を指定する。img のように alt を指定できないため
- `role="img"` を指定する。（スクリーンリーダーが SVG を画像とみなしてくれる）
- ボタンとして使う場合は、`button` タグで囲み、`button` タグに `aria-label` を指定する

```
<svg ... role="img" aria-label="SVG画像の説明">...</svg>
<button aria-label="作成"><svg>...</svg></button>
```

### コントロール

ページ内部での参照やリンクのように明確なリンク先が存在する場合は a タグ、そうでない場合は button タグ。  
例えば、ドロワメニューの開閉ボタンに a タグを使ったりしない

### リンクやボタン、フォームの input 要素の outline を消さない

`outline: 0;` で outline を消してしまうと、キーボード操作をしている人がどこにフォーカスが合ったっているか分からなくなる

- `outline: 0` や `outline: none` を指定しない
- デザイン的に消したい場合は `:focus-visible` を使う（IE と Safari は非対応）

```
// キーボード操作"以外"でフォーカスされた際はoutlineを消す

:focus:not(:focus-visible) {
  outline: 0;
}
```

### チェックボックスやラジオボタンを装飾する時に input を display: none しない

ラジオボタンを装飾するときに、input タグを `display: none` するとキーボード操作ができなくなる。  
以下を試してみる

- `opacity: 0`
- `position: absolute` で追い出す
- `z-index` で隠す
- `clip` と `clip-path` を使う

## ページチェック

### LightHouse

- [Lighthouse の計測結果を見ていく](https://qiita.com/nightyknite/items/22d9f818dbab9bf171a3)
