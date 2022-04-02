var multiSlider = function (selector, sliderOptions = {
    auto: false,
    time: 3,
    reverse: false,
    nav: true,
    arrows: true,
    space: 0,
    showedItems: 3,
    breakPoints: {
        576: {
            space: 20,
            showedItems: 1,
        },
        768: {
            space: 30,
            showedItems: 2
        },
        992: {
            space: 40,
            showedItems: 3
        },
        1200: {
            space: 50,
            showedItems: 4
        },
    },
}) {
    let carouselContainer = document.querySelector(selector).querySelector('.carousel-container');
    let carousel = document.querySelector(selector).querySelector('.carousel');
    let slides = Array.from(carouselContainer.children);
    const lastItem = slides.length;

    sliderOptions

    let carouselSize = carousel.getBoundingClientRect().width;
    let space = sliderOptions.space;
    let showItems = sliderOptions.showedItems;
    if (carouselSize < 576) {
        showItems = sliderOptions.breakPoints['576']['showedItems'];
        space = sliderOptions.breakPoints['576']['space'];
    } else if (carouselSize < 768) {
        showItems = sliderOptions.breakPoints['768']['showedItems'];
        space = sliderOptions.breakPoints['768']['space'];
    } else if (carouselSize < 992) {
        showItems = sliderOptions.breakPoints['992']['showedItems'];
        space = sliderOptions.breakPoints['992']['space'];
    } else {
        showItems = sliderOptions.breakPoints['1200']['showedItems'];
        space = sliderOptions.breakPoints['1200']['space'];
    }
    let itemSize = Math.round(carouselSize / showItems);

    let takeLastItems = lastItem - 1;
    let addCloneItems = showItems - 1;
    let secondClones = [];
    let firstClones = [];

    // you can delete when if you dont wanto use navigation buttons
    const navigationBtns = document.querySelector(selector).querySelector('.carousel-navigation');
    navigationBtns.style.display = 'none';
    // arrange sliders next to the one another and add nav buttons as much as sliders length
    for (i = 0; i < lastItem; i++) {
        navigationBtns.innerHTML += '<button -forClick="' + (i + showItems) + '" class="btn-navigation"></button>';  // you can delete if you dont want to use this buttons
    }
    // you can delete when if you dont wanto use navigation buttons
    const navBtns = Array.from(navigationBtns.children);
    let btnCounter = 0;
    navBtns[0].classList.add('btn-active');


    for (i = 0; i < showItems; i++) {
        var firstClone = slides[i].cloneNode(true);
        firstClone.classList.add(i + '-first-clone');
        firstClones[i] = firstClone;

        var secondClone = slides[takeLastItems].cloneNode(true);
        secondClone.classList.add(i + '-second-clone');
        secondClones[i] = secondClone;
        takeLastItems--;
    }

    for (i = 0; i < showItems; i++) {
        slides[lastItem - 1].after(firstClones[addCloneItems]);
        slides[0].before(secondClones[addCloneItems]);
        addCloneItems--;
    }

    const sliderItems = document.querySelector(selector).querySelectorAll('.carousel-item');

    sliderItems.forEach(function (size) {
        size.style.width = itemSize + 'px';
        size.style.marginRight = space + 'px';
    });
    const afterCloning = Array.from(carouselContainer.children);
    let position = showItems * itemSize - (space / 2);

    carouselContainer.style.width = afterCloning.length * itemSize + 'px';
    carouselContainer.style.transform = 'translateX(-' + position + 'px)';


    // next&prev buttons start -- you can delete if you dont want to use this buttons

    const nextBtn = document.querySelector(selector).querySelector('.carousel-next');
    const prevBtn = document.querySelector(selector).querySelector('.carousel-prev');
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
    var sizePerWidth = Math.round((lastItem + showItems) * itemSize - (space / 2));

    if (sliderOptions.arrows === true) {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
        nextBtn.addEventListener('click', () => {
            if (carouselContainer.style.transform == 'translateX(-' + sizePerWidth + 'px)') return;
            position += itemSize;
            btnCounter++;
            carouselContainer.style.transition = 'all 0.5s';
            carouselContainer.style.transform = 'translateX(-' + position + 'px)';
        });

        prevBtn.addEventListener('click', () => {
            if (carouselContainer.style.transform == 'translateX(' + (space / 2) + 'px)') return;
            position -= itemSize;
            btnCounter--;
            if (btnCounter == -1) {
                btnCounter = lastItem - 1;
            }
            carouselContainer.style.transition = 'all 0.5s';
            carouselContainer.style.transform = 'translateX(' + (position * -1) + 'px)';
        });
    }
    // next&prev buttons end

    // start of uptade carousel-container position
    carouselContainer.addEventListener('transitionend', () => {
        if (carouselContainer.style.transform == 'translateX(' + (space / 2) + 'px)') {
            carouselContainer.style.transition = 'none';
            carouselContainer.style.transform = 'translateX(-' + (lastItem * itemSize - space / 2) + 'px)';
            position = lastItem * itemSize - (space / 2);
        }
        if (carouselContainer.style.transform == 'translateX(-' + sizePerWidth + 'px)') {
            carouselContainer.style.transition = 'none';
            position = showItems * itemSize - (space / 2);
            btnCounter = 0;
            carouselContainer.style.transform = 'translateX(-' + position + 'px)';
        };

        // this is update navigation buttons active --- you can delete if you dont want to use navigation buttons
        var forClick = Math.round(position / itemSize - showItems);
        for (i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.remove('btn-active');
        }
        navBtns[btnCounter].classList.add('btn-active');
    });
    // end of uptade carousel-container position


    // navigation buttons start -- you can delete if you dont want to use this buttons
    if (sliderOptions.nav === true) {
        navigationBtns.style.display = 'flex';
        navBtns.forEach(function (items) {
            items.addEventListener('click', () => {
                for (i = 0; i < navBtns.length; i++) {
                    navBtns[i].classList.remove('btn-active');
                }
                const forClick = items.getAttribute('-forClick');
                var navPosition = Math.round(forClick * itemSize - (space / 2));
                carouselContainer.style.transition = 'all 0.5s';
                carouselContainer.style.transform = 'translateX(-' + navPosition + 'px)';
                items.classList.add('btn-active');
                position = navPosition;
                btnCounter = forClick - showItems;
            });
        })
    }
    // navigation buttons end


    // start of autoplay -- you can delete this if you dont want to use it
    if (sliderOptions.auto === true) {
        setInterval(function () {
            if (sliderOptions.reverse === true) {
                if (carouselContainer.style.transform == 'translateX(' + (space / 2) + 'px)') return;
                position -= itemSize;
                btnCounter--;
                if (btnCounter == -1) {
                    btnCounter = lastItem - 1;
                }
                carouselContainer.style.transition = 'all 0.5s';
                carouselContainer.style.transform = 'translateX(' + (position * -1) + 'px)';
            } else {
                if (carouselContainer.style.transform == 'translateX(-' + sizePerWidth + 'px)') return;
                position += itemSize;
                btnCounter++;
                carouselContainer.style.transition = 'all 0.5s';
                carouselContainer.style.transform = 'translateX(-' + position + 'px)';
            }
        }, (sliderOptions.time * 1000));
    }

    // end of autoplay
}