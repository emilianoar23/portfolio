$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('.main_h').addClass('sticky');
    } else {
      $('.main_h').removeClass('sticky');
    }
  });
  
  $('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
      $('.main_h').removeClass('open-nav');
    } else {
      $('.main_h').addClass('open-nav');
    }
  });
  
  $('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('.main_h').removeClass('open-nav');
    }
  });
  
  $('nav a').click(function(event) {
    let id = $(this).attr("href");
    let offset = 70;
    let target = $(id).offset().top - offset;
    $('html, body').animate({
      scrollTop: target
    }, 500);
    event.preventDefault();
  });