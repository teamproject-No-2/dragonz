// main - home
// const bannerBoxs = document.querySelectorAll(".main_home_banner_box");
// console.log(bannerBoxs);

// const autoMove = bannerBoxs.forEach(() => {
//   let i = 0;

//   bannerBoxs[i].classList.remove("active");
//   i++;
//   i >= bannerBoxs.length ? (i = 0) : false;
//   bannerBoxs[i].classList.add("active");
// });

// setTimeout(autoMove, 2000);

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

// main -partners
const lis = document.querySelectorAll("li");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

const lineLength = line1.clientWidth;
console.log(lineLength);

line1.animate(
  {
    transform: [`translateX(-${lineLength}px)`, `translateX(${lineLength}px)`],
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
    transform: [`translateX(-${lineLength}px)`, `translateX(${lineLength}px)`],
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
