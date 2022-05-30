# 第1回

## 🔨 演習用サーバーの立ち上げ

演習では、サンプルのサイトを見ながらそれと同じになるようにコードを書いていきます。

実際にコードを書くのはさきほどから使用しているファイルで大丈夫なので、以下の手順でサンプルのサイトを立ち上げます。

## 演習1

### 💪 Dockerを使わない場合

npmまたはyarnが必要です。

1. npmを使う場合

```bash
cd front
npm install
npm run ex1
```

2. yarnを使う場合

```bash
cd front
yarn install
yarn run ex1
```

ブラウザが自動で開くと思いますが、開かない場合は http://localhost:9990 にアクセスして確認してください。ここまでできたら、進捗管理シートの「演習1のページを表示」にチェックを入れておいてください。

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

このようにすると、コンテナの中の `/home/2022WEB/2022-web/exercise-section-01/front` ディレクトリの中に入れるので (pwdコマンドで確認してみてください)、続けて

```bash
yarn install
yarn run ex1
```

と実行します。(yarnは既に入っています)

そこまでできたら、http://localhost:9990 にアクセスして確認してください。進捗管理シートの「演習1のページを表示」にチェックを入れておいてください。

### 解答

演習1の解答は [演習1 解答1](https://github.com/kmc-jp/2022-web/blob/main/exercises/section-01/answer.md#%E6%BC%94%E7%BF%921) にあります。

ここまでできたら、進捗管理シートの「演習1終了」にチェックを入れておいてください。

## 演習2

### 💪 Dockerを使わない場合

`Curl+C`で一度サーバーを止めてから、以下を実行します。

1. npmを使う場合

```bash
npm run ex2
```

2. yarnを使う場合

```bash
yarn run ex2
```

ブラウザが自動で開くと思いますが、開かない場合は http://localhost:9990 にアクセスして確認してください。

### 🐳 Dockerを使う場合

`Curl+C`で一度サーバーを止めてから、以下を実行します。

```bash
yarn run ex2
```

そこまでできたら、http://localhost:9990 にアクセスして確認してください。

### 解答

演習2の解答は [演習1 解答2](https://github.com/kmc-jp/2022-web/blob/main/exercises/section-01/answer.md#%E6%BC%94%E7%BF%922) にあります。

ここまでできたら、進捗管理シートの「演習2終了」にチェックを入れておいてください。

## 演習3

### 💪 Dockerを使わない場合

`Curl+C`で一度サーバーを止めてから、以下を実行します。

1. npmを使う場合

```bash
npm run ex3
```

2. yarnを使う場合

```bash
yarn run ex3
```

ブラウザが自動で開くと思いますが、開かない場合は http://localhost:9990 にアクセスして確認してください。

### 🐳 Dockerを使う場合

`Curl+C`で一度サーバーを止めてから、以下を実行します。

```bash
yarn run ex3
```

そこまでできたら、http://localhost:9990 にアクセスして確認してください。

### 解答

演習3の解答は [演習2 解答3](https://github.com/kmc-jp/2022-web/blob/main/exercises/section-01/answer.md#%E6%BC%94%E7%BF%923) にあります。

ここまでできたら、進捗管理シートの「演習3終了」にチェックを入れておいてください。

## 演習を終わる際の閉じ方

### 💪 Dockerを使わない場合

閉じるときには、`Ctrl+C`でサーバーを終了してください。

### 🐳 Dockerを使う場合

閉じるときには、`Ctrl+C`でサーバーを閉じ、`exit`を実行してコンテナから出ます。最後に以下のように実行することで、バックグラウンドで動いていたコンテナが終了します。

```bash
make down
```
