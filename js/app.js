document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', () => {
        let isMenuVisible = menu.style.right === '0px';

        let moveRightValue;

    if(isMenuVisible) {
        moveRightValue = '-250px'
    }
    else {
        moveRightValue = '0px'
    }

    anime({
        targets: '#menu',
        right: moveRightValue,
        easing: 'easeInOutQuad',
        duration: 500
    })


    })

    document.addEventListener('click', (event) => {
     //   console.log("event", event)
       // console.log("event target", event.target)

        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            anime({
                targets: '#menu',
                right: '-250px',
                easing: 'easeInOutQuad',
                duration: 500
            })
        }

    })

})