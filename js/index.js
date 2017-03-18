$(function(){

  $(window).load(function() {
    $('.home-carousell .carousell-list').carouFredSel({
      auto: false,
      responsive: true,
      width: '100%',
      // prev: '#prev2',
      // next: '#next2',
      pagination: ".carousell-pager",
      mousewheel: true,
      swipe: {
        onMouse: true,
        onTouch: true
      }
    });
  });

});