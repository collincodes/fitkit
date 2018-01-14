$(document).ready(function() {

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $('header').addClass('header-active');
  } else {
    $('header').removeClass('header-active');
  }
});

// Tabs to choose calculator
$('#fitTabs .nav-item:last-child .nav-link').tab('show');

// Daily Energy Expenditure Calculator
$('.gender .pick:first-child').addClass('active');
$('.gender .pick').click(function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

$('.activity .pick:first-child').addClass('active');
$('.activity .pick').click(function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  var $clear = $('.input-message').empty();

  if ($('.sedentary').hasClass('active')) {
    $clear;
    $('.input-message').append('LITTLE TO NO DAILY ACTIVITY');
  } else if ($('.lightly').hasClass('active')) {
    $clear;
    $('.input-message').append('ACTIVE 1-3 DAYS PER WEEK');
  } else if ($('.moderately').hasClass('active')) {
    $clear;
    $('.input-message').append('ACTIVE 3-5 DAYS PER WEEK');
  } else if ($('.heavily').hasClass('active')) {
    $clear;
    $('.input-message').append('ACTIVE 6-7 DAYS PER WEEK');
  }
});

// Update Input Message
$('.variable input[name="weight"]').focus(function() {
  $('.input-message').empty();
  $('.input-message').append('Enter Weight in Pounds');
});

$('.variable input[name="age"]').focus(function() {
  $('.input-message').empty();
  $('.input-message').append('Enter Age in Years');
});

$('.variable input[name="feet"]').focus(function() {
  $('.input-message').empty();
  $('.input-message').append('Enter Height in Feet & Inches');
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
    if ( $('.sedentary').hasClass('active') ) {
      var $sedentaryMale = ($expendMale * 1.2);
      $('.expend-calc').append($sedentaryMale.toFixed(1) + ' Calories');
    } else if ( $('.lightly').hasClass('active') ) {
      var $lightlyMale = ($expendMale * 1.375);
      $('.expend-calc').append($lightlyMale.toFixed(1) + ' Calories');
    } else if ( $('.moderately').hasClass('active') ) {
      var $moderatelyMale = ($expendMale * 1.55);
      $('.expend-calc').append($moderatelyMale.toFixed(1) + ' Calories');
    } else if ( $('.heavily').hasClass('active') ) {
      var $heavilyMale = ($expendMale * 1.725);
      $('.expend-calc').append($heavilyMale.toFixed(1) + ' Calories');
    }
  } else if ( $('.female').hasClass('active') && $('.weight input').val() && $('.age input').val() && $('.feet input').val() && $('.inches input').val()) {
    if ( $('.sedentary').hasClass('active') ) {
      var $sedentaryFemale = ($expendFemale * 1.2);
      $('.expend-calc').append($sedentaryFemale.toFixed(1) + ' Calories');
    } else if ( $('.lightly').hasClass('active') ) {
      var $lightlyFemale = ($expendFemale * 1.375);
      $('.expend-calc').append($lightlyFemale.toFixed(1) + ' Calories');
    } else if ( $('.moderately').hasClass('active') ) {
      var $moderatelyFemale = ($expendFemale * 1.55);
      $('.expend-calc').append($moderatelyFemale.toFixed(1) + ' Calories');
    } else if ( $('.heavily').hasClass('active') ) {
      var $heavilyFemale = ($expendFemale * 1.725);
      $('.expend-calc').append($heavilyFemale.toFixed(1) + ' Calories');
    }
  } else {
    $('.expend-calc').append('please fill out all fields.');
  }

  $('.expend-calc').addClass('animated-expend');
  $('html, body').animate({scrollTop:$('.expend-calc').position().top}, '2000');
});

});
