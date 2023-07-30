let hamburgerMenu = document.querySelector('.hamburger-menu');
let navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
