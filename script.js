document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarNav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!toggleButton || !navbarNav || navLinks.length === 0) {
        console.error('Required elements not found in the DOM.');
        return;
    }

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

    // Set active class on the current page link or anchor link
    const currentHash = window.location.hash || '#home';
    console.log(`Current hash: ${currentHash}`);
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
            console.log(`Active link: ${link.getAttribute('href')}`);
        } else {
            link.classList.remove('active');
        }
    });

    // Optional: Add smooth scrolling for anchor links
    // Comment out this section if it causes issues
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                console.log(`Scrolling to: ${targetId}`);
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Update active class for the clicked link
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === targetId) {
                        link.classList.add('active');
                        console.log(`Active link: ${link.getAttribute('href')}`);
                    } else {
                        link.classList.remove('active');
                    }
                });
            } else {
                console.error(`Target element ${targetId} not found.`);
            }
        });
    });
});
