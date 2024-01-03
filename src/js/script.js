//question popup*************************************************************
let questionPopup = document.getElementById('question-popup');
let questionPopupClose = document.querySelector('.popup-close');

let questBtn = document.getElementById('questBtn');

questBtn.onclick = function () {
	questionPopup.classList.toggle('_active');
};
questionPopupClose.onclick = function () {
	questionPopup.classList.toggle('_active');
};
// question popup end*************************************************************
// =========================================================================================== //
// burger menu ************************************************************
const burgerTxtMenu = document.getElementById('burgerTextOpen');
const burgerTxtClose = document.getElementById('burgerTextClose');
const menu = document.getElementById('mainMenu');
const btnBurger = document.getElementById('burgerMenu');

const headerContacts = document.querySelector('.header__container_contacts');
const headerContainerMenu = document.querySelector('.header__container_menu');
const headerLogo = document.querySelector('.header__logo');

btnBurger.onclick = function () {
	menu.classList.toggle('_active');
	btnBurger.classList.toggle('_active');
	burgerTxtMenu.classList.toggle('_active');
	burgerTxtClose.classList.toggle('_active');
	if (innerWidth > 1200) {
		headerContacts.classList.toggle('_active');
		headerContainerMenu.classList.toggle('_active');
	}
	headerLogo.classList.toggle('_active');
	// change logo 	*************************************************************

	if (headerLogo.classList.contains('_active')) {
		headerLogo.src = './img/logo_white.svg';
	} else {
		headerLogo.src = './img/logo.svg';
	}

	// change logo end***********************************************************
};
// burger menu end ************************************************************
// sublist menu ************************************************************
const sublistMenuPortfolioBtn = document.querySelector('#menu-sublist-portfolio-btn');
const sublistMenuPortfolio = document.querySelector('#menu-sublist-portfolio');
const sublistArrowClose = document.querySelectorAll('#sublist-arrow-close');
// sublist menu services
const sublistMenuServices = document.querySelector('#menu-sublist-services');
const sublistMenuServicesBtn = document.querySelector('#menu-sublist-services-btn');

sublistMenuPortfolioBtn.onclick = function () {
	sublistMenuPortfolio.classList.toggle('_active');
};
sublistMenuServicesBtn.onclick = function () {
	sublistMenuServices.classList.toggle('_active');
};

sublistArrowClose.forEach(function (close) {
	close.onclick = function () {
		sublistMenuPortfolio.classList.remove('_active');
		sublistMenuServices.classList.remove('_active');
	};
});

// sublist menu close ************************************************************
