# Docker環境のセットアップ

`Docker`および`Compose`がインストールできたら、まずはインストールの確認をします。

```bash
$ docker --version
Docker version 20.10.16, build aa7e414fdc

$ docker-compose --version
Docker Compose version 2.5.1
```

# Dockerを動かしてみる

`make`もインストールできたら、インストールの確認をします。

```bash
$ make --version
GNU Make 4.3
このプログラムは x86_64-pc-linux-gnu 用にビルドされました
Copyright (C) 1988-2020 Free Software Foundation, Inc.
ライセンス GPLv3+: GNU GPL バージョン 3 以降 <http://gnu.org/licenses/gpl.html>
これはフリーソフトウェアです: 自由に変更および配布できます.
法律の許す限り、　無保証　です.
```

続いて、**`docker-setup`フォルダで**以下のように実行してください。

```bash
$ make up
```

> ここで、`Cannot connect to the Docker daemon at ...(中略) Is the docker daemon running?` のようなメッセージが出ている場合は、Dockerデーモンを起動する必要があります。
> 
> ```bash
> sudo systemctl start docker
> ```

再び入力待ち状態に戻ったら、

```bash
$ make docker-check
```

「2022WEB」と表示されることを確認できたでしょうか。

最後に

```bash
make down
```

で終了します。
