//Preloader
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // class "loader hidden"
});

// Wow Js
wow = new WOW(
{
    boxClass:     'wow',      // default
    animateClass: 'animated animated2', // default
    offset:       0,          // default
    mobile:       true,       
    live:         true        // default
})
    wow.init();
            
// toggle class
$(document).ready(function(){
    $('.menu').click(function(){
    $('ul').toggleClass('active')
    })
})

// Nav
$('#menu').onePageNav();

