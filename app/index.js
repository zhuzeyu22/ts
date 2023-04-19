/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/greeter.ts":
/*!************************!*\
  !*** ./src/greeter.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst bindings_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'bindings'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nconst kfr = (0, bindings_1.default)('kfr');\nclass Student {\n    constructor(firstName, middleInitial, lastName) {\n        this.firstName = firstName;\n        this.middleInitial = middleInitial;\n        this.lastName = lastName;\n        this.fullName = firstName + \" \" + middleInitial + \" \" + lastName;\n    }\n}\nfunction greeter(person) {\n    return \"Hello, \" + person.firstName + \" \" + person.lastName;\n}\nfunction kill(person) {\n    person.firstName = 'qweqwe';\n    return;\n}\nlet user = new Student(\"Jane\", \"M.\", \"User\");\n// document.body.textContent = greeter(user);\nkill(user);\nconsole.log(user);\nconsole.log(kfr);\n\n\n//# sourceURL=webpack://ts/./src/greeter.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/greeter.ts");
/******/ 	
/******/ })()
;