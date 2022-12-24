var i = 0;
var txt = 'Nous sommes <span class="text-primary-700 font-bold">Breath Partner</span>, la Solution qui vous convient'; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerText += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("scroll", handleScroll);

let fab = document.querySelector('#fab');

      function handleScroll()
      {
        let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let gr = 0.80;

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

      const counterUp = window.counterUp.default

      const counters = document.querySelectorAll( '.counter' )

      let waypoint = new Waypoint({
        element: document.querySelector('#counterDiv'),
        handler: function() {
          for(const el of counters) {
            counterUp( el, {
              duration: 4000,
              delay: 16,
            })
          }
        this.destroy()
      },
          offset: 'bottom-in-view', 
        }
      );
     