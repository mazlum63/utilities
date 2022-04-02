var carouselFade = function (selector, sliderOptions = {
    auto: false,
    time: 3,
    reverse: false,
    nav: true,
    arrows: true
}) {
    const carouselContainer = document.querySelector(selector).querySelector('.carousel-container');
    const carouselItems = Array.from(carouselContainer.children);
    carouselItems[0].classList.add('carousel-item-active');
    let position = 0;


    // start of navigation buttons --- you can delete this if you dont want to use
    const navBtnContainer = document.querySelector(selector).querySelector('.carousel-navigation');
    for (i = 0; i < carouselItems.length; i++) {
        navBtnContainer.innerHTML += '<button -forClick="' + i + '" class="btn-navigation"></button>';
    }
    const navBtns = Array.from(navBtnContainer.children);
    navBtns[0].classList.add('btn-active');
    navBtnContainer.style.display = 'none';
    if (sliderOptions.nav === true) {
        navBtnContainer.style.display = 'flex';
        navBtns.forEach(function (item) {
            item.addEventListener('click', () => {
                var forClick = item.getAttribute('-forClick');
                for (i = 0; i < navBtns.length; i++) {
                    carouselItems[i].classList.remove('carousel-item-active');
                    navBtns[i].classList.remove('btn-active');
                };
                carouselItems[forClick].classList.add('carousel-item-active');
                navBtns[forClick].classList.add('btn-active');
                position = forClick;
            });
        });
    }
    // start of navigation buttons

    // start of arrows --- you can delete of you dont want to use
    const nextBtn = document.querySelector(selector).querySelector('.carousel-next');
    const prevBtn = document.querySelector(selector).querySelector('.carousel-prev');
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
    if (sliderOptions.arrows === true) {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';
        nextBtn.addEventListener('click', () => {
            position++;
            if (position == carouselItems.length) {
                position = 0;
            }
            for (i = 0; i < carouselItems.length; i++) {
                carouselItems[i].classList.remove('carousel-item-active');
                navBtns[i].classList.remove('btn-active');
            }
            carouselItems[position].classList.add('carousel-item-active');
            navBtns[position].classList.add('btn-active');
        })
        prevBtn.addEventListener('click', () => {
            position--;
            if (position == -1) {
                position = carouselItems.length - 1;
            }
            for (i = 0; i < carouselItems.length; i++) {
                carouselItems[i].classList.remove('carousel-item-active');
                navBtns[i].classList.remove('btn-active');
            }
            carouselItems[position].classList.add('carousel-item-active');
            navBtns[position].classList.add('btn-active');
        });
    }
    // end of arrows


    // start of autoplay --- you can delete this if you dont want to use
    if (sliderOptions.auto === true) {
        setInterval(function () {
            if (sliderOptions.reverse === true) {
                position--;
                if (position == -1) {
                    position = carouselItems.length - 1;
                }
                for (i = 0; i < carouselItems.length; i++) {
                    carouselItems[i].classList.remove('carousel-item-active');
                    navBtns[i].classList.remove('btn-active');
                }
                carouselItems[position].classList.add('carousel-item-active');
                navBtns[position].classList.add('btn-active');
            } else {
                position++;
                if (position == carouselItems.length) {
                    position = 0;
                }
                for (i = 0; i < carouselItems.length; i++) {
                    carouselItems[i].classList.remove('carousel-item-active');
                    navBtns[i].classList.remove('btn-active');
                }
                carouselItems[position].classList.add('carousel-item-active');
                navBtns[position].classList.add('btn-active');
            }
        }, (sliderOptions.time * 1000));
    }
    // end of autoplay
}