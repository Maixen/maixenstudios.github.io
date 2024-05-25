document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slideInterval = 3000; // 3 seconds

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(currentIndex + 1);
    });

    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(currentIndex - 1);
    });

    function changeSlide(index) {
        slides[currentIndex].classList.remove('active');
        currentIndex = (index + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
    }

    function autoSlide() {
        changeSlide(currentIndex + 1);
    }

    setInterval(autoSlide, slideInterval);

    slides[currentIndex].classList.add('active');
});
