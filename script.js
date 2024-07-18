function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Close the mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
