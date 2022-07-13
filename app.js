// selectors
const bodyEle = document.querySelector('body');
const btnEle = document.querySelector('.switch-btn');

// toggle button to switch theme
btnEle.addEventListener('click', () => {
  if (bodyEle.classList[0] === 'light') {
    bodyEle.classList.remove('light')
    bodyEle.classList.add('dark')
  }
  else if (bodyEle.classList[0] === 'dark') {
    bodyEle.classList.remove('dark')
    bodyEle.classList.add('light')
  }
})