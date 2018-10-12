'use strict';

(function() {
    const dataText = [ " Back-end Developer", " Front-end Developer"]
    const $textRotator = document.querySelector('#text-rotator')
    
    function typeWriter(text, i, callback) {
        if (i < text.length) {
            $textRotator.innerHTML = text.substring(0, i+1)
            setTimeout(function() {
                typeWriter(text, i + 1, callback)
              }, 150)
        } else if (typeof callback == 'function') {
            setTimeout(callback, 1500)
        }
    }

    function typeClear(text, i, callback) {
        if (i >= 0) {
            $textRotator.innerHTML = text.substring(0, i+1)
            setTimeout(function() {
                typeClear(text, i - 1, callback)
              }, 50)
        } else if (typeof callback == 'function') {
            setTimeout(callback, 500)
        }
    }

    function startTextAnimation(i) {
        i = i % dataText.length

        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function(){
                typeClear(dataText[i], dataText[i].length, function() {
                    startTextAnimation(i + 1)
                });
            });
        }
    }

    startTextAnimation(0);
})();