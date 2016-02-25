/*
  * @package Droplet
  * @subpackage Droplet HTML
  * 
  * Template Scripts
  * Created by Themeturn
*/

$(window).bind('scroll', function() {
    "use strict";
    var nav_height = $(window).height() - 930;
    if ($(window).scrollTop() > nav_height) {
        $('.navbar-default').addClass('on');
        $('.logo').removeClass('static-logo');
    }
    if ($(window).scrollTop() < nav_height){
        $('.green-button').addClass('white');

    }
   
    
});


$(document).ready(function() {
  "use strict";

 $("#client-carousel").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 400,
      pagination:false,
      items : 5,
      rewindNav: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      stopOnHover:true,
      autoPlay:true

   });
});