$(function() {
  //jquery code goes here
  $('.toggler').click(function(){
    //onclick: slide in the hidden menu and slide out the nav bar.
    if ($('#slideMenu').css('display')=='none') {
      $('#slideMenu').css({'display':'flex'});
    } else {
      $('#slideMenu').css({'display':'none'});
    }
  });
});
