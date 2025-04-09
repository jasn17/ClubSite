document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingBar = document.querySelector('.loading-bar');
    const contentWrapper = document.querySelector('.content-wrapper');
    
    // Start loading bar animation
    loadingBar.style.transform = 'scaleX(1)';

    // Load the main content
    fetch('build/main-content.html')
        .then(response => response.text())
        .then(html => {
            contentWrapper.innerHTML = html;
            
            // Initialize any scripts that were in the content
            const scripts = contentWrapper.getElementsByTagName('script');
            for (let script of scripts) {
                eval(script.innerHTML);
            }
            
            // Wait for all images and videos to load
            const mediaElements = [...contentWrapper.getElementsByTagName('img'), 
                                 ...contentWrapper.getElementsByTagName('video')];
            
            Promise.all([
                // Wait for all media to load
                Promise.all(mediaElements.map(media => {
                    if (media.complete) return Promise.resolve();
                    return new Promise(resolve => {
                        media.onload = media.onloadeddata = resolve;
                        media.onerror = resolve; // Handle load errors gracefully
                    });
                })),
                // Minimum animation time
                new Promise(resolve => setTimeout(resolve, 2000))
            ]).then(() => {
                // Wait for fill animation to complete
                setTimeout(() => {
                    // Fade out loading screen
                    loadingScreen.classList.add('fade-out');
                    
                    // Show content
                    contentWrapper.classList.add('loaded');

                    // Remove loading screen after animation
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 500);
            });
        })
        .catch(error => {
            console.error('Error loading content:', error);
            // Handle error gracefully - maybe show an error message to the user
        });
}); 