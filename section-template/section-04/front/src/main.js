import "./style.css";

document.getElementById("link-like").addEventListener("click", () => {
  window.open('https://ja.wikipedia.org/wiki/%E3%83%9A%E3%83%AB%E3%82%B7%E3%83%A3_(%E3%83%8D%E3%82%B3)', '_blank');
});

document.querySelector(".submit--not-accessible").addEventListener("click", () => {
  alert("本当に提出しますか？")
});

document.querySelector(".submit--accessible").addEventListener("click", () => {
  alert("本当に提出しますか？")
});
