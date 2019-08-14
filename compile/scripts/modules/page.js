/*
  Module: page transitions
*/

$(document).ready(function(){

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
