// swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// array - filter
// 배열로 나열 -> inner.HTML로 입력? (text.content) -> if문으로 조건 거름 
// project, link, story, grade 

// id = idx , list
const data = [
  {id: 0, code: 'MTDZ#9514', proj: true, link: true, story: true, grade:'N', img: './images/story/story-items001.png'},
  {id: 1, code: 'MTDZ#0', proj: true, link: false, story: true, grade:'N', img: './images/story/story-items002.png'},
  {id: 2, code: 'MTDZ#9678', proj: true, link: false, story: true, grade:'N', img: './images/story/story-items003.png'},
  {id: 3, code: 'MTDZ#9512', proj: false, link: true, story: true, grade:'N', img: './images/story/story-items004.png'},
  {id: 4, code: 'MTDZ#9517', proj: false, link: true, story: true, grade:'R', img: './images/story/story-items005.png'},
  {id: 5, code: 'MTDZ#9518', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items006.png'},
  {id: 6, code: 'MTDZ#9543', proj: false, link: true, story: true, grade:'R', img: './images/story/story-items007.png'},
  {id: 7, code: 'MTDZ#9544', proj: false, link: true, story: true, grade:'R', img: './images/story/story-items008.png'},
  {id: 8, code: 'MTDZ#9559', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items009.png'},
  {id: 9, code: 'MTDZ#9560', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items010.png'},
  {id: 10, code: 'MTDZ#9778', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items011.png'},
  {id: 11, code: 'MTDZ#9975', proj: false, link: true, story: true, grade:'L', img: './images/story/story-items012.gif'},
  {id: 12, code: 'MTDZ#9545', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items013.png'},
  {id: 13, code: 'MTDZ#1577', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items014.png'},
  {id: 14, code: 'MTDZ#1577', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items015.png'},
  {id: 15, code: 'MTDZ#1589', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items016.png'},
  {id: 16, code: 'MTDZ#1846', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items017.png'},
  {id: 17, code: 'MTDZ#3726', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items018.png'},
  {id: 18, code: 'MTDZ#4682', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items019.png'},
  {id: 19, code: 'MTDZ#5462', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items020.png'},
  {id: 20, code: 'MTDZ#9676', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items021.png'},
  {id: 21, code: 'MTDZ#9854', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items022.png'},
  {id: 22, code: 'MTDZ#10000', proj: false, link: true, story: true, grade:'S', img: './images/story/story-items023.png'},
];

const itemList = document.querySelector('.itemList');

// console.log(`${item.code}, ${item.proj}, ${item.link}, ${item.story}, ${item.grade}`);

const cardTitle = document.querySelector('.cardTitle');
const txtIcon = document.querySelector('.txtIcon');


// 아이콘 처리, 이미지(배열?)
data.forEach((item) => {
  // 리스트 템플릿 (내부 링크 수정)
  itemList.innerHTML += `<div class="itemCard">
  <div class="cardInner">
    <div class="cardImg">
      <img src=" ${item.img}" alt="item01">
    </div>
    <div class="cardTxt">
      <span class="cardTitle">${item.code}</span>
      <div class="cardIcon">
        <div class="filterIcon linkIcon">
          <img src="./images/story/icon_link_pop.png" alt="link">
        </div>
        <div class="filterIcon projIcon">
          <img src="./images/story/icon_project_pop.png" alt="project">
        </div>
        <div class="filterIcon storyIcon">
          <img src="./images/story/icon_story_pop.png" alt="story">
        </div>
        <div class="filterIcon txtIcon">
        ${item.grade}
        </div>
      </div>
    </div>
  </div>
</div>`;
});

// 조건문으로 html 삭제
const cardIcon = document.querySelector('.cardIcon');

const projIcon = document.querySelector('.projIcon');
const linkIcon = document.querySelector('.linkIcon');
const storyIcon = document.querySelector('.storyIcon');

// 배열 안 {객체} boolean 만 꺼내고 참과 거짓 여부