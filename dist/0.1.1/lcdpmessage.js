/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var LcdpMessage;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addEventListenerMessage.ts":
/*!****************************************!*\
  !*** ./src/addEventListenerMessage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar addEventListenerMessage = function addEventListenerMessage() {\n  var onMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {};\n  window.addEventListener('message', function (_ref) {\n    var type = _ref.type,\n        _ref$data = _ref.data,\n        data = _ref$data === void 0 ? {} : _ref$data;\n    var u__$Type = data.u__$Type,\n        u__$Data = data.u__$Data;\n\n    if (type === 'message' && u__$Type === 'editor') {\n      onMessage(u__$Data);\n    }\n  }, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addEventListenerMessage);\n\n//# sourceURL=webpack://LcdpMessage/./src/addEventListenerMessage.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListenerMessage\": function() { return /* reexport safe */ _addEventListenerMessage__WEBPACK_IMPORTED_MODULE_0__.default; },\n/* harmony export */   \"postParentMessage\": function() { return /* reexport safe */ _postParentMessage__WEBPACK_IMPORTED_MODULE_1__.default; },\n/* harmony export */   \"postMessageToContentWindow\": function() { return /* reexport safe */ _postMessageToContentWindow__WEBPACK_IMPORTED_MODULE_2__.default; },\n/* harmony export */   \"removeEventListenerMessage\": function() { return /* reexport safe */ _removeEventListenerMessage__WEBPACK_IMPORTED_MODULE_3__.default; }\n/* harmony export */ });\n/* harmony import */ var _addEventListenerMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEventListenerMessage */ \"./src/addEventListenerMessage.ts\");\n/* harmony import */ var _postParentMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postParentMessage */ \"./src/postParentMessage.ts\");\n/* harmony import */ var _postMessageToContentWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postMessageToContentWindow */ \"./src/postMessageToContentWindow.ts\");\n/* harmony import */ var _removeEventListenerMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeEventListenerMessage */ \"./src/removeEventListenerMessage.ts\");\n\n\n\n\n\n//# sourceURL=webpack://LcdpMessage/./src/index.ts?");

/***/ }),

/***/ "./src/postMessageToContentWindow.ts":
/*!*******************************************!*\
  !*** ./src/postMessageToContentWindow.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar postMessageToContentWindow = function postMessageToContentWindow(contentWindow, data, origin) {\n  contentWindow.postMessage({\n    u__$Type: 'editor',\n    u__$Data: data,\n    u__$Typeof: _typeof(data)\n  }, origin);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (postMessageToContentWindow);\n\n//# sourceURL=webpack://LcdpMessage/./src/postMessageToContentWindow.ts?");

/***/ }),

/***/ "./src/postParentMessage.ts":
/*!**********************************!*\
  !*** ./src/postParentMessage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar postParentMessage = function postParentMessage(data) {\n  var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '*';\n  window.parent.postMessage({\n    u__$Type: 'editor',\n    u__$Data: data,\n    u__$Typeof: _typeof(data)\n  }, origin);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (postParentMessage);\n\n//# sourceURL=webpack://LcdpMessage/./src/postParentMessage.ts?");

/***/ }),

/***/ "./src/removeEventListenerMessage.ts":
/*!*******************************************!*\
  !*** ./src/removeEventListenerMessage.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar removeEventListenerMessage = function removeEventListenerMessage(fun) {\n  window.removeEventListener('message', fun);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeEventListenerMessage);\n\n//# sourceURL=webpack://LcdpMessage/./src/removeEventListenerMessage.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	LcdpMessage = __webpack_exports__;
/******/ 	
/******/ })()
;