var slider = function (selector, sliderOptions = {
    auto: false,
    time: 3,
    reverse: false,
    nav: true,
    arrows: true
}) {
    var carouselContainer = document.querySelector(selector).querySelector('.carousel-container');
    let slides = Array.from(carouselContainer.children);
    const lastItem = slides.length;
    let position = 0;


    // start of cloning first and last items
    const firstClone = slides[0].cloneNode(true);
    firstClone.classList.add('first-clone');
    firstClone.classList.remove('carousel-active');
    firstClone.style.left = lastItem + '00%';

    const lastClone = slides[lastItem - 1].cloneNode(true);
    lastClone.classList.add('last-clone');
    lastClone.style.left = '-100%';
    slides[lastItem - 1].after(firstClone);
    slides[0].before(lastClone);
    // end of cloning first and last items


    // arrange sliders next to the one another and add nav buttons as much as sliders length
    const navigationBtns = document.querySelector(selector).querySelector('.carousel-navigation');
    navigationBtns.style.display = 'none';
    for (i = 0; i < lastItem; i++) {
        slides[i].style.left = i + '00%';
        // you can delete if you dont want to use nav buttons
        navigationBtns.innerHTML += '<button -forClick="' + i + '" class="btn-navigation"></button>';
    }

    // start of navigation buttons you can delete when if you dont wanto use navigation buttons
    const navBtns = Array.from(navigationBtns.children);
    navBtns[0].classList.add('btn-active');

    if (sliderOptions.nav === true) {
        navigationBtns.style.display = 'flex';
        navBtns.forEach(function (items) {
            items.addEventListener('click', () => {
                for (i = 0; i < navBtns.length; i++) {
                    navBtns[i].classList.remove('btn-active');
                }
                const forClick = items.getAttribute('-forClick');
                carouselContainer.style.transition = 'all 0.5s';
                carouselContainer.style.transform = 'translateX(' + (forClick * -1) + '00%)';
                items.classList.add('btn-active');
                position = forClick;
            });
        });
    };
    // end of navigation buttons

    // arrows start -- you can delete if you dont want to use this buttons
    const nextBtn = document.querySelector(selector).querySelector('.carousel-next');
    const prevBtn = document.querySelector(selector).querySelector('.carousel-prev');
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
    if (sliderOptions.arrows === true) {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
        nextBtn.addEventListener('click', () => {
            if (position >= lastItem) return;
            position++;
            carouselContainer.style.transition = 'all 0.5s';
            carouselContainer.style.transform = 'translateX(-' + position + '00%)';
        });

        prevBtn.addEventListener('click', () => {
            if (position <= -1) return;
            position--;
            carouselContainer.style.transition = 'all 0.5s';
            carouselContainer.style.transform = 'translateX(' + (position * -1) + '00%)';
        });
    }
    // arrows end

    // start of uptade items active class names
    carouselContainer.addEventListener('transitionend', () => {
        if (carouselContainer.style.transform == 'translateX(-' + lastItem + '00%)') {
            carouselContainer.style.transition = 'none';
            position = 0;
            carouselContainer.style.transform = 'translateX(0%)';
        };
        if (carouselContainer.style.transform == 'translateX(100%)') {
            carouselContainer.style.transition = 'none';
            carouselContainer.style.transform = 'translateX(-' + (lastItem - 1) + '00%)';
            position = lastItem - 1;
        }
        for (i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.remove('btn-active');
        }
        navBtns[position].classList.add('btn-active');

    });
    // end of uptade items active class names


    // start of autoplay -- you can delete if you dont want to use
    if (sliderOptions.auto === true) {
        setInterval(function () {
            if (sliderOptions.reverse === true) {
                if (position <= -1) return;
                position--;
                carouselContainer.style.transition = 'all 0.5s';
                carouselContainer.style.transform = 'translateX(' + (position * -1) + '00%)';
            } else {
                if (position >= lastItem) return;
                position++;
                carouselContainer.style.transition = 'all 0.5s';
                carouselContainer.style.transform = 'translateX(-' + position + '00%)';
            }
        }, (sliderOptions.time * 1000));
    };

    // end of autoplay
}