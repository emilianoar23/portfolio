$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $('#header-js').addClass('sticky');
  } else {
    $('#header-js').removeClass('sticky');
  }
});

$('.mobile-toggle').click(function () {
  if ($('#header-js').hasClass('open-nav')) {
    $('#header-js').removeClass('open-nav');
  } else {
    $('#header-js').addClass('open-nav');
  }
});

$('#main_h li a').click(function () {
  if ($('#header-js').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('header-js').removeClass('open-nav');
  }
});

$('nav a').click(function (event) {
  let id = $(this).attr("href");
  let offset = 70;
  let target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
});