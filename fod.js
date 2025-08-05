// 要素を取得
const hamburgerBtn = document.querySelector(".hamburger_btn");
const hamburgerBox = document.querySelector(".hamburger");
const hamburgerItems = document.querySelectorAll(".h");
const bookBtn02 = document.querySelector(".book_btn02")

/*-------------------------------------------
// 1 ハンバーガーメニューがクリックされると全画面の色が変わる
// 2 ハンバーガーメニューがクリックされるとメニューアイコンの形状変更
// 3 ハンバーガーメニューがクリックされるとメニューバーが白色に変更
-------------------------------------------*/
const hamburgerSpan = document.querySelectorAll(".h_span");
/* 
ハンバーガーメニューがクリックされたら
定数hamburgerMenuにactiveセレクタを代入
定数bodyにoverlay セレクタを代入
*/

// menuBtnをクリックしたときの処置
hamburgerBtn.addEventListener("click", () => {
  hamburgerBox.classList.toggle("show");
  hamburgerItems.forEach(item => item.classList.toggle('show'));
  hamburgerSpan.forEach(item => item.classList.toggle('active'));
});
bookBtn02.addEventListener("click", () => {
  hamburgerBox.classList.remove("show");
  hamburgerItems.forEach(item => item.classList.remove('show'));
  hamburgerSpan.forEach(item => item.classList.remove('active'));
});
hamburgerItems.forEach(item => {
  item.addEventListener("click", () => {
    hamburgerBox.classList.toggle("show");
    hamburgerItems.forEach(item => item.classList.remove('show'));
    hamburgerSpan.forEach(item => item.classList.toggle('active'));
  });
});



const animTiming = {
  duration: 400,
  easing: "ease-in-out",
};
// アコーディオンを閉じるときのキーフレーム
const closingAnimation = (acc) => [
  {
    height: acc.offsetHeight + "rem",
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0,
  },
];
// アコーディオンを開くときのキーフレーム
const openingAnimation = (acc) => [
  {
    height: 0,
    opacity: 0,
 },
 {
    height: acc.offsetHeight + "rem",
    opacity: 1,
  },
];
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".details").forEach(function (el) {
    const summary00 = el.querySelector("summary");
    const acc = el.querySelector(".acc");
    summary00.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();
      // detailsのopen属性を判定
      if (el.getAttribute("open") !== null) {
        // アコーディオンを閉じるときの処理
        const closingAnim = acc.animate(closingAnimation(acc), animTiming);

        closingAnim.onfinish = () => {
          // アニメーションの完了後にopen属性を取り除く
          el.removeAttribute("open");
        };
      } else {
        // open属性を付与
        el.setAttribute("open", "true");
        // アコーディオンを開くときの処理
        const openingAnim = acc.animate(openingAnimation(acc), animTiming);
      }
    });
  });
});

