window.onload = function () {
    var square = document.querySelector('.square');
    var itemSize = square.getAttribute('-item-size');
    for (i = 0; i < itemSize; i++) {

        var squareSize = Math.floor(Math.random() * (200 - 50) + 50);
        var squareClass = Math.floor(Math.random() * (4 - 1) + 1);
        
        var squareItem = document.createElement('div');
        squareItem.classList.add('square-item');
        squareItem.classList.add('item-' + squareClass);
        squareItem.style.width = squareSize + 'px';
        squareItem.style.height = squareSize + 'px';
        squareItem.style.top = 45 + '%';
        squareItem.style.left = 45 + '%';

        square.appendChild(squareItem);
    }
    setTimeout(() => {
        for (i = 0; i < itemSize; i++) {
            var squareItems = Array.from(square.children);
            var squareTop = Math.floor(Math.random() * (100 + 10) - 10);
            var squareLeft = Math.floor(Math.random() * (100 + 10) - 10);
            squareItems[i].style.top = squareTop + '%';
            squareItems[i].style.left = squareLeft + '%';
        }
    })
};