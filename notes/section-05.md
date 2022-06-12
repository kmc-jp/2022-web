# 第5回 可変レイアウト

## 開発環境について

[第5回 開発環境構築手順](https://github.com/kmc-jp/2022-web/blob/main/section-template/section-05/README.md) を参照

## レスポンシブデザイン

[レスポンシブデザイン | MDN](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Responsive_Design) にはこのようにあります。

> これは、さまざまな画面幅、解像度などに合わせて Web ページがレイアウトと外観を変更できるようにする一連の実践です。

レスポンシブデザインが最も必要になる場面は、スマートフォンでの表示に対応する場合です。(実際は **PC** と **スマートフォン** の2つに分けるのではなく、画面幅によってもう少し細分化します。)

### メディアクエリー

[レスポンシブデザイン | MDN](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Responsive_Design) には以下のようなコードが例として紹介されています。


```css
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
} 
```

> 次のメディアクエリーは、現在の Web ページが画面メディア（したがって印刷ドキュメントではない）として表示され、ビューポートの幅が少なくとも 800 ピクセルであるかどうかをテストします。 .container セレクターの CSS は、これら2つのことが当てはまる場合にのみ適用されます。

```html
<div class="container">
</div>
```

例えば以下のようなスタイルはどのように動作するでしょうか。

```css
.container {
  background-color: blue;
  height: 200px;
  width: 200px;
}

@media screen and (max-width: 800px) {
  .container {
    background-color: red;
  }
}

@media screen and (max-width: 400px) {
  .container {
    background-color: yellow;
  }
}
```

次は文字サイズを考えてみます。以下の例では、画面幅に応じて文字サイズが連続的に変化します。

```html
<p>Webサービス勉強会2022</p>
```

```css
p {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

@media screen and (max-width: 800px) {
  p {
    font-size: 5vw;
  }
}

@media screen and (max-width: 400px) {
  .p {
    font-size: 20px;
  }
}
```

さてここで、`vw` という新しい単位が出てきました。CSSには多くの単位があるので、ここで確認してみます。

[CSS の値と単位 | MDN](https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/Values_and_units)

ちなみに2つ目の例は、[clamp()](https://developer.mozilla.org/ja/docs/Web/CSS/clamp) を利用することで簡単に書くこともできます。

```css
p {
  font-size: clamp(20px, 5vw, 40px);
  font-weight: bold;
  text-align: center;
}
```

## フレックスボックス

```html
<header>
  <h1>Sample flexbox example</h1>
</header>
<section>
  <article>
    <h2>First article</h2>

    <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
  </article>

  <article>
    <h2>Second article</h2>

    <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
  </article>

  <article>
    <h2>Third article</h2>

    <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>

    <p>Cray food truck brunch, XOXO +1 keffiyeh pickled chambray waistcoat ennui. Organic small batch paleo 8-bit. Intelligentsia umami wayfarers pickled, asymmetrical kombucha letterpress kitsch leggings cold-pressed squid chartreuse put a bird on it. Listicle pickled man bun cornhole heirloom art party.</p>
  </article>
</section>
```

```css
header {
  background: purple;
  height: 100px;
}

h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}

article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
```

ここで、`section` タグに `display: flex;` を指定してみます。

```css
header {
  background: purple;
  height: 100px;
}

section {
  display: flex;
}

h1 {
  text-align: center;
  color: white;
  line-height: 100px;
  margin: 0;
}

article {
  padding: 10px;
  margin: 10px;
  background: aqua;
}
```

これだけで要素が横並びになりました。
