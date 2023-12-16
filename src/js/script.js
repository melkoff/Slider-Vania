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


// line percent //

function showLine(color) {
  // find all lines
  var lines = document.getElementsByClassName("line");

  // hide all lines
  for (var i = 0; i < lines.length; i++) {
    lines[i].style.width = "0";
  }

  // get parent container width
  var parentWidth = document.querySelector(".percent-line").offsetWidth;

  // set width for conclusion line
  var selectedWidth;
  if (color === "green") {
    selectedWidth = parentWidth * 0.33;
  } else if (color === "yellow") {
    selectedWidth = parentWidth * 0.66;
  } else if (color === "red") {
    selectedWidth = parentWidth;
  }

  // show choose line with animation
  document.getElementById(color).style.width = selectedWidth + "px";
}