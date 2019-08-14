/*
  Module: nav animation
*/
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
        if (!$('.js--navigation').hasClass('has-scroll')) {
            $('.js--navigation').addClass('has-scroll');
        }
    } else if ($(this).scrollTop() < 50) {
        if ($('.js--navigation').hasClass('has-scroll')) {
            $('.js--navigation').removeClass('has-scroll');
        }
    }
});

/*
  Module: nav open
*/
var initHeader = function() {

  /* for main mobile navigaion */
  var $nav = $('.js-headerNav');
  var $mobileMenuTrigger = $('.js-hamburger');
  /* for contact form */
  var $contactForm = $('.js-contactForm');
  var $formTrigger = $('.js-contact');
  /* for both */
  var openClass = 'is-open';
  var isOpen = false;


  /* for main mobile navigaion */
  var openMenu = function() {
    $nav.addClass(openClass);
    $mobileMenuTrigger.addClass(openClass);
    isOpen = true;
  };
  var closeMenu = function() {
    $nav.removeClass(openClass);
    $mobileMenuTrigger.removeClass(openClass);
    isOpen = false;
  };
  var toggleNav = function() {
    // teranary operator
    isOpen ? closeMenu() : openMenu();
  };

  /* for contact form */
  var openForm = function() {
    $contactForm.addClass(openClass);
    $formTrigger.addClass(openClass);
    isOpen = true;
  };
  var closeForm = function() {
    $contactForm.removeClass(openClass);
    $formTrigger.removeClass(openClass);
    isOpen = false;
  };
  var toggleForm = function() {
    // teranary operator
    isOpen ? closeForm() : openForm();
  };


  // event delegation
  /* for main mobile navigaion */
  $mobileMenuTrigger.click(function(event) {
    event.preventDefault();
    toggleNav();
  });
  /* for contact form */
  $formTrigger.click(function(event) {
    event.preventDefault();
    toggleForm();
  });


  $('.js-noClick').click(function(event) {
    event.preventDefault();
  });
};
