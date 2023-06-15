$(document).ready(function() {
  // Smooth scrolling for navigation links
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});
