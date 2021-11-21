const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');
const blockBackground = document.getElementById('block-background');
const body = document.querySelector('body');

btnMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('--hide');
    blockBackground.classList.toggle('block-background');
    body.classList.toggle('--block-scroll');
});

blockBackground.addEventListener('click', () => {
    menuLateral.classList.toggle('--hide');
    blockBackground.classList.toggle('block-background');
    body.classList.toggle('--block-scroll');
});