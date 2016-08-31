/* global $ */
function main(){
  $('inner-content').hide();
  $('.explain').hover(function(){
  $(this).children('.inner-content').delay(500).show(200);
  $(this).toggleClass('blink');}, 
  function(){$(this).children('.inner-content').delay(500).hide(200);
  $(this).toggleClass('blink');})
}

$(document).ready(main());