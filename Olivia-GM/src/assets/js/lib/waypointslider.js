
function showTitleUp (cls) {
  $( cls ).css('top', '60vh')
  $( cls ).animate({
  opacity: 1,
  top: "30vh",
}, 500,);
}

function hideTitleUp (cls) {
  $( cls ).animate({
  opacity: 0,
  top: "10vh",
}, 500,);
}

function showTitleDown (cls) {
  $( cls ).css('top', '10vh')
  $( cls ).delay(200).animate({
  opacity: 1,
  top: "30vh",
}, 500,);
}

function hideTitleDown (cls) {
  $( cls ).animate({
  opacity: 0,
  top: "60vh",
}, 200,);
}
var waypointdot = new Waypoint({
  element: document.getElementById('waypointdot'),
  handler: function(direction) {
    if (direction == "up"){
      $('.sticky-container').css("display", "none");
      hideTitleDown('.pt1');
  }
    else if(direction =="down"){
      $('.sticky-container').delay(1000).css("display", "block");
        showTitleUp('.pt1');
          }
  }
});

var waypointend = new Waypoint({
  element: document.getElementById('waypointend'),
  handler: function(direction) {
    if (direction == "up"){
      $('.sticky-container').delay(1000).css("display", "block");
        showTitleDown('.pt3');
      $('.sticky-container').css("display", "none");
  }
    else if(direction =="down"){
      $('.sticky-container').css("display", "none");
      hideTitleUp('.pt3');

          }
  }
});

var waypointa = new Waypoint({
  element: document.getElementById('waypointa'),
  handler: function(direction) {
    if (direction == "up"){
    /*  $("#one").attr('href','#first'),
      $("#two").attr('href','#second'),
      $("#three").attr('href','#third')*/
      hideTitleDown('.pt2');
      showTitleDown('.pt1');
     }
    else {
    /*  $("#one").attr('href','#firsta'),
      $("#two").attr('href','#seconda'),
      $("#three").attr('href','#thirda')*/
      hideTitleUp('.pt1');
      showTitleUp('.pt2');
          }
  }
})

var waypointb = new Waypoint({
  element: document.getElementById('waypointb'),
  handler: function(direction) {
    if (direction == "up"){
    /*  $("#one").attr('href','#firsta'),
      $("#two").attr('href','#seconda'),
      $("#three").attr('href','#thirda')*/
      hideTitleDown('.pt3');
      showTitleDown('.pt2');
      }
    else {
    /*  $("#one").attr('href','#firstb'),
      $("#two").attr('href','#secondb'),
      $("#three").attr('href','#thirdb')*/
      hideTitleUp('.pt2');
      showTitleUp('.pt3');
          }
  }
})
