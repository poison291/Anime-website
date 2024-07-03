document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeIcon.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode');
        if (body.classList.contains('light-mode')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });
});



// slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const sliderWrapper = document.querySelector('.slider-wrapper');
const slideWidth = slides[0].clientWidth; // Get the width of a single slide
const autoSlideInterval = 3000; // Auto slide interval in milliseconds (3 seconds)
let autoSlideTimer; // Variable to hold the timer for auto sliding

// Function to show slide based on index
function showSlide(index) {
    currentSlideIndex = index;
    const offset = -currentSlideIndex * slideWidth;
    sliderWrapper.style.transform = `translateX(${offset}px)`;
    updateActiveDot();
}

// Function to update active dot indicator
function updateActiveDot() {
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlideIndex);
    });
}

// Function to move to next slide
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        showSlide(currentSlideIndex + 1);
    } else {
        showSlide(0); // Loop back to the first slide
    }
}

// Function to move to previous slide
function prevSlide() {
    if (currentSlideIndex > 0) {
        showSlide(currentSlideIndex - 1);
    } else {
        showSlide(slides.length - 1); // Loop to the last slide
    }
}

// Function to start auto sliding
function startAutoSlide() {
    autoSlideTimer = setInterval(nextSlide, autoSlideInterval);
}

// Function to stop auto sliding
function stopAutoSlide() {
    clearInterval(autoSlideTimer);
}

// Event listener for clicking on left arrow button
document.querySelector('.left-arrow').addEventListener('click', function() {
    prevSlide();
});

// Event listener for clicking on right arrow button
document.querySelector('.right-arrow').addEventListener('click', function() {
    nextSlide();
});

// Event listener for keyboard arrow keys
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        prevSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});

// Initialize slider and start auto sliding
showSlide(currentSlideIndex);
startAutoSlide();
