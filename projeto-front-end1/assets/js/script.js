document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-wrapper');
    const articles = document.querySelectorAll('.carousel article');
    const totalSlides = articles.length;
    let currentSlide = 0;

    document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        updateCarousel();
    });

    document.querySelector('.carousel-btn.next').addEventListener('click', () => {
        currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentSlide * 50;
        carousel.style.transform = `translateX(${offset}%)`;
    }
});
