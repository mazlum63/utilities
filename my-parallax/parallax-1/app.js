let parallax = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
    parallax.forEach(item => {
        let scrollSpeed = 10;
        var speed = item.getAttribute('-parallax-speed');
        if (speed) {
            scrollSpeed = 10 / speed;
        }
        var winPosition = window.pageYOffset;
        item.style.transform = `translateY(-${winPosition / scrollSpeed}px)`;
    });
});