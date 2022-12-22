const lang = document.querySelector('.lang');

lang.addEventListener('click', () => {
  lang.classList.toggle('on');
})

const langKo = document.querySelector('.selectLang #ko')
const langEn = document.querySelector('.selectLang #en')

const selEn = document.querySelector('#langLi #selEn')
const selKo = document.querySelector('#langLi #selKo')

selEn.addEventListener('click', () => {
  langKo.classList.remove('selected');
  langEn.classList.add('selected');
})
selKo.addEventListener('click', () => {
  langEn.classList.remove('selected');
  langKo.classList.add('selected');
})

const goToBtn = document.querySelector('#goTop');
const fixedBtn = document.querySelector('.fixedBtn');
const footer = document.querySelector('footer').offsetTop;

addEventListener('scroll', () => {
  if(scrollY >= 900) {
    goToBtn.classList.add('scrollOn');
    fixedBtn.style.bottom = '100px'
  } else {
    goToBtn.classList.remove('scrollOn');
    fixedBtn.style.bottom = '53px'
  };  
});
addEventListener('scroll', () => {
  if(scrollY <= footer) {
    fixedBtn.classList.remove('poFixed');
  } else {
    fixedBtn.classList.add('poRelative');
  };
});


