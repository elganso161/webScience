let btn1 = document.querySelector(".btn-1");
let btn2 = document.querySelector(".btn-2");
let btn3 = document.querySelector(".btn-3");

let slide1 = document.querySelector(".news-cards__one");
let slide2 = document.querySelector(".news-cards__two");
let slide3 = document.querySelector(".news-cards__three");

function on1() {
  slide1.classList.remove("slide-none");
  slide2.classList.add("slide-none");
  slide3.classList.add("slide-none");

  btn1.classList.add("active-news-page");
  btn2.classList.remove("active-news-page");
  btn3.classList.remove("active-news-page");
}

function on2() {
  slide2.classList.remove("slide-none");
  slide1.classList.add("slide-none");
  slide3.classList.add("slide-none");

  btn2.classList.add("active-news-page");
  btn1.classList.remove("active-news-page");
  btn3.classList.remove("active-news-page");
}

function on3() {
  slide3.classList.remove("slide-none");
  slide1.classList.add("slide-none");
  slide2.classList.add("slide-none");

  btn3.classList.add("active-news-page");
  btn1.classList.remove("active-news-page");
  btn2.classList.remove("active-news-page");
}


