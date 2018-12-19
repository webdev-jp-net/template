# Template
WEBサイト制作環境のテンプレートです。  
随時、新しい環境へ更新をかけていく予定です。

ブランチで、`Riot.js`用`Vue.js`用など分岐できればと考えています。

## Scripts

### Install

```
$ npm install
```

### Run

development mode

```
$ npm start
```


release mode

```
$ npm run release
```



# Directory

-  `src` ... 開発用データ
-  `static` ... ライブラリなど、手を加えず読み込むデータ
-  `preview` ... 開発時のbuildデータ (バージョン管理対象外)
-  `htdocs` ... リリースデータ

```
root
│
├── package.json
├── gulpfile.js
│
├── /src
│   ├── /css
│   │   └── *.scss
│   ├── /js
│   │   └── *.js
│   ├── /img
│   │   └── *.*
│   └── /html
│       └── *.html
│
├── static
│   ├── /assets
│   └── /lib
│
├── /preview
│
└── /htdocs
    ├── assets
    │   ├── css
    │   │   └── *.scss
    │   ├── js
    │   │   └── *.js
    │   └── img
    │       └── *.*
    ├── /lib
    │   ├── *.*
    │   └── /(library name)
    │       └── *.*
    │
    ├── /(directory name)
    │   └── *.html
    └── *.html
```

## Package

`gulp`ベースの開発環境。

-  `gulp` ... ver4 (https://www.npmjs.com/package/gulp)

-  `gulp-plumber` ... エラーでgulpのpipeを止めない (https://www.npmjs.com/package/gulp-plumber)
-  `gulp-notify` ... デスクトップ通知 (https://www.npmjs.com/package/gulp-notify)

### clean

データの削除に使用

-  `rimraf` ... データ削除 (https://www.npmjs.com/package/rimraf)
-  `delete-empty` ... 空ディレクトリ削除 (https://www.npmjs.com/package/delete-empty)

### server

サーバを構築するとともに、更新をリアルタイム反映。

-  `browser-sync` ... サーバ (https://www.npmjs.com/package/browser-sync)

### style

`scss`で定義したスタイルをcssへ変換

-  `gulp-sass` ... Sassをコンパイル (https://www.npmjs.com/package/gulp-sass)
-  `gulp-autoprefixer` ... ベンダープレフィックス付与 (https://www.npmjs.com/package/gulp-autoprefixer)

### script

`babel`でトランスパイル。polyfill設定をシンプルにする目的で`webpack`を通している。

-  `@babel/core` ... ver7 (https://www.npmjs.com/package/@babel/core)
-  `@babel/polyfill` ... polyfill (https://www.npmjs.com/package/@babel/polyfill)
-  `@babel/preset-env` ... トランスパイルのターゲットを設定 (https://www.npmjs.com/package/@babel/preset-env)


-  `webpack` ... ver4 (https://www.npmjs.com/package/webpack)
-  `webpack-stream` ... gulpでwebpackを使う (https://www.npmjs.com/package/webpack-stream)
-  `babel-loader` ... webpackで*.jsをbabelでトランスパイルするよう紐付ける (https://www.npmjs.com/package/babel-loader)
