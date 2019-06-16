$(document).ready(function() {
  //Block Styles
  $('.block:first').slideUp(500).show(800);
  $('#list').hover(function() {
    $(this).css('background-color', 'lightblue');
  }).mouseleave(function() {
    $(this).css('background-color', 'white');
  });
  $('div:nth-child(2)').click(function() {
    $(this).html('CLICKED');
  });
  $('div:nth-child(3)').hover(function() {
    $(this).toggle('scale');
  });
  //Ul Styles

});