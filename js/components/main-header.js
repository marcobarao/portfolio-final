'use strict';

(function() {
    const $header = document.querySelector('.main-header')
    
    function changeBgc() {
        if(window.scrollY > 0) {
            $header.classList.add('-background')
        } else {
            $header.classList.remove('-background')
        }
    }
    
    window.addEventListener('scroll',  changeBgc)
})();