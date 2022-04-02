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

const body = document.body;
const particleMouseMove = document.querySelector('.particle-mouse-move');
particleMouseMove.addEventListener('mousemove', (e) => {
    var particleSize = Math.floor(Math.random() * (50 - 20) + 20);
    var colorNum = Math.floor(Math.random() * 8);
    var transformSize = Math.random() * 360;

    var particleParent = document.createElement('div');
    particleParent.classList.add('mouse-move-parent');
    particleParent.style.width = particleSize + 'px';
    particleParent.style.height = particleSize + 'px';
    particleParent.style.left = e.pageX + 'px';
    particleParent.style.top = e.pageY + 'px';
    particleParent.style.transform = `rotate(${transformSize}deg)`;
    particleMouseMove.appendChild(particleParent);

    var particleItem = document.createElement('div');
    particleItem.classList.add('mouse-move-item');
    particleItem.style.border = '2px solid ' + borderColors[colorNum];
    particleItem.style.backgroundColor = backColors[colorNum];
    particleParent.appendChild(particleItem);
    setTimeout(function () {
        particleParent.remove()
    }, 1000)
});