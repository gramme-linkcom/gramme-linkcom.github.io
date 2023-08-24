let offset = 0;
let lastPosition = 0;
let ticking = false;
const header = document.getElementById('header');
const height = 56;

const onScroll = () => {
  if (lastPosition > height) {
    if (lastPosition > offset) {
      header.classList.add('head-animation');
    } else {
      header.classList.remove('head-animation');
    }
    offset = lastPosition;
  }
};

document.addEventListener('scroll', () => {
  lastPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    });
    ticking = true;
  }
});