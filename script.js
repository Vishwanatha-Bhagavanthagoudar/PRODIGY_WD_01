// script.js
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add a class to the navbar when scrolled
#navbar.scrolled {
    background-color: #f0f0f0;
    color: #333;
}