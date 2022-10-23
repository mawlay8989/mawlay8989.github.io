$(document).ready(function(){
	$('.counter').counterUp({
		delay: 10,
    	time: 1000
	});
	
	$(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 40) {
            $(".navbar").addClass("sticky");
            $(".navbar").addClass("py-4");
            $(".navbar").removeClass("py-6");
            $(".navbar").removeClass("bg-navbar");
            $(".navbar").addClass("bg-white");
            $(".navbar").addClass("text-gray-800");
            $(".navbar").addClass("shadow-xl");
            $('.toggler').addClass("bg-gray-800");
            $('.toggler').removeClass("bg-white");
            //$(".navbar img").attr("src", "images/logo.svg");
        } else {
            $(".navbar").removeClass("sticky");
            $(".navbar").removeClass("py-4");
            $(".navbar").addClass("py-6");
            $(".navbar").removeClass("bg-white");
            $(".navbar").addClass("bg-navbar");
            $(".navbar").removeClass("text-gray-800");
            $(".navbar").removeClass("shadow-xl");
            $('.toggler').removeClass("bg-gray-800");
            $('.toggler').addClass("bg-white");
            //$(".navbar img").attr("src", "images/logo-2.svg");
        }
    });
}
);
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        $(".navbar").addClass("sticky");
        $(".navbar").addClass("py-4");
        $(".navbar").removeClass("py-6");
        $(".navbar").removeClass("bg-navbar");
        $(".navbar").addClass("bg-white");
        $(".navbar").addClass("text-gray-800");
        $(".navbar").addClass("shadow-xl");
  } else {  
        $(".navbar").removeClass("sticky");
        $(".navbar").removeClass("py-4");
        $(".navbar").addClass("py-6");
        $(".navbar").removeClass("bg-white");
        $(".navbar").addClass("bg-navbar");
        $(".navbar").removeClass("text-gray-800");
        $(".navbar").removeClass("shadow-xl");
  }
}
*/

document.getElementById("menuToggle").onclick = function toggleMenu() {
  const navToggle = document.getElementsByClassName("toggle");
  for (let i = 0; i < navToggle.length; i++) {
    navToggle.item(i).classList.toggle("hidden");
  }
};