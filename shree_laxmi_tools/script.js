// Slider functionality for both background and content
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let contentSlides = document.querySelectorAll(".slide");
    let bgSlides = document.querySelectorAll(".bg-slide");
    let numbers = document.querySelectorAll(".counter-number");
    
    if (n > contentSlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = contentSlides.length}
    
    // Reset all slides
    for (i = 0; i < contentSlides.length; i++) {
        contentSlides[i].classList.remove("active");
        bgSlides[i].classList.remove("active");
        numbers[i].classList.remove("active");
    }
    
    // Set active slide and number
    contentSlides[slideIndex-1].classList.add("active");
    bgSlides[slideIndex-1].classList.add("active");
    numbers[slideIndex-1].classList.add("active");
}

// Set up click events for the numbered pagination
document.querySelectorAll(".counter-number").forEach((number, index) => {
    number.addEventListener("click", () => {
        currentSlide(index + 1);
    });
});

// Auto slide
setInterval(function() {
    slideIndex++;
    if (slideIndex > 3) {slideIndex = 1}
    showSlides(slideIndex);
}, 5000);

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu toggle if it exists in the HTML
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-menu-active');
        });
    }
    
    // Form submission handling
    const enquiryForm = document.querySelector('.enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Form submitted! This is a placeholder - connect to your backend to process the form.');
        });
    }
});