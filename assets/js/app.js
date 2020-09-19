$(document).ready(() => {
  // Show Filters
  $("#filter").click(() => {
    $(".filter-wrapper").toggle("animate__fadeInLeft");
  });
  // Hide Filters
  $(".close-filter-btn").click(() => {
    $(".filter-wrapper").toggle("animate__fadeInLeft");
  });
  // Show Side Navs
  $("#toggle").click(() => {
    $(".left-navs").toggle("animate__slideInLeft");
  });
  //Hide Side Navs
  $(".close-snav-btn").click(() => {
    $(".left-navs").toggle("animate__slideInLeft");
  });
  //Show Nexted Navs
  $(".has-children").click((e) => {
    let arrowDown = e.target;
    let checkArrowDown = $(arrowDown).hasClass("rotate180");
    if (checkArrowDown) {
      $(arrowDown).removeClass("rotate180");
    } else {
      $(arrowDown).addClass(["rotate180"]);
    }
  });

  // Owl Corousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    // nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
