const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});
const navbarItems = document.querySelectorAll('.navbar-item');
navbarItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-hover');
    })
    item.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-hover');
    })
});