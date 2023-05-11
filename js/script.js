"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

// -- Меню бургер ----------------------------------------------
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuBodyBurger = document.querySelector('.menu__link');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// скрытие после клика на пункт меню
const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });
   function onMenuLinkClick(e) {

      if (iconMenu.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
         menuBodyBurger.classList.toggle('_active');
      }

   }
}
// -- /Меню бургер ----------------------------------------------


// -- Меню бургер-2 ----------------------------------------------
const iconMenuBottom = document.querySelector('.footer-menu__icon');
const menuBodyBottom = document.querySelector('.footer-menu__body');
const menuBurgerBottom = document.querySelector('.footer-menu__link');

if (iconMenuBottom) {
	iconMenuBottom.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenuBottom.classList.toggle('_active');
		menuBodyBottom.classList.toggle('_active');
	});
}

// скрытие после клика на пункт меню
const menuLinksBottom = document.querySelectorAll('.footer-menu__link');
if (menuLinksBottom.length > 0) {
   menuLinksBottom.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuBottomLinkClick);
   });
   function onMenuBottomLinkClick(e) {

      if (iconMenuBottom.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenuBottom.classList.remove('_active');
         menuBodyBottom.classList.remove('_active');
         menuBurgerBottom.classList.toggle('_active');
      }
   }
}
// -- /Меню бургер-2 ----------------------------------------------


// -- Прокрутка при клике ---------------------------------------------
const menuLinksGoTo = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinksGoTo.length > 0) {
	menuLinksGoTo.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLinkGoTo = e.target;
		if (menuLinkGoTo.dataset.goto && document.querySelector(menuLinkGoTo.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLinkGoTo.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 100;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
// -- /Прокрутка при клике ---------------------------------------------


// -- languages ----------------------------------------------
const langBox = document.querySelector('.leng__box');
const langItem = document.querySelectorAll('.leng__item');

if (langBox) {
   langBox.addEventListener('click', function() { 
      this.classList.toggle('lang-open')
   })
}

if (langItem.length > 0) {
   langItem.forEach(item => {
      item.addEventListener("click", onItemClick());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == langBox || langBox.contains(target);
   let its_hamburger = target == langItem;
   let menu_is_active = langBox.classList.contains('lang-open');
   
   if (!its_menu && !its_hamburger && menu_is_active) {
      onItemClick();
   }
})

function onItemClick() {
   if (langBox.classList.contains('lang-open')) {
      langBox.classList.toggle('lang-open');
   }
}

// -- Hide header on scroll ----------------------------------------------
const element = document.querySelector('.header');

window.addEventListener('scroll', function () {
	if (window.scrollY > 90) {
		element.classList.add("header-fixed");
  } 
  else if (window.scrollY < 90) {
		element.classList.remove("header-fixed");
  }
});
// -- /Hide header on scroll ----------------------------------------------


// -- map ----------------------------------------------
const $tableLinks = document.querySelectorAll('.info__item'),
      $mapLinks = document.querySelectorAll('.map-link');

   $tableLinks.forEach(el => {
      el.addEventListener('mouseenter', (e) => {
         let self = e.currentTarget;
         let selfClass = self.getAttribute('href');
         let color = self.dataset.color;
         let currentElement = document.querySelector(`.map-link[href="${selfClass}"]`);
         let currentPolygon = currentElement.querySelectorAll('polygon');
         let currentPath = currentElement.querySelectorAll('path');
         if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 0.2px;`);
         if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 0.2px;`);
         self.classList.add('active-map');
      });
   
      el.addEventListener('mouseleave', (e) => {
         let self = e.currentTarget;
         let selfClass = self.getAttribute('href');
         let currentElement = document.querySelector(`.map-link[href="${selfClass}"]`);
         let currentPolygon = currentElement.querySelectorAll('polygon');
         let currentPath = currentElement.querySelectorAll('path');
         if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
         if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
         self.classList.remove('active-map');
      });
   });
   
   $mapLinks.forEach(el => {
      el.addEventListener('mouseenter', (e) => {
         let self = e.currentTarget;
         let selfClass = self.getAttribute('href');
         let color = self.dataset.color;
         let currentElement = document.querySelector(`.info__item[href="${selfClass}"]`);
         let currentPolygon = self.querySelectorAll('polygon');
         let currentPath = self.querySelectorAll('path');
         if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 0.2px;`);
         if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 0.2px;`);
         if (currentElement) currentElement.classList.add('active-map');
      });
   
      el.addEventListener('mouseleave', (e) => {
         let self = e.currentTarget;
         let selfClass = self.getAttribute('href');
         let currentElement = document.querySelector(`.info__item[href="${selfClass}"]`);
         let currentPolygon = self.querySelectorAll('polygon');
         let currentPath = self.querySelectorAll('path');
         if (currentPolygon) currentPolygon.forEach(el => el.style.cssText = ``);
         if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
         if (currentElement) currentElement.classList.remove('active-map');
      });
        
   });
// -- /map ----------------------------------------------

// -- password ----------------------------------------------
function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
// -- /password ----------------------------------------------

//-- Scroll_animation ------------------------------------------------------
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 800);
}
//-- /Scroll_animation ------------------------------------------------------

