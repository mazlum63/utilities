const navContainer = document.querySelector('.nav-container');
const listItems = Array.from(navContainer.querySelector('ul').children);
const navBtn = navContainer.querySelector('.nav-btn');
listItems.forEach(item => {
    let icons = item.querySelector('svg');
    let num = listItems.indexOf(item);
    item.style.transitionDelay = 0.1 * num + 's'
    icons.style.transitionDelay = 0.1 * num + 's'
})
navBtn.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    listItems.forEach(item => {
        let num = listItems.indexOf(item);
        let icons = item.querySelector('svg');
        if (navContainer.classList == 'nav-container active') {
            item.style.transform = `rotate(calc(${360 / listItems.length * num}deg))`
            item.style.left = '-85px'
            icons.style.transform = `rotate(calc(-${360 / listItems.length * num}deg))`
        } else {
            item.style.transform = `rotate(0deg)`
            item.style.left = '0'
            icons.style.transform = `rotate(0deg)`
        }
    })
})