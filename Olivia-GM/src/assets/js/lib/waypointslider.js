
function showDivDown (cls) {
  $( cls ).css('top', '30vh')
  $( cls ).animate({
  opacity: 1,
  top: "0",
}, 400,);
}

function hideDivDown (cls) {
  $( cls ).animate({
  opacity: 0,
}, 500,);
}

function showDivUp (cls) {
  $( cls ).css('top', '-30vh')
  $( cls ).animate({
  opacity: 1,
  top: "0",
}, 500,);
}

function hideDivUp (cls) {
  $( cls ).animate({
  opacity: 0,
  top: "60vh",
}, 400,);
}
var sld;

var continuousElements = document.getElementsByClassName('slide')
for (var i = 0; i < continuousElements.length; i++) {
  new Waypoint({
    element: continuousElements[i],
    offset:300,
    handler: function(direction) {
      var sld = this.element.id;
      if (direction == "down" ){
      switch(sld) {
        case "sl1":
          showDivDown('.pt1');
          break;
        case "sl2":
        showDivDown('.pt2');
          break;
        case "sl3":
        showDivDown('.pt3');
          break;
        case "sl4":
        hideDivDown('.pt1');
        hideDivDown('.pt2');
        hideDivDown('.pt3');
        showDivDown('.pt1a');
          break;
        case "sl5":
          showDivDown('.pt2a');
          break;
        case "sl6":
        showDivDown('.pt3a');
          break;
        case "sl7":
        hideDivDown('.pta1');
        hideDivDown('.pta2');
        hideDivDown('.pta3');
        showDivDown('.pt1b');
          break;
        case "sl8":
          showDivDown('.pt2b');
          break;
        case "sl9":
        showDivDown('.pt3b');
          break;

      }
} else {
  switch(sld) {
    case "sl1":
    hideDivUp('.pt1')
    break;
    case "sl2":
    hideDivUp('.pt2');
      break;
    case "sl3":
    hideDivUp('.pt3');
      break;
    case "sl4":
    showDivUp('.pt1');
    showDivUp('.pt2');
    showDivUp('.pt3');
    hideDivUp('.pt1a');
      break;
    case "sl5":
    hideDivUp('.pt2a');
      break;
    case "sl6":
    hideDivUp('.pt3a');
      break;
    case "sl7":
    showDivUp('.pt1a');
    showDivUp('.pt2a');
    showDivUp('.pt3a');
    hideDivUp('.pt1b');
      break;
      case "sl8":
      hideDivUp('.pt2b');
        break;
      case "sl9":
      hideDivUp('.pt3b');
        break;
}
    }
  }
  })
}

var waypointdot = new Waypoint({
  element: document.getElementById('waypointdot'),
  handler: function(direction) {
    if (direction == "up"){
      $('.sticky-container').css("display", "none");
      $('.pin').css("opacity", 0);

  }
    else if(direction =="down"){
      $('.sticky-container').delay(1000).css("display", "block");
          }
  }
});

/* old waypoints
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
        $("#three").attr('href','#third')
        hideTitleDown('.pt2');
        showTitleDown('.pt1');
       }
      else {
       $("#one").attr('href','#firsta'),
        $("#two").attr('href','#seconda'),
        $("#three").attr('href','#thirda')
        hideTitleUp('.pt1');
        showTitleUp('.pt2');
            }
    }
  })

  var waypointb = new Waypoint({
    element: document.getElementById('waypointb'),
    handler: function(direction) {
      if (direction == "up"){
        $("#one").attr('href','#firsta'),
        $("#two").attr('href','#seconda'),
        $("#three").attr('href','#thirda')
        hideTitleDown('.pt3');
        showTitleDown('.pt2');
        }
      else {
        $("#one").attr('href','#firstb'),
        $("#two").attr('href','#secondb'),
        $("#three").attr('href','#thirdb')
        hideTitleUp('.pt2');
        showTitleUp('.pt3');
            }
    }
  })
*/
