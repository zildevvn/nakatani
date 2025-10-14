/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/components/function.js":
/*!******************************************!*\
  !*** ./assets/js/components/function.js ***!
  \******************************************/
/***/ (() => {

eval("{(function ($) {\n  \"use strict\";\n\n  var nktLanguage = function nktLanguage() {\n    var $languageSwitchers = $('.language-switcher-desktop');\n    function initLanguageSwitcher() {\n      if ($(window).width() <= 768) return;\n      $languageSwitchers.each(function () {\n        var $switcher = $(this);\n        var $dropdown = $switcher.find('.language-dropdown');\n        var $languageItems = $switcher.find('.language-item');\n        $switcher.on('mouseenter', function () {\n          $dropdown.css({\n            'opacity': '1',\n            'visibility': 'visible',\n            'transform': 'translateY(4px) scale(1)'\n          });\n        });\n        $switcher.on('mouseleave', function () {\n          $dropdown.css({\n            'opacity': '0',\n            'visibility': 'hidden',\n            'transform': 'translateY(-10px)'\n          });\n        });\n        $languageItems.on('click', function (e) {\n          e.preventDefault();\n          var newLangName = $(this).text();\n          $switcher.find('.current-language').text(newLangName);\n          window.location.href = $(this).attr('href');\n        });\n      });\n    }\n    initLanguageSwitcher();\n    var isDesktop = $(window).width() > 768;\n    $(window).on('resize', function () {\n      var nowDesktop = $(window).width() > 768;\n      if (!isDesktop && nowDesktop) {\n        initLanguageSwitcher();\n      }\n      isDesktop = nowDesktop;\n    });\n  };\n  var nktInfoFooter = function nktInfoFooter() {\n    var maxWidth = 0;\n    $('.info-item__title').each(function () {\n      var thisWidth = $(this).outerWidth();\n      if (thisWidth > maxWidth) {\n        maxWidth = thisWidth;\n      }\n    });\n    $('.info-item__title').css('min-width', maxWidth + 'px');\n  };\n  var nktHeroSlider = function nktHeroSlider() {\n    var swiper = new Swiper('.nkt-hero__slider', {\n      loop: true,\n      speed: 1000,\n      effect: 'fade',\n      fadeEffect: {\n        crossFade: true\n      },\n      autoplay: {\n        delay: 5000,\n        disableOnInteraction: false\n      }\n    });\n  };\n  var nktaboutCarousel = function nktaboutCarousel() {\n    var swiper = new Swiper('.nkt-about_carousel', {\n      loop: true,\n      speed: 1000,\n      effect: 'side',\n      fadeEffect: {\n        crossFade: true\n      },\n      autoplay: {\n        delay: 5000,\n        disableOnInteraction: false\n      },\n      slidesPerView: 1,\n      spaceBetween: 20,\n      breakpoints: {\n        375: {\n          slidesPerView: 3,\n          spaceBetween: 20\n        },\n        768: {\n          slidesPerView: 4,\n          spaceBetween: 20\n        },\n        1024: {\n          slidesPerView: 4,\n          spaceBetween: 24\n        },\n        1200: {\n          slidesPerView: 5,\n          spaceBetween: 24\n        },\n        1600: {\n          slidesPerView: 7,\n          spaceBetween: 24\n        }\n      }\n    });\n  };\n  var nktScrollWineItem = function nktScrollWineItem() {\n    $('.cate-item').on('click', function () {\n      var targetSection = $(this).data('cate');\n      var $targetElement = $('#' + targetSection);\n      console.log(\"aa\");\n      console.log(targetSection);\n      console.log($targetElement);\n      if ($targetElement.length) {\n        // Tính toán offset nếu có fixed header (ví dụ: 80px)\n        var offset = 80;\n        var targetPosition = $targetElement.offset().top - offset;\n        $('html, body').animate({\n          scrollTop: targetPosition\n        }, 800, 'swing');\n\n        // Update active state\n        $('.cate-item').removeClass('active');\n        $(this).addClass('active');\n      }\n    });\n  };\n  $(document).ready(function () {\n    nktInfoFooter();\n    nktLanguage();\n    nktHeroSlider();\n    nktaboutCarousel();\n    nktScrollWineItem();\n  });\n})(jQuery);\n\n//# sourceURL=webpack://nakatani/./assets/js/components/function.js?\n}");

/***/ }),

/***/ "./assets/js/components/header.js":
/*!****************************************!*\
  !*** ./assets/js/components/header.js ***!
  \****************************************/
/***/ (() => {

eval("{(function ($) {\n  \"use strict\";\n\n  var nktMenuMobile = function nktMenuMobile() {\n    var btnOpen = $('.header-main .btn-open-menu');\n    var btnClose = $('.header-main .btn-close-menu');\n    var menuMobile = $('.header-main .header-mobile');\n    btnOpen.on('click', function (e) {\n      e.preventDefault();\n      menuMobile.addClass('has-show');\n      $('body').addClass('menu-open');\n    });\n    btnClose.on('click', function (e) {\n      e.preventDefault();\n      menuMobile.removeClass('has-show');\n      $('body').removeClass('menu-open');\n    });\n  };\n  $(document).ready(function () {\n    nktMenuMobile();\n  });\n})(jQuery);\n\n//# sourceURL=webpack://nakatani/./assets/js/components/header.js?\n}");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./assets/js/components/header.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/function */ \"./assets/js/components/function.js\");\n/* harmony import */ var _components_function__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_function__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// document.addEventListener('DOMContentLoaded', function() {\n//     const languageSwitchers = document.querySelectorAll('.language-switcher');\n\n//     languageSwitchers.forEach(switcher => {\n//         const currentItem = switcher.querySelector('.current-language-item');\n//         const dropdown = switcher.querySelector('.language-dropdown');\n//         const languageItems = switcher.querySelectorAll('.language-item');\n\n//         languageItems.forEach(item => {\n//             item.addEventListener('click', function(e) {\n//                 const newLang = this.getAttribute('data-lang');\n//                 const newLangName = this.textContent;\n\n//                 const currentLangSpan = switcher.querySelector('.current-language');\n//                 currentLangSpan.textContent = newLangName;\n//             });\n//         });\n\n//         document.addEventListener('click', function(e) {\n//             if (!switcher.contains(e.target)) {\n//                 dropdown.style.opacity = '0';\n//                 dropdown.style.visibility = 'hidden';\n//                 dropdown.style.transform = 'translateY(-10px)';\n//             }\n//         });\n//     });\n// });\n\n//# sourceURL=webpack://nakatani/./assets/js/index.js?\n}");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/index.js");
/******/ 	
/******/ })()
;