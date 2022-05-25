// BOM - Browser Object Model
// window
// DOM - Document Object Model Tree
// document
// document.querySelector('selector css') // one element
// document.querySelectorAll('selector css') // array of elements

// IIFE - https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function() {
    const clock = document.querySelector('.clock');
    function updateClock() {
        clock.innerHTML = new Date().toLocaleTimeString();
        // clock.style.color = 'red';
        // clock.classList.add('select');
    }
    setInterval(updateClock, 1000);
})();






