# 第4回

まずは、リポジトリの更新に追従するために、

```
git pull
```

を実行します。

## 🔨 サーバーの立ち上げ

`section-template/section-04` 以下が今回使用するソースコードですが、**ここにあるファイルを直接編集することは避けてください。** 代わりに、以下の手順で全てのファイルとフォルダを`section-04`フォルダ内にそのままコピーして使用してください。

例えばLinuxやWSL、Git Bash (Windows)、Macなどを使用している場合は、**`2022-web`フォルダで** 以下のコマンドを実行すれば良いです。

```bash
cp -r section-template/section-04 ./
cd section-04
```

もちろんフォルダを直接開いてファイルをコピーしても良いですが、**. (ドット) から始まる隠しファイルも忘れずにコピーするようにしてください**

ここまでできたら、以下の手順に従ってサーバーを立ち上げてください。

### 💪 Dockerを使わない場合

npmまたはyarnが必要です。

1. npmを使う場合

```bash
cd front
npm install
npm run serve
```

2. yarnを使う場合

```bash
cd front
yarn install
yarn run serve
```

ブラウザが自動で開くと思いますが、開かない場合は http://localhost:9900 にアクセスして確認してください。
閉じるときには、`Ctrl+C`でサーバーを終了してください。

### 🐳 Dockerを使う場合

docker-composeおよびmakeが必要です。

```bash
make setup      # これは初回だけで良いです。
make up
```

しばらくすると、また入力待ち状態に戻ります。このとき、コンテナがバッググラウンドで実行されている状態なので、そこに接続するために以下のようにします。

```bash
make front-attach
```

このようにすると、コンテナの中の `/home/2022WEB/2022-web/section-04/front` ディレクトリの中に入れるので (pwdコマンドで確認してみてください)、続けて

```bash
yarn install
yarn run serve
```

と実行します。(yarnは既に入っています)

そこまでできたら、http://localhost:9900 にアクセスして確認してください。

閉じるときには、`Ctrl+C`でサーバーを閉じ、`exit`を実行してコンテナから出ます。最後に以下のように実行することで、バックグラウンドで動いていたコンテナが終了します。

```bash
make down
```