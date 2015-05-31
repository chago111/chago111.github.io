$(document).on('ready',function(){
  $(".menu").mouseenter(function(){
    $(this).css( "background-color","gray");
  });
  $(".menu").mouseout(function(){
    $(this).css( "background-color","#DAA520");
  });

});

window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    duration: 1000 // milliseconds
  });
}
