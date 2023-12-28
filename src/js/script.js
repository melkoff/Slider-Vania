// var slideIndex = 0;
// var slides = document.getElementsByClassName("slider-wrapper")[0].children;

// function showSlide(n) {
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//   }

//   slideIndex = (n + slides.length) % slides.length;
//   slides[slideIndex].style.opacity = 1;
// }

// function changeSlide(n) {
//   showSlide(slideIndex + n);
// }

// document.getElementsByClassName("slider-prev")[0].addEventListener("click", function () {
//   changeSlide(-1);
// });

// document.getElementsByClassName("slider-next")[0].addEventListener("click", function () {
//   changeSlide(1);
// });

// showSlide(slideIndex);

// // line percent //

// function showLine(color) {
//   // find all lines
//   var lines = document.getElementsByClassName("line");

//   // hide all lines
//   for (var i = 0; i < lines.length; i++) {
//     lines[i].style.width = "0";
//   }

//   // get parent container width
//   var parentWidth = document.querySelector(".percent-line").offsetWidth;

//   // set width for conclusion line
//   var selectedWidth;
//   if (color === "green") {
//     selectedWidth = parentWidth * 0.33;
//   } else if (color === "yellow") {
//     selectedWidth = parentWidth * 0.66;
//   } else if (color === "red") {
//     selectedWidth = parentWidth;
//   }

//   // show choose line with animation
//   document.getElementById(color).style.width = selectedWidth + "px";
// }

// =========================================================================================== //

// Get popup
let popup = document.getElementById('myPopup');

// Get the button that open popup
let btn = document.getElementById('myBtn');

// When user click button open popup
btn.onclick = function () {
	popup.style.display = 'block';
};

// Get span element that closes popup
let span = document.getElementsByClassName('close')[0];

// When user click on span (x) close popup
span.onclick = function () {
	popup.style.animationName = 'animatebottom';
	popup.style.animationDuration = '0.4s';
	setTimeout(function () {
		popup.style.display = 'none';
		popup.style.animationName = '';
	}, 400);
};

// =========================================================================================== //

let menu = document.getElementById('mainMenu');
let btnBurger = document.getElementById('burgerMenu');

btnBurger.onclick = function () {
	menu.classList.toggle('_active');
};

// Get text elements
let burgerTextOpen = document.getElementById('burgerTextOpen');
let burgerTextClose = document.getElementById('burgerTextClose');

// Function to chaneg text
function toggleButtonText() {
	if (burgerTextOpen.style.display === 'none') {
		burgerTextOpen.style.display = 'inline';
		burgerTextClose.style.display = 'none'; //
	} else {
		burgerTextOpen.style.display = 'none'; //
		burgerTextClose.style.display = 'inline';
		burgerTextClose.style.color = 'white'; //
	}
}
