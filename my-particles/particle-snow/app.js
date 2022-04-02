const particleSnowContainer = document.querySelector('.particle-container');
const particleSnowCount = particleSnowContainer.getAttribute('-particle-count');
for (var i = 0; i < particleSnowCount; i++) {
    var snowSize = Math.floor(Math.random() * (10 - 5) + 5);
    var snowClass = Math.floor(Math.random() * (5 - 1) + 1);
    var snowTop = Math.floor(Math.random() * (100 - 1) + 1);
    var snowLeft = Math.floor(Math.random() * (100 - 1) + 1);
    var snowSpeed = Math.floor(Math.random() * (50 - 10) + 10);
    const snows = document.createElement('div');
    snows.classList.add('snows');
    snows.classList.add('snow-' + snowClass);
    snows.style.animation = `snow1 ${snowSpeed}s linear infinite`;
    snows.style.width = snowSize + 'px';
    snows.style.height = snowSize + 'px';
    snows.style.left = snowLeft + '%';
    snows.style.top = snowTop + '%';
    particleSnowContainer.appendChild(snows);
}