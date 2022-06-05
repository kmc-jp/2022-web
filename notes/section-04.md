# 第4回 Webアクセシビリティの基礎

## 開発環境について

[第4回 開発環境構築手順](https://github.com/kmc-jp/2022-web/blob/main/section-template/section-04/README.md) を参照

## アクセシビリティとは

アクセシビリティとは何でしょうか。[アクセシビリティとは？ (MDN)](https://developer.mozilla.org/ja/docs/Learn/Accessibility/What_is_accessibility#so_what_is_accessibility) には、このようにあります。

> アクセシビリティというのはあなたのウェブサイトを可能な限り多くの人に利用してもらうようにすることです。かつては我々はアクセシビリティのことをハンディキャップを持つ人々のためのものだと考えていましたが、現在はモバイルデバイスや遅いネットワークを利用している人々のためのものでもあると考えられています。

アクセシビリティについて考慮することは、何らかの障碍を持った人のためだけではなく、Webを利用する全ての人にとって必要なことなのです。手を怪我していたり、PCの周辺機器を壊れていたりするとき、より強く実感することになるはずです。

[私たちが考える"不利な条件"とは？ (MDN)](https://developer.mozilla.org/ja/docs/Learn/Accessibility/What_is_accessibility#what_kinds_of_disability_are_we_looking_at) では、Webアクセシビリティにおいて重要な点がいくつも紹介されています。ここでは、特に重要な一部のキーワードをピックアップしておくにとどめますが、Webアクセシビリティを学ぶにあたって、読んでおいて決して損はないはずです。

### キーワード

- スクリーン拡大鏡 / ズーム機能
- スクリーンリーダー
- 色覚異常 (色覚多様性)
- 動画のテキストトラック (字幕)
- キーボードによるコントロール
- 一貫性のあるデザインやナビゲーション

## なぜ今アクセシビリティを学ぶのか

HTMLやCSSは、ある程度身につけやすく書きやすいというメリットの反面、特にHTMLはその記法の自由度の高さから質の低いコードが生まれやすいという欠点もあります。しかし、見た目に影響のないような細かいルールは、煩わしく感じてしまうことも多いかと思います。しかし、それらのルールの中にはアクセシビリティの面でも意味のあるルールがたくさんあります。アクセシビリティを学ぶことは、それらのルールをより深く理解する助けになり、より良いコードを書くことに繋がります。

## アクセシブルな実装

さて、ここからはアクセシビリティとそれに関わるアクセシブルな実装の方法について詳しく学びます。今回は、Microsoftが公開している [Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners) から [Accessibility Fundamentals](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/1-getting-started-lessons/3-accessibility/README.md) の項を参照しつつ、アクセシビリティの基礎を学びます。

### スクリーンリーダー

Webアクセシビリティといえばスクリーンリーダーの話題になることも多いですが、それほどスクリーンリーダーについて考慮することが重要であるということです。

### ズーム

ウェブサイトは、ズームされることを考慮に入れてデザイン・実装するべきです。
また、最近ではブラウザの設定で、デフォルトの文字の大きさを選べることもあります。(小さめ、普通、大きめなど)

### コントラストチェッカー

ウェブサイトは、あくまで閲覧者あってのものであることを常に意識し、デザイン第一にならないように気を配る必要があります。特に先程キーワードとして挙げた、色覚異常 (色覚多様性) を持った人のことを考慮することは非常に大切です。

例えば、白の背景に黄色の文字がのっているデザインは、多くの人にとって見にくいものであると思いますが、このような色の調整は非常に大切です。

例えば、Adobe Colorには [アクセシビリティツール](https://color.adobe.com/ja/create/color-accessibility) が附属しており、デザインのコントラストに問題がないかどうかなどを確認することができます。

### Lighthouse

Google製のWebサイトパフィーマンスツールです。アクセシビリティだけでなく、ロード時間などもチェックできます。

### 主要な要素における注意点

#### リンクテキスト

スクリーンリーダーによって読み上げられることを意識しておきましょう。

#### 画像の代替テキスト

`img`タグには必ず`alt` 属性をつけましょう。また、ただの飾りのための画像など、読み上げられる必要のない画像では、意図的に`alt`属性を空文字列`""`にします。この場合も、`alt`属性を付与しないのではありません。

```html
<img src="./images/kmc.png" alt="京大マイコンクラブのロゴ">
```

### セマンティックなHTML

HTMLを”意味”に基づいてマークアップすることを常に意識しましょう。例えば、文字を大きくしたいからといって、見出しとしての意味を持たないテキストを、見出しを表す`h1`タグや`h2`タグでマークアップすることは避けなければなりません。文字の大きさを変える場合は、CSSを使用し、`font-size`プロパティを指定するべきです。

特に見出しは特に重要な意味をもつ要素であり、見出しでない部分を見出しとしてマークアップすることは大きな問題です。

例えば、以下の例は**セマンティックでない**リンクです。`a`タグを使用してマークアップするべきです。

```html
<span id="link-like">ペルシャ猫</span>は長毛種の代表的な品種で、古くからショーキャットとして認められる品種の一つである。
```

```css
#link-like {
  color: blue;
  cursor: pointer;
  text-decoration: underline 1px solid;
}
```

```js
document.getElementById("link-like").addEventListener("click", () => {
  window.open('https://ja.wikipedia.org/wiki/%E3%83%9A%E3%83%AB%E3%82%B7%E3%83%A3_(%E3%83%8D%E3%82%B3)', '_blank');
});
```

### WAI-ARIA

[WAI-ARIAの基本 (MDN)](https://developer.mozilla.org/ja/docs/Learn/Accessibility/WAI-ARIA_basics) には、このようにあります。

> WAI-ARIA は W3C によって定められた仕様で、要素に適用できる追加の意味論を提供する一連の HTML 属性を定義しており、それが欠けているどのような場所でもアクセシビリティを向上させます。

先程述べたとおり、HTMLではその要素の意味に適合するタグを使用してマークアップしていくのですが、既存のタグでは意味を表しきれない場面もあります。そのような場合、HTMLタグが持つ意味に加えて追加の意味論を与える方法がWAI-ARIAです。

[MDNに掲載されているタブ型UIの例](https://developer.mozilla.org/ja/docs/Learn/Accessibility/WAI-ARIA_basics#guiding_users_through_complex_widgets) が分かりやすいです。

### キーボードによるコントロールと視覚的な手がかりの提供

キーボードだけで操作可能であることを目指しましょう。また、キーボードでの操作時はアウトライン (フォーカスリング) を表示するなどして、フォーカスが当たっている要素を明示するようにしましょう。

```css
.submit--ok-keyboard:focus-visible {
  outline: 1px gray dashed;
  outline-offset: 4px;
}
```

## まとめ

さて、ここまで聞けば [Accessibility Fundamentals](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/1-getting-started-lessons/3-accessibility/README.md) の画像 (Creating Accessible Webpages) に書かれていることがよく分かるようになっていると思います。

![](https://raw.githubusercontent.com/microsoft/Web-Dev-For-Beginners/main/sketchnotes/webdev101-a11y.png)

これからWebページを開発していく際、これらのことを常に意識していきましょう。今後もWebサービス勉強会では、定期的にWebアクセシビリティについて扱う予定です。
