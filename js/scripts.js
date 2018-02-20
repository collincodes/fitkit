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


// bmi & expenditure switch
$('.switch').click(function() {
  $(this).children('.circle').toggleClass('left');
  $(this).children('.circle').toggleClass('right');
  $(this).siblings('.variables').children('.variable').toggleClass('active');
  $('input').val("");
});


// BMI Calculations
$('.submit-bmi').click(function() {
  $('.bmi-calc').empty();
  $('.classification').empty();
  var $feetInput = $('#bodymass .variables .variable input[name="feet"]');
  var $inchesInput = $('#bodymass .variables .variable input[name="inches"]');
  var $poundsInput = $('#bodymass .variables .variable input[name="lbs"]');

  var $kgInput = $('#bodymass .variables .variable input[name="kilo"]');
  var $cmInput = $('#bodymass .variables .variable input[name="cent"]');

  // Imperial Measurements
  var $bmipounds = $poundsInput.val();
  var $bmiFeet = $feetInput.val();
  var $bmiInch = $inchesInput.val();
  var $ftConv = parseInt($bmiFeet) * 30.48;
  var $inConv = parseInt($bmiInch) * 2.54;
  var $height = $ftConv + $inConv;
  var $imperialheight = $height * 0.01;

    // conversion of pounds to kgs
    var $weightConv = parseInt($bmipounds) / 2.2;
    var $imperialweight = $weightConv

    var $imperialbmi = (($imperialweight) / ($imperialheight * $imperialheight));

  // Metric Measurements
  var $metricweight = $kgInput.val();
  var $bmicm = $cmInput.val();
  var $metricheight = $bmicm * 0.01;

  var $metricbmi = (($metricweight) / ($metricheight * $metricheight));

  // Count Animation
  var $countStart = 0;

  if ($('.imperial').hasClass('active')) {
    if ($bmipounds && $bmiFeet && $bmiInch) {
      $({counter: $countStart}).animate({
          counter: $imperialbmi
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
  } else if ($('.metric').hasClass('active')) {
    if ($metricweight && $bmicm) {
      $({counter: $countStart}).animate({
          counter: $metricbmi
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
  }

  // BMI Classification is set here
  if ($('.metric').hasClass('active')) {
    if ($metricbmi < 18.5) {
      $('.classification').append('underweight');
    } else if (($metricbmi >= 18.5) && ($metricbmi < 25.0)) {
      $('.classification').append('normal')
    } else if (($metricbmi >= 25.0) && ($metricbmi < 30.0)) {
      $('.classification').append('overweight');
    } else if (($metricbmi >= 30.0) && ($metricbmi < 35.0)) {
      $('.classification').append('class 1 obesity');
    } else if (($metricbmi >= 35.0) && ($metricbmi < 40.0)) {
      $('.classification').append('class 2 obesity');
    } else if ($metricbmi >= 40) {
      $('.classification').append('class 3 obesity');
    }
  }

  if ($('.imperial').hasClass('active')) {
    if ($imperialbmi < 18.5) {
      $('.classification').append('underweight');
    } else if (($imperialbmi >= 18.5) && ($imperialbmi < 25.0)) {
      $('.classification').append('normal')
    } else if (($imperialbmi >= 25.0) && ($imperialbmi < 30.0)) {
      $('.classification').append('overweight');
    } else if (($imperialbmi >= 30.0) && ($imperialbmi < 35.0)) {
      $('.classification').append('class 1 obesity');
    } else if (($imperialbmi >= 35.0) && ($imperialbmi < 40.0)) {
      $('.classification').append('class 2 obesity');
    } else if ($imperialbmi >= 40) {
      $('.classification').append('class 3 obesity');
    }
  }

  $('.bmi-calc').addClass('animated-bmi');
});


///////////////////////////////////////////////////////////
// Daily Energy Expenditure Calculator

// Set Default Gender
$('.gender .pick:first-child').addClass('active');
$('.gender .pick').click(function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

// Activity Level Selection
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

///////////////////////////////////////////
// Update Input Message
var $expendMessage = $('#expend .input-message');
var $bmiMessage = $('#bodymass .input-message');

$('.variable input[name="lbs"]').focus(function() {
  $expendMessage.empty();
  $expendMessage.append('Enter Weight in Pounds');

  $bmiMessage.empty();
  $bmiMessage.append('Enter Weight in Pounds')
});

$('.variable input[name="kilo"]').focus(function() {
  $expendMessage.empty();
  $expendMessage.append('Enter Weight in Kilograms');

  $bmiMessage.empty();
  $bmiMessage.append('Enter Weight in Kilograms')
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

$('.variable input[name="inches"]').focus(function() {
  $expendMessage.empty();
  $expendMessage.append('Enter Height in Feet & Inches');

  $bmiMessage.empty();
  $bmiMessage.append('Enter Height in Feet & Inches')
});

$('.variable input[name="cent"]').focus(function() {
  $expendMessage.empty();
  $expendMessage.append('Enter Height in Centimeters');

  $bmiMessage.empty();
  $bmiMessage.append('Enter Height in Centimeters')
});


//////////////////////////////////////////////////////////
// Submit Expenditure Data
$('.submit-expend').click(function() {
  $('.expend-calc').empty();

  // Metric Expenditure Variables
  var $metricage = $('#expend .variables .metric input[name="age"]').val();
  var $expendkg = $('#expend .variables .metric input[name="kilo"]').val();
  var $expendcm = $('#expend .variables .metric input[name="cent"]').val();

  // Imperial Expenditure Variables
  var $imperialage = $('#expend .variables .imperial input[name="age"]').val();
  var $expendpounds = $('#expend .variables .imperial input[name="lbs"]').val();
  var $expendfeet = $('#expend .variables .imperial input[name="feet"]').val();
  var $expendinches = $('#expend .variables .imperial input[name="inches"]').val();
  var $ftConv = parseInt($expendfeet) * 30.48;
  var $inConv = parseInt($expendinches) * 2.54;
  var $height = $ftConv + $inConv;
  var $imperialheight = $height;

  var $weightConv = parseInt($expendpounds) / 2.2;
  var $imperialweight = $weightConv;

  var $expendMetricMale = ((10 * $expendkg) + (6.25 * $expendcm) - (5 * $metricage) + 5);
  var $expendMetricFemale = ((10 * $expendkg) + (6.25 * $expendcm) - (5 * $metricage) - 161);
  var $expendImperialMale = ((10 * $imperialweight) + (6.25 * $imperialheight) - (5 * $imperialage) + 5);
  var $expendImperialFemale = ((10 * $imperialweight) + (6.25 * $imperialheight) - (5 * $imperialage) - 161);


/////////////////////////////////
// Expenditure Calculations
  var $countStart = 0;

  if ($('#expend').find('.metric').hasClass('active')) {
    if ( $('.male').hasClass('active') && $metricage && $expendkg && $expendcm ) {

      // Check Male Fitness Levels
      if ( $('.sedentary').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $sedentaryMale = ($expendMetricMale * 1.2);
        $({counter: $countStart}).animate({
            counter: $sedentaryMale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.lightly').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $lightlyMale = ($expendMetricMale * 1.375);
        $({counter: $countStart}).animate({
            counter: $lightlyMale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.moderately').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $moderatelyMale = ($expendMetricMale * 1.55);
        $({counter: $countStart}).animate({
            counter: $moderatelyMale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.heavily').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $heavilyMale = ($expendMetricMale * 1.725);
        $({counter: $countStart}).animate({
            counter: $heavilyMale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      }
    } else if ( $('.female').hasClass('active') && $metricage && $expendkg && $expendcm) {
      if ( $('.sedentary').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $sedentaryFemale = ($expendMetricFemale * 1.2);
        $({counter: $countStart}).animate({
            counter: $sedentaryFemale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.lightly').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $lightlyFemale = ($expendMetricFemale * 1.375);
        $({counter: $countStart}).animate({
            counter: $lightlyFemale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.moderately').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $moderatelyFemale = ($expendMetricFemale * 1.55);
        $({counter: $countStart}).animate({
            counter: $moderatelyFemale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.heavily').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $heavilyFemale = ($expendMetricFemale * 1.725);
        $({counter: $countStart}).animate({
            counter: $heavilyFemale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      }
    } else {
      $('.calculation .constant').removeClass('animated');
      $('.expend-calc').append('please fill out all fields.');
    }
  } else if ($('#expend').find('.imperial').hasClass('active')) {
    if ( $('.male').hasClass('active') && $imperialage && $expendpounds && $expendfeet && $expendinches ) {
      if ( $('.sedentary').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $sedentaryMale = ($expendImperialMale * 1.2);
        $({counter: $countStart}).animate({
            counter: $sedentaryMale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.lightly').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $lightlyMale = ($expendImperialMale * 1.375);
        $({counter: $countStart}).animate({
            counter: $lightlyMale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.moderately').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $moderatelyMale = ($expendImperialMale * 1.55);
        $({counter: $countStart}).animate({
            counter: $moderatelyMale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.heavily').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $heavilyMale = ($expendImperialMale * 1.725);
        $({counter: $countStart}).animate({
            counter: $heavilyMale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      }
    } else if ( $('.female').hasClass('active') && $imperialage && $expendpounds && $expendfeet && $expendinches ) {
      if ( $('.sedentary').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $sedentaryFemale = ($expendImperialFemale * 1.2);
        $({counter: $countStart}).animate({
            counter: $sedentaryFemale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.lightly').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $lightlyFemale = ($expendImperialFemale * 1.375);
        $({counter: $countStart}).animate({
            counter: $lightlyFemale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.moderately').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $moderatelyFemale = ($expendImperialFemale * 1.55);
        $({counter: $countStart}).animate({
            counter: $moderatelyFemale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      } else if ( $('.heavily').hasClass('active') ) {
        $('.nav-link.macros').removeClass('disabled');
        $('.calculation .constant').addClass('animated');

        var $heavilyFemale = ($expendImperialFemale * 1.725);
        $({counter: $countStart}).animate({
            counter: $heavilyFemale
          }, {
            duration: 1500,
            easing: 'easeOutBack',
            step: function(x) {
              $('.expend-calc').text((x).toFixed(1));
            }
          });
      }
    } else {
      $('.calculation .constant').removeClass('animated');
      $('.expend-calc').append('please fill out all fields.');
    }
  }


  $('.calculation').addClass('animated-expend');
  $('html, body').animate({scrollTop:$('.expend-calc').position().top}, '2000');
});


////////////////////////////////////////
// Macros Scripts

// Toggle active goal
$('.goal, .body-type').find('.pick').click(function() {
  $(this).addClass('active');
  $(this).siblings('.pick.active').removeClass('active');

  // Description Message
  var $message = $('#macros .input-message');

  if ($(this).hasClass('ecto')) {
    $message.empty();
    $message.text('Thinner physique, smaller bone structure, and fast metabolic rate');
  } else if ($(this).hasClass('endo')) {
    $message.empty();
    $message.text('Bigger physique, larger bone structure, and higher total body & fat mass');
  } else if ($(this).hasClass('meso')) {
    $message.empty();
    $message.text('Athletic physique, medium bone structure, and above average lean muscle mass');
  }

});

});
