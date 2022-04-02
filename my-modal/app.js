// modal display change

const modalBtn = document.querySelector('.modal-link');
const modalContainer = document.querySelector('.modal-container');
modalBtn.addEventListener('click', e => {
    modalContainer.classList.toggle('modal-open');
});