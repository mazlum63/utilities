const parallax = document.querySelector('.parallax');
const parallaxItems = parallax.querySelectorAll('.parallax-item');
parallax.addEventListener('mousemove', (e) => {
    parallaxItems.forEach(item => {
        var itemSpeed = item.getAttribute('-parallax-speed');
        let itemX = (window.innerWidth - e.pageX * itemSpeed) / 100;
        let itemY = (window.innerHeight - e.pageY * itemSpeed) / 100;
        item.style.transform = `translateX(${itemX}px) translateY(${itemY}px)`;
    });
})