// =======================================
// MC Desing Webpages - script.js
// Handles:
// 1. Back to Top button visibility and scroll
// 2. Smooth scroll to top
// 3. Active navigation link highlight
// =======================================

document.addEventListener("DOMContentLoaded", function () {
    // ----- Back to Top button -----
    const backToTopBtn = document.getElementById("backToTop");

    // Safety check: only run logic if the button exists
    if (backToTopBtn) {
        // Show / hide the button based on scroll position
        window.addEventListener("scroll", function () {
            // If the user has scrolled down 200px or more, show the button
            if (window.scrollY > 200) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        });

        // Smooth scroll to top when the button is clicked
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    // ----- Active navigation link highlight -----
    // We get the current page id from the <body data-page="...">
    const currentPage = document.body.dataset.page; // e.g., "home", "my-code", "learn", "publish"

    if (currentPage) {
        // Select all navigation links
        const navLinks = document.querySelectorAll(".main-nav a");

        navLinks.forEach((link) => {
            const navId = link.dataset.nav; // e.g., "home", "my-code", etc.

            // If the nav link's data-nav matches the body data-page, mark it active
            if (navId === currentPage) {
                link.classList.add("active");
            }
        });
    }
});
