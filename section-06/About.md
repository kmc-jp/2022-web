# 第6回

Dockerを使用せず内容のみ理解したいという場合は、このまま概要に進んでください。Dockerを使用する環境が構築できている方は [第6回 サービスの立ち上げ](https://github.com/kmc-jp/2022-web/blob/main/section-06/About.md) の手順に従って、ぜひWebサービスを実際に立ち上げて確認しながらチャレンジしてみてください。

# 概要

このWebサービスには既に2万人分のデータが登録されています。

今回はこのWebサービスから登録情報が漏洩したことを想定します。漏洩したデータは、 [db.json](https://raw.githubusercontent.com/kmc-jp/2022-web/main/section-06/db.json) にあります。

このデータをもとに、IDとパスワードの解析を行います。

IDとパスワードの組をいくつ割り出すことができるでしょうか。ID・パスワードの組が正しいかどうかは、立ち上げたWebサービスにログインできるかどうかで確認できます。

時間があればPythonなどで簡単なスクリプトを書いて、解析を自動化するのにもチャレンジしてみてください。

[ヒントと解答](https://github.com/kmc-jp/2022-web/blob/main/section-06/Hints.md)
