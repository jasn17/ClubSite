document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const contentWrapper = document.querySelector('.content-wrapper');

    // Ensure all images and resources are loaded
    window.addEventListener('load', () => {
        // Add fade-out class to loading screen
        loadingScreen.classList.add('fade-out');
        
        // Show content
        contentWrapper.classList.add('loaded');

        // Remove loading screen after animation
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // Match this with the CSS transition time
    });
}); 