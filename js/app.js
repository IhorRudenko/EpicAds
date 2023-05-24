"use strict"

// // -- dark-theme -------------------------------------
const toggleThemeBox = document.querySelectorAll('.toggle-theme-box');
toggleThemeBox.forEach(function (item) {
   item.addEventListener('click', () => {
      if (document.body.classList.contains('light')) {
         document.body.classList.remove('light')
         document.body.classList.add('dark')
         localStorage.theme = 'dark'
      } else {
         document.body.classList.remove('dark')
         document.body.classList.add('light')
         localStorage.theme = 'light'
      }
   }) 
   
   if (localStorage.theme == 'light') {
      document.body.classList.add('light')
   } 
})
// // -- /dark-theme -------------------------------------


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

	let editArrows = document.querySelectorAll('.edit__link');
	
   if (editArrows.length > 0) {
		for (let index = 0; index < editArrows.length; index++) {
			const editArrow = editArrows[index];
			editArrow.addEventListener("click", function (e) {
				editArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}


// -- aside-menu__burger ----------------------------------------------
const asideMenuBurger = document.querySelector('.header-burger');
const asideBody = document.querySelector('.aside');
const asideBodyLink = document.querySelector('.aside-item  a');
const asideSelect = document.querySelector('.aside .select');

if (asideMenuBurger) {
	asideMenuBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		asideMenuBurger.classList.toggle('_active');
		asideBody.classList.toggle('_active');
	});
}
// -- /aside-menu__burger ----------------------------------------------

// -- languages ----------------------------------------------
const langBox = document.querySelector('.leng__box');
const langItem = document.querySelectorAll('.leng__item');
const header = document.querySelector('.header');


if (langBox) {
   langBox.addEventListener('click', function() { 
      this.classList.toggle('lang-open');
      header.classList.toggle('lang-open');
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
   let header_is_active = langBox.classList.contains('lang-open');
   
   if (!its_menu && !its_hamburger && menu_is_active && header_is_active) {
      onItemClick();
   }
})

function onItemClick() {
   if (langBox.classList.contains('lang-open')) {
      langBox.classList.toggle('lang-open');
      header.classList.toggle('lang-open');
   }
}
// -- /languages ----------------------------------------------

// -- aside-languages ----------------------------------------------
const asidelangBox = document.querySelector('.aside-leng__box');
const asidelangItem = document.querySelectorAll('.aside-leng__item');

if (asidelangBox) {
   asidelangBox.addEventListener('click', function() { 
      this.classList.toggle('aside__lang-open')
   })
}

if (asidelangItem.length > 0) {
   asidelangItem.forEach(item => {
      item.addEventListener("click", onAsideItemClick());
   });
}

document.addEventListener('click', e => {
   let target = e.target;
   let its_menu = target == asidelangBox || asidelangBox.contains(target);
   let its_hamburger = target == asidelangItem;
   let menu_is_active = asidelangBox.classList.contains('aside__lang-open');
   
   if (!its_menu && !its_hamburger && menu_is_active) {
      onAsideItemClick();
   }
})

function onAsideItemClick() {
   if (asidelangBox.classList.contains('aside__lang-open')) {
      asidelangBox.classList.toggle('aside__lang-open');
   }
}
// -- /aside-languages ----------------------------------------------

// -- user-menu ----------------------------------------------
const userBox = document.querySelector('.user__box');
const userMenuItem = document.querySelectorAll('.user-menu__item');
const userHeader = document.querySelector('.header');

if (userBox) {
   userBox.addEventListener('click', function() { 
      this.classList.toggle('user-open');
      userHeader.classList.toggle('user-open');
   })
}

if (userMenuItem.length > 0) {
   userMenuItem.forEach(item => {
      item.addEventListener("click", onUserItemClick());
   });
}

document.addEventListener('click', e => {
   let targetUser = e.target;
   let its_menuUser = targetUser == userBox || userBox.contains(targetUser);
   let its_hamburgerUser = targetUser == userMenuItem;
   let menu_is_activeUser = userBox.classList.contains('user-open');
   let header_is_activeUser = userBox.classList.contains('user-open');
   
   if (!its_menuUser && !its_hamburgerUser && menu_is_activeUser && header_is_activeUser) {
      onUserItemClick();
   }
})

function onUserItemClick() {
   if (userBox.classList.contains('user-open')) {
      userBox.classList.toggle('user-open');
      userHeader.classList.toggle('user-open');
   }
}
// -- /user-menu ----------------------------------------------

// -- notification ----------------------------------------------
const notifyBtn = document.querySelector('.notification');
const notifyBox = document.querySelector('.notification-box');
const notifyClose = document.querySelector('.notification-body__close');
const notifyBottomClose = document.querySelector('.notification-body__bottom-btn');
const notifyHeader = document.querySelector('.header');

if (notifyBtn) {
   notifyBtn.addEventListener('click', function(e) {
      notifyBox.classList.toggle('notify-open');
      notifyHeader.classList.toggle('notify-open');
   });
   
   notifyClose.addEventListener('click', function(e) {
      notifyBox.classList.remove('notify-open');
      notifyHeader.classList.remove('notify-open');
   });
   
   notifyBottomClose.addEventListener('click', function(e) {
      notifyBox.classList.remove('notify-open');
      notifyHeader.classList.remove('notify-open');
   });
}
// -- /notification ----------------------------------------------i

// -- mobile-notification ----------------------------------------------
const mobileNotifyBtn = document.querySelector('.mobile-notification');
const mobileNotifyBox = document.querySelector('.mobile-notification-box');
const mobileNotifyClose = document.querySelector('.mobile-notification-body__close');
const mobileNotifyBottomClose = document.querySelector('.mobile-notification-body__bottom-btn');
const mobileNotifyHeader = document.querySelector('.header');

if (mobileNotifyBtn) {
   mobileNotifyBtn.addEventListener('click', function(e) {
      mobileNotifyBox.classList.toggle('notify-open');
      mobileNotifyHeader.classList.toggle('notify-open');
   });
   
   mobileNotifyClose.addEventListener('click', function(e) {
      mobileNotifyBox.classList.remove('notify-open');
      mobileNotifyHeader.classList.remove('notify-open');
   });
   
   mobileNotifyBottomClose.addEventListener('click', function(e) {
      mobileNotifyBox.classList.remove('notify-open');
      mobileNotifyHeader.classList.remove('notify-open');
   });
}
// -- /mobile-notification ----------------------------------------------i


// -- checkbox-body-toggle ----------------------------------------------
const filterBtn = document.querySelector('.btn-filter');
const filterBody = document.querySelector('.filter-body');
const filterClose = document.querySelector('.filter-body__close');

if (filterBtn) {
   filterBtn.addEventListener('click', function(e) {
      this.classList.toggle('_active');
      filterBody.classList.toggle('filter-open');
   });
   
   filterClose.addEventListener('click', function(e) {
      filterBody.classList.remove('filter-open');
      filterBtn.classList.remove('_active');
   });
}
// -- /checkbox-body-toggle ----------------------------------------------

//  -- mobile show/hide main filters -----------------------------------
const mainFilterBtn = document.querySelector('.search-mobile__filter');
// const contentSelects = document.querySelector('.content__selects');
// const contentFilters = document.querySelector('.content__filters');
const content = document.querySelector('.content');

if(mainFilterBtn) {
   mainFilterBtn.addEventListener('click', function (e) {
      mainFilterBtn.classList.toggle('show');
      // contentSelects.classList.toggle('show');
      // contentSelects.classList.toggle('show');
      content.classList.toggle('show');
   })
}

//  -- / mobile show/hide main filters-----------------------------------

// -- aside-show ----------------------------------------------
const list = document.querySelectorAll('.aside-item');
const selectShow = document.querySelector('.dropdown__button');
function activeLink(){
   list.forEach((item) =>
   item.classList.remove('active'));
   this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

if (selectShow) {
   selectShow.addEventListener('click', function() {
      document.querySelector('.aside').classList.remove('_active');
   });
}
// -- /aside-show ----------------------------------------------

//  -- choose only one checkbox in a group -----------------------------------
function checkedOnClick(el){

   // Select all checkboxes by class
   var checkboxesList = document.getElementsByClassName("filter-body__checkbox");
   for (var i = 0; i < checkboxesList.length; i++) {
      checkboxesList.item(i).checked = false; // Uncheck all checkboxes
   }

   el.checked = true; // Checked clicked checkbox
}
//  -- /choose only one checkbox in a group -----------------------------------

//  -- choose all checkbox in a group -----------------------------------
function checkedAllOnClick(el){

   // Select all checkboxes by class
   var checkboxesAllList = document.getElementsByClassName("filter-body__checkbox");
   for (var i = 0; i < checkboxesAllList.length; i++) {
      checkboxesAllList.item(i).checked = true; 
   }
}
//  -- /choose all checkbox in a group -----------------------------------


//  -- choose all checkbox in a table group -----------------------------------
function checkedAllInTable(el){
   var checkboxesAllList = document.getElementsByClassName("table__input");
   for (var i = 0; i < checkboxesAllList.length; i++) {
      checkboxesAllList.item(i).checked = true; 

      if (el.checked === false) {
         checkboxesAllList.item(i).checked = false; 
      } 
     
      if (checkboxesAllList.item(i).checked = true) {
         el.checked === true; 
      }

      if (el.checked === false) {
         checkboxesAllList.item(i).checked = false
      }
   }
}
//  -- /choose all checkbox in a table group -----------------------------------


//-- popup-1 ------------------------------------------------------------------------------------------------
let popupBg = document.querySelector('.popup__bg-1'); // Фон попап окна
let popup = document.querySelector('.popup-1'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup-1'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup-1'); // Кнопка для скрытия окна


openPopupButtons.forEach((button) => { // Перебираем все кнопки
   button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
   })
});


closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
   popupBg.classList.remove('active'); // Убираем активный класс с фона
   popup.classList.remove('active'); // И с окна
});


document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
   if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
   }
});
//-- /popup-1 ------------------------------------------------------------------------------------------------


























