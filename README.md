# ねがいのフルート — 作品紹介サイト

Astro + JavaScript + JSDoc で制作した静的サイトです。TypeScript のソースコードは使用していません。TypeScript パッケージは JavaScript / JSDoc の型チェック専用です。

## この版の内容

- トップ、世界観、登場人物、ストーリー、404 の計 5 ページ
- スマートフォン・PC 対応、キーボード操作、スキップリンク、動きを減らす設定への対応
- 外部フォント・解析・Cookie・外部画像の読み込みなし
- キャラクター画像未設定時は、画像待ちの装飾プレースホルダーを表示
- GitHub Pages 用の GitHub Actions ワークフロー付き

**内容について:** 提供された原作小説を参照し、プロローグと序盤の人物紹介に範囲を絞って文章を更新しました。あらすじは妖精フェルとの出会い・妖精世界への旅立ちまで。人物の正体、後半の展開や結末、フルートに関する秘密は掲載していません。公開前には作者としての表現の好みも含め、最終確認してください。原作小説の全文はこのソース一式に含めていません。キャラクター画像としてニーマロ、ロゥ、フェル、ビーゼの提供画像を収録しています。装飾画のフルートは提供されたデザインをもとにした画像へ差し替えています。森と月の SVG はサイト用の装飾画で、原作の土地の正確な設定図ではありません。漫画公開先 URL は未設定です。この制作で GitHub へのアップロード・公開は行っていません。

## ローカルで起動

Node.js 24 を推奨します（最低 22.23.4）。フォルダを開いて実行してください。

```sh
npm ci
npm run dev
```

表示された localhost の URL を開きます。

```sh
npm run check    # JavaScript / JSDoc の型チェック
npm test         # パス生成・データのテスト
npm run build    # dist/ に静的 HTML を出力
npm run preview  # ビルド済みサイトを確認
```

チェック範囲: `npm run check` は src/data と src/lib の JavaScript を検査します。Astro テンプレートの構文は build で検証します。これは全ページのアクセシビリティ認証ではありません。

## GitHub Pages に公開

1. GitHub でサイト用のリポジトリを用意します。公開するコード・画像・文章の権利と機密情報を確認してください。
2. このフォルダの中身をリポジトリのルートへ配置します。隠しフォルダ `.github` も必要です。`node_modules` と `dist` はアップロードしません。
3. リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定します。
4. `main` ブランチへ push すると `.github/workflows/deploy.yml` が実行されます。別の既定ブランチを使う場合はワークフローの `branches` を変更します。
5. Actions の成功後、Pages 設定に表示される公開 URL を確認します。

ワークフローは GitHub Pages から `origin` と `base_path` を取得し、Astro の `site` と `base` に渡します。ユーザーサイト（`username.github.io`）、プロジェクトサイト（`username.github.io/repo/`）、設定済みカスタムドメインに対応する構成です。リンク・favicon・キャラクター画像にも base が反映されます。

Private リポジトリからの Pages 利用条件は GitHub プランによります。リポジトリを public に変更しなくても、まず現在のプランの Pages 利用可否を確認してください。また通常の GitHub Pages はソースが private でもサイト自体は一般公開されます。公開範囲を確認してから進めてください。

ローカルでプロジェクトパスを確認する例（Mac / Linux）:

```sh
SITE_URL=https://example.github.io BASE_PATH=/negai-site npm run build
BASE_PATH=/negai-site npm run preview
```

公式ガイド: https://docs.astro.build/en/guides/deploy/github/

## 文章・画像・リンクを編集

### メインのデータ

`src/data/site.js` にタイトル、紹介文、キャラクター、世界観、漫画の公開先をまとめています。JSDoc の型に沿って変更できます。

```js
// 本編公開後に設定します。空欄のままなら「準備中」と表示されます。
readUrl: 'https://公開先の実際のURL',

// 任意の作者表記
// authorName: 'ペンネーム',
```

キャラ画像は `public/images/` に保存し、対象の `image` に `images/niimaro.png` のように指定します。先頭に `/` を付ける必要はありません。コード内の `src` は公開パスに自動変換されます。画像は原寸縦横比を保った `object-fit: contain` で表示します。

```js
{ name: 'ニーマロ', slug: 'niimaro', label: '物語の主人公',
  description: 'ここに正式なプロフィールを記載します。',
  image: 'images/niimaro.png', color: '#c47a87', mark: '花' }
```

人物を追加するとトップと登場人物ページの両方に反映されます。未設定の肖像用記号「花・光・葉・風」は分類や能力を示す設定ではなく、単なる装飾です。

### ファイル構成

```text
src/data/site.js               編集用データ（JSDoc）
src/lib/paths.js               base 対応 URL ヘルパー（JSDoc）
src/layouts/Layout.astro       ヘッダー・フッター・meta
src/components/Scenery.astro   装飾 SVG
src/components/CharacterCard.astro
src/pages/index.astro         トップ
src/pages/world.astro         世界観
src/pages/characters.astro    登場人物
src/pages/story.astro         ストーリー・公開先
src/styles/global.css         共通レスポンシブデザイン
public/images/                キャラ画像などの配置場所
.github/workflows/deploy.yml   GitHub Pages の自動ビルド・公開
```

一部の見出し・本文は各 `.astro` ファイルにあります。サイトの全表示文章を変える場合はページファイルも編集します。

## 検索・SNS

ページごとの title、description、canonical（SITE_URL 設定時）、基本の Open Graph を出力します。正式なキービジュアルを用意した後、og:image の追加をおすすめします。現状は実際の画像がないため、架空の画像 URL は設定していません。

## インストール不要の確認用ファイル

`negai-preview.html` は、4 ページ分を 1 ファイルにまとめた確認用スナップショットです。ブラウザで開くとネット接続なしでページ間を移動できます。キャラクター画像は埋め込まず、プレースホルダー表示を収録しています。公開するファイルではありません。実際のサイトは必ず Astro のビルド結果を使ってください。

このプレビューを更新するには、BASE_PATH を指定せず `npm run build` を実行してから `node scripts/make-preview.mjs` を実行します。このプレビュースクリプトはキャラクター画像の埋め込みに未対応です。実サイトの確認には `npm run dev` / `npm run preview` を使ってください。

## この納品版の確認結果

- npm install: 成功、package-lock.json 同梱
- JavaScript / JSDoc チェック: 成功
- 自動テスト: 3 件成功
- root / と GitHub プロジェクトパス /negai-site/ の両方でビルド成功
- /negai-site/ ビルド内の 51 個の内部リンク・アセット参照のファイル存在確認: 成功
- 単体 HTML プレビューの JavaScript 構文・CSS 埋め込み・外部参照なしの確認: 成功
- ブラウザによる見た目・操作の実機検証: 未完了（制作環境のブラウザ起動制約）
- GitHub Actions 上のビルド・本番公開: 未実行

制作環境では Astro のテレメトリ設定用ディレクトリが使えなかったため、ビルド時のみ `ASTRO_TELEMETRY_DISABLED=1` を設定しました。通常のローカル環境では README の通常コマンドで実行できます。
