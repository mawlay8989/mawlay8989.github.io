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

document.addEventListener("scroll", handleScroll);

let fab = document.querySelector('#fab');

      function handleScroll()
      {
        let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let gr = 0.40;

        if ((document.documentElement.scrollTop / scrollableHeight ) > gr) {
          if(!fab.classList.contains("fab-fadein"))
            fab.classList.add("fab-fadein")
          } else {
            //hide button
            if(fab.classList.contains("fab-fadein"))
            fab.classList.remove("fab-fadein")
          }
      }

      fab.addEventListener("click", scrollToTop);

      function scrollToTop()
      {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }