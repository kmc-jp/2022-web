# 第6回

まずは、リポジトリの更新に追従するために、

```
git pull
```

を実行します。

## 🔨 サーバーの立ち上げ

**Docker・Composeおよびmakeが必要です**

1. まずは`2022-web`フォルダで以下のコマンドを実行します。

```bash
cd section-template/section-06
```

2. 続いて、

```bash
make prepare
```

を実行します。

> `make prepare` は最初の1回のみ実行すればよいです。2回以上実行すると、
> 
> ```
> Error response from daemon: network with name section-06-app-network already exists
> make: *** [Makefile:3: prepare] エラー 1
> ```
> 
> などと出てエラーになりますがこれは問題ありません。

3. 続いて、

```bash
make setup
```

を実行します。ログが流れ続けると思うので、止まるまで待ってください。(環境によっては10分以上かかるかもしれません)

4. 最後に、

```bash
make up
```

と実行します。

```
Can't connect to MySQL server on 'db' (115)
Couldn't create 'app_development' database. Please check your configuration.
rails aborted!
```

などと出てエラーになる場合はまだ準備が終わっていないので、もうしばらく待ってください。

成功するとこのようなログが流れます。

```
[+] Running 1/0
 ⠿ Container section-06-db-1  Running                                       0.0s
Database 'app_development' already exists
Created database 'app_test'
docker-compose run app rails db:migrate
[+] Running 1/0
 ⠿ Container section-06-db-1  Running                                       0.0s
== 20220620155004 CreateSessions: migrating ===================================
-- create_table(:sessions)
   -> 0.0390s
== 20220620155004 CreateSessions: migrated (0.0390s) ==========================

== 20220621145811 AddConstraintToSessions: migrating ==========================
-- add_foreign_key(:sessions, :users, {:column=>:user_id, :primary_key=>"user_id"})
   -> 0.1021s
-- add_index(:sessions, [:user_id, :session])
   -> 0.0363s
== 20220621145811 AddConstraintToSessions: migrated (0.1386s) =================
```

5. ここまでできれば準備は完了です。http://localhost:32000 にアクセスしてください。

表示されたWebサービスは、新規登録・ログイン・ログアウトができるだけの簡単なものです。

任意のIDで新規登録を行い、これらの機能が正しく使用できることを確認してください。
