$(document).ready(function(){
  var widthW = $(window).width();
  var heightW = $(window).height();
  var widthD = $(document).width();
  var heightD = $(document).height();
  $(document).scroll(function(){
    var y = $(document).scrollTop();
    if(y>5){
      $('header').css('background-color','white');
      $('.navbar').addClass('scrolled');
    }
    else {
      $('header').css('background-color','rgba(0 , 0, 0, .0');
      $('.navbar').removeClass('scrolled');
    }

    if(y>0 && y<heightW/2){
      var scrollPerc = (y/(heightW/2))*.5;
      var backgroundAlpha = 0.35*(1-scrollPerc);
      $('.hero').css('box-shadow','inset 0 0 0 1000px rgba(0,0,0,'+backgroundAlpha+')');
    }

  })
});
