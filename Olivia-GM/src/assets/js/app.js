import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import Scrollify from 'jquery-scrollify';

import 'waypoints/lib/noframework.waypoints.min';


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
     standardScrollElements: ".upperquad",
  });
});

//audio set up

var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
})
