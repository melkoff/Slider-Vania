var slideIndex = 0;
var slides = document.getElementsByClassName("slider-wrapper")[0].children;

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  slideIndex = (n + slides.length) % slides.length;
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

showSlide(slideIndex);