document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const toggleButton = document.querySelector('.toggle-button');
  const navLinksContainer = document.querySelector('.navbar-nav');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = this.getAttribute('data-target');

      sections.forEach(section => section.classList.remove('active'));
      navLinks.forEach(link => link.classList.remove('active'));

      this.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  toggleButton.addEventListener('click', function() {
    navLinksContainer.classList.toggle('active');
    toggleButton.classList.toggle('active');
  });
});
