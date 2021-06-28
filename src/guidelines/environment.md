---
title: '開発環境'
date: '2021-07-01'
slug: 'environment'
order: 2
---

## 対応ブラウザ

- Chrome（最新 ver）
- Firefox（最新 ver）
- Safari（最新 ver）
- Edge（最新 ver）

## 開発環境テンプレート

- [web_template_gulp](https://github.com/mismith0227/web_template_gulp)
- [web_template_npm_script](https://github.com/mismith0227/web_template_npm_script)

## ディレクトリ構造

主に web サイトを制作する際の構造です。

```
├── dist
│   ├── css
│   │   └── style.css
│   ├── index.html
│   └── js
│       └── index.js
├── src
│   ├── html
│   │   └── index.html
│   │   └── about.html
│   ├── js
│   │   └── index.js
│   └── sass
│   │   ├── base.scss
│   │   └── style.scss
│   └── images
│       ├── image.jpg
│       └── image.png
```

### HTML

基本的には HTML をそのまま dist ディレクトリへコピーする。  
開発内容に応じて EJS や Pug の導入を検討する

### SCSS（CSS）

CSS ディレクトリは `config`, `base` , `pages`, `layouts` , `components` に分け、styled.scss にバンドルする

- config: 変数や mixin など設定直
- base: nomalize や reset、その他フォントなど全体に指定するもの
- pages: ページごとにファイルを作成。ページ固有のスタイリングをする
- layouts: ページ共通のレイアウトコード（セクション間の余白など）
- components: organisms, molescules, atoms に分ける

### images

images ディレクトリ以下は `common`, `pages`, `icon` に分ける

### JavaScript

機能ごとにディレクトリを分割し、index.js でバンドルする

## prettierrc

```
{
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true
}
```
