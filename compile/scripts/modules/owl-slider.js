// -------------------------------------
//   owl slider
// -------------------------------------

var initSlider =  function() {

  initSlide();

  function initSlide() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      lazyLoad: true,
      nav:true,
      dots: true,
      navText: ["<span class='arrow arrow--left'></span>","<span class='arrow arrow--right'></span>"],
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
