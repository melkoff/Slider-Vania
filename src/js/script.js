
var slideIndex = 0;
var slides = document.getElementsByClassName("slider-wrapper-top")[0].children;
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

// Auto Slider
var interval = setInterval(rotateSlides, 5000);

// Stop auto slide when hover
document.getElementsByClassName("slider-container-top")[0].addEventListener("mouseenter", function () {
  clearInterval(interval);
});

// Start auto slide when out hover
document.getElementsByClassName("slider-container-top")[0].addEventListener("mouseleave", function () {
  interval = setInterval(rotateSlides, 5000);
});

showSlide(slideIndex);
