/* global $ */
function main(){
  $('#homepage-link').mouseleave(function(){
    console.log("focusout event triggered")
    $(this).animate({width:30, height:30},200)
  });
  
  $('#homepage-link').click(function(){
  console.log("in expandDiv function")
  $(this).animate(
    { width: 500, height: 500}, 200
    )
  })
}

$(document).ready(main());