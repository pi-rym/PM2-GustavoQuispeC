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

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderPeliculas=__webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\");\r\n\r\n$.get('https://students-api.2.us-1.fl0.io/movies',(data)=>\r\n  data.forEach(renderPeliculas)\r\n  \r\n  )\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("\r\nconst SeccionPelicula = document.getElementById('contenedorPeliculas')\r\n\r\nfunction renderPeliculas(movie){\r\nconst pelicula = document.createElement(\"article\")\r\nconst containerPeliculas= document.createElement(\"div\")\r\n\r\npelicula.classList.add('contenedorTarjeta');\r\ncontainerPeliculas.classList.add('tarjeta');\r\n\r\ncontainerPeliculas.innerHTML=`\r\n<h3 class=\"titulo\">${movie.title}</h3>\r\n<img class=\"imagen\" src=\"${movie.poster}\" alt=\"${movie.title}\">\r\n<p class=\"director\"><strong>Director: </strong> ${movie.director}</p>\r\n<p class=\"duracion\"><strong>Duracion: </strong> ${movie.duration}</p>\r\n<p class=\"genre\"><strong>Genero: </strong> ${movie.genre}</p>\r\n<p class=\"rate\"><strong>rate: </strong> ${movie.rate}</p>\r\n<p class=\"año\"><strong>rate: </strong> ${movie.year}</p>\r\n`\r\nSeccionPelicula.appendChild(pelicula);\r\npelicula.appendChild(containerPeliculas);\r\n\r\n}\r\nmodule.exports = renderPeliculas;\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;