// Sidenav Implementation
$(function() {
      $('.sidenav').sidenav();
    })


// Carousel Implementation
$('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
var autoplay = true;
setInterval(function() { if(autoplay) $('.carousel.carousel-slider').carousel('next'); }, 4500);
$('.carousel.carousel-slider').hover(function(){ autoplay = false; },function(){ autoplay = true; });



$(document).ready(function(){

      $(window).scroll(function(){

       if($(window).scrollTop()>300){
         $('nav').addClass('red');
       }else{
         $('nav').removeClass('red');
       }
    });
  });
