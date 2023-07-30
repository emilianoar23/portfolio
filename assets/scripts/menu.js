let stickyMenu = document.querySelector('.js-sticky');
let stickyOffset = window.innerHeight - stickyMenu.offsetHeight;
let stickyClassName = 'is-sticky';

window.addEventListener('scroll', function() {
  if (window.scrollY >= stickyOffset) {
    stickyMenu.classList.add(stickyClassName);
  } else {
    stickyMenu.classList.remove(stickyClassName);
  }
});