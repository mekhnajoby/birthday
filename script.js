// Confetti Generation
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const count = 50;

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(confetti);
    }
}

// Carousel Functionality
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');

    // Wrap around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

// Event Listeners for Carousel
prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight') {
        showSlide(currentSlide + 1);
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    showSlide(0);
});
