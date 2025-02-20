document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu');
    let menuLines = document.querySelectorAll('#menu-lines path')

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
    //part 2
    menuIcon.addEventListener('mouseenter', () => {
        anime({
            targets: menuLines[1], 
            opacity: 0,
            duration: 200,
            easing: 'easeInOutQuad'
        })

        anime({
            targets: menuLines[0], 
            translateY: 0,
            translateX: 15,
            rotate: 45,
            duration: 200,
            easing: 'easeInOutQuad',
            strokeWidth: 3,
        })

        anime({
            targets: menuLines[2], 
            translateY: 15,
            translateX: -20,
            rotate: -45,
            duration: 200,
            easing: 'easeInOutQuad',
            strokeWidth: 3,
        })
    })

    menuIcon.addEventListener('mouseleave', () => {
        anime({
            targets: menuLines[1], 
            opacity: 1,
            duration: 200,
            easing: 'easeInOutQuad'
        })

        anime({
            targets: menuLines[0], 
            translateY: 0,
            translateX: 0,
            rotate: 0,
            duration: 200,
            easing: 'easeInOutQuad',
            strokeWidth: 1,

        })

        anime({
            targets: menuLines[2], 
            translateY: 0,
            translateX: 0,
            rotate: 0,
            duration: 200,
            easing: 'easeInOutQuad',
            strokeWidth: 1,

        })
    })

})