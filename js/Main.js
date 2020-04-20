// Wow Js
wow = new WOW(
{
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
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