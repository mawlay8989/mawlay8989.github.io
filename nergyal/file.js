let arrowDown = document.querySelector('#arrowDown');
let toScroll = document.querySelector('#toScroll');

function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 10);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }

arrowDown.addEventListener('click', function() {
    toScroll.scrollIntoView();
});