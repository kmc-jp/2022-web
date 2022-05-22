# 第2回 書いて覚えるCSS

## 開発環境について

前回使用した環境をそのまま使えるので使いまわします。

今回も、資料内のサンプルコードを貼り付けて、実際に動かして確認してください。

`section-01/front/src/index.html`にHTML、`section-01/front/src/style.css`にCSSを書いていきます。それぞれのファイルを編集すれば、自動的にブラウザの表示が更新されます。(されない場合は手動で更新してください)

## まずは書いてみましょう！
さて、前回は`section-01/front/src/index.html`をこのように書いてもらったと思います。(おそらく内容が変わっていると思うので、全部消してコピペしてもらえればOKです。)

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>第1回 | Webサービス勉強会 2022</title>
</head>
<body>
  <h1>こんにちは</h1>
</body>
</html>
```

前回同様にでかでかと「こんにちは」が表示されたでしょうか、今回は文字の色を変えてみましょう。

`section-01/front/src/style.css`を開いてください。まだ何も書かれていないと思うので、

```css
h1 {
  color: red;
}
```

と書いてみましょう。文字が赤色に変わったでしょうか。今書いたものがCSSです。とりあえず、HTMLで大枠を作ってCSSで見た目を変える、と考えてもらえればOKです。もっと詳しい話は次回+それ以降で行います。

## CSSを書くにあたってのHTMLの話

### [div](https://developer.mozilla.org/ja/docs/Web/HTML/Element/div)

divタグは、複数の要素をまとめるために使用します。

```html
<div>
  <p>お名前</p>
  <input type="text">
  <p>メール</p>
  <input type="email">
</div>
```

### [span](https://developer.mozilla.org/ja/docs/Web/HTML/Element/span)

spanタグも、複数の要素をまとめるために使用します。

```html
<span><a href="https://example.com" target="_blank">ここ</a>をクリック</span>
```

`div`と`span`は何が違うでしょうか、後半に説明します。

### id, class, 属性

各タグには、id, class, 属性を付けることができます。必ず付けなければならないものではありません。

#### [id](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/id)

idは任意のタグに付けることができます。<br>
idを用いることで、タグを一意に識別できるようにすることができます。また、id名は自由に付けることができますが、空白を含めるべきではありません。

```html
<p id="description">GitHub is where over 65 million developers shape the future of software, ...</p>
```

#### [class](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/class)

こちらも詳しくはCSSの回で説明しますが、classも任意のタグに付けることができます。<br>
classを用いることで、タグを識別できるようにできます。また、class名は自由に・複数付けることができます。この点がidとの違いです。<br>classを複数付けるときは、クラス名を空白で区切って記述します。

```html
<p id="description" class="title-content sub-text">GitHub is where over 65 million developers shape the future of software, ...</p>
```

#### [属性](https://developer.mozilla.org/ja/docs/Glossary/Attribute)

属性も任意のタグに付けることができ、タグに対して情報を付与することができます。属性は`name="value"`の形を取りますが、等号以降を省略して書かれることもあります。

```html
<input type="checkbox" checked>
```

上記の例では、`input`要素に`type`属性と`checked`属性が付与されています。

## CSSの基本構造

CSSは以下のような構造から成ります。

```css
h1 {
  color: red;
}
```

`h1`の部分を`セレクター`、`color`の部分を`プロパティ`、`red`の部分を`プロパティ値`と呼びます。<br>
セレクターはCSSの適用対象を表し、適用されるCSSはプロパティとそれに対応するプロパティ値によって表現されます。<br>
例えば、上記のCSSは全てのh1タグのテキスト色を赤色に変更します。

1つのセレクターに対してプロパティとプロパティ値の組は複数記述することができます。

```css
p {
  border: 1px solid black;
  color: red;
  width: 500px;
}

div {
  background-color: blue;
  border: 1px solid yellow;
}
```

## セレクターの基本記法

### [要素による指定](https://developer.mozilla.org/ja/docs/Web/CSS/Type_selectors)

要素名を直接記述します。

```css
body {
  background-color: #333;
  color: white;
}

a {
  color: #ccc;
  text-decoration: none;
}
```

全ての要素に対してCSSを割り当てる場合は、`*`を記述します。

> [全称セレクター | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Universal_selectors)

```css
* {
  color: white;
}
```

### [idによる指定](https://developer.mozilla.org/ja/docs/Web/CSS/ID_selectors)

id名の前に`#`を付けて指定します。

```css
#alert {
  background-color: rgba(255, 192, 203, 0.3);
  display: inline-block;
  padding: 8px;
}
```

### [クラスによる指定](https://developer.mozilla.org/ja/docs/Web/CSS/Class_selectors)

クラス名の前に`.`を付けて指定します。

```css
.article-card {
  border-radius: 8px;
  box-shadow: 0 0 4px #7777;
  display: inline-block;
  padding: 8px;
}
```

### [属性による指定](https://developer.mozilla.org/ja/docs/Web/CSS/Attribute_selectors)

`[{属性名}={属性値}]`の形式で指定します。属性値が存在しない場合は、`[{属性名}]`の形式で指定します。<br>

```css
[aria-selected="true"] {
  background-color: #7773;
}
```

## 基本的なプロパティ

### テキスト色

テキストの色を指定するには、[`color`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/color)を使用します。

```css
p {
  color: black;
}
```

```css
p {
  color: #eee;
}
```

```css
p {
  color: rgb(34, 12, 64);
}
```

```css
p {
  color: rgba(34, 12, 64, 0.6);
}
```

### 背景色

要素の背景色を指定するには、[`background-color`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/background-color)を使用します。

```css
div {
  background-color: gray;
}
```

```css
div {
  background-color: rgb(255, 255, 128); 
}
```

```css
div {
  background-color: rgba(117, 190, 218, 0.5);
}
```

### 背景画像

### フォント
フォントの指定には、[`font-family`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/font-family)を使用します。

```css
.article {
  font-family: Gill Sans Extrabold, sans-serif;
}
```

フォントサイズの指定には、[`font-size`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/font-size)を使用します。

```css
.article {
  font-size: 12px;
}
```

```css
.article {
  font-size: 1.2em;
}
```

```css
.article {
  font-size: smaller;
}
```

### 太字・斜体

太字の指定には、[`font-weight`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/font-weight)を使用します。

```css
.title {
  font-weight: bold;
}
```

```css
.descriptions {
  font-weight: lighter;
}
```

斜体の指定には、[`font-style`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/font-style)を使用します。

```css
.article-main {
  font-style: italic;
}
```

### テキスト修飾

テキスト装飾の指定には、[`text-decoration`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/text-decoration)を使用します。

```css
.message-important {
  text-decoration: underline;
}
```

```css
.format-error {
  text-decoration: red wavy underline;
}
```

### 文字間隔

文字間隔の指定には、[`letter-spacing`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/letter-spacing)を使用します。

```css
.article {
  letter-spacing: .2rem;
}
```

```css
.article {
  letter-spacing: -1px;
}
```

### 行の高さ

行の高さの指定には、[`line-height`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/line-height)を使用します。<br>
`line-height`プロパティには、単位のない値を指定するのが好ましいとされています。

```css
.article {
  line-height: 2;
}
```

### 枠線

枠線の指定には、[`border`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/border)を使用します。

```css
.button-submit {
  border: 1px solid orange;
}
```

```css
.button-submit {
  border: thick double #32a1ce;
}
```

### 角丸

角丸の指定には、[`border-radius`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/border-radius)を使用します。

```css
.card {
  border-radius: 32px;
}
```

```css
.icon-header {
  border-radius: 50%;
}
```

```css
.logo {
  border-radius: 25% 10%;
}
```

### 透明度

要素全体の指定には、[`opacity`プロパティ](https://developer.mozilla.org/ja/docs/Web/CSS/opacity)を使用します。<br>
このプロパティは子要素にも継承されます。<br>
背景色のみを透過したり、テキスト色のみを透過したりする場合は、背景色やテキスト色を透明度付きの色で指定してください。

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```

### 幅・高さ

```css
.square {
  height: 100px;
  wight: 100px;
}
```

## もうちょっと詳しい話

### `div`と`span`、何が違うねん

これを見れば全てが分かります。

```html
<div>div</div>
<span>span</span>
```

```css
div {
  background-color: red;
  height: 100px;
  weight: 100px;
}

span {
  background-color: blue;
  height: 100px;
  weight: 100px;
}
```

ブロック要素とインライン要素などと呼び分けられて区別されることもありますが、この呼び方は廃止されました。

### `id`と`class`、どっち使えばええねん

よくある話ですが、基本的に`class`しか使いません。簡単に言うと、CSSを使いまわすためです。

### どうやってCSS読み込んでんねん

今度やります。
