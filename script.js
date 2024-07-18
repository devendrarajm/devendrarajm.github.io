document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navTabs = document.getElementById('nav-tabs');

    navToggle.addEventListener('click', function() {
        navTabs.classList.toggle('active');
    });
});
