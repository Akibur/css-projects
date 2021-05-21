const openNav = document.getElementById('open');
const closeNav = document.getElementById('close');
const container = document.querySelector('.container');
const nav = document.querySelector('nav');



openNav.addEventListener('click', () => {
    container.classList.add('show-nav');
    nav.classList.add('open');

})

closeNav.addEventListener('click', () => {
    container.classList.remove('show-nav');

})