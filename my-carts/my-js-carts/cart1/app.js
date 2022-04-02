const cartContainer = document.querySelectorAll('.js-cart-container');

cartContainer.forEach(items => {
    const cartContainerProb = items.getBoundingClientRect();
    const xTiltPower = items.getAttribute("-tilt-x-power");
    const yTiltPower = items.getAttribute("-tilt-y-power");


    var tiltPowerX = 5;
    var tiltPowerY = 5;
    if(xTiltPower){
        tiltPowerX = xTiltPower;
    }
    if(yTiltPower){
        tiltPowerY = yTiltPower;
    }

    items.addEventListener('mousemove', (e) => {
        let cartWidth = cartContainerProb.width;
        let centerX = e.pageX - cartContainerProb.left - cartWidth / 2;
    
        let cartHeight = cartContainerProb.height;
        let centerY = e.pageY - cartContainerProb.top - cartHeight / 2;
        
        let containerRotateY = centerY / tiltPowerY;
        let containerRotateX = centerX / (-tiltPowerX);
    
        items.style.transition = 'none';
        items.style.transform = `rotateY(${containerRotateX}deg) rotateX(${containerRotateY}deg)`;
    });
    items.addEventListener('mouseout', () => {
        items.style.transform = `rotateY(0deg) rotateX(0deg)`;
        items.style.transition = 'all 0.5s linear';
    });
});