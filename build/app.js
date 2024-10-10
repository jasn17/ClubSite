document.addEventListener('DOMContentLoaded', function () {
    // Code to handle expandable elements with IntersectionObserver
    const expandableElements = document.querySelectorAll('.expandable-hr');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'expand-outward 1s ease forwards';
            } else {
                entry.target.style.animation = 'none'; // Reset animation
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    expandableElements.forEach(element => {
        observer.observe(element);
    });

    // Handling img-slide visibility using IntersectionObserver
    const images = document.querySelectorAll('.img-slide');
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('img-visible');
            } else {
                entry.target.classList.remove('img-visible'); // Remove the class to reset animation
            }
        });
    }, {
        threshold: 0.1 // Trigger as soon as 10% of the image is visible
    });

    images.forEach(image => {
        imgObserver.observe(image);
    });

    // Rotating text functionality
    const phrases = ['freedom', 'opportunity', 'innovation', 'community'];
    let currentIndex = 0;
    const textElement = document.getElementById('rotatingText');

    setInterval(() => {
        textElement.style.opacity = 0; // Start by hiding the text
        setTimeout(() => {
            textElement.textContent = phrases[currentIndex];
            textElement.style.opacity = 1; // Fade in the new text
            currentIndex = (currentIndex + 1) % phrases.length; // Move to the next index or loop back to the start
        }, 500); // Wait half a second before showing the new text
    }, 3000); // Change text every 3 seconds

    // Typewriter effect with IntersectionObserver (triggered on entering the viewport)
    const typewriterText = "Christ is King";
    let index = 0;
    let typingStarted = false; // To avoid triggering the typing multiple times

    function type() {
        const typewriterElement = document.getElementById('typewriter');
        if (typewriterElement && index <= typewriterText.length) {
            typewriterElement.innerHTML = typewriterText.slice(0, index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (100ms per letter)
        }
    }

    // IntersectionObserver for typewriter effect
    const typewriterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !typingStarted) {
                typingStarted = true; // Ensure the typing only starts once
                type(); // Start typing when the element enters the viewport
            }
        });
    }, {
        threshold: 0.25 // Trigger when 25% of the element is visible
    });

    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        typewriterObserver.observe(typewriterElement); // Observe the typewriter element
    }
});

