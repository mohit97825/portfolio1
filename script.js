const burger = document.getElementById('burger');
const navContainer = document.getElementById('nav-container');

burger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});