document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');

            // Remove active class from all sections and nav links
            sections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked nav link and the corresponding section
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});
