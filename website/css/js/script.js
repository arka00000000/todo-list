$(document).ready(function () {
 
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 800);
  });

  
  $(window).on('scroll', function () {
    $('.testimonials').each(function () {
      var position = $(this).offset().top;
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scrollTop + windowHeight > position) {
        $(this).fadeIn(1000);
      }
    });
  });

 
  $('.testimonials').hide();
});
