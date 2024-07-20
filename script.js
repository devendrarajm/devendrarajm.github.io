document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarNav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle the navigation menu on mobile devices
    toggleButton.addEventListener('click', function() {
        console.log('Toggle button clicked');
        navbarNav.classList.toggle('active');
    });

    // Close the mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Link clicked: ${link.getAttribute('href')}`);
            navbarNav.classList.remove('active');
        });
    });

    // Set active class on the current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log(`Current page: ${currentPage}`);
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            console.log(`Active link: ${link.getAttribute('href')}`);
        } else {
            link.classList.remove('active');
        }
    });

    // Optional: Add smooth scrolling for anchor links
    // Comment out this section if it causes issues
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });
});
