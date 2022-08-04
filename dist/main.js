/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/tracks.png */ "./images/tracks.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* General Styles */\nbody {\n    background: rgb(111, 208, 224);\n    background: linear-gradient(0deg,rgb(111, 208, 224) 0%, rgb(171, 228, 167) 100%);\n    font-family: 'Open Sans', sans-serif;\n    text-align: center;\n    min-height: 100vh;\n}\n\nh1 {\n    margin: 0;\n    font-family: 'Frijole', cursive;\n    font-size: 3em;\n    font-weight: 400;\n}\n\nh2,\nh3 {\n    font-family: 'Oswald', sans-serif;\n}\n\n@media (min-width: 650px) {\n    h1 {\n        font-size: 5em;\n    }\n}\n\n@media (min-width: 920px) {\n    h1 {\n        font-size: 8em;\n    }\n}\n\np {\n    font-weight: 100;\n}\n\n/* Grid Styles */\n#grid {\n    background: #fff url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n    background-size: cover;\n    display: flex;\n    margin: 2em;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    flex-wrap: wrap;\n}\n\n.grid-item {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n}\n\n.grid-item:nth-child(1){\n    background: #009687f5;\n}\n\n.grid-item:nth-child(2){\n    background: #dc7657f5;\n}\n\n.grid-item:nth-child(3){\n    background: #4bb3c1fa;\n}\n\n.grid-item:nth-child(4){\n    background: #fac069f9;\n}\n\n.grid-item:nth-child(5){\n    background: #67a866f9;\n}\n\n.grid-item:nth-child(6){\n    background: #b94169fa;\n}\n\n.grid-item:nth-child(7){\n    background: #7f62b3fa;\n}\n\n.grid-item:nth-child(8){\n    background: #9fc376f9;\n}\n\n.grid-item:nth-child(9){\n    background: #677bcbfa;\n}\n\n@media (min-width: 550px) {\n    #grid div {\n        width: calc(100% / 3);\n    }\n}\n\n.grid-item h3 {\n    font-size: 2em;\n    color: #eee;\n}\n\n.grid-item img {\n    max-width: 100%;\n    padding-bottom: 1em;\n}\n\n.grid-item p {\n    background: rgba(000,000,000, .3);\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 0.8em 0.8em 1.8em;\n    margin:0;\n    box-sizing: border-box;\n    font-size: 1.2em;\n    font-weight: 600;\n    color: #fff;\n}\n\n/* Form Styles */\n.form-container {\n    background: #eee;\n    padding: 1.3em;\n    text-align: left;\n    max-width: 400px;\n    margin: 0 auto;\n}\n\nform p {\n    margin-bottom: 0.3em;\n    font-size: 1.3em;\n    font-weight: 600;\n    font-family: 'Oswald', sans-serif;\n}\n\ninput {\n    padding: 0.7em;\n    background: #fff;\n    border: 0;\n}\n\n.form-field__short {\n    width: 25%;\n    margin-right: 3%;\n    box-sizing: border-box;\n}\n\n.form-field__full {\n    width: 100%;\n    box-sizing: border-box;\n}\n\nselect {\n    display: block;\n}\n\n#btn {\n    display: inline-block;\n    background: #ccc;\n    padding: 0.8em;\n    margin: 1.2em auto;\n    transition: ease 0.3s all;\n}\n\n#btn:hover {\n    background: #777;\n    color: #fff;\n    cursor: pointer;\n}\n\n/* Footer */\n.fine-print {\n    display: block;\n    font-size: 0.7em;\n}", "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;IACI,8BAA8B;IAC9B,gFAAgF;IAChF,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,+BAA+B;IAC/B,cAAc;IACd,gBAAgB;AACpB;;AAEA;;IAEI,iCAAiC;AACrC;;AAEA;IACI;QACI,cAAc;IAClB;AACJ;;AAEA;IACI;QACI,cAAc;IAClB;AACJ;;AAEA;IACI,gBAAgB;AACpB;;AAEA,gBAAgB;AAChB;IACI,kEAAoD;IACpD,sBAAsB;IACtB,aAAa;IACb,WAAW;IACX,kEAAkE;IAClE,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI;QACI,qBAAqB;IACzB;AACJ;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,0BAA0B;IAC1B,QAAQ;IACR,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;AACf;;AAEA,gBAAgB;AAChB;IACI,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,eAAe;AACnB;;AAEA,WAAW;AACX;IACI,cAAc;IACd,gBAAgB;AACpB","sourcesContent":["/* General Styles */\nbody {\n    background: rgb(111, 208, 224);\n    background: linear-gradient(0deg,rgb(111, 208, 224) 0%, rgb(171, 228, 167) 100%);\n    font-family: 'Open Sans', sans-serif;\n    text-align: center;\n    min-height: 100vh;\n}\n\nh1 {\n    margin: 0;\n    font-family: 'Frijole', cursive;\n    font-size: 3em;\n    font-weight: 400;\n}\n\nh2,\nh3 {\n    font-family: 'Oswald', sans-serif;\n}\n\n@media (min-width: 650px) {\n    h1 {\n        font-size: 5em;\n    }\n}\n\n@media (min-width: 920px) {\n    h1 {\n        font-size: 8em;\n    }\n}\n\np {\n    font-weight: 100;\n}\n\n/* Grid Styles */\n#grid {\n    background: #fff url(../images/tracks.png) no-repeat;\n    background-size: cover;\n    display: flex;\n    margin: 2em;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    flex-wrap: wrap;\n}\n\n.grid-item {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n}\n\n.grid-item:nth-child(1){\n    background: #009687f5;\n}\n\n.grid-item:nth-child(2){\n    background: #dc7657f5;\n}\n\n.grid-item:nth-child(3){\n    background: #4bb3c1fa;\n}\n\n.grid-item:nth-child(4){\n    background: #fac069f9;\n}\n\n.grid-item:nth-child(5){\n    background: #67a866f9;\n}\n\n.grid-item:nth-child(6){\n    background: #b94169fa;\n}\n\n.grid-item:nth-child(7){\n    background: #7f62b3fa;\n}\n\n.grid-item:nth-child(8){\n    background: #9fc376f9;\n}\n\n.grid-item:nth-child(9){\n    background: #677bcbfa;\n}\n\n@media (min-width: 550px) {\n    #grid div {\n        width: calc(100% / 3);\n    }\n}\n\n.grid-item h3 {\n    font-size: 2em;\n    color: #eee;\n}\n\n.grid-item img {\n    max-width: 100%;\n    padding-bottom: 1em;\n}\n\n.grid-item p {\n    background: rgba(000,000,000, .3);\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 0.8em 0.8em 1.8em;\n    margin:0;\n    box-sizing: border-box;\n    font-size: 1.2em;\n    font-weight: 600;\n    color: #fff;\n}\n\n/* Form Styles */\n.form-container {\n    background: #eee;\n    padding: 1.3em;\n    text-align: left;\n    max-width: 400px;\n    margin: 0 auto;\n}\n\nform p {\n    margin-bottom: 0.3em;\n    font-size: 1.3em;\n    font-weight: 600;\n    font-family: 'Oswald', sans-serif;\n}\n\ninput {\n    padding: 0.7em;\n    background: #fff;\n    border: 0;\n}\n\n.form-field__short {\n    width: 25%;\n    margin-right: 3%;\n    box-sizing: border-box;\n}\n\n.form-field__full {\n    width: 100%;\n    box-sizing: border-box;\n}\n\nselect {\n    display: block;\n}\n\n#btn {\n    display: inline-block;\n    background: #ccc;\n    padding: 0.8em;\n    margin: 1.2em auto;\n    transition: ease 0.3s all;\n}\n\n#btn:hover {\n    background: #777;\n    color: #fff;\n    cursor: pointer;\n}\n\n/* Footer */\n.fine-print {\n    display: block;\n    font-size: 0.7em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./images/anklyosaurus.png":
/*!*********************************!*\
  !*** ./images/anklyosaurus.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/anklyosaurus.png");

/***/ }),

/***/ "./images/brachiosaurus.png":
/*!**********************************!*\
  !*** ./images/brachiosaurus.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/brachiosaurus.png");

/***/ }),

/***/ "./images/elasmosaurus.png":
/*!*********************************!*\
  !*** ./images/elasmosaurus.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/elasmosaurus.png");

/***/ }),

/***/ "./images/human.png":
/*!**************************!*\
  !*** ./images/human.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/human.png");

/***/ }),

/***/ "./images/pigeon.png":
/*!***************************!*\
  !*** ./images/pigeon.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/pigeon.png");

/***/ }),

/***/ "./images/pteranodon.png":
/*!*******************************!*\
  !*** ./images/pteranodon.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/pteranodon.png");

/***/ }),

/***/ "./images/stegosaurus.png":
/*!********************************!*\
  !*** ./images/stegosaurus.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/stegosaurus.png");

/***/ }),

/***/ "./images/triceratops.png":
/*!********************************!*\
  !*** ./images/triceratops.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/triceratops.png");

/***/ }),

/***/ "./images/tyrannosaurus_rex.png":
/*!**************************************!*\
  !*** ./images/tyrannosaurus_rex.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/tyrannosaurus_rex.png");

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dino_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dino.json */ "./src/dino.json");


const dinos = [..._dino_json__WEBPACK_IMPORTED_MODULE_0__.Dinos]

// Create Dino Constructor
const Dino = () => {

    let species = "";
    let weight = 0;
    let height = 0;
    let diet = "";
    let where = "";
    let when = "";
    let fact = "";
    let image = "";

    return {
        getSpecies: function () {
            return species;
        },
        getWeight: function () {
            return weight;
        },
        getHeight: function () {
            return height;
        },
        getDiet: function () {
            return diet;
        },
        getWhere: function () {
            return where;
        },
        getWhen: function () {
            return when;
        },
        getFact: function () {
            return fact;
        },
        getImage: function () {
            return image;
        },
        setSpecies: function (newValue) {
            species = newValue;
        },
        setWeight: function (newValue) {
            weight = newValue;
        },
        setHeight: function (newValue) {
            height = newValue;
        },
        setDiet: function (newValue) {
            diet = newValue;
        },
        setWhere: function (newValue) {
            where = newValue;
        },
        setWhen: function (newValue) {
            when = newValue;
        },
        setFact: function (newValue) {
            fact = newValue;
        },
        setImage: function (newValue) {
            image = newValue;
        },
    }

}

var dinosObjects = []

// Create Dino Objects
dinos.forEach((element) => {

    let dino = Dino();
    dino.setSpecies(element.species);
    dino.setWeight(element.weight);
    dino.setHeight(element.height);
    dino.setDiet(element.diet);
    dino.setWhere(element.where);
    dino.setWhen(element.when);
    dino.setFact(element.fact);
    dino.setImage(element.image);
    dinosObjects.push(dino)

})

//Method for shuffling array of objects
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

let shuffleDinosObjects = shuffle(dinosObjects)

//Human constructor
const Human = () => {

    let species = "";
    let name = "";
    let height = {
        feet: 0,
        inches: 0
    };
    let weight = 0;
    let diet = "";
    let image = "";

    return {
        getSpecies: function () {
            return species;
        },
        getName: function () {
            return name;
        },
        getWeight: function () {
            return weight;
        },
        getHeight: function () {
            return height;
        },
        getDiet: function () {
            return diet;
        },
        getImage: function () {
            return image;
        },
        setSpecies: function (newValue) {
            species = newValue;
        },
        setName: function (newValue) {
            name = newValue;
        },
        setWeight: function (newValue) {
            weight = newValue;
        },
        setHeight: function (newFeet,newInches) {
            height.feet = newFeet;
            height.inches = newInches;
        },
        setDiet: function (newValue) {
            diet = newValue;
        },
        setImage: function (newValue) {
            image = newValue;
        },
    }

}

// Create Human Object
var humanObject = Human();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// On button click, prepare and display infographic
const submitBtn = document.getElementById("btn");

const submit = () => {

// Use IIFE to get human data from form
    (function getFormValues() {

        humanObject.setSpecies("Human");
        humanObject.setName(document.getElementById("name").value);
        humanObject.setWeight(document.getElementById("weight").value);
        humanObject.setHeight(document.getElementById("feet").value, document.getElementById("inches").value);
        humanObject.setDiet(document.getElementById("diet").value);
        humanObject.setImage("human.png");

    })();

 // Generate Tiles for each Dino in Array
    shuffleDinosObjects.splice(4, 0, humanObject)

    var grid = document.getElementById("grid");

 // Add tiles to DOM
    for (let i = 0; i <= shuffleDinosObjects.length - 1; i++) {

        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');

        grid.appendChild(div);
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(p);

        if (shuffleDinosObjects[i].getSpecies() !== "Human") {
            h3.textContent = shuffleDinosObjects[i].getSpecies()
            p.textContent = shuffleDinosObjects[i].getFact()
        }
        else {
            h3.textContent = shuffleDinosObjects[i].getName()
        }

        img.src = `./images/${shuffleDinosObjects[i].getImage()}`

        div.classList.add("grid-item");
    }

 // Remove form from screen
    var x = document.getElementById("dino-compare");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

submitBtn.onclick = submit;



/***/ }),

/***/ "./images/tracks.png":
/*!***************************!*\
  !*** ./images/tracks.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a068b34665599f147fbb.png";

/***/ }),

/***/ "./src/dino.json":
/*!***********************!*\
  !*** ./src/dino.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"Dinos":[{"species":"Triceratops","weight":13000,"height":114,"diet":"herbavor","where":"North America","when":"Late Cretaceous","fact":"First discovered in 1889 by Othniel Charles Marsh","image":"triceratops.png"},{"species":"Tyrannosaurus Rex","weight":11905,"height":144,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"The largest known skull measures in at 5 feet long.","image":"tyrannosaurus_rex.png"},{"species":"Anklyosaurus","weight":10500,"height":55,"diet":"herbavor","where":"North America","when":"Late Cretaceous","fact":"Anklyosaurus survived for approximately 135 million years.","image":"anklyosaurus.png"},{"species":"Brachiosaurus","weight":70000,"height":"372","diet":"herbavor","where":"North America","when":"Late Jurasic","fact":"An asteroid was named 9954 Brachiosaurus in 1991.","image":"brachiosaurus.png"},{"species":"Stegosaurus","weight":11600,"height":79,"diet":"herbavor","where":"North America, Europe, Asia","when":"Late Jurasic to Early Cretaceous","fact":"The Stegosaurus had between 17 and 22 seperate places and flat spines.","image":"stegosaurus.png"},{"species":"Elasmosaurus","weight":16000,"height":59,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"Elasmosaurus was a marine reptile first discovered in Kansas.","image":"elasmosaurus.png"},{"species":"Pteranodon","weight":44,"height":20,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"Actually a flying reptile, the Pteranodon is not a dinosaur.","image":"elasmosaurus.png"},{"species":"Pigeon","weight":0.5,"height":9,"diet":"herbavor","where":"World Wide","when":"Holocene","fact":"All birds are living dinosaurs.","image":"pigeon.png"}]}');

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_anklyosaurus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/anklyosaurus.png */ "./images/anklyosaurus.png");
/* harmony import */ var _images_brachiosaurus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/brachiosaurus.png */ "./images/brachiosaurus.png");
/* harmony import */ var _images_elasmosaurus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/elasmosaurus.png */ "./images/elasmosaurus.png");
/* harmony import */ var _images_human_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/human.png */ "./images/human.png");
/* harmony import */ var _images_pigeon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/pigeon.png */ "./images/pigeon.png");
/* harmony import */ var _images_pteranodon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/pteranodon.png */ "./images/pteranodon.png");
/* harmony import */ var _images_stegosaurus_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/stegosaurus.png */ "./images/stegosaurus.png");
/* harmony import */ var _images_triceratops_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/triceratops.png */ "./images/triceratops.png");
/* harmony import */ var _images_tyrannosaurus_rex_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/tyrannosaurus_rex.png */ "./images/tyrannosaurus_rex.png");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.css */ "./src/app.css");













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2ZzRDtBQUN0RDtBQUNBLGtCQUFrQiw2Q0FBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3RPQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUQ7QUFDRTtBQUNGO0FBQ2Q7QUFDRTtBQUNRO0FBQ0U7QUFDQTtBQUNZO0FBQzdDO0FBQ0M7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9zcmMvYXBwLmNzcyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Rpbm9zYXVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vaW1hZ2VzL2Fua2x5b3NhdXJ1cy5wbmciLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vaW1hZ2VzL2JyYWNoaW9zYXVydXMucG5nIiwid2VicGFjazovL2Rpbm9zYXVycy8uL2ltYWdlcy9lbGFzbW9zYXVydXMucG5nIiwid2VicGFjazovL2Rpbm9zYXVycy8uL2ltYWdlcy9odW1hbi5wbmciLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vaW1hZ2VzL3BpZ2Vvbi5wbmciLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vaW1hZ2VzL3B0ZXJhbm9kb24ucG5nIiwid2VicGFjazovL2Rpbm9zYXVycy8uL2ltYWdlcy9zdGVnb3NhdXJ1cy5wbmciLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vaW1hZ2VzL3RyaWNlcmF0b3BzLnBuZyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9pbWFnZXMvdHlyYW5ub3NhdXJ1c19yZXgucG5nIiwid2VicGFjazovL2Rpbm9zYXVycy8uL3NyYy9hcHAuY3NzP2E2NzIiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Rpbm9zYXVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Rpbm9zYXVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2Rpbm9zYXVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Rpbm9zYXVycy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvdHJhY2tzLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdlbmVyYWwgU3R5bGVzICovXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMTEsIDIwOCwgMjI0KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcscmdiKDExMSwgMjA4LCAyMjQpIDAlLCByZ2IoMTcxLCAyMjgsIDE2NykgMTAwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJpam9sZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMixcXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY1MHB4KSB7XFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MjBweCkge1xcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDhlbTtcXG4gICAgfVxcbn1cXG5cXG5wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLyogR3JpZCBTdHlsZXMgKi9cXG4jZ3JpZCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDEpe1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Njg3ZjU7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDIpe1xcbiAgICBiYWNrZ3JvdW5kOiAjZGM3NjU3ZjU7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDMpe1xcbiAgICBiYWNrZ3JvdW5kOiAjNGJiM2MxZmE7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDQpe1xcbiAgICBiYWNrZ3JvdW5kOiAjZmFjMDY5Zjk7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDUpe1xcbiAgICBiYWNrZ3JvdW5kOiAjNjdhODY2Zjk7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDYpe1xcbiAgICBiYWNrZ3JvdW5kOiAjYjk0MTY5ZmE7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDcpe1xcbiAgICBiYWNrZ3JvdW5kOiAjN2Y2MmIzZmE7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDgpe1xcbiAgICBiYWNrZ3JvdW5kOiAjOWZjMzc2Zjk7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDkpe1xcbiAgICBiYWNrZ3JvdW5kOiAjNjc3YmNiZmE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgICAjZ3JpZCBkaXYge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xcbiAgICB9XFxufVxcblxcbi5ncmlkLWl0ZW0gaDMge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY29sb3I6ICNlZWU7XFxufVxcblxcbi5ncmlkLWl0ZW0gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHAge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAwMCwwMDAsMDAwLCAuMyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC44ZW0gMC44ZW0gMS44ZW07XFxuICAgIG1hcmdpbjowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogRm9ybSBTdHlsZXMgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBwYWRkaW5nOiAxLjNlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmZvcm0gcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMC43ZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLmZvcm0tZmllbGRfX3Nob3J0IHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmZvcm0tZmllbGRfX2Z1bGwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNidG4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICAgIHBhZGRpbmc6IDAuOGVtO1xcbiAgICBtYXJnaW46IDEuMmVtIGF1dG87XFxuICAgIHRyYW5zaXRpb246IGVhc2UgMC4zcyBhbGw7XFxufVxcblxcbiNidG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZmluZS1wcmludCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDAuN2VtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSw4QkFBOEI7SUFDOUIsZ0ZBQWdGO0lBQ2hGLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksa0VBQW9EO0lBQ3BELHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztJQUNYLGtFQUFrRTtJQUNsRSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBLFdBQVc7QUFDWDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCBTdHlsZXMgKi9cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDExMSwgMjA4LCAyMjQpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2IoMTExLCAyMDgsIDIyNCkgMCUsIHJnYigxNzEsIDIyOCwgMTY3KSAxMDAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdGcmlqb2xlJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmgyLFxcbmgzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjUwcHgpIHtcXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiA1ZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDkyMHB4KSB7XFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogOGVtO1xcbiAgICB9XFxufVxcblxcbnAge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4vKiBHcmlkIFN0eWxlcyAqL1xcbiNncmlkIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZiB1cmwoLi4vaW1hZ2VzL3RyYWNrcy5wbmcpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAyZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoMSl7XFxuICAgIGJhY2tncm91bmQ6ICMwMDk2ODdmNTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoMil7XFxuICAgIGJhY2tncm91bmQ6ICNkYzc2NTdmNTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoMyl7XFxuICAgIGJhY2tncm91bmQ6ICM0YmIzYzFmYTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoNCl7XFxuICAgIGJhY2tncm91bmQ6ICNmYWMwNjlmOTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoNSl7XFxuICAgIGJhY2tncm91bmQ6ICM2N2E4NjZmOTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoNil7XFxuICAgIGJhY2tncm91bmQ6ICNiOTQxNjlmYTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoNyl7XFxuICAgIGJhY2tncm91bmQ6ICM3ZjYyYjNmYTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoOCl7XFxuICAgIGJhY2tncm91bmQ6ICM5ZmMzNzZmOTtcXG59XFxuXFxuLmdyaWQtaXRlbTpudGgtY2hpbGQoOSl7XFxuICAgIGJhY2tncm91bmQ6ICM2NzdiY2JmYTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxuICAgICNncmlkIGRpdiB7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XFxuICAgIH1cXG59XFxuXFxuLmdyaWQtaXRlbSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjb2xvcjogI2VlZTtcXG59XFxuXFxuLmdyaWQtaXRlbSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxufVxcblxcbi5ncmlkLWl0ZW0gcCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMDAwLDAwMCwwMDAsIC4zKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjhlbSAxLjhlbTtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4vKiBGb3JtIFN0eWxlcyAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxuICAgIHBhZGRpbmc6IDEuM2VtO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuZm9ybSBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBwYWRkaW5nOiAwLjdlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uZm9ybS1maWVsZF9fc2hvcnQge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZm9ybS1maWVsZF9fZnVsbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2J0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZDogI2NjYztcXG4gICAgcGFkZGluZzogMC44ZW07XFxuICAgIG1hcmdpbjogMS4yZW0gYXV0bztcXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjNzIGFsbDtcXG59XFxuXFxuI2J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbi5maW5lLXByaW50IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMC43ZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYW5rbHlvc2F1cnVzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYnJhY2hpb3NhdXJ1cy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2VsYXNtb3NhdXJ1cy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2h1bWFuLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcGlnZW9uLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcHRlcmFub2Rvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3N0ZWdvc2F1cnVzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdHJpY2VyYXRvcHMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90eXJhbm5vc2F1cnVzX3JleC5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRGlub3MgZnJvbSAnLi9kaW5vLmpzb24nIGFzc2VydCB7dHlwZTogJ2pzb24nfTtcclxuXHJcbmNvbnN0IGRpbm9zID0gWy4uLkRpbm9zLkRpbm9zXVxyXG5cclxuLy8gQ3JlYXRlIERpbm8gQ29uc3RydWN0b3JcclxuY29uc3QgRGlubyA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgc3BlY2llcyA9IFwiXCI7XHJcbiAgICBsZXQgd2VpZ2h0ID0gMDtcclxuICAgIGxldCBoZWlnaHQgPSAwO1xyXG4gICAgbGV0IGRpZXQgPSBcIlwiO1xyXG4gICAgbGV0IHdoZXJlID0gXCJcIjtcclxuICAgIGxldCB3aGVuID0gXCJcIjtcclxuICAgIGxldCBmYWN0ID0gXCJcIjtcclxuICAgIGxldCBpbWFnZSA9IFwiXCI7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRTcGVjaWVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzcGVjaWVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0V2VpZ2h0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3ZWlnaHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldERpZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRXaGVyZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2hlcmU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRXaGVuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aGVuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RmFjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFjdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEltYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFNwZWNpZXM6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBzcGVjaWVzID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRXZWlnaHQ6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB3ZWlnaHQgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEhlaWdodDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0RGlldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRpZXQgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFdoZXJlOiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgd2hlcmUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFdoZW46IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB3aGVuID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRGYWN0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgZmFjdCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SW1hZ2U6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBpbWFnZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG52YXIgZGlub3NPYmplY3RzID0gW11cclxuXHJcbi8vIENyZWF0ZSBEaW5vIE9iamVjdHNcclxuZGlub3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cclxuICAgIGxldCBkaW5vID0gRGlubygpO1xyXG4gICAgZGluby5zZXRTcGVjaWVzKGVsZW1lbnQuc3BlY2llcyk7XHJcbiAgICBkaW5vLnNldFdlaWdodChlbGVtZW50LndlaWdodCk7XHJcbiAgICBkaW5vLnNldEhlaWdodChlbGVtZW50LmhlaWdodCk7XHJcbiAgICBkaW5vLnNldERpZXQoZWxlbWVudC5kaWV0KTtcclxuICAgIGRpbm8uc2V0V2hlcmUoZWxlbWVudC53aGVyZSk7XHJcbiAgICBkaW5vLnNldFdoZW4oZWxlbWVudC53aGVuKTtcclxuICAgIGRpbm8uc2V0RmFjdChlbGVtZW50LmZhY3QpO1xyXG4gICAgZGluby5zZXRJbWFnZShlbGVtZW50LmltYWdlKTtcclxuICAgIGRpbm9zT2JqZWN0cy5wdXNoKGRpbm8pXHJcblxyXG59KVxyXG5cclxuLy9NZXRob2QgZm9yIHNodWZmbGluZyBhcnJheSBvZiBvYmplY3RzXHJcbmNvbnN0IHNodWZmbGUgPSAoYXJyYXkpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcclxuXHJcbiAgICAgICAgLy8gU3dhcFxyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59O1xyXG5cclxubGV0IHNodWZmbGVEaW5vc09iamVjdHMgPSBzaHVmZmxlKGRpbm9zT2JqZWN0cylcclxuXHJcbi8vSHVtYW4gY29uc3RydWN0b3JcclxuY29uc3QgSHVtYW4gPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHNwZWNpZXMgPSBcIlwiO1xyXG4gICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgbGV0IGhlaWdodCA9IHtcclxuICAgICAgICBmZWV0OiAwLFxyXG4gICAgICAgIGluY2hlczogMFxyXG4gICAgfTtcclxuICAgIGxldCB3ZWlnaHQgPSAwO1xyXG4gICAgbGV0IGRpZXQgPSBcIlwiO1xyXG4gICAgbGV0IGltYWdlID0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFNwZWNpZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNwZWNpZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXROYW1lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0V2VpZ2h0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3ZWlnaHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldERpZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRJbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRTcGVjaWVzOiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgc3BlY2llcyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmFtZTogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFdlaWdodDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHdlaWdodCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SGVpZ2h0OiBmdW5jdGlvbiAobmV3RmVldCxuZXdJbmNoZXMpIHtcclxuICAgICAgICAgICAgaGVpZ2h0LmZlZXQgPSBuZXdGZWV0O1xyXG4gICAgICAgICAgICBoZWlnaHQuaW5jaGVzID0gbmV3SW5jaGVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0RGlldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRpZXQgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEltYWdlOiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgaW1hZ2UgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy8gQ3JlYXRlIEh1bWFuIE9iamVjdFxyXG52YXIgaHVtYW5PYmplY3QgPSBIdW1hbigpO1xyXG5cclxuLy8gQ3JlYXRlIERpbm8gQ29tcGFyZSBNZXRob2QgMVxyXG4vLyBOT1RFOiBXZWlnaHQgaW4gSlNPTiBmaWxlIGlzIGluIGxicywgaGVpZ2h0IGluIGluY2hlcy5cclxuXHJcblxyXG4vLyBDcmVhdGUgRGlubyBDb21wYXJlIE1ldGhvZCAyXHJcbi8vIE5PVEU6IFdlaWdodCBpbiBKU09OIGZpbGUgaXMgaW4gbGJzLCBoZWlnaHQgaW4gaW5jaGVzLlxyXG5cclxuXHJcbi8vIENyZWF0ZSBEaW5vIENvbXBhcmUgTWV0aG9kIDNcclxuLy8gTk9URTogV2VpZ2h0IGluIEpTT04gZmlsZSBpcyBpbiBsYnMsIGhlaWdodCBpbiBpbmNoZXMuXHJcblxyXG5cclxuLy8gT24gYnV0dG9uIGNsaWNrLCBwcmVwYXJlIGFuZCBkaXNwbGF5IGluZm9ncmFwaGljXHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuXCIpO1xyXG5cclxuY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xyXG5cclxuLy8gVXNlIElJRkUgdG8gZ2V0IGh1bWFuIGRhdGEgZnJvbSBmb3JtXHJcbiAgICAoZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcygpIHtcclxuXHJcbiAgICAgICAgaHVtYW5PYmplY3Quc2V0U3BlY2llcyhcIkh1bWFuXCIpO1xyXG4gICAgICAgIGh1bWFuT2JqZWN0LnNldE5hbWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpLnZhbHVlKTtcclxuICAgICAgICBodW1hbk9iamVjdC5zZXRXZWlnaHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWlnaHRcIikudmFsdWUpO1xyXG4gICAgICAgIGh1bWFuT2JqZWN0LnNldEhlaWdodChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZXRcIikudmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5jaGVzXCIpLnZhbHVlKTtcclxuICAgICAgICBodW1hbk9iamVjdC5zZXREaWV0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlldFwiKS52YWx1ZSk7XHJcbiAgICAgICAgaHVtYW5PYmplY3Quc2V0SW1hZ2UoXCJodW1hbi5wbmdcIik7XHJcblxyXG4gICAgfSkoKTtcclxuXHJcbiAvLyBHZW5lcmF0ZSBUaWxlcyBmb3IgZWFjaCBEaW5vIGluIEFycmF5XHJcbiAgICBzaHVmZmxlRGlub3NPYmplY3RzLnNwbGljZSg0LCAwLCBodW1hbk9iamVjdClcclxuXHJcbiAgICB2YXIgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZFwiKTtcclxuXHJcbiAvLyBBZGQgdGlsZXMgdG8gRE9NXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzaHVmZmxlRGlub3NPYmplY3RzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgICAgICAgaWYgKHNodWZmbGVEaW5vc09iamVjdHNbaV0uZ2V0U3BlY2llcygpICE9PSBcIkh1bWFuXCIpIHtcclxuICAgICAgICAgICAgaDMudGV4dENvbnRlbnQgPSBzaHVmZmxlRGlub3NPYmplY3RzW2ldLmdldFNwZWNpZXMoKVxyXG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gc2h1ZmZsZURpbm9zT2JqZWN0c1tpXS5nZXRGYWN0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGgzLnRleHRDb250ZW50ID0gc2h1ZmZsZURpbm9zT2JqZWN0c1tpXS5nZXROYW1lKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZy5zcmMgPSBgLi9pbWFnZXMvJHtzaHVmZmxlRGlub3NPYmplY3RzW2ldLmdldEltYWdlKCl9YFxyXG5cclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImdyaWQtaXRlbVwiKTtcclxuICAgIH1cclxuXHJcbiAvLyBSZW1vdmUgZm9ybSBmcm9tIHNjcmVlblxyXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpbm8tY29tcGFyZVwiKTtcclxuICAgIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB4LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxufVxyXG5cclxuc3VibWl0QnRuLm9uY2xpY2sgPSBzdWJtaXQ7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGFua2x5b3NhdXJ1cyBmcm9tICcuLi9pbWFnZXMvYW5rbHlvc2F1cnVzLnBuZydcclxuaW1wb3J0IGJyYWNoaW9zYXVydXMgZnJvbSAnLi4vaW1hZ2VzL2JyYWNoaW9zYXVydXMucG5nJ1xyXG5pbXBvcnQgZWxhc21vc2F1cnVzIGZyb20gJy4uL2ltYWdlcy9lbGFzbW9zYXVydXMucG5nJ1xyXG5pbXBvcnQgaHVtYW4gZnJvbSAnLi4vaW1hZ2VzL2h1bWFuLnBuZydcclxuaW1wb3J0IHBpZ2VvbiBmcm9tICcuLi9pbWFnZXMvcGlnZW9uLnBuZydcclxuaW1wb3J0IHB0ZXJhbm9kb24gZnJvbSAnLi4vaW1hZ2VzL3B0ZXJhbm9kb24ucG5nJ1xyXG5pbXBvcnQgc3RlZ29zYXVydXMgZnJvbSAnLi4vaW1hZ2VzL3N0ZWdvc2F1cnVzLnBuZydcclxuaW1wb3J0IHRyaWNlcmF0b3BzIGZyb20gJy4uL2ltYWdlcy90cmljZXJhdG9wcy5wbmcnXHJcbmltcG9ydCB0eXJhbm5vc2F1cnVzX3JleCBmcm9tICcuLi9pbWFnZXMvdHlyYW5ub3NhdXJ1c19yZXgucG5nJ1xyXG5pbXBvcnQgJy4vYXBwLmpzJztcclxuaW1wb3J0ICcuL2FwcC5jc3MnO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9