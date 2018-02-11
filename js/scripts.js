$(document).ready(function() {
// Scroll Animation

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 100) {
//     $('header').addClass('header-active');
//   } else {
//     $('header').removeClass('header-active');
//   }
// });

// Only allow numbers on input

$('input').keypress(function(key) {
  if (key.charCode < 48 || key.charCode > 57)
    return false;
});

// Tabs to choose calculator

$('#fitTabs .nav-item:first-child .nav-link').tab('show');


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

  var $expendMessage = $('#expend .input-message');
  var $clear = $expendMessage.empty();

  if ($('.sedentary').hasClass('active')) {
    $clear;
    $expendMessage.append('LITTLE TO NO DAILY ACTIVITY');
  } else if ($('.lightly').hasClass('active')) {
    $clear;
    $expendMessage.append('ACTIVE 1-3 DAYS PER WEEK');
  } else if ($('.moderately').hasClass('active')) {
    $clear;
    $expendMessage.append('ACTIVE 3-5 DAYS PER WEEK');
  } else if ($('.heavily').hasClass('active')) {
    $clear;
    $expendMessage.append('ACTIVE 6-7 DAYS PER WEEK');
  }
});


// Update Input Message

var $expendMessage = $('#expend .input-message');
var $bmiMessage = $('#bodymass .input-message');

$('.variable input[name="weight"]').focus(function() {
  $expendMessage.empty();
  $expendMessage.append('Enter Weight in Pounds');

  $bmiMessage.empty();
  $bmiMessage.append('Enter Weight in Pounds')
});

$('.variable input[name="age"]').focus(function() {
  $expendMessage.empty();
  $expendMessage.append('Enter Age in Years');
});

$('.variable input[name="feet"]').focus(function() {
  $expendMessage.empty();
  $expendMessage.append('Enter Height in Feet & Inches');

  $bmiMessage.empty();
  $bmiMessage.append('Enter Height in Feet & Inches')
});


// Submit Expenditure Data

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

  var $countStart = 0;

  if ( $('.male').hasClass('active') && $('.weight input').val() && $('.age input').val() && $('.feet input').val() && $('.inches input').val()) {
    if ( $('.sedentary').hasClass('active') ) {
      $('.nav-link.macros').removeClass('disabled');
      var $sedentaryMale = ($expendMale * 1.2);
      $({counter: $countStart}).animate({
          counter: $sedentaryMale
        }, {
          duration: 1500,
          easing: 'easeOutBack',
          step: function(x) {
            $('.expend-calc').text((x).toFixed(1));
          }
        });
      // $('.expend-calc').append($sedentaryMale.toFixed(1) + ' Calories');
    } else if ( $('.lightly').hasClass('active') ) {
      $('.nav-link.macros').removeClass('disabled');
      var $lightlyMale = ($expendMale * 1.375);
      $({counter: $countStart}).animate({
          counter: $lightlyMale
        }, {
          duration: 1500,
          easing: 'easeOutBack',
          step: function(x) {
            $('.expend-calc').text((x).toFixed(1));
          }
        });
      // $('.expend-calc').append($lightlyMale.toFixed(1) + ' Calories');
    } else if ( $('.moderately').hasClass('active') ) {
      $('.nav-link.macros').removeClass('disabled');
      var $moderatelyMale = ($expendMale * 1.55);
      $({counter: $countStart}).animate({
          counter: $moderatelyMale
        }, {
          duration: 1500,
          easing: 'easeOutBack',
          step: function(x) {
            $('.expend-calc').text((x).toFixed(1));
          }
        });
      // $('.expend-calc').append($moderatelyMale.toFixed(1) + ' Calories');
    } else if ( $('.heavily').hasClass('active') ) {
      $('.nav-link.macros').removeClass('disabled');
      var $heavilyMale = ($expendMale * 1.725);
      $({counter: $countStart}).animate({
          counter: $heavilyMale
        }, {
          duration: 1500,
          easing: 'easeOutBack',
          step: function(x) {
            $('.expend-calc').text((x).toFixed(1));
          }
        });
      // $('.expend-calc').append($heavilyMale.toFixed(1) + ' Calories');
    }
  } else if ( $('.female').hasClass('active') && $('.weight input').val() && $('.age input').val() && $('.feet input').val() && $('.inches input').val()) {
    if ( $('.sedentary').hasClass('active') ) {
      $('.nav-link.macros').removeClass('disabled');
      var $sedentaryFemale = ($expendFemale * 1.2);
      $({counter: $countStart}).animate({
          counter: $sedentaryFemale
        }, {
          duration: 1500,
          easing: 'easeOutBack',
          step: function(x) {
            $('.expend-calc').text((x).toFixed(1));
          }
        });
      // $('.expend-calc').append($sedentaryFemale.toFixed(1) + ' Calories');
    } else if ( $('.lightly').hasClass('active') ) {
      $('.nav-link.macros').removeClass('disabled');
      var $lightlyFemale = ($expendFemale * 1.375);
      $({counter: $countStart}).animate({
          counter: $lightlyFemale
        }, {
          duration: 1500,
          easing: 'easeOutBack',
          step: function(x) {
            $('.expend-calc').text((x).toFixed(1));
          }
        });
      // $('.expend-calc').append($lightlyFemale.toFixed(1) + ' Calories');
    } else if ( $('.moderately').hasClass('active') ) {
      $('.nav-link.macros').removeClass('disabled');
      var $moderatelyFemale = ($expendFemale * 1.55);
      $({counter: $countStart}).animate({
          counter: $moderatelyFemale
        }, {
          duration: 1500,
          easing: 'easeOutBack',
          step: function(x) {
            $('.expend-calc').text((x).toFixed(1));
          }
        });
      // $('.expend-calc').append($moderatelyFemale.toFixed(1) + ' Calories');
    } else if ( $('.heavily').hasClass('active') ) {
      $('.nav-link.macros').removeClass('disabled');
      var $heavilyFemale = ($expendFemale * 1.725);
      $({counter: $countStart}).animate({
          counter: $heavilyFemale
        }, {
          duration: 1500,
          easing: 'easeOutBack',
          step: function(x) {
            $('.expend-calc').text((x).toFixed(1));
          }
        });
      // $('.expend-calc').append($heavilyFemale.toFixed(1) + ' Calories');
    }
  } else {
    $('.expend-calc').append('please fill out all fields.');
  }

  $('.calculation').addClass('animated-expend');
  $('html, body').animate({scrollTop:$('.expend-calc').position().top}, '2000');
});

$('.submit-bmi').click(function() {
  $('.bmi-calc').empty();
  $('.classification').empty();
  var $feetInput = $('#bodymass .variables .variable input[name="feet"]');
  var $inchesInput = $('#bodymass .variables .variable input[name="inches"]');
  var $weightInput = $('#bodymass .variables .variable input[name="weight"]');

  var $bmiFeet = $feetInput.val();
  var $bmiInch = $inchesInput.val();
  var $ftConv = parseInt($bmiFeet) * 30.48;
  var $inConv = parseInt($bmiInch) * 2.54;
  var $height = $ftConv + $inConv;
  var $meters = $height * 0.01;

  var $bmiWeight = $weightInput.val();
  var $weightConv = parseInt($bmiWeight) / 2.2;
  var $kg = $weightConv

  var $bmi = (($kg) / ($meters * $meters));

  var $countStart = 0;

  if ($feetInput.val() && $inchesInput.val() && $weightInput.val()) {
    $({counter: $countStart}).animate({
        counter: $bmi
      }, {
        duration: 1500,
        easing: 'easeOutBack',
        step: function(x) {
          $('.bmi-calc').text((x).toFixed(1));
        }
      });
  } else {
    $('.bmi-calc').append('please fill out all fields.');
  }

  if ($bmi < 18.5) {
    $('.classification').append('underweight');
  } else if (($bmi >= 18.5) && ($bmi < 25.0)) {
    $('.classification').append('normal')
  } else if (($bmi >= 25.0) && ($bmi < 30.0)) {
    $('.classification').append('overweight');
  } else if (($bmi >= 30.0) && ($bmi < 35.0)) {
    $('.classification').append('class 1 obesity');
  } else if (($bmi >= 35.0) && ($bmi < 40.0)) {
    $('.classification').append('class 2 obesity');
  } else if ($bmi >= 40) {
    $('.classification').append('class 3 obesity');
  }

  $('.bmi-calc').addClass('animated-bmi');
});

});
