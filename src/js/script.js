window.addEventListener('DOMContentLoaded', () => {
	// animation ************************************************************
	const fadeInUpElements = document.querySelectorAll('.fadeInUp');

	function isInViewport(element) {
		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	}

	function handleScroll() {
		fadeInUpElements.forEach(function (element) {
			if (isInViewport(element)) {
				element.classList.add('fadeInUp');
			}
		});
	}

	// Initial check on page load
	handleScroll();

	// Check when the user scrolls
	window.addEventListener('scroll', handleScroll);
	// animation end ************************************************************
	//question popup*************************************************************
	let questionPopup = document.getElementById('question-popup');
	let questionPopupClose = document.querySelector('.popup-close');

	let questBtn = document.querySelectorAll('#questBtn');

	questBtn.forEach(function (btn) {
		btn.onclick = function () {
			questionPopup.classList.toggle('_active');
		};
	});
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
	const btnBurgerClose = document.querySelector('.top-menu__close');

	const headerContacts = document.querySelector('.header__container_contacts');
	const headerContainerMenu = document.querySelector('.header__container_menu');
	const headerLogo = document.querySelector('.header__logo');

	if (window.innerWidth > 968) {
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
	}
	if (window.innerWidth <= 968) {
		btnBurger.onclick = function () {
			menu.classList.toggle('_active');
		};
		btnBurgerClose.onclick = function () {
			menu.classList.toggle('_active');
		};
	}
	// burger menu end ************************************************************
	// sublist menu ************************************************************

	const sublistMenuPortfolioBtn = document.querySelector('#menu-sublist-portfolio-btn');
	const sublistMenuPortfolio = document.querySelector('#menu-sublist-portfolio');
	const sublistArrowClose = document.querySelectorAll('#sublist-arrow-close');
	// sublist menu services
	const sublistMenuServices = document.querySelector('#menu-sublist-services');
	const sublistMenuServicesBtn = document.querySelector('#menu-sublist-services-btn');
	if (window.innerWidth > 968) {
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
	}

	// sublist menu close ************************************************************
	// accordion ************************************************************
	let activeAccordion = null;

	function closeAccordion() {
		if (activeAccordion) {
			activeAccordion.classList.remove('active');
			const panel = activeAccordion.nextElementSibling;
			panel.style.maxHeight = null;
			const checkbox = activeAccordion.querySelector('input[type="radio"]');
			activeAccordion = null;
		}
	}

	function accordion(accordionBtn, accordionPanel) {
		const accordions = document.querySelectorAll(accordionBtn);

		accordions.forEach(accordion => {
			accordion.addEventListener('click', function (e) {
				e.preventDefault();
				const panel = this.nextElementSibling; // Get the sibling (accordion content) element
				const isActive = this.classList.contains('active');

				closeAccordion(); // Close the currently active accordion (if any)

				if (!isActive) {
					this.classList.add('active');
					panel.classList.add('active');
					panel.style.maxHeight = panel.scrollHeight + 'px';
					activeAccordion = this; // Set the current accordion as the active one
				}
			});
		});
	}

	accordion('#spoller1Title', '#spoller1Body');
	accordion('#spoller2Title', '#spoller2Body');
	// accrodion end ************************************************************
});
