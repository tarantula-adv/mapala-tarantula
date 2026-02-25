// Navbar berubah warna saat scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle hamburger menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle) {
    toggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
}
