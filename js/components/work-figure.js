'use strict';

(function() {
    function getHeight() {
        const $links = document.querySelectorAll('.work-figure .link')
        $links.forEach($link => {            
            let $img = $link.querySelector('.image')
            
            let compStyles = getComputedStyle($img)
            
            $link.style.height = compStyles.getPropertyValue('height')
        })
    }

    addEventListener('resize', getHeight)
    addEventListener('load', getHeight)
})();