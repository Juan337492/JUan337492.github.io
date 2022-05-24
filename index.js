const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const line = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
// mobile menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  line.classList.toggle("openMenu");
  line2.classList.toggle("openMenu");
  line3.classList.toggle("openMenu");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

/* adds scroll to top */
$(document).ready(function(){
  var duration = 2000;
  
  $('.to-top').click(function(){
    $('html, body').animate({scrollTop: 0}, duration);
  })

});

/*fades in headline */
$(document).ready(function(){
  $('.hidden').fadeIn(3300).removeClass('hidden');
});

/*removes hide class - shows nav bar for desktop view */
function myFunction(x) {
  if (x.matches) { 
// use .restore as a reference - no css on/for .restore 
    $('.restore').addClass('hide');
  } else {
    $('.hide').removeClass('hide');
  }
}

/* disable mobile menu scrolling */
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state change

function lockScroll() {
  if ($('body').hasClass('lock-scroll')) {
      $('body').removeClass('lock-scroll');
  }
  else {
      $('body').addClass('lock-scroll');
  }
}