const backColors = [
    "#FDDFDF",
    "#DEFDE0",
    "#FCF7DE",
    "#DEF3FD",
    "#f4e7da",
    "#d5d5d4",
    "#fceaff",
    "#d6b3ff"
];
const borderColors = [
    "#e0f5ff ",
    "#E6E0D4",
    "#eaeda1",
    "#F5F5F5",
    "#F5F5F5",
    "#97b3e6",
    "#7f7fda",
    "#f8d5a3",
];

const particleMouseMove = document.querySelector('.particle-mouse-move');
const particleMinSize = particleMouseMove.getAttribute('-particle-min-size');
const particleMaxSize = particleMouseMove.getAttribute('-particle-max-size');
const particleRange = particleMouseMove.getAttribute('-particle-range');
let itemMaxSize = 35;
let itemMinSize = 15;
let itemRange = 100;
if (particleMinSize || particleMaxSize || particleRange) {
    itemMaxSize = particleMaxSize;
    itemMinSize = particleMinSize;
    itemRange = particleRange;
}
particleMouseMove.addEventListener('mousemove', (e) => {
    const body = document.body;
    var particleSize = Math.floor(Math.random() * (itemMaxSize - itemMinSize) + itemMinSize);
    var colorNum = Math.floor(Math.random() * (8 - 0) + 0);
    var particleItem = document.createElement('div');

    particleItem.classList.add('mouse-move-item');
    particleItem.style.border = '2px solid ' + borderColors[colorNum];
    particleItem.style.backgroundColor = backColors[colorNum];
    particleItem.style.width = particleSize + 'px';
    particleItem.style.height = particleSize + 'px';
    particleMouseMove.appendChild(particleItem);
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    var particleDirectionX = Math.floor(Math.random() * (itemRange - (-itemRange)) - itemRange);
    var particleDirectionY = Math.floor(Math.random() * (itemRange - (-itemRange)) - itemRange);
    particleItem.style.left = mouseX + 'px';
    particleItem.style.top = mouseY + 'px';
    particleItem.style.transform = `translateY(${particleDirectionY}px) translateX(${particleDirectionX}px)`;
    setTimeout(function () {
        particleItem.remove()
    }, 1000)
});