// main - home

// main - story

/* 
const cards = document.querySelectorAll(".card");

cards[0].addEventListener("mouseenter", () => {
  cards[0].classList.add("active");
  cards[1].classList.remove("active");
  cards[2].classList.remove("active");
  cards[3].classList.remove("active");
  cards[4].classList.remove("active");
});
cards[1].addEventListener("mouseenter", () => {
  cards[0].classList.remove("active");
  cards[1].classList.add("active");
  cards[2].classList.remove("active");
  cards[3].classList.remove("active");
  cards[4].classList.remove("active");
});
cards[2].addEventListener("mouseenter", () => {
  cards[0].classList.remove("active");
  cards[1].classList.remove("active");
  cards[2].classList.add("active");
  cards[3].classList.remove("active");
  cards[4].classList.remove("active");
});
cards[3].addEventListener("mouseenter", () => {
  cards[0].classList.remove("active");
  cards[1].classList.remove("active");
  cards[2].classList.remove("active");
  cards[3].classList.add("active");
  cards[4].classList.remove("active");
});
cards[4].addEventListener("mouseenter", () => {
  cards[0].classList.remove("active");
  cards[1].classList.remove("active");
  cards[2].classList.remove("active");
  cards[3].classList.remove("active");
  cards[4].classList.add("active");
}); */

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

const lineLength = line1.scrollWidth;
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
  }
);
// line2.animate(
//   {
//     transform: ["translateX(0)", "translateX(80vw)"],
//   },
//   {
//     duration: 7000,
//     iterations: Infinity,
//     direction: "reverse",
//     fill: "forwards",
//   }
// );
