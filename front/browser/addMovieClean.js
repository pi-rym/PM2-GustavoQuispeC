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

/***/ "./scripts/clean.js":
/*!**************************!*\
  !*** ./scripts/clean.js ***!
  \**************************/
/***/ (() => {

eval("document.querySelector(\".limpiar\").addEventListener(\"click\", function (event) {\r\n  event.preventDefault(); // Evita que el formulario se envíe\r\n\r\n  // Selecciona todos los campos de entrada del formulario\r\n  const inputs = document.querySelectorAll(\"input\");\r\n\r\n  // Recorre cada campo de entrada y establece su valor en una cadena vacía\r\n  inputs.forEach((input) => {\r\n    input.value = \"\";\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://front/./scripts/clean.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/clean.js"]();
/******/ 	
/******/ })()
;