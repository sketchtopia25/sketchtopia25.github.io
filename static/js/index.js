window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    // Bulma Carousel Initialization
    // - Initialize carousels with specific IDs and options
    // - Remove autoplay from the main carousel
    var mainCarousels = bulmaCarousel.attach('#image-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,  // Show one image at a time
        loop: true,
        infinite: true,
        autoplay: false, // Remove autoplay, it's a static image.
        // autoplaySpeed: 3000,  // No longer needed
    });

    var drawbotCarousels = bulmaCarousel.attach('#drawbot-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
    });

    var guessbotCarousels = bulmaCarousel.attach('#guessbot-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
    });


     // Bulma Slider (if you use it, keep this)
     bulmaSlider.attach();
});

//----------Recommended Vanilla JS Replacement (remove jQuery) ---------------------
/*
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });

  // Bulma Carousel Initialization
    // - Initialize carousels with specific IDs and options
    // - Remove autoplay from the main carousel
    var mainCarousels = bulmaCarousel.attach('#image-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,  // Show one image at a time
        loop: true,
        infinite: true,
        autoplay: false, // Remove autoplay, it's a static image.
        // autoplaySpeed: 3000,  // No longer needed
    });

    var drawbotCarousels = bulmaCarousel.attach('#drawbot-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
    });

    var guessbotCarousels = bulmaCarousel.attach('#guessbot-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
    });

     // Bulma Slider (if you use it, keep this)
     bulmaSlider.attach();
});
*/