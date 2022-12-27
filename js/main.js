// main - home page
// const mainHomeBg = document.querySelector(".home_bg");

// addEventListener("scroll", bg);

// main - story
const cards = document.querySelector(".cardsList");
const storyPage = document.querySelector("#main_story");

window.addEventListener("scroll", () => {
  let storyHeight = storyPage.offsetTop - 150;
  if (scrollY >= storyHeight) {
    cards.classList.add("active");
  }
});

// main - project
const sections = document.querySelectorAll(".games > section");

sections[0].addEventListener("mouseenter", () => {
  sections[0].classList.add("on");
  sections[1].classList.remove("on");
  sections[2].classList.remove("on");
  sections[3].classList.remove("on");
  sections[4].classList.remove("on");
});
sections[1].addEventListener("mouseenter", () => {
  sections[0].classList.remove("on");
  sections[1].classList.add("on");
  sections[2].classList.remove("on");
  sections[3].classList.remove("on");
  sections[4].classList.remove("on");
});
sections[2].addEventListener("mouseenter", () => {
  sections[0].classList.remove("on");
  sections[1].classList.remove("on");
  sections[2].classList.add("on");
  sections[3].classList.remove("on");
  sections[4].classList.remove("on");
});
sections[3].addEventListener("mouseenter", () => {
  sections[0].classList.remove("on");
  sections[1].classList.remove("on");
  sections[2].classList.remove("on");
  sections[3].classList.add("on");
  sections[4].classList.remove("on");
});
sections[4].addEventListener("mouseenter", () => {
  sections[0].classList.remove("on");
  sections[1].classList.remove("on");
  sections[2].classList.remove("on");
  sections[3].classList.remove("on");
  sections[4].classList.add("on");
});

// main - roadmap
const roadmap = document.querySelector("#main_roadmap");

addEventListener("scroll", () => {
  let num = roadmap.offsetTop - 600;
  if (scrollY > num) {
    roadmap.classList.add("scale");
  }
});

// main -partners
const lis = document.querySelectorAll("li");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

const lineLength = line1.offsetWidth;
// console.log(lineLength);

line1.animate(
  {
    transform: [`translateX(-${lineLength}px)`, `translateX(${lineLength})`],
  },
  {
    duration: 20000,
    iterations: Infinity,
    direction: "reverse",
    fill: "forwards",
    loop: true,
    // animation-play-state: paused, running, running,
  }
);
line2.animate(
  {
    transform: [`translateX(-${lineLength}px)`, `translateX(${lineLength})`],
  },
  {
    delay: 1000,
    duration: 20000,
    iterations: Infinity,
    direction: "reverse",
    fill: "forwards",
    loop: true,
  }
);

// floated_btn
const goUp = document.querySelector(".scrollup");

goUp.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 헤더 푸터
const header = document.querySelector(".header");
const headerHt = header.offsetTop;
addEventListener("scroll", () => {
  if (scrollY > headerHt) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const lang = document.querySelector(".lang");

lang.addEventListener("click", () => {
  lang.classList.toggle("on");
});

const langKo = document.querySelector(".selectLang #ko");
const langEn = document.querySelector(".selectLang #en");

const selEn = document.querySelector("#langLi #selEn");
const selKo = document.querySelector("#langLi #selKo");

selEn.addEventListener("click", () => {
  langKo.classList.remove("selected");
  langEn.classList.add("selected");
});
selKo.addEventListener("click", () => {
  langEn.classList.remove("selected");
  langKo.classList.add("selected");
});

const goToBtn = document.querySelector(".scrollup");
addEventListener("scroll", () => {
  if (scrollY >= 900) {
    goToBtn.classList.add("scrollOn");
    fixedBtn.style.bottom = "100px";
  } else {
    goToBtn.classList.remove("scrollOn");
    fixedBtn.style.bottom = "53px";
  }
});

const fixedBtn = document.querySelector("#main_fixed_btn");
const partners = document.querySelector("#main_partners");
const footer = document.querySelector("footer").offsetTop;
