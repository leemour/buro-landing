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
  
  var onMapMouseleaveHandler = function (event) {
    var that = $(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
  }

  var onMapClickHandler = function (event) {
    var that = $(this);

    // Disable the click handler until the user leaves the map area
    that.off('click', onMapClickHandler);

    // Enable scrolling zoom
    that.find('iframe').css("pointer-events", "auto");

    // Handle the mouse leave event
    that.on('mouseleave', onMapMouseleaveHandler);
  }

  // Enable map zooming with mouse scroll when the user clicks the map
  $('.maps.embed-container').on('click', onMapClickHandler);
  
    
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