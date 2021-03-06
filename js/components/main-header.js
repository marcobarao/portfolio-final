'use strict';

(function() {
    let ticking = false
    const $header = document.querySelector('.main-header')
    const $hamburger = document.querySelector('.main-hamburger')
    
    function changeBgc(lksp) {
        if(lksp > 0) {
            $header.classList.add('-background')
            $hamburger.classList.add('-dark')
        } else {
            $header.classList.remove('-background')
            $hamburger.classList.remove('-dark')
        }
    }
    function scrolled() {
        let last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                changeBgc(last_known_scroll_position);
                ticking = false;
            });
        }
        ticking = true;
    }
    addEventListener('scroll',  scrolled)
    addEventListener('load', scrolled)
})();