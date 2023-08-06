/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/aside.js":
/*!*********************!*\
  !*** ./js/aside.js ***!
  \*********************/
/***/ (() => {

var asideOpen = document.querySelector('.header__open-aside');
var asideClose = document.querySelector('.aside__close');
var asideMenu = document.querySelector('.aside');
var asideBlur = document.querySelector('.blur');
asideOpen.addEventListener('click', function () {
  asideMenu.classList.add('aside--active');
  asideBlur.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});
asideClose.addEventListener('click', function () {
  asideMenu.classList.remove('aside--active');
  asideBlur.classList.add('hidden');
  document.body.style.overflow = '';
});
asideBlur.addEventListener('click', function () {
  asideMenu.classList.remove('aside--active');
  asideBlur.classList.add('hidden');
  document.body.style.overflow = '';
});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _show_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-all */ "./js/show-all.js");
/* harmony import */ var _show_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_show_all__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./js/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aside */ "./js/aside.js");
/* harmony import */ var _aside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aside__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swiper */ "./js/swiper.js");
/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/scss */ "../node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_scss_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/scss/pagination */ "../node_modules/swiper/modules/pagination.scss");










/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ (() => {

var modalFeedbackOpen = document.querySelector('.aside__message-btn');
var modalFeedbackClose = document.querySelector('.modal__close--feedback');
var modalFeedback = document.querySelector('.modal--feedback');
var headerFeedbackButton = document.querySelector('.header__message-btn');
var modalPhoneOpen = document.querySelector('.aside__phone-btn');
var modalPhoneClose = document.querySelector('.modal__close--phone');
var modalPhone = document.querySelector('.modal--phone');
var headerCallButton = document.querySelector('.header__phone-btn');
var contentBlur = document.querySelector('.modal__blur');

var openModalChat = function openModalChat() {
  modalFeedback.classList.remove('hidden');
  contentBlur.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

headerFeedbackButton.addEventListener('click', openModalChat);
modalFeedbackOpen.addEventListener('click', openModalChat);

var closeModalChat = function closeModalChat() {
  modalFeedback.classList.add('hidden');
  contentBlur.classList.add('hidden');
  document.body.style.overflow = '';
};

modalFeedbackClose.addEventListener('click', closeModalChat);

var openModalCall = function openModalCall() {
  modalPhone.classList.remove('hidden');
  contentBlur.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
};

headerCallButton.addEventListener('click', openModalCall);
modalPhoneOpen.addEventListener('click', openModalCall);

var closeModalCall = function closeModalCall() {
  modalPhone.classList.add('hidden');
  contentBlur.classList.add('hidden');
  document.body.style.overflow = '';
};

modalPhoneClose.addEventListener('click', closeModalCall);
contentBlur.addEventListener('click', function () {
  modalFeedback.classList.add('hidden');
  modalPhone.classList.add('hidden');
  contentBlur.classList.add('hidden');
  document.body.style.overflow = '';
});

/***/ }),

/***/ "./js/show-all.js":
/*!************************!*\
  !*** ./js/show-all.js ***!
  \************************/
/***/ (() => {

window.addEventListener("resize", function (evt) {
  if (evt.target.window.innerWidth >= 768) brandsShowAllTablet();
  if (evt.target.window.innerWidth >= 1120) brandsShowAllDesktop();
  if (evt.target.window.innerWidth >= 768) typesShowAllTablet();
  if (evt.target.window.innerWidth >= 1120) typesShowAllDesktop();
  if (evt.target.window.innerWidth < 768) deleteClassHidden();
});
var btnShowAllBrands = document.querySelector(".repaired-brands__btn");
var cardsBrands = Array.from(document.querySelectorAll(".repaired-brands__item"));
var expandImgBrands = document.querySelector(".repaired-brands__expand");
var brandsIsOpen = false;

var brandsShowAllDesktop = function brandsShowAllDesktop() {
  if (window.innerWidth >= 1120) {
    cardsBrands.forEach(function (item, index) {
      item.classList.add("hidden");

      if (index < 8) {
        item.classList.remove("hidden");
      }
    });
  }
};

var brandsShowAllTablet = function brandsShowAllTablet() {
  if (window.innerWidth < 1120 && window.innerWidth >= 768) {
    cardsBrands.forEach(function (item, index) {
      item.classList.add("hidden");

      if (index < 6) {
        item.classList.remove("hidden");
      }
    });
  }
};

var showAllBrands = function showAllBrands() {
  if (window.innerWidth >= 1120 && !brandsIsOpen) {
    cardsBrands.forEach(function (item) {
      return item.classList.remove("hidden");
    });
    brandsIsOpen = true;
    btnShowAllBrands.textContent = "Скрыть";
    expandImgBrands.style.transform = "rotate(180deg)";
  } else if (window.innerWidth >= 1120 && brandsIsOpen) {
    brandsShowAllDesktop();
    btnShowAllBrands.textContent = "Показать все";
    expandImgBrands.style.transform = "none";
    brandsIsOpen = false;
  }

  if (window.innerWidth < 1120 && window.innerWidth >= 768 && !brandsIsOpen) {
    cardsBrands.forEach(function (item) {
      return item.classList.remove("hidden");
    });
    brandsIsOpen = true;
    btnShowAllBrands.textContent = "Скрыть";
    expandImgBrands.style.transform = "rotate(180deg)";
  } else if (window.innerWidth < 1120 && window.innerWidth >= 768 && brandsIsOpen) {
    brandsShowAllTablet();
    btnShowAllBrands.textContent = "Показать все";
    expandImgBrands.style.transform = "none";
    brandsIsOpen = false;
  }
};

btnShowAllBrands.addEventListener("click", showAllBrands);
brandsShowAllDesktop();
brandsShowAllTablet();
var btnShowAllTypes = document.querySelector(".repaired-types__btn");
var cardsTypes = Array.from(document.querySelectorAll(".repaired-types__item"));
var expandImgTypes = document.querySelector(".repaired-types__expand");
var typesIsOpen = false;

var typesShowAllDesktop = function typesShowAllDesktop() {
  if (window.innerWidth >= 1120) {
    cardsTypes.forEach(function (item, index) {
      item.classList.add("hidden");

      if (index < 4) {
        item.classList.remove("hidden");
      }
    });
  }
};

var typesShowAllTablet = function typesShowAllTablet() {
  if (window.innerWidth < 1120 && window.innerWidth >= 768) {
    cardsTypes.forEach(function (item, index) {
      item.classList.add("hidden");

      if (index < 3) {
        item.classList.remove("hidden");
      }
    });
  }
};

var showAllTypes = function showAllTypes() {
  if (window.innerWidth >= 1120 && !typesIsOpen) {
    cardsTypes.forEach(function (item) {
      return item.classList.remove("hidden");
    });
    typesIsOpen = true;
    btnShowAllTypes.textContent = "Скрыть";
    expandImgTypes.style.transform = "rotate(180deg)";
  } else if (window.innerWidth >= 1120 && typesIsOpen) {
    typesShowAllDesktop();
    btnShowAllTypes.textContent = "Показать все";
    expandImgTypes.style.transform = "none";
    typesIsOpen = false;
  }

  if (window.innerWidth < 1120 && window.innerWidth >= 768 && !typesIsOpen) {
    cardsTypes.forEach(function (item) {
      return item.classList.remove("hidden");
    });
    typesIsOpen = true;
    btnShowAllTypes.textContent = "Скрыть";
    expandImgTypes.style.transform = "rotate(180deg)";
  } else if (window.innerWidth < 1120 && window.innerWidth >= 768 && typesIsOpen) {
    typesShowAllTablet();
    btnShowAllTypes.textContent = "Показать все";
    expandImgTypes.style.transform = "none";
    typesIsOpen = false;
  }
};

btnShowAllTypes.addEventListener("click", showAllTypes);
typesShowAllDesktop();
typesShowAllTablet();

var deleteClassHidden = function deleteClassHidden() {
  if (window.innerWidth < 768) {
    cardsTypes.forEach(function (item, index) {
      item.classList.remove("hidden");
    });
    cardsBrands.forEach(function (item, index) {
      item.classList.remove("hidden");
    });
  }
};

deleteClassHidden();

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "../node_modules/swiper/modules/index.mjs");


var swiperBrands = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper-brands", {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
  pagination: {
    el: ".swiper-pagination-brands"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      enabled: true
    },
    528: {
      slidesPerView: 2,
      spaceBetween: 16,
      enabled: true
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
      enabled: false
    },
    1120: {
      slidesPerView: 4,
      spaceBetween: 0,
      enabled: false
    }
  }
});
var swiperTypes = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper-types", {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
  pagination: {
    el: ".swiper-pagination-types"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      enabled: true
    },
    528: {
      slidesPerView: 2,
      spaceBetween: 16,
      enabled: true
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
      enabled: false
    },
    1120: {
      slidesPerView: 4,
      spaceBetween: 0,
      enabled: false
    }
  }
});
var swiperPrices = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper-prices", {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
  pagination: {
    el: ".swiper-pagination-prices"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
      enabled: true
    },
    528: {
      slidesPerView: 2,
      spaceBetween: 16,
      enabled: true
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 0,
      enabled: false
    }
  }
});

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/close.svg */ "./img/close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.svg */ "./img/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/search.svg */ "./img/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/call.svg */ "./img/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chat.svg */ "./img/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profile.svg */ "./img/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/goside.svg */ "./img/goside.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/burger.svg */ "./img/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/repair.svg */ "./img/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkstatus.svg */ "./img/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/expand.svg */ "./img/expand.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/image.png */ "./img/image.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo.png */ "./img/lenovo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/go.svg */ "./img/go.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/samsung.png */ "./img/samsung.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple.png */ "./img/apple.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/viewsonic.png */ "./img/viewsonic.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bosch.png */ "./img/bosch.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hp.png */ "./img/hp.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/acer.png */ "./img/acer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/sony.png */ "./img/sony.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/more.svg */ "./img/more.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\r\n    <title>webcore 1.6</title>\r\n  </head>\r\n  <body>\r\n    <div class=\"wrapper\">\r\n      <aside class=\"aside\">\r\n        <div class=\"aside__container\">\r\n          <div class=\"aside__header\">\r\n            <button class=\"aside__close button\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Закрыть меню\" />\r\n            </button>\r\n\r\n            <div class=\"aside__logo\">\r\n              <img class=\"logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип\" />\r\n            </div>\r\n\r\n            <button class=\"aside__search button\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Поиск\" />\r\n            </button>\r\n          </div>\r\n\r\n          <nav class=\"aside__body\">\r\n            <ul class=\"aside__menu menu\">\r\n              <li class=\"menu__item\">\r\n                <a class=\"menu__button\" href=\"#\">Ремонт техники</a>\r\n              </li>\r\n              <li class=\"menu__item\">\r\n                <a class=\"menu__button menu__button--active\" href=\"#\">Услуги и сервисы</a>\r\n              </li>\r\n              <li class=\"menu__item\">\r\n                <a class=\"menu__button\" href=\"#\">Корпоративным клиентам</a>\r\n              </li>\r\n              <li class=\"menu__item\">\r\n                <a class=\"menu__button\" href=\"#\">Продавцам техники</a>\r\n              </li>\r\n              <li class=\"menu__item\">\r\n                <a class=\"menu__button\" href=\"#\">Партнерам</a>\r\n              </li>\r\n              <li class=\"menu__item\">\r\n                <a class=\"menu__button\" href=\"#\">Производителям</a>\r\n              </li>\r\n              <li class=\"menu__item\">\r\n                <a class=\"menu__button\" href=\"#\">Наши сервисные центры</a>\r\n              </li>\r\n              <li class=\"menu__item\">\r\n                <a class=\"menu__button\" href=\"#\">Контакты</a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n\r\n          <div class=\"aside__footer\">\r\n            <div class=\"aside__buttons\">\r\n              <button class=\"aside__phone-btn button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Заказать звонок\" />\r\n              </button>\r\n              <button class=\"aside__message-btn button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Обратная связь\" />\r\n              </button>\r\n              <button class=\"aside__profile-btn button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Профиль\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"aside__mail\">mail@cps.com</div>\r\n            <div class=\"aside__phone\">8 800 890 8900</div>\r\n            <div class=\"aside__languages\">\r\n              <button class=\"aside__language aside__language--active\">ru</button>\r\n              <button class=\"aside__language\">en</button>\r\n              <button class=\"aside__language\">ch</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </aside>\r\n      <div class=\"blur hidden\"></div>\r\n\r\n      <div class=\"modal modal--feedback hidden\">\r\n        <div class=\"modal__container\">\r\n          <div class=\"modal__title\">\r\n            Обратная связь\r\n            <button class=\"modal__close modal__close--feedback\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n            </button>\r\n          </div>\r\n\r\n          <input type=\"text\" placeholder=\"Имя\" class=\"modal__input\" />\r\n          <input type=\"text\" placeholder=\"Телефон\" class=\"modal__input\" />\r\n          <input type=\"text\" placeholder=\"Электронная почта\" class=\"modal__input\" />\r\n          <textarea placeholder=\"Сообщение\" class=\"modal__textarea\"></textarea>\r\n\r\n          <div class=\"modal__privat-policy\">\r\n            Нажимая “отправить”, вы даете согласие на\r\n            <a href=\"#\">обработку персональных данных</a> и соглашаетесь с нашей\r\n            <a href=\"#\">политикой конфиденциальности</a>\r\n          </div>\r\n\r\n          <div class=\"modal__send\">\r\n            <button class=\"modal__btn\">\r\n              Отправить\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal modal--phone hidden\">\r\n        <div class=\"modal__container\">\r\n          <div class=\"modal__title\">\r\n            Заказать звонок\r\n            <button class=\"modal__close modal__close--phone\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n            </button>\r\n          </div>\r\n\r\n          <input type=\"text\" placeholder=\"Телефон\" class=\"modal__input\" />\r\n\r\n          <div class=\"modal__privat-policy\">\r\n            Нажимая “отправить”, вы даете согласие на\r\n            <a href=\"#\">обработку персональных данных</a> и соглашаетесь с нашей\r\n            <a href=\"#\">политикой конфиденциальности</a>\r\n          </div>\r\n\r\n          <div class=\"modal__send\">\r\n            <button class=\"modal__btn\">\r\n              Отправить\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"modal__blur hidden\"></div>\r\n\r\n      <header class=\"header\">\r\n        <div class=\"header__container\">\r\n          <button class=\"header__open-aside button\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Меню\" />\r\n          </button>\r\n          <div class=\"header__logo\">\r\n            <img class=\"logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип\" />\r\n          </div>\r\n          <div class=\"header__support\">\r\n            <button class=\"header__phone-btn button\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Заказать звонок\" />\r\n            </button>\r\n            <button class=\"header__message-btn button\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Обратная связь\" />\r\n            </button>\r\n            <button class=\"header__profile-btn button\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Профиль\" />\r\n            </button>\r\n          </div>\r\n          <div class=\"header__buttons\">\r\n            <button class=\"header__repair-btn button\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Ремонт\" />\r\n            </button>\r\n            <button class=\"header__status-btn button\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Статус ремонта\" />\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </header>\r\n\r\n      <div class=\"right\">\r\n        <div class=\"services\">\r\n          <div class=\"services__container\">\r\n            <div class=\"services__title\">\r\n              Услуги и сервисы\r\n              <div class=\"services__buttons\">\r\n                <button class=\"services__btn button\">\r\n                  Оставить заявку\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" />\r\n                </button>\r\n                <button class=\"services__btn button\">\r\n                  Статус ремонта\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" />\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <ul class=\"services__list\">\r\n              <li class=\"services__item services__item--active\">Ремонтируемые бренды</li>\r\n              <li class=\"services__item\">Ремонтируемые устройства</li>\r\n              <li class=\"services__item\">Цены на услуги</li>\r\n              <li class=\"services__item\">Адреса сервисных центров</li>\r\n              <li class=\"services__item\">Специальные цены</li>\r\n              <li class=\"services__item\">Отзывы</li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"services__content\">\r\n            <div class=\"services__left\">\r\n              <div class=\"services__text\">\r\n                Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете\r\n                отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br />\r\n                <span class=\"services__text services__text--hidden\"\r\n                  >Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает\r\n                  большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по\r\n                  рекомендациям и, в свою очередь, советуют нас родным и близким.\r\n                </span>\r\n              </div>\r\n              <div class=\"services__read-more\">\r\n                <a href=\"#\" class=\"services__link\">\r\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Читать далее\" />\r\n                  Читать далее\r\n                </a>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"services__right\">\r\n              <img class=\"services__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Логотип\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"repaired-brands\">\r\n          <div class=\"repaired-brands__title title\">ремонт техники различных брендов</div>\r\n\r\n          <div class=\"repaired-brands__container\">\r\n            <div class=\"repaired-brands__swiper swiper-brands\">\r\n              <ul class=\"repaired-brands__list swiper-wrapper\">\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-brands__item swiper-slide\">\r\n                  <img class=\"repaired-brands__logo\" src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" />\r\n                  <button class=\"repaired-brands__link button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n              </ul>\r\n              <div class=\"swiper-pagination-brands\"></div>\r\n            </div>\r\n\r\n            <div class=\"repaired-brands__read-more\">\r\n              <img class=\"repaired-brands__expand\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" />\r\n              <button class=\"repaired-brands__btn\">Показать все</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"repaired-types\">\r\n          <div class=\"repaired-types__title title\">ремонт различных видов техники</div>\r\n\r\n          <div class=\"repaired-types__container\">\r\n            <div class=\"repaired-brands__swiper swiper-types\">\r\n              <ul class=\"repaired-types__list swiper-wrapper\">\r\n                <li class=\"repaired-types__item swiper-slide\">\r\n                  <div class=\"repaired-types__name\">Ремонт ноутбуков</div>\r\n                  <button class=\"repaired-types__btn-go button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-types__item swiper-slide\">\r\n                  <div class=\"repaired-types__name\">Ремонт планшетов</div>\r\n                  <button class=\"repaired-types__btn-go button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-types__item swiper-slide\">\r\n                  <div class=\"repaired-types__name\">Ремонт ПК</div>\r\n                  <button class=\"repaired-types__btn-go button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-types__item swiper-slide\">\r\n                  <div class=\"repaired-types__name\">Ремонт мониторов</div>\r\n                  <button class=\"repaired-types__btn-go button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-types__item swiper-slide\">\r\n                  <div class=\"repaired-types__name\">Ремонт ноутбуков</div>\r\n                  <button class=\"repaired-types__btn-go button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-types__item swiper-slide\">\r\n                  <div class=\"repaired-types__name\">Ремонт планшетов</div>\r\n                  <button class=\"repaired-types__btn-go button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-types__item swiper-slide\">\r\n                  <div class=\"repaired-types__name\">Ремонт ПК</div>\r\n                  <button class=\"repaired-types__btn-go button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n                <li class=\"repaired-types__item swiper-slide\">\r\n                  <div class=\"repaired-types__name\">Ремонт мониторов</div>\r\n                  <button class=\"repaired-types__btn-go button\">\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Подробнее\" />\r\n                  </button>\r\n                </li>\r\n              </ul>\r\n              <div class=\"swiper-pagination-types\"></div>\r\n            </div>\r\n\r\n            <div class=\"repaired-types__read-more\">\r\n              <img class=\"repaired-types__expand\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" />\r\n              <button class=\"repaired-types__btn\">Показать все</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"prices\">\r\n          <div class=\"prices__title title\">цены на услуги</div>\r\n\r\n          <div class=\"prices__container\">\r\n            <div class=\"prices__list-title\">\r\n              <div class=\"prices__name-title\">Ремонтные услуги</div>\r\n              <div class=\"prices__cost-title\">Цена</div>\r\n              <div class=\"prices__time-title\">Срок</div>\r\n              <div class=\"prices__btn-title\"></div>\r\n            </div>\r\n\r\n            <div class=\"swiper-prices\">\r\n              <div class=\"prices__list swiper-wrapper\">\r\n                <div class=\"prices__item swiper-slide\">\r\n                  <p>Ремонтные услуги</p>\r\n                  <div class=\"prices__name\">Диагностика</div>\r\n                  <p>Цена</p>\r\n                  <div class=\"prices__cost\">Бесплатно</div>\r\n                  <p>Срок</p>\r\n                  <div class=\"prices__time\">30 мин</div>\r\n                  <button class=\"prices__btn\">\r\n                    Заказать\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"prices__item swiper-slide\">\r\n                  <p>Ремонтные услуги</p>\r\n                  <div class=\"prices__name\">Замена дисплея</div>\r\n                  <p>Цена</p>\r\n                  <div class=\"prices__cost\">1 000 ₽</div>\r\n                  <p>Срок</p>\r\n                  <div class=\"prices__time\">30-120 мин</div>\r\n                  <button class=\"prices__btn\">\r\n                    Заказать\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"prices__item swiper-slide\">\r\n                  <p>Ремонтные услуги</p>\r\n                  <div class=\"prices__name\">Замена полифонического динамика</div>\r\n                  <p>Цена</p>\r\n                  <div class=\"prices__cost\">1 000 ₽</div>\r\n                  <p>Срок</p>\r\n                  <div class=\"prices__time\">30-120 мин</div>\r\n                  <button class=\"prices__btn\">\r\n                    Заказать\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"prices__item swiper-slide\">\r\n                  <p>Ремонтные услуги</p>\r\n                  <div class=\"prices__name\">Тестирование с выдачей технического заключения</div>\r\n                  <p>Цена</p>\r\n                  <div class=\"prices__cost\">1 000 ₽</div>\r\n                  <p>Срок</p>\r\n                  <div class=\"prices__time\">30-120 мин</div>\r\n                  <button class=\"prices__btn\">\r\n                    Заказать\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"prices__item swiper-slide\">\r\n                  <p>Ремонтные услуги</p>\r\n                  <div class=\"prices__name\">Замена программного обеспечения</div>\r\n                  <p>Цена</p>\r\n                  <div class=\"prices__cost\">1 000 ₽</div>\r\n                  <p>Срок</p>\r\n                  <div class=\"prices__time\">30-120 мин</div>\r\n                  <button class=\"prices__btn\">\r\n                    Заказать\r\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"swiper-pagination-prices\"></div>\r\n            </div>\r\n\r\n            <div class=\"prices__info\">\r\n              Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения\r\n              коммерческого предложения на постоянное обслуживание, оставьте заявку.\r\n            </div>\r\n\r\n            <div class=\"prices__сommercial-offer\">\r\n              <a class=\"prices__offer-link\" href=\"#\">\r\n                Получить коммерческое предложение\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\" />\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <footer class=\"footer\">\r\n          <div class=\"footer__container\">\r\n            <div class=\"footer__info\">\r\n              © 2023 CPS<br />\r\n              Разработано командой Apesong\r\n            </div>\r\n            <div class=\"footer__info\">\r\n              <a class=\"footer__info-link\" href=\"#\">Политика конфиденциальности</a>\r\n            </div>\r\n            <div class=\"footer__info\">\r\n              Информация, размещенная на данной странице, не является публичной офертой\r\n            </div>\r\n          </div>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/acer.png":
/*!**********************!*\
  !*** ./img/acer.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/acer.png";

/***/ }),

/***/ "./img/apple.png":
/*!***********************!*\
  !*** ./img/apple.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/apple.png";

/***/ }),

/***/ "./img/bosch.png":
/*!***********************!*\
  !*** ./img/bosch.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/bosch.png";

/***/ }),

/***/ "./img/burger.svg":
/*!************************!*\
  !*** ./img/burger.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/call.svg":
/*!**********************!*\
  !*** ./img/call.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./img/chat.svg":
/*!**********************!*\
  !*** ./img/chat.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/checkstatus.svg":
/*!*****************************!*\
  !*** ./img/checkstatus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/close.svg":
/*!***********************!*\
  !*** ./img/close.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./img/expand.svg":
/*!************************!*\
  !*** ./img/expand.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/expand.svg";

/***/ }),

/***/ "./img/go.svg":
/*!********************!*\
  !*** ./img/go.svg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/go.svg";

/***/ }),

/***/ "./img/goside.svg":
/*!************************!*\
  !*** ./img/goside.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/goside.svg";

/***/ }),

/***/ "./img/hp.png":
/*!********************!*\
  !*** ./img/hp.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/hp.png";

/***/ }),

/***/ "./img/image.png":
/*!***********************!*\
  !*** ./img/image.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/image.png";

/***/ }),

/***/ "./img/lenovo.png":
/*!************************!*\
  !*** ./img/lenovo.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lenovo.png";

/***/ }),

/***/ "./img/logo.svg":
/*!**********************!*\
  !*** ./img/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/more.svg":
/*!**********************!*\
  !*** ./img/more.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/more.svg";

/***/ }),

/***/ "./img/profile.svg":
/*!*************************!*\
  !*** ./img/profile.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/repair.svg":
/*!************************!*\
  !*** ./img/repair.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/samsung.png":
/*!*************************!*\
  !*** ./img/samsung.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/samsung.png";

/***/ }),

/***/ "./img/search.svg":
/*!************************!*\
  !*** ./img/search.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./img/sony.png":
/*!**********************!*\
  !*** ./img/sony.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/sony.png";

/***/ }),

/***/ "./img/viewsonic.png":
/*!***************************!*\
  !*** ./img/viewsonic.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/viewsonic.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-ad8647"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map