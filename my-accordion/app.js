let accordion = document.querySelectorAll('.accordion');
accordion.forEach(function (items) {
    let accordionItems = Array.from(items.children);

    accordionItems.forEach(function (item) {
        let accordionContainer = item.querySelector('.accordion-container');
        let containerHeight = accordionContainer.getBoundingClientRect().height;
        console.log(containerHeight)
        accordionContainer.style.height = 0 + 'px'
        item.querySelector('.accordion-header').addEventListener('click', () => {

            // if you want to open just one accordion each time use this for loop
            for(i = 0; i < accordionItems.length; i++) {
                accordionItems[i].querySelector('.accordion-container').style.height = 0 + 'px';
                accordionItems[i].classList.remove('active');
            };

            item.classList.toggle('active');
            if (accordionContainer.style.height == 0 + 'px') {
                accordionContainer.style.height = containerHeight + 'px';
            } else {
                accordionContainer.style.height = 0 + 'px';
            }
        });
    });
})