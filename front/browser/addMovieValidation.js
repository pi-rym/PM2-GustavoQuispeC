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

/***/ "./scripts/validation.js":
/*!*******************************!*\
  !*** ./scripts/validation.js ***!
  \*******************************/
/***/ (() => {

eval("(function () {\r\n  \"use strict\";\r\n\r\n  var forms = document.querySelectorAll(\".needs-validation\");\r\n\r\n  Array.prototype.slice.call(forms).forEach(function (form) {\r\n    form.addEventListener(\r\n      \"submit\",\r\n      function (event) {\r\n        if (!form.checkValidity()) {\r\n          event.preventDefault();\r\n          event.stopPropagation();\r\n        }\r\n\r\n        form.classList.add(\"was-validated\");\r\n      },\r\n      false\r\n    );\r\n  });\r\n\r\n  var inputYear = document.getElementById(\"year\");\r\n\r\n  // Limitamos la longitud del input year ingresado a 4 dígitos\r\n  inputYear.addEventListener(\"input\", function () {\r\n    if (this.value.length > 4) {\r\n      this.value = this.value.slice(0, 4);\r\n    }\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://front/./scripts/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/validation.js"]();
/******/ 	
/******/ })()
;