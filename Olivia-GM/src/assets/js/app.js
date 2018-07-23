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
  $('.hamburger-menu').toggleClass('animate');
});


//Scrollify
$(function() {
  $.scrollify({
    section : ".slide",
     interstitialSection : ".intersection",
     easing: "swing",
     //scrollbars: false,
     standardScrollElements: ".intersection",
     scrollSpeed: 1000,
  });
});

//Display menu


/*
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
*/
//play audio

//Stop and reset audio on new waypoint
function shutUp() {
$('audio').each(function(){
  //  this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
};


var player;

  $(document).ready(function(){

    $.scrollify.move(0);
    lnhgt();
    	player = $('<audio/>', {
    	  'id':'player',
    	  'style':'display:none',
    	  'html':'<source src="" type="audio/mpeg">'
    	});
    	player.appendTo('body');
      player=player[0];
      setAudioSource('null');


  });

var continuousElements = document.getElementsByClassName('sound')
for (var i = 0; i < continuousElements.length; i++) {
  new Waypoint({
    element: continuousElements[i],
    handler: function(direction) {
      if(direction == "down") {
    var snd = this.element.id;


  setTimeout(function(){ setAudioSource(snd) }, 10);
    }
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


  function setAudioSource(trk) {
//  player.pause();
	var url = "assets/media/" + trk + "sound.mp3";
  $(player).find("source").attr("src",url);
player.load();
player.play();

}


  //new dot nav work.

/*  $('#one').on('click',
  function(event) {
    event.preventDefault();
    console.log('yay');
    $.scrollify.move(8);
  })
*/
