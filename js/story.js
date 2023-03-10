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


// id = idx , list
const data = [
  {id: 0, tag: '9514', proj: 1, link: 1, story: 1, grade:'N', img: '../images/story/story-items001.png'},
  {id: 1, tag: '0', proj: 1, link: 0, story: 1, grade:'N', img: '../images/story/story-items002.png'},
  {id: 2, tag: '9678', proj: 1, link: 0, story: 1, grade:'N', img: '../images/story/story-items003.png'},
  {id: 3, tag: '9512', proj: 0, link: 1, story: 1, grade:'N', img: '../images/story/story-items004.png'},
  {id: 4, tag: '9517', proj: 0, link: 1, story: 1, grade:'R', img: '../images/story/story-items005.png'},
  {id: 5, tag: '9518', proj: 0, link: 1, story: 1, grade:'S', img: '../images/story/story-items006.png'},
  {id: 6, tag: '9543', proj: 0, link: 1, story: 1, grade:'R', img: '../images/story/story-items007.png'},
  {id: 7, tag: '9544', proj: 0, link: 1, story: 1, grade:'R', img: '../images/story/story-items008.png'},
  {id: 8, tag: '9559', proj: 0, link: 1, story: 1, grade:'S', img: '../images/story/story-items009.png'},
  {id: 9, tag: '9560', proj: 0, link: 1, story: 1, grade:'S', img: '../images/story/story-items010.png'},
  {id: 10, tag: '9778', proj: 0, link: 1, story: 1, grade:'S', img: '../images/story/story-items011.png'},
  {id: 11, tag: '9975', proj: 0, link: 1, story: 1, grade:'L', img: '../images/story/story-items012.gif'},
  {id: 12, tag: '9545', proj: 0, link: 1, story: 0, grade:'S', img: '../images/story/story-items013.png'},
  {id: 13, tag: '9547', proj: 0, link: 1, story: 0, grade:'S', img: '../images/story/story-items014.png'},
  {id: 14, tag: '1577', proj: 0, link: 0, story: 1, grade:'S', img: '../images/story/story-items015.png'},
  {id: 15, tag: '1589', proj: 0, link: 0, story: 1, grade:'S', img: '../images/story/story-items016.png'},
  {id: 16, tag: '1846', proj: 0, link: 0, story: 1, grade:'S', img: '../images/story/story-items017.png'},
  {id: 17, tag: '3726', proj: 0, link: 0, story: 1, grade:'S', img: '../images/story/story-items018.png'},
  {id: 18, tag: '4682', proj: 0, link: 0, story: 1, grade:'S', img: '../images/story/story-items019.png'},
  {id: 19, tag: '5462', proj: 0, link: 0, story: 1, grade:'S', img: '../images/story/story-items020.png'},
  {id: 20, tag: '9676', proj: 0, link: 0, story: 1, grade:'S', img: '../images/story/story-items021.png'},
  {id: 21, tag: '9854', proj: 0, link: 0, story: 1, grade:'S', img: '../images/story/story-items022.png'},
  {id: 22, tag: '10000', proj: 0, link: 0, story: 1, grade:'L', img: '../images/story/story-items023.png'},
];

const itemList = document.querySelector('.itemList');

// ????????? ???????????? ???????

data.forEach((item) => {
  // ????????? ????????? (?????? ?????? ??????)
  itemList.innerHTML += `
  <div class="itemCard popUpClick one_quarter">
    <div class="cardInner">
      <div class="cardHover"></div>
      <div class="cardImg">
        <img src="${item.img}" alt="item01">
      </div>
      <div class="cardTxt">
        <span class="cardTitle">MTDZ#<span class="cardNum">${item.tag}</span></span>
        <div class="cardIcon">
          <div class="filterIcon linkIcon">
            <img src="../images/story/icon_link_pop.png" alt="link">
          </div>
          <div class="filterIcon projIcon">
            <img src="../images/story/icon_project_pop.png" alt="project">
          </div>
          <div class="filterIcon storyIcon">
            <img src="../images/story/icon_story_pop.png" alt="story">
          </div>
          <div class="filterIcon txtIcon">
          ${item.grade}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
});


const projIcon = document.querySelectorAll('.projIcon');
const linkIcon = document.querySelectorAll('.linkIcon');
const storyIcon = document.querySelectorAll('.storyIcon');
// projIcon[i].style.display = 'none';
// projIcon[i].remove();
// projIcon 
for(let i = 0; i < projIcon.length; i++) {
  if(data[i].proj === 0) {
    projIcon[i].remove();
  };
};
// linkIcon
for(let i = 0; i < linkIcon.length; i++) {
  if(data[i].link === 0) {
    linkIcon[i].remove();
  };
};
// storyIcon
for(let i = 0; i < storyIcon.length; i++) {
  if(data[i].story === 0) {
    storyIcon[i].remove();
  };
};


// ?????? ??? -> ????????? ????????? ?????????..
const btn = document.getElementById('btn');
const search = document.getElementById('search');

search.addEventListener('keydown', function(e){
  if(e.key === "Enter"){
    searchFilter();
  }
})
btn.addEventListener('click',searchFilter);

function searchFilter(){
  let value = document.getElementById('search').value;
  let item = document.getElementsByClassName('one_quarter');
  for(i = 0; i < item.length; i++) {
    let name = item[i].getElementsByClassName("cardNum");
    if(name[0].innerHTML.indexOf(value) > -1){
      item[i].style.display = "flex";
    } else {
      item[i].style.display = "none";
    }
  }
}

// ?????? ??????xxxxxxxxxx
const listCount = document.querySelector('#listCount');
let project = data.filter(project => project.proj === 1).length;


// ??????????????? ??????xxxxxxxxxxx


// checkResult.innerHTML +=
// ????????? ?????? ??????
function checkBox(checked){
  let filterBox = document.getElementsByClassName('filterBox');
  let result = document.getElementById("checkResult");
  if(checked.checked == true){
      console.log(result.value); 
      if(result.value == "") {
          result.value = checked.getAttribute("value");
          console.log(result.value);
      } else {
          result.value += ","+ checked.getAttribute("value");
      }
      let inputV = checked.getAttribute("value");
      checkResult.innerHTML += `<div class="cRItem">
      ${inputV}
      <div class="closeBtnM" onclick="deleteDiv()"></div>
    </div>`;
  } else {
      let resultArr = result.value.split(",");
      for(let i=0; i<resultArr.length; i++){
          if(resultArr[i] == checked.getAttribute("value")){
              resultArr.splice(i,1);
              break;
          }
      }
      result.value  = resultArr.join(",");
  }
}

// ?????? ?????? ?????? ?????????xxxxxxxx
const closeBtnM = document.querySelectorAll('.closeBtnM');

function deleteDiv() {
  const cRItem = document.querySelectorAll('.cRItem');
  closeBtnM.addEventListener('click', () => {
  
    cRItem.remove();
  });
} 

// ????????? ????????? (+ ?????? ???????????? ?????? ????????? ?????????)
function clearInput(){
  let item = document.getElementsByClassName('one_quarter');
  for(let i = 0; i <= item.length; i++){
    item[i].style.display = "flex";
  }
}

// ?????? ++?????? ??????..., ????????? ??????????????? ????????? ?????????
const popInfo = document.getElementById('popInfo');
// ????????? ???
const popUpClick = document.querySelectorAll('.popUpClick');
const body = document.querySelector('body');
popUpClick.forEach((pop) => {
  pop.addEventListener('click', () => {
    popInfo.style.display = 'flex'
    body.style.overflow = 'hidden'
  })
});
// ?????? ?????? ?????????
const closeBtn = popInfo.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
    popInfo.style.display = 'none'
    body.style.overflow = 'visible'
});
// ????????? ???????????? ????????? ??????
popInfo.addEventListener('click', e => {
  const evTarget = e.target;
  if(evTarget.classList.contains('popDel')) {
      popInfo.style.display = 'none'
      body.style.overflow = 'visible'
  }
});