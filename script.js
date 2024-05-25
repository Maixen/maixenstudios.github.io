document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length * 2 - 1;
    const slideInterval = 5000;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function changeSlide(index) {
        currentIndex = index;
        if (currentIndex > totalSlides){
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(currentIndex + 2);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(currentIndex - 2);
    });

    function autoSlide() {
        changeSlide(currentIndex + 2);
    }

    setInterval(autoSlide, slideInterval);

    showSlide(currentIndex);
});
