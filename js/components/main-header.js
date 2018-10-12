'use strict';

(function() {
    let ticking = false
    const $header = document.querySelector('.main-header')
    const $hamburger = document.querySelector('.main-hamburger')
    
    function changeBgc(lksp) {
        console.log(lksp)
        if(lksp > 0) {
            $header.classList.add('-background')
            $hamburger.classList.add('-dark')
        } else {
            $header.classList.remove('-background')
            $hamburger.classList.remove('-dark')
        }
    }
    
    window.addEventListener('scroll',  () => {
        let last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                changeBgc(last_known_scroll_position);
                ticking = false;
            });
        }
        ticking = true;
    })
})();