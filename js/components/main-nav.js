'use strict';

(function() {
    const $toggle = document.querySelector('.main-hamburger')
    const $nav = document.querySelector('.main-nav')
    
    function toggleMenu() {
        $nav.classList.toggle('-open')
        $toggle.classList.toggle('-open')
        $nav.addEventListener('click', toggleMenu)
    }
    
    $toggle.addEventListener('click', toggleMenu)
})();