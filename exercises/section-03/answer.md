# 演習の解答

`body`タグの中のみ記載

## 演習1

```html
<body>
  <h1>演習1</h1>

  <article class="card">
    <p class="card__title">KMC</p>
    <p class="card__date">2021/09/06 04:06</p>
    <p class="card__text">
      京大マイコンクラブは京都大学を中心に活動している京都大学全学公認のコンピュータサークルです。
      KMCはKyoto university Microcomputer Clubの略です。
      マイコンという言葉は今では死語ですが、1977年の設立以来その名を引き継いで現在に至ります。 
      KMCの歴史についてはKMCの歴史をご覧下さい。
    </p>
  </article>
</body>
```

```css
.card {
  border-radius: 16px;
  box-shadow: 0 0 4px 4px #3332;
  height: 120px;
  margin-left: 32px;
  margin-top: 32px;
  overflow: hidden;
  padding: 12px 24px 18px;
  width: 320px;
}

.card__title {
  display: inline-block;
  font-size: 20px;
  margin: 0;
  margin-bottom: 4px;
}

.card__date {
  color: #666;
  display: inline-block;
  font-size: 12px;
  margin: 0;
  margin-left: 16px;
}

.card__text {
  color: #333;
  font-size: 14px;
  margin: 0;

  /* 3点リーダー */
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}
```

## 演習2

```html
<body>
  <h1>演習2</h1>

  <article class="card">
    <p class="card__title">KMC</p>
    <p class="card__date">2021/09/06 04:06</p>
    <p class="card__text">
      京大マイコンクラブは京都大学を中心に活動している京都大学全学公認のコンピュータサークルです。
      KMCはKyoto university Microcomputer Clubの略です。
      マイコンという言葉は今では死語ですが、1977年の設立以来その名を引き継いで現在に至ります。 
      KMCの歴史についてはKMCの歴史をご覧下さい。
      <br>
      ※マイコン（マイクロコンピュータ）とは、 今で言うパソコン（パーソナルコンピュータ）のことです。
      40年ほど前はこの言葉が一般的でした。
      現在のワンチップマイコンなどを指すマイクロコントローラとは異なります。
    </p>
  </article>
</body>
```

```css
.card {
  border-radius: 16px;
  box-shadow: 0 0 4px 4px #3332;
  height: 120px;
  margin-left: 32px;
  margin-top: 32px;
  overflow: hidden;
  padding: 12px 24px 18px;
  width: 320px;
}

.card__title {
  display: inline-block;
  font-size: 20px;
  margin: 0;
  margin-bottom: 4px;
}

.card__date {
  color: #666;
  display: inline-block;
  font-size: 12px;
  margin: 0;
  margin-left: 16px;
}

.card__text {
  color: #333;
  font-size: 14px;
  margin: 0;
  overflow: hidden scroll;
  height: 90px;
}
```
