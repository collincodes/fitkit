$(document).ready(function() {

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $('header').addClass('header-active');
  } else {
    $('header').removeClass('header-active');
  }
});

});
