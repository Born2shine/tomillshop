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
  $(".has-children-icon i").click((e) => {
    let arrowDown = e.target;
    let nextedList = e.target.parentNode.parentNode.children[2];
    let checkArrowDown = $(arrowDown).hasClass("rotate180");
    if (checkArrowDown) {
      $(arrowDown).removeClass("rotate180");
    } else {
      $(arrowDown).addClass(["rotate180"]);
    }
    let nextedListLink = nextedList.children;
    nextedListLink = Array.from(nextedListLink);
    nextedListLink.forEach((li) => {
      nextedListLink = li.children;
      $(nextedListLink).css("color", "#343a40");
    });

    $(nextedList).slideToggle();
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
