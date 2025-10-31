/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/pages/search/search.js":
/*!*******************************************!*\
  !*** ./src/blocks/pages/search/search.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/query */ \"./src/modules/query.js\");\n/* harmony import */ var _modules_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_query__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/search-filter */ \"./src/modules/search-filter.js\");\n/* harmony import */ var _modules_search_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_search_filter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://toxin/./src/blocks/pages/search/search.js?");

/***/ }),

/***/ "./src/modules/query.js":
/*!******************************!*\
  !*** ./src/modules/query.js ***!
  \******************************/
/***/ (function() {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\git\\\\repositories\\\\toxin\\\\src\\\\modules\\\\query.js: Unexpected token (51:3)\\n\\n\\u001b[0m \\u001b[90m 49 |\\u001b[39m     $(\\u001b[32m\\\".guests__click-area\\\"\\u001b[39m)\\u001b[33m.\\u001b[39mremoveClass(\\u001b[32m\\\"guests__click-area--hovered\\\"\\u001b[39m)\\u001b[33m;\\u001b[39m\\n \\u001b[90m 50 |\\u001b[39m   }\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 51 |\\u001b[39m })\\u001b[33m;\\u001b[39m\\n \\u001b[90m    |\\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at constructor (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:351:19)\\n    at Parser.raise (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3237:19)\\n    at Parser.unexpected (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3257:16)\\n    at Parser.parseExprAtom (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10963:16)\\n    at Parser.parseExprSubscripts (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10579:23)\\n    at Parser.parseUpdate (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10562:21)\\n    at Parser.parseMaybeUnary (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10540:23)\\n    at Parser.parseMaybeUnaryOrPrivate (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10394:61)\\n    at Parser.parseExprOps (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10399:23)\\n    at Parser.parseMaybeConditional (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10376:23)\\n    at Parser.parseMaybeAssign (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10337:21)\\n    at Parser.parseExpressionBase (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10291:23)\\n    at C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10287:39\\n    at Parser.allowInAnd (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11928:16)\\n    at Parser.parseExpression (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10287:17)\\n    at Parser.parseStatementContent (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12369:23)\\n    at Parser.parseStatementLike (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12236:17)\\n    at Parser.parseStatementListItem (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12216:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12793:61)\\n    at Parser.parseBlockBody (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12786:10)\\n    at Parser.parseBlock (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12774:10)\\n    at Parser.parseFunctionBody (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11613:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11599:10)\\n    at C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12921:12\\n    at Parser.withSmartMixTopicForbiddingContext (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11910:14)\\n    at Parser.parseFunction (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12920:10)\\n    at Parser.parseFunctionOrFunctionSent (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11078:17)\\n    at Parser.parseExprAtom (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10867:21)\\n    at Parser.parseExprSubscripts (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10579:23)\\n    at Parser.parseUpdate (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10562:21)\\n    at Parser.parseMaybeUnary (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10540:23)\\n    at Parser.parseMaybeUnaryOrPrivate (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10394:61)\\n    at Parser.parseExprOps (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10399:23)\\n    at Parser.parseMaybeConditional (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10376:23)\\n    at Parser.parseMaybeAssign (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10337:21)\\n    at C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10307:39\\n    at Parser.allowInAnd (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11933:12)\\n    at Parser.parseMaybeAssignAllowIn (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10307:17)\\n    at Parser.parseExprListItem (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11693:18)\\n    at Parser.parseCallExpressionArguments (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10765:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10682:29)\\n    at Parser.parseSubscript (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10619:19)\\n    at Parser.parseSubscripts (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10592:19)\\n    at Parser.parseExprSubscripts (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10583:17)\\n    at Parser.parseUpdate (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10562:21)\\n    at Parser.parseMaybeUnary (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10540:23)\\n    at Parser.parseMaybeUnaryOrPrivate (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10394:61)\\n    at Parser.parseExprOps (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10399:23)\\n    at Parser.parseMaybeConditional (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10376:23)\\n    at Parser.parseMaybeAssign (C:\\\\git\\\\repositories\\\\toxin\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10337:21)\");\n\n//# sourceURL=webpack://toxin/./src/modules/query.js?");

/***/ }),

/***/ "./src/modules/search-filter.js":
/*!**************************************!*\
  !*** ./src/modules/search-filter.js ***!
  \**************************************/
/***/ (function() {

eval("/* import AirDatepicker from 'air-datepicker';     \r\nimport 'air-datepicker/air-datepicker.css';\r\n\r\n\r\n$('.find-form__click-area').on('click', function(){     // Добавляем календарь \"AirDatePicker\"\r\n\r\n  let button = {     // добавляем кнопку \"Применить\"\r\n    content: 'Применить',\r\n    className: 'custom-button-classname',\r\n    onClick: (dp) => {\r\n        let date = new Date('2021-07-26');\r\n        dp.selectDate(date);\r\n        dp.setViewDate(date);\r\n    }\r\n}\r\n\r\nnew AirDatepicker('.find-form__dates', {    // добавляем кнопку \"Очистить\"\r\n    range: true, multipleDatesSeparator: ' - ',\r\n    buttons: ['clear', button]\r\n})})\r\n\r\n\r\n$(document).on('click', function(e) { // скрываем календарь \"AirDatePicker\"\r\n  var div = $( '.find-form__dates' );\r\n  var AirDatePicker = $('.air-datepicker');\r\n  if ( !div.is(e.target) && div.has(e.target).length === 0 &&\r\n  !AirDatePicker.is(e.target) && AirDatePicker.has(e.target).length === 0 ) {\r\n         $('.air-datepicker').hide();\r\n  }\r\n});\r\n\r\n\r\n\r\n\r\n$('.guests__click-area').on('click', function(){     // добавляем дропдаун + стилизация при наведении  клику\r\n  $(\".guests__dropdown\").show();\r\n  $(\".guests__click-area\").addClass(\"guests__click-area--hovered\");\r\n})\r\n\r\n\r\n$(document).on('click', function(e) {    // скрываем дропдаун\r\n  var div = $( '.guests__click-area' );\r\n  var drpdwn = $('.guests__dropdown');\r\n  if ( !div.is(e.target) && div.has(e.target).length === 0 &&\r\n  !drpdwn.is(e.target) && drpdwn.has(e.target).length === 0 ) {\r\n    $('.guests__dropdown').hide();\r\n    $(\".guests__click-area\").removeClass(\"guests__click-area--hovered\");\r\n  }\r\n});\r\n*/\n//------------------------------------------------------------------------------------------------------------------\n\n$('.convenience__click-area').on('click', function () {\n  // добавляем дропдаун + стилизация при наведении  клику\n  $(\".convenience__dropdown\").show();\n  $(\".convenience__click-area\").addClass(\"convenience__click-area--hovered\");\n});\n$(document).on('click', function (e) {\n  // скрываем дропдаун\n  var div = $('.convenience__click-area');\n  var drpdwn = $('.convenience__dropdown');\n  if (!div.is(e.target) && div.has(e.target).length === 0 && !drpdwn.is(e.target) && drpdwn.has(e.target).length === 0) {\n    $('.convenience__dropdown').hide();\n    $(\".convenience__click-area\").removeClass(\"convenience__click-area--hovered\");\n  }\n});\n\n//-------------------------------------------------------------------------------------------------------------------\n\n//# sourceURL=webpack://toxin/./src/modules/search-filter.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ (function() {

eval("$(function () {\n  $(\".range__slider-range\").slider({\n    range: true,\n    min: 0,\n    max: 15000,\n    values: [5000, 10000],\n    slide: function (event, ui) {\n      $(\".range__display\").val(ui.values[0] + \"₽ - \" + ui.values[1] + \"₽\");\n    }\n  });\n  $(\".range__display\").val($(\".range__display\").slider(\"values\", 0) + \" - $\" + $(\".range__slider-range\").slider(\"values\", 1));\n});\nconst slider_collection = document.querySelectorAll('.slider-container');\nslider_collection.forEach(item => {\n  const prevButton = item.querySelector('.prev-button i');\n  const nextButton = item.querySelector('.next-button i');\n  const slider = item.querySelector('.slider-container__slider');\n  const slides = Array.from(slider.querySelectorAll('img'));\n  const point = item.querySelector('.slider-container__nav');\n  const points = Array.from(point.querySelectorAll('div'));\n  const slideCount = slides.length;\n  let slideIndex = 0;\n\n  // Устанавливаем обработчики событий для кнопок\n  prevButton.addEventListener('click', showPreviousSlide);\n  nextButton.addEventListener('click', showNextSlide);\n\n  // Функция для показа предыдущего слайда\n  function showPreviousSlide() {\n    slideIndex = (slideIndex - 1 + slideCount) % slideCount;\n    updateSlider();\n  }\n\n  // Функция для показа следующего слайда\n  function showNextSlide() {\n    slideIndex = (slideIndex + 1) % slideCount;\n    updateSlider();\n  }\n\n  // Функция для обновления отображения слайдера\n  function updateSlider() {\n    slides.forEach((slide, index) => {\n      if (index === slideIndex) {\n        slide.style.display = 'block';\n      } else {\n        slide.style.display = 'none';\n      }\n    });\n    points.forEach((point, index) => {\n      if (index === slideIndex) {\n        point.style.background = '#fff';\n      } else {\n        point.style.background = 'none';\n      }\n    });\n  }\n\n  // Инициализация слайдера\n  updateSlider();\n});\n\n//# sourceURL=webpack://toxin/./src/modules/slider.js?");

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/blocks/pages/search/search.js");
/******/ 	
/******/ })()
;