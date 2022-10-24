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

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ (() => {

eval("(function () {\r\n  let form = document.querySelector('#contact-form');\r\n  let emailInput = document.querySelector('#contact-email');\r\n  let messageInput = document.querySelector('#contact-message');\r\n  let nameInput = document.querySelector('#contact-name');\r\n\r\n\r\n\r\n  function nameNotEmpty() {\r\n    let value = nameInput.value;\r\n\r\n    if (!value) {\r\n      showErrorMessage(nameInput, 'Name is a required field.');\r\n      return false;\r\n    }\r\n\r\n    showErrorMessage(emailInput, null);\r\n    return true;\r\n  }\r\n\r\n  function messageNotEmpty() {\r\n    let value = messageInput.value;\r\n\r\n    if (!value) {\r\n      showErrorMessage(messageInput, 'Message is a required field.');\r\n      return false;\r\n    }\r\n\r\n    showErrorMessage(messageInput, null);\r\n    return true;\r\n  }\r\n  function validateEmail() {\r\n    let value = emailInput.value;\r\n\r\n    if (!value) {\r\n      showErrorMessage(emailInput, 'Email is a required field.');\r\n      return false;\r\n    }\r\n\r\n    if (value.indexOf('@') <= 0 && value.indexOf('.') <= 0) {\r\n      showErrorMessage(emailInput, 'Please enter a valid email address.');\r\n      return false;\r\n    }\r\n\r\n    showErrorMessage(emailInput, null);\r\n    return true;\r\n  }\r\n\r\n  function showErrorMessage(input, message) {\r\n    let container = input.parentElement;\r\n\r\n    let error = container.querySelector('.error-message');\r\n    if (error) {\r\n      container.removeChild(error);\r\n    }\r\n\r\n    if (message) {\r\n      let error = document.createElement('div');\r\n      error.classList.add('error-message');\r\n      error.innerText = message;\r\n      container.appendChild(error);\r\n    }\r\n  }\r\n  function validateForm() {\r\n    let isValidEmail = validateEmail();\r\n    return isValidEmail;\r\n  }\r\n  form.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    if (validateForm()) {\r\n      alert('Thank you for sending me a message. I\"ll get back to you as quickly as possible.');\r\n    }\r\n  });\r\n\r\n  nameInput.addEventListener('input', nameNotEmpty);\r\n  emailInput.addEventListener('input', validateEmail);\r\n  messageInput.addEventListener('input', messageNotEmpty);\r\n})();\r\n\n\n//# sourceURL=webpack://portfolio-website/./js/scripts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/scripts */ \"./js/scripts.js\");\n/* harmony import */ var _js_scripts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_scripts__WEBPACK_IMPORTED_MODULE_0__);\n\r\n// import \"../css/styles.scss\";\r\n\r\nconsole.log(\"Site running\");\r\n\n\n//# sourceURL=webpack://portfolio-website/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;