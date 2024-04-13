# Portfolios Search App

RESAS API から取得したデータをもとに、地域ごとの求人・求職者を検索できます。

## ローカルマシンで動かす方法

1. [RESAS API](https://opendata.resas-portal.go.jp/) に登録して、API キーを取得する。
2. 当リポジトリを Git でクローンして、プロジェクトのフォルダーに移動する。
3. プロジェクトのルートに `.env` ファイルを作成して、環境変数を定義する。
4. npm でパッケージをインストールする。
5. プロジェクトを開発モードで起動する。
6. ブラウザーで `http://localhost:3000` に接続する。

コマンドライン操作:

```shell
# step 2
git clone https://github.com/yuki-yamamura/portfolios-search-app.git
cd portfolios-search-app

# step 3
echo 'API_KEY=<YOUR_API_KEY>' > .env

# step 4
npm install

# step 5
npm run dev
```

`.env` ファイルの例:

```
API_KEY=XXXXXX
```

## 技術スタック

- プログラミング言語: TypeScript
- フレームワーク: Next.js (Pages Router)
- スタイリング: CSS Modules (Dart Sass)
- React 周辺ライブラリ:
  - データ取得: SWR
  - フォームバリデーション: React Hook Form
- スキーマバリデーション: Zod
- コード検証: ESLint、Prettier、Stylelint
- テスト: Jest、React Testing Library
- デプロイ環境: Vercel
