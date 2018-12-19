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

-  `gulp` ... ver4 (https://www.npmjs.com/package/gulp)

### clean

-  `rimraf` ... データ削除 (https://www.npmjs.com/package/rimraf)
-  `delete-empty` ... 空ディレクトリ削除 (https://www.npmjs.com/package/delete-empty)

### server

-  `browser-sync` ... サーバ (https://www.npmjs.com/package/browser-sync)
