import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


import Scrollify from 'jquery-scrollify';

import 'waypoints/lib/noframework.waypoints.min';
import './lib/waypointslider';


$(document).foundation();





//open/close menu

$('[data-toggle-menu]').on("click", function(){
  $("#overlay-nav-menu").toggleClass("is-open");
});


//Scrollify
$(function() {
  $.scrollify({
    section : ".slide",
     interstitialSection : ".intersection",
     //standardScrollElements: ".upperquad",
     scrollSpeed: 2400,
  });
});

//Display menu



$(document).ready( function() {
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var vpHeight = ($(".upperquad").height());
  var presDis = $('.sticky-container').css("display");

  if (scroll >= vpHeight) {
    if (presDis == "none" ) {
  $('.sticky-container').css("display", "block");
}
  }
  else{
    if (presDis == "block" ) {
  $('.sticky-container').css("display", "none");
}
  }


});
});

//play audio

var continuousElements = document.getElementsByClassName('sound')
for (var i = 0; i < continuousElements.length; i++) {
  new Waypoint({
    element: continuousElements[i],
    handler: function(direction) {
      if(direction == "down")
      var snd = ('#' + this.element.id + "-sound");
      $(snd).trigger('play');
    }
  })
}

//Audio mute

  $("#mute-audio").click( function (){
    if( $("audio").prop('muted') ) {
          $("audio").prop('muted', false);
          $(this).removeClass('fi-volume-strike').addClass('fi-volume');
    } else {
      $("audio").prop('muted', true);
      $(this).removeClass('fi-volume').addClass('fi-volume-strike');
    }
  });

  //page always loads from first scrollTop
//set this for the line height of the side bar

function lnhgt(){
  var lnhite = Math.round((($( window ).height())/3)-50);
$('.linespace').css('height', lnhite);

}


  $(document).ready(function(){
    $.scrollify.move(0);
    lnhgt();
    $('audio').trigger('pause');
      $("audio").prop('muted', true);
      setTimeout(function(){ $("audio").prop('muted', false)}, 9000);
  });
