# Template

WEB サイト制作環境のテンプレートです。  
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

```
$ npm start:dev
```

#### production mode

```
$ npm start:pro
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

- `src` ... 開発用データ
- `static` ... ライブラリなど、手を加えず読込データ
- `preview` ... 開発時の build データ (バージョン管理対象外)
- `htdocs` ... リリースデータ

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

- [gulp](https://www.npmjs.com/package/gulp) ... ver4

- [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) ... エラーで gulp の pipe を止めない
- [gulp-notify](https://www.npmjs.com/package/gulp-notify) ... デスクトップ通知

- [cross-env](https://www.npmjs.com/package/cross-env) ... 環境変数の設定

### clean

データの削除に使用

- [rimraf](https://www.npmjs.com/package/rimraf) ... データ削除
- [delete-empty](https://www.npmjs.com/package/delete-empty) ... 空ディレクトリ削除

### server

サーバを構築するとともに、更新をリアルタイム反映。

- [browser-sync](https://www.npmjs.com/package/browser-sync) ... サーバ

### style

`scss`で定義したスタイルを css へ変換

- [gulp-sass](https://www.npmjs.com/package/gulp-sass) ... `Sass`をコンパイル
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) ... ベンダープレフィックス付与

### script

`babel`でトランスパイル。polyfill 設定をシンプルにする目的で`webpack`を通している。

- [@babel/core](https://www.npmjs.com/package/@babel/core) ... ver7
- [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill) ... polyfill
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) ... トランスパイルのターゲットを設定

- [webpack](https://www.npmjs.com/package/webpack) ... ver4
- [webpack-stream](https://www.npmjs.com/package/webpack-stream) ... `gulp`で`webpack`を使う
- [babel-loader](https://www.npmjs.com/package/babel-loader) ... `webpack`で\*.js を`babel`でトランスパイルするよう紐付ける

## Linter & Formatter

`ESLint`で JavaScript の構文チェック、`StyleLint`でスタイルシートの構文チェックを行い  
`Prettier`で書式を整理。

- [eslint](https://www.npmjs.com/package/eslint) ... JavaScript の構文チェック
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) ... `Prettier`のルールを`ESLint`に読込
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier) ... `Prettier`と重複した`ESLint`ルールを無効化
- [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) ... `Airbub`のルールを`ESLint`に読込
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) ... `import/export`構文に対応

- [prettier](https://www.npmjs.com/package/prettier) ... 書式の整形

- [styleLint](https://www.npmjs.com/package/stylelint) ... スタイルシート構文チェック
- [stylelint-scss](https://www.npmjs.com/package/stylelint-scss) ... `Scss`文法対応
- [stylelint-order](https://www.npmjs.com/package/stylelint-order) ... 任意の並び順を設定
- [stylelint-config-recess-order](https://www.npmjs.com/package/stylelint-config-recess-order) ... `Recess`と `Bootstrap`の方法で並べ替えるルールを`StyleLint`に読込
- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier) ... `Prettier`のルールで lint
- [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier) ...　 `Prettier`と重複した`StyleLint`ルールを無効化

- [gulp-stylelint](https://www.npmjs.com/package/gulp-stylelint) ... `gulp`で`StyleLint`を実行

### config

#### Prettier

```
"prettier": {
  "printWidth": 100, // 100文字以上で改行
  "tabWidth": 2, // インデント幅
  "useTabs": false, //インデントにTabを許可
  "semi": true, // 行末へ必ず;付与
  "singleQuote": true, // カッコを''に統一
  "trailingComma": "es5", // 行末の,
  "bracketSpacing": true, // アロー関数のカッコ
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
    "browser": true, // ブラウザ関連のグローバル変数を許可
    "es6": true // ES6関連のグローバル変数を許可
  },
  "extends": [
    "airbnb-base", // Airbub base のルールを読込
    "plugin:prettier/recommended" // Prettierのルールを読込
  ],
  "plugins": [
    "import" // import/export対応プラグインを読込
  ],
  "rules": {
    "prettier/prettier": "error" // Prettierのルールを読込
  }
}
```

#### SyuleLint

```
"stylelint": {
  "extends": [
    "stylelint-prettier/recommended", // Prettierのルールを読込
    "stylelint-config-recess-order" // Recess* Property Orderのルールを読込
  ],
  "syntax": "scss",
  "plugins": [
    "stylelint-scss", // scss対応プラグインを読込
    "stylelint-order", // 任意の並び順設定プラグインを読込
    "stylelint-prettier" // Prettierプラグインを読込
  ],
  "rules": {
    "prettier/prettier": true, // Prettierのルールを読込
    "order/order": [ // 変数の要素を優先的に先頭へ
      [
        "dollar-variables",
        "declarations",
        "rules"
      ]
    ],
    "color-hex-length": "short", // HEXの色指定を3桁にできる場合は丸める
    "length-zero-no-unit": true // 0の値の単位を省略
  }
}
```
