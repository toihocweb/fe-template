$(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    nav: true,
    navText: [
      `<i  class="fa fa-arrow-left" aria-hidden="true"></i>`,
      `<i class="fa fa-arrow-right" aria-hidden="true"></i>`,
    ],
    // dots: false,
  });
});
