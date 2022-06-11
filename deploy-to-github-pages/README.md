# GitHub Pagesへのデプロイ

## やりかた

1. [2022-web-profile](https://github.com/kmc-jp/2022-web-profile) をforkします

![2022-web-profileをfork](./fork1.png)

2. そのままの設定で良いので、「Create fork」を押します

![forkの設定画面](./fork2.png)

3. 「Actions」タブに移動します

![Actionsタブへの移動](./actions1.png)

4. 「I understand my workflows, go ahead and enable them」を押して、ワークフローを有効化します

![ワークフローを有効化](./actions2.png)

5. 続いて「Settings」に移動します

![Settingsタブへの移動](./actions3.png)

6. 「Pages」へ移動します

![Pagesセクションへの移動](./pages1.png)

7. Sourceが「None」に設定されているはずなので、「gh-pages」に変更します。

![SourceがNoneに設定されている様子](./pages2.png)

![Select Branchの様子](./pages3.png)

8. 変更できたら「Save」を押します

![変更の保存](./pages4.png)

9. 「Actions」タブに戻ります

![Actionsタブへ移動](./pages5.png)

10. 「pages build and deployment」があると思うのでこれを押します

![「pages build and deployment」ワークフローが開始されている様子](./pages6.png)

11. 「deploy」欄に記載されているURLを押します

![「pages build and deployment」ワークフローの詳細ページ](./pages7.png)

12. このようにページが表示されていればOKです

![GitHub Pagesで公開されたページの様子](./pages8.png)

このページは、`main` ブランチに変更がpushされると自動的に内容が更新されるようになっています

## ページの編集

**forkしたリポジトリを** cloneします

`src/index.html` にHTML、`src/style.css` にCSS、`src/images/` 以下に画像を配置します

開発環境の立ち上げ方は、[kmc-jp/2022-web-profile](https://github.com/kmc-jp/2022-web-profile) に記載されているのでそちらをどうぞ
