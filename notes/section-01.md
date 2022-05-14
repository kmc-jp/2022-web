# Section 1 : HTMLの構造と基本的なタグ

## 開発環境について

サーバーを立ち上げていると思うので、資料内のサンプルコードを貼り付けて、実際に動かして確認してください。

`section-01/src/index.html`を編集すれば、自動的にブラウザの表示が更新されます。

## まずは書いてみましょう！
`section-01/src/index.html`の内容は、以下のようになっていると思います。ここに何が書いてあるかは今後説明していくので一旦置いておいて、まずは実際にHTMLを書いてみましょう！書けば分かるようになります！

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

</body>
</html>
```

1行空いている部分
```html
<body>
<!-- ここ -->
</body>
```

に、`<h1>こんにちは</h1>`と書けば、でかでかと「こんにちは」が表示されると思います。

みなさんなら、画面に表示されていない`<h1>`と`</h1>`に何か特別な意味があるということは分かっていただけると思います。

さて、HTMLというのは、以下のような形が基本になっています。

```html
<foo>hogehoge</foo>
```

このうち、`<foo>`や`</foo>`を**タグ**と呼んでいて、`<foo>`の形をしたものを**開始タグ**、`</foo>`の形をしたものを**終了タグ**と呼びます。開始タグと終了タグは基本的にはセットで使います。

ところで、それぞれのタグには `id`, `class`, `属性` を付けることができます。必ず付けなければならないものではありません。`class` と `属性` については今度説明するとして、`id` というものは名前の通り、タグを一意に識別できるようにするためのものです。id名は自由に付けることができますが、空白を含めるべきではありません。

```html
<p id="description">GitHub is where over 65 million developers shape the future of software, ...</p>
```

さて、`h1`の話に戻りますが、`h1`は**最上位の見出し**を表すタグです。見出しなので大きく表示されたわけです。

細かい話はあとに回すとして、まずはいろいろなタグを書いて覚えていきましょう！

### [h1, h2, h3, h4, h5, h6](https://developer.mozilla.org/ja/docs/Web/HTML/Element/Heading_Elements)

見出しを表示するために使用します。h1は最上位、h2, h3, ...の順に見出しレベルが下がります。<br>
見出しレベルは飛ばしてはいけません。また、h1の複数回の使用は避けるのが無難です。<br>

#### 見出し要素の使用に関する注意点

一般的なウェブブラウザでは、見出し要素は大きなフォントサイズ・太字で描画されます。しかし、HTMLは文章の構造を表すためのものであり、**スタイルの調整にHTMLを用いてはいけません。** スタイルは全てCSSを用いて調整します。**文字サイズを大きくする目的で見出し要素を使用してはいけません。**<br>
詳しくは、CSSの回でさらに掘り下げて扱います。

```html
<h1>KMC</h1>

<!-- 省略 -->

<h2>KMCの活動</h2>

<!-- 省略 -->

<h2>今後の予定</h2>

<!-- 省略 -->

```

### [p](https://developer.mozilla.org/ja/docs/Web/HTML/Element/p)

テキストを表示する際に使用します。

```html
<p>カラスは黒い鳥</p>
```

### [br](https://developer.mozilla.org/ja/docs/Web/HTML/Element/br)

テキストを改行する際に使用します。終了タグを記述しない点が特徴です。

```html
<p>カラスは黒い鳥<br>黒くない鳥はカラスではない</p>
```

#### 改行要素の使用に関する注意点

要素間にスペースを開けるために、brを使用してはいけません。スペースを調整するためには、CSSを用います。<br>
これについても、CSSの回で詳しく扱います。

### [a](https://developer.mozilla.org/ja/docs/Web/HTML/Element/a)

ハイパーリンクの作成に使用します。リンク先を指定するには、`href`属性を使用します。また、リンク先を新しいタブで開くようにする場合は、`target`属性を用いて`target="_blank"`と指定します。

```html
<a href="https://example.com" target="_blank">テストリンク</a>
```

#### ページ内リンクの作成

ページ内リンクを貼る場合は、`href`属性の値に`#{飛ぶ先の要素のid名}`を指定します。

```html
<h1>予約サイト</h1>
<p>
  <a href="#register-form">予約はこちら</a>
</p>

<!-- 省略 -->

<h2 id="register-form">予約</h2>
<div>
  <p>お名前</p>
  <input type="text">
  <p>メール</p>
  <input type="email">
</div>
```

### [img](https://developer.mozilla.org/ja/docs/Web/HTML/Element/img)

画像を表示するために使用します。表示する画像のパスを、`src`属性を用いて記述します。<br>
`alt`属性は必須ではありませんが、特別な理由がない限り、必ず書くようにすべきです。詳しくは、アクセシビリティの回で扱います。

```html
<img src="./kmc-logo.png" alt="KMC Logo">
```
<details>
<summary>パスとは？</summary>

## 絶対パスと相対パス

パスとは、ファイル等の場所を表す文字列であり、しばしば住所に例えられます。<br>

### 絶対パス

絶対パスは、現在いる場所に依らない、絶対的な場所を表します。<br>
例えば、Windowsで、デスクトップ上の画像ファイル`image.jpg`のパスは、`C:\Users\ryokohbato\Desktop\image.png`となります。<br>
`http(s)://`から始まるURL表記も、一種の絶対パスです。

### 相対パス

これに対して相対パスは、現在いるフォルダから見た場所を表します。<br>
相対パス表記において、`.`は現在いるフォルダ、`..`は現在いるフォルダの1つ上の階層を表します。<br>
例えば、以下のようなフォルダ/ファイル群を考えます。

```
 parent
├─  child
│   └─  child1.txt
└─  child2.txt
```

`parent`フォルダから見た、`child1.txt`の相対パスは、`./child/child1.txt`と表されます。<br>
また、`child1.txt`から見た`child2.txt`の相対パスは、`../child2.txt`と表されます。
</details>

### コメントアウト

以下の形式でコメントアウトが可能です。

```html
<!-- ここはコメント -->
```

### [em](https://developer.mozilla.org/ja/docs/Web/HTML/Element/em)

テキストを強調します。

```html
<em>英数字8文字以上</em>で入力してください。
```

### [strong](https://developer.mozilla.org/ja/docs/Web/HTML/Element/strong)

重要、重大、または緊急性の高いテキストを表します。

```html
電源ボタンを<strong>3秒間長押し</strong>することで、強制的に終了します。
```

### [ol](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ol)

順序付きのリストを表します。<br>
`ol`タグは、中に1つ以上の`li`要素を含めて使用します。

```html
<ol>
  <li>東京</li>
  <li>大阪</li>
  <li>神奈川</li>
</ol>
```

### [ul](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ul)

箇条書き (順序なしのリスト) を表します。<br>
`ul`タグも、中に1つ以上の`li`要素を含めて使用します。

```html
<ul>
  <li>リンゴ</li>
  <li>ミカン</li>
  <li>スイカ</li>
</ul>
```

### [li](https://developer.mozilla.org/ja/docs/Web/HTML/Element/li)

リストの項目を表します。<br>
`li`タグは、上述の`ol`タグまたは`ul`タグの中に配置して使用します。

#### リスト作成時の注意点

`ol`タグと`ul`タグの中に含められるタグは、基本的に`li`要素のみです。

### [button](https://developer.mozilla.org/ja/docs/Web/HTML/Element/button)

ボタンを表します。

```html
<button>Submit</button>
```

### [input](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input)

データ入力用の様々なコントロールを作成します。<br>
作成するコントロールの種類は`type`属性で指定します。

#### テキスト (1行) 入力用コントロール

```html
<input type="text" name="user-name" id="user-name">
```

#### メールアドレス入力用コントロール
```html
<input type="email" name="email-address" id="email-address">
```

#### パスワード入力用コントロール

```html
<input type="password" name="user-password" id="user-password">
```

#### 数字入力用コントロール

```html
<input type="number" name="age" id="age">
```

#### ボタン

```html
<input type="button" value="ボタン">
```

#### チェックボックス
```html
<input type="checkbox" name="has-read" id="has-read">
```

#### ラジオホタン

```html
<input type="radio" name="contact" id="contact-email">
```

#### 日付選択用コントロール
```html
<input type="date" name="birthday" id="birthday">
```

#### 時間入力用コントロール
```html
<input type="time" name="start-time" id="start-time">
```

#### ファイル選択用コントロール
```html
<input type="file" name="profile-icon" id="profile-icon">
```

#### スライダーコントロール

```html
<input type="range" name="volume" id="volume">
```

#### 色選択用コントロール
```html
<input type="color" name="text-color" id="text-color">
```

#### リセット用コントロール

```html
<input type="reset" value="リセット">
```

### [label](https://developer.mozilla.org/ja/docs/Web/HTML/Element/label)

`label`要素は、`input`要素とともに用いられることが多く、主に`input`要素のヒット領域を広げる目的で使用されます。

`input`要素と`label`要素を関連付ける方法は、以下の2つがあります。<br>
この方法を用いることで、テキスト部分をクリックすることで`input`要素の切り替えを行うことができます。

#### `label`要素で`input`要素を囲む

```html
<label>
  <input type="checkbox" name="is-kmc-member" id="is-kmc-member">
  KMC部員
</label>
```

#### `label`要素の`for`属性を使用する

```html
<input type="checkbox" name="is-kmc-member" id="is-kmc-member">
<label for="is-kmc-member">KMC部員</label>
```

### [progress](https://developer.mozilla.org/ja/docs/Web/HTML/Element/progress)

タスクの進捗を表します。

```html
<progress max="100" value="70"></progress>
```

### [select](https://developer.mozilla.org/ja/docs/Web/HTML/Element/select)

選択式メニューを作成します。<br>
`option`要素を用いてメニューを作成します。

```html
<select>
  <option value="dog">犬</option>
  <option value="cat">猫</option>
  <option value="rabbit">うさぎ</option>
</select>
```

### [option](https://developer.mozilla.org/ja/docs/Web/HTML/Element/option)

メニュー項目を作成します。

### [textarea](https://developer.mozilla.org/ja/docs/Web/HTML/Element/textarea)

```html
<textarea name="answer" id="answer" cols="30" rows="10">KMC</textarea>
```

複数行入力可能なテキスト入力用コントロールを作成します。

### [form](https://developer.mozilla.org/ja/docs/Web/HTML/Element/form)

フォーム (サーバーに情報を送るパーツ) を表します。(今後、`form`から送られたデータを実際に受け取って処理をする話も扱う予定です)

以下は、`form`要素と`input`要素の使用方法の例です。フィールドを必須項目にするには、`required`属性を使用します。また、入力値ヒントを表示するには、`placeholder`属性を使用します。

> [HTML 属性: required | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Attributes/required)<br>
> [placeholder 属性 | MDN](https://developer.mozilla.org/ja/docs/orphaned/Learn/HTML/Forms/HTML5_updates#the_placeholder_attribute)

```html
<form action="">
  <div>
    <input type="checkbox" name="can-read-lang" id="can-read-en">
    <label for="can-read-en">英語</label>
    <input type="checkbox" name="can-read-lang" id="can-read-ja">
    <label for="can-read-ja">日本語</label>
    <input type="checkbox" name="can-read-lang" id="can-read-fr">
    <label for="can-read-fr">フランス語</label>
  </div>
  <div>
    <label for="text-color">色の選択</label>
    <input type="color" name="text-color" id="text-color">
  </div>
  <div>
    <label for="birthday">生年月日</label>
    <input type="date" name="birthday" id="birthday">
  </div>
  <div>
    <label for="start-time">開始時刻</label>
    <input type="time" name="start-time" id="start-time">
  </div>
  <div>
    <label for="user-name">氏名</label>
    <input type="text" name="user-name" id="user-name" placeholder="山田太郎">
  </div>
  <div>
    <label for="email-address">メールアドレス</label>
    <input type="email" name="email-address" id="email-address">
  </div>
  <div>
    <label for="age">年齢</label>
    <input type="number" name="age" id="age">
  </div>
  <div>
    <label for="profile-icon">プロフィールアイコン</label>
    <input type="file" name="profile-icon" id="profile-icon">
  </div>
  <div>
    <label for="user-password">パスワード</label>
    <input type="password" name="user-password" id="user-password">
  </div>
  <div>
    <input type="radio" name="contact" id="contact-email">
    <label for="contact-email">メール</label>
    <input type="radio" name="contact" id="contact-phone">
    <label for="contact-phone">電話</label>
  </div>
  <div>
    <input type="range" name="volume" id="volume">
  </div>
  <div>
    <progress></progress>
  </div>
  <div>
    <progress max="100" value="80"></progress>
  </div>
  <div>
    <label for="address">居住地区</label>
    <select name="address" id="address">
      <option value="address-1">北海道</option>
      <option value="address-2">東北</option>
      <option value="address-3">関東</option>
      <option value="address-4">中部</option>
      <option value="address-5">関西</option>
      <option value="address-6">中国</option>
      <option value="address-7">四国</option>
      <option value="address-7">九州・沖縄</option>
    </select>
  </div>
  <div>
    <label for="others">備考</label>
    <textarea name="others" id="others" cols="30" rows="10" placeholder="自由に記述してください。"></textarea>
  </div>
  <div>
    <input type="reset" value="リセット">
    <input type="button" value="送信">
  </div>
</form>
```

### [dl](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dl)

`dl`タグ、`dt`タグ、`dd`タグを用いて、項目の説明や定義を記述することができます。<br>
`dl`タグの中に`dt`タグと`dd`タグを配置します。

### [dt](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dt)

`dt`タグは説明/定義の対象となる用語を表します。

### [dd](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dd)

`dd`タグは`dt`タグで指定した用語の説明/定義を表します。

```html
<dl>
  <dt>アメリカ</dt>
  <dd>アメリカ合衆国</dd>

  <dt>イギリス</dt>
  <dd>グレートブリテン及び北アイルランド連合王国</dd>

  <dt>日本</dt>
  <dd>日本国</dd>
</dl>
```

### [table](https://developer.mozilla.org/ja/docs/Web/HTML/Element/table)

表 (テーブル) を作成します。

### [th](https://developer.mozilla.org/ja/docs/Web/HTML/Element/th)

表のヘッダーを表します。

### [tr](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tr)

表の行を表します。

### [td](https://developer.mozilla.org/ja/docs/Web/HTML/Element/td)

表のセルを定義します。

### [thead](https://developer.mozilla.org/ja/docs/Web/HTML/Element/thead)

表の列見出しを表します。

### [tbody](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tbody)

表の本体部分を表します。

### [tfoot](https://developer.mozilla.org/ja/docs/Web/HTML/Element/tfoot)

表の列フッターを表します。

```html
<table>
  <thead>
    <tr>
      <th>市町村</th>
      <th>人口 (万人)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>大阪市</th>
      <td>275</td>
    </tr>
    <tr>
      <th>横浜市</th>
      <td>372</td>
    </tr>
    <tr>
      <th>名古屋市</th>
      <td>233</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>計</th>
      <td>880</td>
    </tr>
  </tfoot>
</table>
```
