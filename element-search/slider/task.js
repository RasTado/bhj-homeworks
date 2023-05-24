const allSlides = Array.from(document.querySelectorAll(".slider__item"));
const allDotes = Array.from(document.querySelectorAll(".slider__dot"));
const next = document.querySelector(".slider__arrow_next");
const prev = document.querySelector(".slider__arrow_prev");

// let activeSlide = 0;

// function newSlide() {
//   activeSlide = (n + allSlides.length) % allSlides.length;

//   allSlides.forEach((sl) => sl.classList.remove("slider__item_active"));
//   allSlides[activeSlide].classList.add("slider__item_active");
// }

// next.onclick = () => {
//   newSlide(activeSlide + 1);
// };
// prev.onclick = () => {
//   newSlide(activeSlide - 1);
// };

function newSlide(n, x = null) {
  curSl = allSlides.indexOf(document.querySelector(".slider__item_active"));
  // curSl = allSlides.findIndex((el) => {
  //   return el == document.querySelector(".slider__item_active");
  // });

  allSlides.forEach((sl) => sl.classList.remove("slider__item_active"));
  allDotes.forEach((dt) => dt.classList.remove("slider__dot_active"));
  if (x == null) {
    indSl = curSl + n < 0 ? allSlides.length - 1 : curSl + n;
    indSl = indSl >= allSlides.length ? 0 : indSl;
    allSlides[indSl].classList.add("slider__item_active");
    allDotes[indSl].classList.add("slider__dot_active");
  } else {
    allSlides[x].classList.add("slider__item_active");
    allDotes[x].classList.add("slider__dot_active");
  }
}

next.onclick = () => {
  newSlide(1);
};
prev.onclick = () => {
  newSlide(-1);
};
allDotes.forEach((dot) => {
  dot.onclick = () => {
    indD = allDotes.indexOf(dot);
    newSlide(0, indD);
  };
});
