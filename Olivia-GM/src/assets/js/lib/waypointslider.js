var waypointa = new Waypoint({
  element: document.getElementById('waypointa'),
  handler: function(direction) {
    if (direction == "up"){
      $("#one").attr('href','#first'),
      $("#two").attr('href','#second'),
      $("#three").attr('href','#third')   }
    else {
      $("#one").attr('href','#firsta'),
      $("#two").attr('href','#seconda'),
      $("#three").attr('href','#thirda')
          }
  }
})

var waypointb = new Waypoint({
  element: document.getElementById('waypointb'),
  handler: function(direction) {
    if (direction == "up"){
      $("#one").attr('href','#firsta'),
      $("#two").attr('href','#seconda'),
      $("#three").attr('href','#thirda')   }
    else {
      $("#one").attr('href','#firstb'),
      $("#two").attr('href','#secondb'),
      $("#three").attr('href','#thirdb')
          }
  }
})

var waypointb = new Waypoint({
  element: document.getElementById('waypointc'),
  handler: function(direction) {
    if (direction == "up"){
      $("#one").attr('href','#firstb'),
      $("#two").attr('href','#secondb'),
      $("#three").attr('href','#thirdb')   }
    else {
      $("#one").attr('href','#firstc'),
      $("#two").attr('href','#secondc'),
      $("#three").attr('href','#thirdc')
          }
  }
})
