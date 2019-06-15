$(document).ready(function() {
  //Block Styles
  $('.block:first').slideUp(500).show(800);
  $('#list').hover(function() {
    $(this).css('background-color', 'lightblue');
  }).mouseleave(function() {
    $(this).css('background-color', 'white');
  });
});