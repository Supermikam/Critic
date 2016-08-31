/* global $ */

function main(){
  

  // display color tab
  displayTab("color");
  //register click function
  
  $(".tab").click(function(){
    console.log("click event catched and in function");
    var tabName = $(this).attr("point-to");
    displayTab(tabName);
  })
}


function displayTab(tabName){
  $(".inner-content").hide();
  $(".tab").removeClass("active");
  
  $("[point-to ="+tabName+"]").addClass("active");
  $("#"+tabName).fadeIn(500);
  if ($(window).scrollTop() > 0) {
     $('body,html').animate(
       {scrollTop : 0}, 500);
  }
}

$(document).ready(main());

