document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarNav = document.querySelector('.navbar-nav');

    toggleButton.addEventListener('click', function() {
        navbarNav.classList.toggle('active');
    });

    // Close the mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarNav.classList.remove('active');
        });
    });

    // Set active class on current page link
    const currentPage = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
