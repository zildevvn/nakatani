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

eval("{(function ($) {\n  \"use strict\";\n\n  var nktLanguage = function nktLanguage() {\n    var $languageSwitchers = $('.language-switcher-desktop');\n    function initLanguageSwitcher() {\n      if ($(window).width() <= 768) return;\n      $languageSwitchers.each(function () {\n        var $switcher = $(this);\n        var $dropdown = $switcher.find('.language-dropdown');\n        var $languageItems = $switcher.find('.language-item');\n        $switcher.on('mouseenter', function () {\n          $dropdown.css({\n            'opacity': '1',\n            'visibility': 'visible',\n            'transform': 'translateY(4px) scale(1)'\n          });\n        });\n        $switcher.on('mouseleave', function () {\n          $dropdown.css({\n            'opacity': '0',\n            'visibility': 'hidden',\n            'transform': 'translateY(-10px)'\n          });\n        });\n        $languageItems.on('click', function (e) {\n          e.preventDefault();\n          var newLangName = $(this).text();\n          $switcher.find('.current-language').text(newLangName);\n          window.location.href = $(this).attr('href');\n        });\n      });\n    }\n    initLanguageSwitcher();\n    var isDesktop = $(window).width() > 768;\n    $(window).on('resize', function () {\n      var nowDesktop = $(window).width() > 768;\n      if (!isDesktop && nowDesktop) {\n        initLanguageSwitcher();\n      }\n      isDesktop = nowDesktop;\n    });\n  };\n  var nktInfoFooter = function nktInfoFooter() {\n    var maxWidth = 0;\n    $('.info-item__title').each(function () {\n      var thisWidth = $(this).outerWidth();\n      if (thisWidth > maxWidth) {\n        maxWidth = thisWidth;\n      }\n    });\n    $('.info-item__title').css('min-width', maxWidth + 'px');\n  };\n  var nktHeroSlider = function nktHeroSlider() {\n    var swiper = new Swiper('.nkt-hero__slider', {\n      loop: true,\n      speed: 1000,\n      effect: 'fade',\n      fadeEffect: {\n        crossFade: true\n      },\n      autoplay: {\n        delay: 5000,\n        disableOnInteraction: false\n      }\n    });\n  };\n  var nktaboutCarousel = function nktaboutCarousel() {\n    var swiper = new Swiper('.nkt-about_carousel', {\n      loop: true,\n      speed: 1000,\n      effect: 'side',\n      fadeEffect: {\n        crossFade: true\n      },\n      autoplay: {\n        delay: 5000,\n        disableOnInteraction: false\n      },\n      slidesPerView: 1,\n      spaceBetween: 20,\n      breakpoints: {\n        375: {\n          slidesPerView: 3,\n          spaceBetween: 20\n        },\n        768: {\n          slidesPerView: 4,\n          spaceBetween: 20\n        },\n        1024: {\n          slidesPerView: 4,\n          spaceBetween: 24\n        },\n        1200: {\n          slidesPerView: 5,\n          spaceBetween: 24\n        },\n        1600: {\n          slidesPerView: 7,\n          spaceBetween: 24\n        }\n      }\n    });\n  };\n  var nktScrollWineItem = function nktScrollWineItem() {\n    $('.cate-item').on('click', function () {\n      var targetSection = $(this).data('cate');\n      var $targetElement = $('#' + targetSection);\n      console.log(\"aa\");\n      console.log(targetSection);\n      console.log($targetElement);\n      if ($targetElement.length) {\n        // Tính toán offset nếu có fixed header (ví dụ: 80px)\n        var offset = 80;\n        var targetPosition = $targetElement.offset().top - offset;\n        $('html, body').animate({\n          scrollTop: targetPosition\n        }, 800, 'swing');\n\n        // Update active state\n        $('.cate-item').removeClass('active');\n        $(this).addClass('active');\n      }\n    });\n  };\n  $(document).ready(function () {\n    nktInfoFooter();\n    nktLanguage();\n    nktHeroSlider();\n    nktaboutCarousel();\n    nktScrollWineItem();\n  });\n\n  // $(document).ready(function() {\n  //     var $stickyElement = $('main.wine-page .nkt-list-categories');\n  //     var $thumbnails = $stickyElement.find('.cate-item__thumbnail');\n  //     var $intro = $stickyElement.find('.nkt-list-categories__intro');\n  //     var $list = $stickyElement.find('.nkt-list-categories__list');\n\n  //     if (!$stickyElement.length) return;\n\n  //     // Sử dụng GSAP MatchMedia\n  //     gsap.matchMedia({\n  //         \"(max-width: 767.98px)\": function() {\n\n  //             function calculateStickyHeight() {\n  //                 var introHeight = $intro.outerHeight() || 0;\n  //                 var listHeight = $list.outerHeight() || 0;\n  //                 return 40 + introHeight + listHeight;\n  //             }\n\n  //             // Tạo scroll trigger\n  //             ScrollTrigger.create({\n  //                 trigger: $stickyElement[0],\n  //                 start: \"top -35px\",\n  //                 end: \"max\",\n  //                 toggleClass: { targets: $stickyElement[0], className: \"has-sticky\" },\n  //                 onEnter: function() {\n  //                     gsap.to($thumbnails, {\n  //                         height: 0,\n  //                         opacity: 0,\n  //                         margin: 0,\n  //                         padding: 0,\n  //                         duration: 0.3,\n  //                         ease: \"power2.out\"\n  //                     });\n  //                     gsap.to($stickyElement, {\n  //                         height: calculateStickyHeight(),\n  //                         duration: 0.3,\n  //                         ease: \"power2.out\"\n  //                     });\n  //                 },\n  //                 onLeaveBack: function() {\n  //                     gsap.to($thumbnails, {\n  //                         height: \"auto\",\n  //                         opacity: 1,\n  //                         margin: \"\",\n  //                         padding: \"\",\n  //                         duration: 0.3,\n  //                         ease: \"power2.out\"\n  //                     });\n  //                     gsap.to($stickyElement, {\n  //                         height: \"auto\",\n  //                         duration: 0.3,\n  //                         ease: \"power2.out\"\n  //                     });\n  //                 }\n  //             });\n  //         }\n  //     });\n  // });\n\n  // $(document).ready(function() {\n  //     var $stickyElement = $('main.wine-page .nkt-list-categories');\n  //     var $thumbnails = $stickyElement.find('.cate-item__thumbnail');\n  //     var $intro = $stickyElement.find('.nkt-list-categories__intro');\n  //     var $list = $stickyElement.find('.nkt-list-categories__list');\n\n  //     var originalHeight = $stickyElement.outerHeight();\n  //     var isSticky = false;\n  //     var isMobile = $(window).width() <= 767.98;\n\n  //     // Tính toán chiều cao khi sticky (40px + intro height + list height)\n  //     function calculateStickyHeight() {\n  //         var introHeight =  40;\n  //         var listHeight = 300;\n  //         return 40 + introHeight + listHeight;\n  //     }\n\n  //     // Tính toán trigger point an toàn\n  //     function getTriggerPoint() {\n  //         var elementOffset = $stickyElement.offset();\n  //         if (!elementOffset) return 0;\n\n  //         var topValue = parseInt($stickyElement.css('top')) || 0;\n  //         return elementOffset.top + topValue;\n  //     }\n\n  //     // Tạo animation\n  //     var hideThumbnails = gsap.to($thumbnails, {\n  //         height: 0,\n  //         opacity: 0,\n  //         margin: 0,\n  //         padding: 0,\n  //         duration: 0.3,\n  //         ease: \"power2.out\",\n  //         paused: true\n  //     });\n\n  //     var resizeSticky = gsap.to($stickyElement, {\n  //         height: calculateStickyHeight(),\n  //         duration: 0.3,\n  //         ease: \"power2.out\",\n  //         paused: true\n  //     });\n\n  //     function checkSticky() {\n  //         if (!$stickyElement.length) return;\n\n  //         var scrollTop = $(window).scrollTop();\n  //         var triggerPoint = getTriggerPoint();\n  //         var shouldBeSticky = scrollTop > triggerPoint;\n\n  //         if (shouldBeSticky !== isSticky && isMobile) {\n  //             isSticky = shouldBeSticky;\n\n  //             if (isSticky) {\n  //                 $stickyElement.addClass('has-sticky');\n  //                 hideThumbnails.play();\n  //                 resizeSticky.play();\n  //             } else {\n  //                 $stickyElement.removeClass('has-sticky');\n  //                 hideThumbnails.reverse();\n  //                 resizeSticky.reverse();\n  //             }\n  //         }\n  //     }\n\n  //     // Sử dụng GSAP ticker cho performance\n  //     gsap.ticker.add(checkSticky);\n\n  //     // Xử lý resize\n  //     function handleResize() {\n  //         if (!$stickyElement.length) return;\n\n  //         originalHeight = $stickyElement.outerHeight();\n  //         isMobile = $(window).width() <= 767.98;\n\n  //          let a = calculateStickyHeight();\n  //     console.log(a)\n  //     console.log(\"cascas\");\n\n  //         // Reset nếu không phải mobile\n  //         if (!isMobile && isSticky) {\n  //             isSticky = false;\n  //             $stickyElement.removeClass('has-sticky');\n  //             hideThumbnails.reverse();\n  //             resizeSticky.reverse();\n  //         }\n\n  //         // Cập nhật animation values với chiều cao mới\n  //         resizeSticky.vars.height = calculateStickyHeight();\n  //     }\n\n  //     // Debounce resize để tối ưu performance\n  //     var resizeTimer;\n  //     $(window).on('resize', function() {\n  //         clearTimeout(resizeTimer);\n  //         resizeTimer = setTimeout(handleResize, 250);\n  //     });\n  // });\n})(jQuery);\n\n//# sourceURL=webpack://nakatani/./assets/js/components/function.js?\n}");

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
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./assets/js/components/header.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/function */ \"./assets/js/components/function.js\");\n/* harmony import */ var _components_function__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_function__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://nakatani/./assets/js/index.js?\n}");

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