/*
// 要素の取得
const headImages = document.querySelectorAll(".head img");

// 画像のインデックスを変数に代入
let currentIndex = 0;

// 関数の定義
function slideShow() {
  // インデックスに該当する画像から、クラス「current」を削除
  console.log(`インデックス${currentIndex}を非表示にする`);
  headImages[currentIndex].classList.remove("current");

  // 画像のインデックスに1を足す
  currentIndex++;

  // 画像のインデックスが画像の数-1より大きくなれば、強制的に0に戻す
  if (currentIndex > 2) {
    currentIndex = 0;
  }

  // インデックスに該当する画像に、クラス「current」を追加
  console.log(`インデックス${currentIndex}を表示させる`);
  headImages[currentIndex].classList.add("current");
}
*/

/*
// 要素の取得
const headImages = document.querySelectorAll(".head img");

// 画像のインデックスを変数に代入
let currentIndex = 0;

// 関数の定義
function slideShow() {
  // インデックスに該当する画像から、クラス「current」を削除
  console.log(`インデックス${currentIndex}を非表示にする`);
  headImages[currentIndex].classList.remove("current");

  // 画像のインデックスに1を足す
  currentIndex++;

  // 画像のインデックスが画像の数-1より大きくなれば、強制的に0に戻す
  if (currentIndex > 2) {
    currentIndex = 0;
  }

  // インデックスに該当する画像に、クラス「current」を追加
  console.log(`インデックス${currentIndex}を表示させる`);
  headImages[currentIndex].classList.add("current");
}

// 5秒ごとに関数を実行
setInterval(slideShow, 5000);


//↑↑↑やってみる
*/


// 要素を取得
const hamburgerBtn = document.querySelector(".hamburger_btn");
const hamburgerBox = document.querySelector(".hamburger");
const hamburgerItems = document.querySelectorAll(".h");


// menuBtnをクリックしたときの処置
hamburgerBtn.addEventListener("click", () => {
  hamburgerBox.classList.toggle("show");
  hamburgerItems.forEach(item => item.classList.toggle('show'));
});
hamburgerItems.forEach(item => {
  item.addEventListener("click", () => {
    hamburgerBox.classList.toggle("show");
    hamburgerItems.forEach(item => item.classList.remove('show'));
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
