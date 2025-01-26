window.onload = function() {
    var faviconImages = ['/images/favicon1.png', '/images/favicon2.png'];
    var currentIndex = 0;
    setInterval(function() {
        currentIndex = (currentIndex + 1) % faviconImages.length;
        document.getElementById('favicon').href = faviconImages[currentIndex];
    }, 5000); // 2000 milliseconds = 2 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.projects-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slider && prevBtn && nextBtn) {
        const scrollAmount = 300; // Adjust this value based on your card width

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});