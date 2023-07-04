var slideIndex = 0;
var slides = document.getElementsByClassName("slider-wrapper-review")[0].children;
var totalSlides = slides.length;

function showSlide(n) {
  for (var i = 0; i < totalSlides; i++) {
    slides[i].style.opacity = 0;
  }

  slideIndex = (n + totalSlides) % totalSlides;
  slides[slideIndex].style.opacity = 1;
}

function changeSlide(n) {
  showSlide(slideIndex + n);
}

document.getElementsByClassName("slider-prev")[0].addEventListener("click", function () {
  changeSlide(-1);
});

document.getElementsByClassName("slider-next")[0].addEventListener("click", function () {
  changeSlide(1);
});

function rotateSlides() {
  changeSlide(1);
}

// Запуск автоматичного переходу між слайдами
var interval = setInterval(rotateSlides, 3000);

// Зупинка автоматичного переходу при наведенні курсора на слайдер
document.getElementsByClassName("slider-container-review")[0].addEventListener("mouseenter", function () {
  clearInterval(interval);
});

// Поновлення автоматичного переходу після зняття курсора зі слайдера
document.getElementsByClassName("slider-container-review")[0].addEventListener("mouseleave", function () {
  interval = setInterval(rotateSlides, 3000);
});

showSlide(slideIndex);