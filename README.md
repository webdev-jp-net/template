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

#### development mode

```
$ npm start
```


#### release mode

```
$ npm run release
```


#### linter

ESLint

```
$ npm run lint:js
```

StyleLint

```
$ npm run lint:scss
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

## Linter & Formatter

`ESLint`でJavaScriptの構文チェック、`StyleLint`でスタイルシートの構文チェックを行い  
`Prettier`で書式を整理。

-  `eslint` ... js構文チェック (https://www.npmjs.com/package/eslint)
-  `eslint-plugin-prettier` ... PrettierのルールをESLintに読み込む (https://www.npmjs.com/package/eslint-plugin-prettier)
-  `eslint-config-prettier` ... Prettierと重複したESLintルールを無効化 (https://www.npmjs.com/package/eslint-config-prettier)

-  `prettier` ... 書式の整形 (https://www.npmjs.com/package/prettier)

-  `styleLint` ... スタイルシート構文チェック (https://www.npmjs.com/package/stylelint)
-  `stylelint-scss` ... Scss文法対応 (https://www.npmjs.com/package/stylelint-scss)
-  `stylelint-config-recess-order` ... 並び順の規則 (https://www.npmjs.com/package/stylelint-config-recess-order)
-  `stylelint-prettier` ... Prettierのルールでlint (https://www.npmjs.com/package/stylelint-prettier)
-  `stylelint-config-prettier` ...　Prettierと重複したStyleLintルールを無効化 (https://www.npmjs.com/package/stylelint-config-prettier)

-  `gulp-stylelint` ... gulpでStyleLintルールを実行 (https://www.npmjs.com/package/gulp-stylelint)

### config

#### Prettier

```
"prettier": {
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

#### ESLint

```
"eslintConfig": {
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

#### SyuleLint

```
"stylelint": {
  "extends": [
    "stylelint-prettier/recommended",
    "stylelint-config-recess-order"
  ],
  "syntax": "scss",
  "plugins": [
    "stylelint-prettier",
    "stylelint-scss"
  ],
  "rules": {
    "prettier/prettier": true, // Prettierのルール
    "color-hex-length": "short", // HEX値が3桁にまるめられるなら修正
    "length-zero-no-unit": true // 0の単位を省略
  }
}
```
