# 第3回

まずは、リポジトリの更新に追従するために、

```
git pull
```

を実行します。

できたら、進捗管理シートの「git pull」にチェックを入れておいてください。

## 🔨 サーバーの立ち上げ

今回は、第1回に使用したものを使いまわします。

第1回に参加した方は

```bash
cd section-01
```

を、参加していない方は

```bash
cp -r section-template/section-01 ./
cd section-01
```

を実行してから、環境に合わせて以下の手順でサーバーを立ち上げてください。

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

ブラウザが自動で開くと思いますが、開かない場合は http://localhost:9900 にアクセスして確認してください。ここまでできたら、進捗管理シートの「サーバーを立てる」にチェックを入れておいてください。
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

このようにすると、コンテナの中の `/home/2022WEB/2022-web/section-01/front` ディレクトリの中に入れるので (pwdコマンドで確認してみてください)、続けて

```bash
yarn install
yarn run serve
```

と実行します。(yarnは既に入っています)

そこまでできたら、http://localhost:9900 にアクセスして確認してください。ここまでできたら、進捗管理シートの「サーバーを立てる」にチェックを入れておいてください。

閉じるときには、`Ctrl+C`でサーバーを閉じ、`exit`を実行してコンテナから出ます。最後に以下のように実行することで、バックグラウンドで動いていたコンテナが終了します。

```bash
make down
```
