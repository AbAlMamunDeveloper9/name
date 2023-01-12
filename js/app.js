$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    items: 3,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
  }); // menu

  $(".menu-btn").on("click", function () {
    $("#my-menu").toggleClass("show-menu");
    $(".menu-btn").toggleClass("menuopenclose");
  });

  $("#my-menu ul > li > a").on("click", function () {
    $("#my-menu").toggleClass("show-menu");
    $(".menu-btn").toggleClass("menuopenclose");
  });
});
