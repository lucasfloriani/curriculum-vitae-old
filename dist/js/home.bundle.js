/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.App = undefined;\n\nvar _ui = __webpack_require__(/*! ./ui */ \"./src/js/ui.js\");\n\nvar _storage = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n\nvar App = exports.App = function (UIController, LanguageInfo) {\n  var removeSelectorActive = function removeSelectorActive() {\n    var UISelectors = UIController.getSelectors();\n    var selectionItems = document.querySelectorAll(UISelectors.selectionItems);\n    selectionItems.forEach(function (item) {\n      item.classList.add('active');\n    });\n  };\n\n  var showSelectorInfo = function showSelectorInfo(e) {\n    e.preventDefault();\n    var language = e.target.getAttribute('data-language');\n    var selectionContent = e.target.parentNode.parentNode.parentNode.children[0];\n    var selectionTitle = selectionContent.children[0];\n    var selectionText = selectionContent.children[1];\n\n    selectionContent.classList.remove('active');\n    selectionTitle.classList.remove('active');\n    selectionText.classList.remove('active');\n    removeSelectorActive();\n    setTimeout(function () {\n      e.target.classList.remove('active');\n\n      selectionTitle.innerHTML = LanguageInfo[language].title;\n      selectionText.innerHTML = LanguageInfo[language].description;\n\n      selectionContent.classList.add('active');\n      selectionTitle.classList.add('active');\n      selectionText.classList.add('active');\n    }, 800);\n  };\n\n  var loadEventListeners = function loadEventListeners() {\n    var UISelectors = UIController.getSelectors();\n    var selectionItems = document.querySelectorAll(UISelectors.selectionItems);\n\n    selectionItems.forEach(function (item) {\n      item.addEventListener('click', showSelectorInfo);\n    });\n  };\n\n  return {\n    init: function init() {\n      // Load event listeners\n      loadEventListeners();\n    }\n  };\n}(_ui.UICtrl, _storage.languages);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./../scss/main.scss */ \"./src/scss/main.scss\");\n\nvar _app = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\n_app.App.init();\n\n//# sourceURL=webpack:///./src/js/home.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar languages = exports.languages = {\n  html5: {\n    title: 'HTML5',\n    description: 'Conhecimento de 95% da linguagem de marcação, conhecendo tanto o básico como o avançado como SEO e acessibilidade.'\n  },\n  css3: {\n    title: 'CSS3',\n    description: 'Conhecimento de 90% da linguagem, utilização das novas funcionalidades do CSS3 bem sólidas.'\n  },\n  sass: {\n    title: 'Sass',\n    description: 'Conhecimento de 50% do pré processador, codificação é baseada em padrões de styleguide presentes em https://sass-guidelin.es'\n  },\n  javascript: {\n    title: 'Javascript',\n    description: 'Conhecimentos sólidos da linguagem até o ES6, utilizando padrões de projeto e organização de código utilizando o Webpack e afins.'\n  },\n  php: {\n    title: 'PHP',\n    description: 'Linguagem trabalhada durante 2 anos para criação de sites institucionais e e-commerces (Wordpress/Magento), conhecimento solido das funcionalidades e configurações da mesma.'\n  },\n  go: {\n    title: 'Go',\n    description: 'Linguagem em estudo e utilizada no atual trabalho, conhecimento atual solido para criação de sistemas SaaS.'\n  },\n  wordpress: {\n    title: 'Wordpress',\n    description: 'Trabalhei durante 1 ano com este framework, conhecendo assim suas peculiariedades e sistema de codificação.'\n  },\n  magento: {\n    title: 'Magento',\n    description: 'Framework completo para criação de sistemas de e-commerce complexos, conhecimentos para alterações de temas e criação de pequenos módulos para integrar ao sistema.'\n  }\n};\n\n//# sourceURL=webpack:///./src/js/storage.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar UICtrl = exports.UICtrl = function () {\n  var UISelectors = {\n    selectionItems: '.selection__list__item'\n  };\n\n  return {\n    getSelectors: function getSelectors() {\n      return UISelectors;\n    }\n  };\n}();\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });