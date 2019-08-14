// -------------------------------------
//   owl slider
// -------------------------------------

var initHome =  function() {

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
    if ( $(window).width() > 950) {
       // $('.hero--tall').addClass('animateit');
    }
    else {
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
