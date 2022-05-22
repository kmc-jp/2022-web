# 演習の解答

`body`タグの中のみ記載

## 演習1

```html
<body>
  <h1>演習1</h1>

  <p>
    京大マイコンクラブは京都大学を中心に活動している京都大学全学公認のコンピュータサークルです。
    KMCは<span class="first-letter">K</span>yoto university <span class="first-letter">M</span>icrocomputer <span class="first-letter">C</span>lubの略です。 
  </p>
</body>
```

```css
.first-letter {
  font-weight: bold;
}
```

## 演習2

```html
<body>
  <h1>演習2</h1>

  <h2>KMCの活動</h2>
  <h3>KMCはコンピュータを使って何かを創るサークルです。</h3>
  <p class="article">
    <span class="summary">具体的にはコンピュータを使ったゲーム制作、音楽制作、イラスト制作、 Webサービス開発、電子工作をはじめとする創作活動や、競技プログラミング、情報分野の勉強会、そしてサーバいじり等を行っています。</span>
    また、2010年からは部誌を毎年制作し、上記の活動等を書籍という形で公開しています。<br>
    これらの活動を部員のそれぞれが思い思いに行いながら、仲間と意見交換し、先輩から助言をもらい、互いに切磋琢磨していく場がKMCです。<br>
    サークルが個人に対して活動を強いることはありません。
    サークル内で進める活動はプロジェクトと呼ばれ、どんなプロジェクトを立てるかは個人、あるいは数人で決めます。<br>
    <span class="quotation">“こんなゲームを作りたい”</span> と思った人を中心として、プログラムを書く人、絵を描く人、曲を作る人が集まって、 ゲームシステムができ、背景とキャラの画像が付き、BGMが付いて完成に至るようなゲーム制作プロジェクトはKMCの活動の好例です。<br>
    プロジェクトの成果は主に京都大学の文化祭である11月祭（NF）、 毎年夏と冬に東京ビックサイトで開催されるコミックマーケットで公開されます。 両イベントでの発表内容については <a href="https://www.kmc.gr.jp/events/">出展情報のページ</a> をご覧下さい。 また、当サイトでも一部のプロジェクトを公開しています。<a href="https://www.kmc.gr.jp/projects/">活動内容のページ</a> をご覧下さい。
  </p>
</body>
```

```css
.article {
  line-height: 1.5;
}

.summary {
  font-weight: bold;
  border-bottom: 1px red solid;
}

.quotation {
  font-style: italic;
}
```

## 演習3

```html
<body>
  <h1>演習3</h1>

  <div class="red-rectangle">200px x 400px</div>
  <div class="blue-rectangle">300px x 100px</div>
  <div class="green-rectangle">200px x 400px, 角丸16px</div>
</body>
```

```css
.red-rectangle {
  background-color: red;
  height: 200px;
  width: 400px;
}

.blue-rectangle {
  background-color: blue;
  height: 300px;
  width: 100px;
}

.green-rectangle {
  background-color: green;
  border-radius: 16px;
  height: 200px;
  width: 400px;
}
```
