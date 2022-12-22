const dotCursor = document.querySelectorAll('.dotCursor');
const businessList = document.querySelectorAll('#bpList li');

const removeDot = e => {
  const target = e.currentTarget.querySelector('#bpList li');
  target.classList.remove('moveDot');
}

businessList.forEach( li => {
  li.addEventListener('mouseenter', e => { // 마우스를 올렸을 때
    e.target.querySelector('#bpList');
    target.classList.add('moveDot');
  });
  // 마우스가 벗어났을 때
  article.addEventListener('mouseleave', removeDot);
});  