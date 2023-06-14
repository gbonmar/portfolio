function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
// Smooth scrolling for navigation links
$('nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});
