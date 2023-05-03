const allSlides = Array.from(document.querySelectorAll('.slider__item'))
const next = document.querySelector('.slider__arrow_next')
const prev = document.querySelector('.slider__arrow_prev')
let activeSlide = 0

function newSlide(n) {
    activeSlide = (n + allSlides.length) % allSlides.length;

    allSlides.forEach((sl) => sl.classList.remove('slider__item_active'));
    allSlides[activeSlide].classList.add('slider__item_active');
}

next.onclick = () => {newSlide(activeSlide + 1)};
prev.onclick = () => {newSlide(activeSlide - 1)};