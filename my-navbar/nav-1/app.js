const navbar = document.querySelector('.navbar');
const navbarItems = document.querySelectorAll('.navbar-item');
const walker = document.createElement('div');
walker.classList.add('walker');
walker.style.width = navbarItems[0].getBoundingClientRect().width + 'px';
navbar.appendChild(walker);
navbarItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        let itemNumber = item.offsetLeft;
        walker.style.left = itemNumber + 'px';
    });
});
