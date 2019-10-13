const scrollToId = () => {
    const body = document.querySelector('body');

    body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.matches('.menu-link') || target.closest('.button-footer')) {
            const idHref = target.getAttribute('href');
            const block = document.querySelector(idHref);
            const popupDialogMenu = document.querySelector('.popup-dialog-menu');
            if (popupDialogMenu.getAttribute('style')) {
                popupDialogMenu.removeAttribute('style');
            }
            if (idHref === '#partners' || idHref === '#main') {
                scrollToY(block.getBoundingClientRect().top, 1000, 'easeInOutQuint');
            } else {
                scrollToY(block.getBoundingClientRect().top, 500, 'easeInOutQuint');
            }
        }            
    });

    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function( callback ){
                window.setTimeout(callback, 1000 / 60);
                };
    })();
    
    //   // main function
    function scrollToY(scrollTargetY, speed, easing) {
    //       // scrollTargetY: the target scrollY property of the window
    //       // speed: time in pixels per second
    //       // easing: easing equation to use
    
        let scrollY = window.scrollY || document.documentElement.scrollTop,
        currentTime = 0;
            scrollTargetY = scrollTargetY || 0;
            speed = speed || 2000;
            easing = easing || 'easeOutSine';
            
    
        // min time .1, max time .8 seconds
        let time = Math.max(0.5, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 10));
    
        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
        let easingEquations = {
                easeOutSine: function (pos) {
                    return Math.sin(pos * (Math.PI / 2));
                },
                easeInOutSine: function (pos) {
                    return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                },
                easeInOutQuint: function (pos) {
                    if ((pos /= 0.5) < 1) {
                        return 0.5 * Math.pow(pos, 5);
                    }
                    return 0.5 * (Math.pow((pos - 2), 5) + 2);
                }
            };
    
        // add animation loop
        function tick() {
            currentTime += 1 / 60;
    
            let p = currentTime / time;
            let t = easingEquations[easing](p);
    
            if (p < 1) {
                window.requestAnimFrame(tick);
    
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            } else {
                window.scrollTo(0, scrollTargetY);
            }
        }
    
        // call it once to get started
        tick();
    }
};
export default scrollToId;