// script.js

$(document).ready(function () {
  // Smooth scroll effect for navigation links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Dynamic Content Loading with AJAX
  $("#loadContentBtn").on("click", function () {
    // Example: Load content from a server and append it to the page
    $.ajax({
      url: "content.html", // Replace with your server endpoint
      method: "GET",
      success: function (data) {
        $("#dynamicContent").html(data);
      },
      error: function (error) {
        console.error("Error loading content:", error);
      },
    });
  });

  // Smooth Page Transitions
  $("body").on("click", "[data-href]", function (event) {
    event.preventDefault();
    var newPage = $(this).data("href");

    // Example: Perform a smooth transition before navigating to the new page
    $("body").fadeOut(500, function () {
      window.location.href = newPage;
    });
  });

  // Image Carousel (Using the Slick Carousel library)
  $("#imageCarousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev">&#9665;</button>',
    nextArrow: '<button type="button" class="slick-next">&#9655;</button>',
  });
});
