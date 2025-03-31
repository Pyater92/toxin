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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_slider__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modules/search-filter */ \"./src/modules/search-filter.js\");\n/* harmony import */ var _modules_search_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_search_filter__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://toxin/./src/blocks/pages/search/search.js?");

/***/ }),

/***/ "./src/modules/search-filter.js":
/*!**************************************!*\
  !*** ./src/modules/search-filter.js ***!
  \**************************************/
/***/ (function() {

eval("$('.guests__click-area').on('click', function () {\n  // добавляем дропдаун + стилизация при наведении  клику\n  $(\".guests__dropdown\").show();\n  $(\".guests__click-area\").addClass(\"guests__click-area--hovered\");\n});\n$(document).on('click', function (e) {\n  // скрываем дропдаун\n  var div = $('.guests__click-area');\n  var drpdwn = $('.guests__dropdown');\n  if (!div.is(e.target) && div.has(e.target).length === 0 && !drpdwn.is(e.target) && drpdwn.has(e.target).length === 0) {\n    $('.guests__dropdown').hide();\n    $(\".guests__click-area\").removeClass(\"guests__click-area--hovered\");\n  }\n});\n\n//------------------------------------------------------------------------------------------------------------------\n\n$('.convenience__click-area').on('click', function () {\n  // добавляем дропдаун + стилизация при наведении  клику\n  $(\".convenience__dropdown\").show();\n  $(\".convenience__click-area\").addClass(\"convenience__click-area--hovered\");\n});\n$(document).on('click', function (e) {\n  // скрываем дропдаун\n  var div = $('.convenience__click-area');\n  var drpdwn = $('.convenience__dropdown');\n  if (!div.is(e.target) && div.has(e.target).length === 0 && !drpdwn.is(e.target) && drpdwn.has(e.target).length === 0) {\n    $('.convenience__dropdown').hide();\n    $(\".convenience__click-area\").removeClass(\"convenience__click-area--hovered\");\n  }\n});\n\n//# sourceURL=webpack://toxin/./src/modules/search-filter.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ (function() {

eval("$(function () {\n  $(\".range__slider-range\").slider({\n    range: true,\n    min: 0,\n    max: 15000,\n    values: [5000, 10000],\n    slide: function (event, ui) {\n      $(\".range__display\").val(ui.values[0] + \"₽ - \" + ui.values[1] + \"₽\");\n    }\n  });\n  $(\".range__display\").val($(\".range__display\").slider(\"values\", 0) + \" - $\" + $(\".range__slider-range\").slider(\"values\", 1));\n});\n\n//# sourceURL=webpack://toxin/./src/modules/slider.js?");

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