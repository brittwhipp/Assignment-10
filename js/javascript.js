$(document).ready(function() {

/*
put a class on every image
use that class to hide everything
put an id on every image
and use the id to show them when you want to
put an id on every button
use that as a JS listener for an OnClick event
so when someone clicks a button with a certain id is fades in with the corresponding id
fadeOut = hide
fadeIn = show
*/

$('.fruitIcon').hide();

$( "#appleButton" ).click(function() {
  $( "#appleIcon" ).fadeIn( "slow", function() {
  });
});

$( "#bananaButton" ).click(function() {
  $( "#bananaIcon" ).fadeIn( "slow", function() {
  });
});

$( "#strawberryButton" ).click(function() {
  $( "#strawberryIcon" ).fadeIn( "slow", function() {
  });
});

$( "#pineappleButton" ).click(function() {
  $( "#pineappleIcon" ).fadeIn( "slow", function() {
  });
});

});
