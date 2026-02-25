document.addEventListener("DOMContentLoaded", function() {

    const navbar = document.querySelector(".navbar");
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    // Scroll effect
    window.addEventListener("scroll", function() {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Toggle menu
    toggle.addEventListener("click", function(e) {
        e.stopPropagation(); // biar nggak langsung ketutup
        navLinks.classList.toggle("active");
    });

    // Klik di luar menu = tutup
    document.addEventListener("click", function(e) {
        if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });
    // LIGHTBOX GALERI
const galeriItems = document.querySelectorAll('.galeri-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

galeriItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = item.src;
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});

});
