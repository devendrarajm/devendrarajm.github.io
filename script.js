document.addEventListener("DOMContentLoaded", function() {
    // Get all tablinks and add click event listeners
    const tablinks = document.querySelectorAll(".tablink");
    tablinks.forEach(tablink => {
        tablink.addEventListener("click", function(event) {
            event.preventDefault();
            const tabId = this.getAttribute("href").replace("#", "");
            // Hide all tabcontent elements
            document.querySelectorAll(".tabcontent").forEach(tabcontent => {
                tabcontent.classList.remove("active");
            });
            // Show the selected tabcontent
            document.getElementById(tabId).classList.add("active");
            // Update active class for tablinks
            tablinks.forEach(link => {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
