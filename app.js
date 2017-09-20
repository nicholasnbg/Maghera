$(document).ready(function(){

  /*Change appearanc of navbar when scrolled from top of page*/
  var widthW = $(window).width();
  var heightW = $(window).height();
  var widthD = $(document).width();
  var heightD = $(document).height();




  $(document).scroll(function(){

    var y = $(document).scrollTop();
    if($('body').hasClass('index')){
      if(y>5){
        $('header').css('background-color','white');
        $('.navbar').addClass('scrolled');
      }
      else {
        if(widthW>550){
          $('header').css('background-color','rgba(0 , 0, 0, .0');
          $('.navbar').removeClass('scrolled');
        }
      }
    }


    /*Changes opacity of hero image when scrolled*/
    if(y>0 && y<heightW/2){
      var scrollPerc = (y/(heightW/2))*.5;
      var backgroundAlpha = 0.35*(1-scrollPerc);
      $('.hero').css('box-shadow','inset 0 0 0 1000px rgba(0,0,0,'+backgroundAlpha+')');
    }
  })

  /*Mobile Nav functions*/
  $('.menuToggle').click(function(){
    if(!($('.menuToggle').hasClass('open'))){
      $('header').css('background-color','white');
      $('.navbar').addClass('scrolled');
      $('#mobile-menu').css('width','40vw');
    } else {
      var y = $(document).scrollTop();
      if(y<=5){
        if($('body').hasClass('index')){
          $('header').css('background-color','rgba(0 , 0, 0, .0');
          $('.navbar').removeClass('scrolled');
        }
      }
      $('#mobile-menu').css('width','0px');
    }
  })

  $('.menuToggle').click(function(){
    $('.menuToggle').toggleClass('open');
  })

  /*Smooth scroll for hero down arrow */
  $("#down-arrow").click(function() {
    console.log('down click');
    $('html,body').animate({
      scrollTop: $(".quote").offset().top + (-(heightW/100*8))},
      'slow');
    });
  });
