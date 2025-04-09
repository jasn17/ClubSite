// Create a function to load the main content
function loadMainContent() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'main-content.html', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                document.querySelector('.content-wrapper').innerHTML = xhr.responseText;
                resolve();
            }
        };
        xhr.send();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingFill = document.querySelector('.loading-fill');
    const contentWrapper = document.querySelector('.content-wrapper');
    let progress = 0;
    
    // Start fill animation
    const fillInterval = setInterval(() => {
        progress += 1;
        if (progress <= 100) {
            loadingFill.style.height = `${progress}%`;
        }
    }, 20);

    // Handle page load
    Promise.all([
        // Wait for all resources to load
        new Promise(resolve => window.addEventListener('load', resolve)),
        // Add artificial minimum time for the loading animation
        new Promise(resolve => setTimeout(resolve, 2000)),
        // Load the main content
        loadMainContent()
    ]).then(() => {
        // Ensure fill is complete
        progress = 100;
        loadingFill.style.height = '100%';
        
        // Wait for fill animation to complete
        setTimeout(() => {
            // Fade out loading screen
            loadingScreen.classList.add('fade-out');
            
            // Show content
            contentWrapper.classList.add('loaded');

            // Remove loading screen after animation
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                clearInterval(fillInterval);
            }, 500);
        }, 500);
    });
}); 