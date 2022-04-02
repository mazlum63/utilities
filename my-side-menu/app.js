const sideMenu = document.querySelector('.side-menu-container');
const sideBtn = document.querySelector('.btn-side-menu');


sideBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    sideBtn.classList.toggle('active');
})