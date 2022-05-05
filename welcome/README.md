# Webサービス勉強会2022へようこそ！

## 🔨 環境構築の確認

### 💪 Dockerを使わない場合

npmまたはyarnが必要です。

1. npmを使う場合

```bash
cd front
npm install
npm run start
```

2. yarnを使う場合

```bash
cd front
yarn install
yarn run start
```

ブラウザが自動で開くと思いますが、開かない場合は http://localhost:3000 にアクセスして確認してください。

### 🐳 Dockerを使う場合

docker-composeおよびmakeが必要です。

```bash
make build
make install
make serve
```

http://localhost:3789 から確認できます。

閉じるときには、以下のようにすると綺麗になります。

```
make down
```
