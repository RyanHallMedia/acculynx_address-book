(function(parent) {

// -------------------------------------
//   Responsive video embeds
// -------------------------------------

'use strict';

var initVideo = function initVideo() {
  $('main').fitVids();
};

// -------------------------------------
//   Front-end form validation w/ parsley
// -------------------------------------

var initValidation = function initValidation() {
  $('form').parsley({
    errorsContainer: function errorsContainer(pEle) {
      var $err = pEle.parent.$element.find('.form__message');
      return $err;
    }
  });
};

// /*
//   Module: contactForm
// */
//

// join section form
$('#joinForm').submit(function (ev) {
  // Prevent the form from actually submitting
  ev.preventDefault();

  // Send it to the server
  $.post({
    url: '/',
    dataType: 'json',
    data: $(this).serialize(),
    success: function success(response) {
      if (response.success) {
        $('#thanks').fadeIn();
        $('#joinForm').hide();
      } else {
        // response.error will be an object containing any validation errors that occurred, indexed by field name
        // e.g. response.error.fromName => ['From Name is required']
        for (var fieldId in response.error) {

          // Create the <ul>
          var $errors = $('<ul class="errors" />');

          // Wrap the error messages in <li> tags
          var messages = $.map(response.error[fieldId], function (message) {
            // return '<li>' + message + '</li>';
          });

          // Append the error messages to the ul
          $errors.append(messages.join(''));

          // Select the input element and append the .errors <ul> after it.
          $('#' + fieldId).after($errors).addClass('nogood');
        }
      }
    }
  });
});

// site wide form
$('#contactForm').submit(function (ev) {
  // Prevent the form from actually submitting
  ev.preventDefault();

  // Send it to the server
  $.post({
    url: '/',
    dataType: 'json',
    data: $(this).serialize(),
    success: function success(response) {
      if (response.success) {
        $('#thanks').fadeIn();
        $('#contactForm').hide();
      } else {
        // response.error will be an object containing any validation errors that occurred, indexed by field name
        // e.g. response.error.fromName => ['From Name is required']
        for (var fieldId in response.error) {

          // Create the <ul>
          var $errors = $('<ul class="errors" />');

          // Wrap the error messages in <li> tags
          var messages = $.map(response.error[fieldId], function (message) {
            // return '<li>' + message + '</li>';
          });

          // Append the error messages to the ul
          $errors.append(messages.join(''));

          // Select the input element and append the .errors <ul> after it.
          $('#' + fieldId).after($errors).addClass('nogood');
        }
      }
    }
  });
});

// -------------------------------------
//   owl slider
// -------------------------------------

var initHome = function initHome() {

  if ($('.hero--tall').length > 0) {

    // media query event handler
    // if (matchMedia) {
    //   const mq = window.matchMedia("(min-width: 950px)");
    //   mq.addListener(WidthChange);
    //   WidthChange(mq);
    // }
    // // media query change
    // function WidthChange(mq) {
    //   if (mq.matches) {
    //     $('.hero--tall').addClass('animateit');
    //   } else {
    //     $('.hero--tall').removeClass('animateit');
    //   }
    // }
    if ($(window).width() > 950) {
      // $('.hero--tall').addClass('animateit');
    } else {
        $('.hero--tall').removeClass('animateit');
      }

    // [ 0.17, 0.67, 0.83, 0.67 ]
    // [0.075, 0.82, 0.165, 1]
    // [0.6, 0.04, 0.98, 0.335]

    // var animationSequenceHero = [
    //   { e: $('.hero--tall.animateit'),                  p: { opacity: 1, scale: [1, 1.1] }, o: { easing: [0.075, 0.82, 0.165, 1], sequenceQueue: false, duration: 1200 } },
    //   { e: $('.hero--tall.animateit .info--block'),     p: { opacity: 1, width: '45%' }, o: { easing: [0.075, 0.82, 0.165, 1], delay: 500, duration: 800 } },
    //   { e: $('.hero--tall.animateit .info--block h1'),  p: { opacity: 1 }, o: { easing: [0.075, 0.82, 0.165, 1], sequenceQueue: false, duration: 100 } },
    // ];
    // $.Velocity.RunSequence(animationSequenceHero);
  }
};

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
var initHeader = function initHeader() {

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
  var openMenu = function openMenu() {
    $nav.addClass(openClass);
    $mobileMenuTrigger.addClass(openClass);
    isOpen = true;
  };
  var closeMenu = function closeMenu() {
    $nav.removeClass(openClass);
    $mobileMenuTrigger.removeClass(openClass);
    isOpen = false;
  };
  var toggleNav = function toggleNav() {
    // teranary operator
    isOpen ? closeMenu() : openMenu();
  };

  /* for contact form */
  var openForm = function openForm() {
    $contactForm.addClass(openClass);
    $formTrigger.addClass(openClass);
    isOpen = true;
  };
  var closeForm = function closeForm() {
    $contactForm.removeClass(openClass);
    $formTrigger.removeClass(openClass);
    isOpen = false;
  };
  var toggleForm = function toggleForm() {
    // teranary operator
    isOpen ? closeForm() : openForm();
  };

  // event delegation
  /* for main mobile navigaion */
  $mobileMenuTrigger.click(function (event) {
    event.preventDefault();
    toggleNav();
  });
  /* for contact form */
  $formTrigger.click(function (event) {
    event.preventDefault();
    toggleForm();
  });

  $('.js-noClick').click(function (event) {
    event.preventDefault();
  });
};

// -------------------------------------
//   owl slider
// -------------------------------------

var initSlider = function initSlider() {

  initSlide();

  function initSlide() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      lazyLoad: true,
      nav: true,
      dots: true,
      navText: ["<span class='arrow arrow--left'></span>", "<span class='arrow arrow--right'></span>"],
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000,
      onInitialized: startProgressBar,
      onTranslate: resetProgressBar,
      onTranslated: startProgressBar
    });
  }

  function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
      width: "100%",
      transition: "width 10000ms"
    });
  }

  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s"
    });
  }
};

/*
  Module: page transitions
*/

$(document).ready(function () {

  initValidation();
  initSlider();
  initScroll();
  initVideo();
  initHome();
  initHeader();
});

// $(function() {
//   var $main = $('.js-main'),
//       changedPage = false,
//
//   /* ----- Do this when a page loads ----- */
//   init = function() {
//     /* ----- This is where I would run any page specific functions ----- */
//
//       initSlide();
//       initValidation();
//       initSlider();
//       initScroll();
//       initVideo();
//       initHome();
//
//   },
//
//   /* ----- Do this for ajax page loads ----- */
//   ajaxLoad = function(html) {
//     init();
//
//     /* ----- Here you could maybe add logic to set the HTML title to the new page title ----- */
//
//     /* ----- Used for popState event (back/forward browser buttons) ----- */
//     changedPage = true;
//   },
//
//   loadPage = function(href) {
//
//     $main.wrapInner('<div class="new-results-div" />');
//
//     /* ----- Set height of $main to ensure the footer doesn't jump up -----  */
//     var newResultsHeight = $('.new-results-div').outerHeight();
//     $main.height(newResultsHeight);
//
//
//     // old page fadeout!!!
//     // $('.js-ajax-wrapper').velocity('transition.fadeOut', {
//     //   /* ----- Upon completion of animating out content put user at top of page. ----- */
//     //   complete: function(){
//     //     $('html').velocity("scroll", {
//     //       duration: 0,
//     //       easing: "ease",
//     //       mobileHA: false
//     //     });
//     //   }
//     // });
//
//     // [ 0.17, 0.67, 0.83, 0.67 ]
//     // [0.075, 0.82, 0.165, 1]
//     // [0.6, 0.04, 0.98, 0.335]
//
//     var animationSequenceOut = [
//       // { e: $('.counter--flex h1'), p: 'fadeOut', o: { display: false, duration: 1000 } },
//       // { e: $('.coverdiv'), p: { translateX: '100%' }, o: { easing: [0.6, 0.04, 0.98, 0.335], duration: 700 } },
//       { e: $('.footer'), p: { opacity: 0, display: 'none'  }, o: { sequenceQueue: false, duration: 700 } },
//       { e: $('.js-ajax-wrapper'), p: { opacity: 0, display: 'none' }, o: { delay: 200, sequenceQueue: false, duration: 700, complete: function(){
//         $('html').velocity("scroll", {
//           duration: 0,
//           easing: "ease",
//           mobileHA: false
//         });
//       } } }
//       // { e: $('html'), p: 'scroll', o: { duration: 1000 } }
//       // { e: $('.js-ajax-wrapper').velocity('transition.fadeOut', {
//       //   /* ----- Upon completion of animating out content put user at top of page. ----- */
//       //   complete: function(){
//       //     $('html').velocity("scroll", {
//       //       duration: 0,
//       //       easing: "ease",
//       //       mobileHA: false
//       //     });
//       //   }
//       // }) }
//     ];
//     $.Velocity.RunSequence(animationSequenceOut);
//
//
//     $.ajax({
//       type: 'POST',
//       url: href,
//       data: {},
//       success: function(result){
//         /* ----- Where the new content is added ----- */
//         $main.html(result);
//
//         /* ----- Wrap content in div so we can get it's height ----- */
//         $main.wrapInner('<div class="new-results-div" />');
//
//         /* ----- Get height of new container inside results container and set $main to it so there's no content jumpage -----  */
//         var newResultsHeight = $('.new-results-div').outerHeight();
//         $main.height(newResultsHeight);
//
//         /* ----- This runs on the first page load with no ajax ----- */
//         var animationSequenceIn = [
//           // { e: $('.coverdivIn'), p: { translateX: '200%' }, o: { easing: [0.075, 0.82, 0.165, 1], duration: 700 } },
//           { e: $('.footer'), p: 'fadeIn' , o: { sequenceQueue: false, duration: 700 } },
//           { e: $('.js-main .js-ajax-wrapper'), p: 'fadeIn', o: { sequenceQueue: false, complete: function(){
//             /* ----- Removes the temp height from $main ----- */
//             $main.css('height', '');
//
//             ajaxLoad();
//           } } }
//         ];
//         $.Velocity.RunSequence(animationSequenceIn);
//
//         // /* ----- Bring In New Content ----- */
//         // $('.js-main .js-ajax-wrapper').velocity('transition.fadeIn', {
//         //   visibility: 'visible',
//         //   complete: function() {
//         //     /* ----- Removes the temp height from $main ----- */
//         //     $main.css('height', '');
//         //
//         //     ajaxLoad();
//         //   }
//         // });
//       },
//       error: function(){
//         console.log("error.");
//         location.reload();
//       }
//     });
//
//   };
//
//   /* ----- This runs on the first page load with no ajax ----- */
//   init();
//
//   $(window).on("popstate", function(e) {
//     // -------------------------------------
//     //   If there was an AJAX page transition already,
//     //   then AJAX page load the requested page from the back or forwards button click.
//     //   Variable initially set after the $main variable.
//     // -------------------------------------
//     if (changedPage) loadPage(location.href);
//   });
//
//   $(document).on('click', 'a', function() {
//     var href = $(this).attr("href");
//
//     if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
//       history.pushState({}, '', href);
//       loadPage(href);
//       return false;
//     }
//   });
// });

// -------------------------------------
//   owl slider
// -------------------------------------

var initScroll = function initScroll() {

  AOS.init();

  // window.sr = ScrollReveal();
  //
  // var isFF = !!navigator.userAgent.match(/firefox/i);
  // if (isFF) {
  //   return false
  // } else {
  //   if (sr.isSupported()) {
  //     document.documentElement.classList.add('sr');
  //   }
  // }
  // //all sections
  // sr.reveal('.sr .section', { viewFactor: 0.1, viewOffset: { top: -150, right: 0, bottom: 0, left: 0 }, delay: 0, duration: 500, origin: 'bottom', scale: 1.05, distance: '0%', reset: true });
  // //odd side
  // sr.reveal('.animateIt--odd h4', { viewFactor: 0.8, delay: 200, duration: 800, reset: true, scale: 0.99 });
  // sr.reveal('.animateIt--odd h2', { viewFactor: 0.8, duration: 500, origin: 'right', scale: 0.99, distance: '10%', reset: true });
  // sr.reveal('.animateIt--odd p', { viewFactor: 0.8, duration: 500, origin: 'right', scale: 0.99, distance: '10%', reset: true });
  // sr.reveal('.animateIt--odd a', { viewFactor: 0.8, duration: 500, origin: 'right', scale: 0.99, distance: '10%', reset: true });
  // sr.reveal('.animateIt--odd .aminate-image', { viewFactor: 0.3, delay: 0, duration: 500, origin: 'left', scale: 0.95, distance: '10%', reset: true });
  // //even side
  // sr.reveal('.animateIt--even h4', { viewFactor: 0.8, delay: 200, duration: 800, reset: true, scale: 0.99 });
  // sr.reveal('.animateIt--even h2', { viewFactor: 0.8, duration: 500, origin: 'left', scale: 0.99, distance: '10%', reset: true });
  // sr.reveal('.animateIt--even p', { viewFactor: 0.8, duration: 500, origin: 'left', scale: 0.99, distance: '10%', reset: true });
  // sr.reveal('.animateIt--even a', { viewFactor: 0.8, duration: 500, origin: 'left', scale: 0.99, distance: '10%', reset: true });
  // sr.reveal('.animateIt--even .aminate-image', { viewFactor: 0.3, delay: 0, duration: 500, origin: 'right', scale: 0.95, distance: '10%', reset: true });
  // //text block
  // sr.reveal('.sr .animate--text', { viewFactor: 0.3, delay: 0, duration: 600, origin: 'right', scale: 0.99, distance: '4%', reset: true });
  // //cards
  // sr.reveal('.sr .card--animate', { duration: 500, reset: true, scale: 0.95 }, 50);
  // //others
  // sr.reveal('.sr h5', { viewFactor: 1.2, delay: 600, duration: 800, reset: true });
};})(this);