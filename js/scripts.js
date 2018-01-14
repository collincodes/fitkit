$(document).ready(function() {

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $('header').addClass('header-active');
  } else {
    $('header').removeClass('header-active');
  }
});

// Tabs to choose calculator
$('#fitTabs .nav-item:first-child .nav-link').tab('show');

// Daily Energy Expenditure Calculator
$('.gender .pick:first-child').addClass('active');
$('.gender .pick').click(function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

$('.submit-expend').click(function() {
  $('.expend-calc').empty();
  var $expendFeet = $('.feet input[name="feet"]').val();
  var $expendInch = $('.inches input[name="inches"]').val();
  var $ftConv = parseInt($expendFeet) * 30.48;
  var $inConv = parseInt($expendInch) * 2.54;
  var $height = $ftConv + $inConv;

  var $expendWeight = $('.weight input[name="weight"]').val();
  var $weightConv = parseInt($expendWeight) / 2.2;
  var $kg = $weightConv

  var $expendAge = $('.age input[name="age"]').val();
  var $age = parseInt($expendAge);

  var $expendMale = ((10 * $kg) + (6.25 * $height) - (5 * $age) + 5);
  var $expendFemale = ((10 * $kg) + (6.25 * $height) - (5 * $age) - 161);

  if ( $('.male').hasClass('active') && $('.weight input').val() && $('.age input').val() && $('.feet input').val() && $('.inches input').val()) {
    $('.expend-calc').append($expendMale.toFixed(1) + ' Calories');
  } else if ( $('.female').hasClass('active') && $('.weight input').val() && $('.age input').val() && $('.feet input').val() && $('.inches input').val()) {
    $('.expend-calc').append($expendFemale.toFixed(1) + ' Calories');
  } else {
    $('.expend-calc').append('please fill out all fields.');
  }

  $('.expend-calc').addClass('animated-expend');
});

});
