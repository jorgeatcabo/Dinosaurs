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
const human = [..._dino_json__WEBPACK_IMPORTED_MODULE_0__.Humans]

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



//shuffleDinosObjects.foreach((dino) => {
//    console.log(dino.getImage())
//    //console.log(dino.getdiet())
//    //console.log(dino.getheight())

//})


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
    let fact = "";
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
        getFact: function () {
            return fact;
        },
        setImage: function (newValue) {
            image = newValue;
        },
    }

}

// Create Human Object
let humanObject = Human();

// Use IIFE to get human data from form
humanObject.setSpecies("Jorge");
humanObject.setWeight(130);
humanObject.setHeight(5, 8);
humanObject.setDiet("");
humanObject.setImage("human.png");

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array
shuffleDinosObjects.splice(4, 0, humanObject)

// On button click, prepare and display infographic
const submitBtn = document.getElementById("btn");

const submit = () => {

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
        
        h3.textContent = shuffleDinosObjects[i].getSpecies()
        img.src = `./images/${shuffleDinosObjects[i].getImage()}`
        p.textContent = shuffleDinosObjects[i].getFact()

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

module.exports = JSON.parse('{"Dinos":[{"species":"Triceratops","weight":13000,"height":114,"diet":"herbavor","where":"North America","when":"Late Cretaceous","fact":"First discovered in 1889 by Othniel Charles Marsh","image":"triceratops.png"},{"species":"Tyrannosaurus Rex","weight":11905,"height":144,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"The largest known skull measures in at 5 feet long.","image":"tyrannosaurus_rex.png"},{"species":"Anklyosaurus","weight":10500,"height":55,"diet":"herbavor","where":"North America","when":"Late Cretaceous","fact":"Anklyosaurus survived for approximately 135 million years.","image":"anklyosaurus.png"},{"species":"Brachiosaurus","weight":70000,"height":"372","diet":"herbavor","where":"North America","when":"Late Jurasic","fact":"An asteroid was named 9954 Brachiosaurus in 1991.","image":"brachiosaurus.png"},{"species":"Stegosaurus","weight":11600,"height":79,"diet":"herbavor","where":"North America, Europe, Asia","when":"Late Jurasic to Early Cretaceous","fact":"The Stegosaurus had between 17 and 22 seperate places and flat spines.","image":"stegosaurus.png"},{"species":"Elasmosaurus","weight":16000,"height":59,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"Elasmosaurus was a marine reptile first discovered in Kansas.","image":"elasmosaurus.png"},{"species":"Pteranodon","weight":44,"height":20,"diet":"carnivor","where":"North America","when":"Late Cretaceous","fact":"Actually a flying reptile, the Pteranodon is not a dinosaur.","image":"elasmosaurus.png"},{"species":"Pigeon","weight":0.5,"height":9,"diet":"herbavor","where":"World Wide","when":"Holocene","fact":"All birds are living dinosaurs.","image":"pigeon.png"}],"Humans":[{"species":"","name":"","height":{"feet":0,"inches":0},"weight":0,"diet":"","fact":"","image":"human.png"}]}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFEO0FBQ0U7QUFDRjtBQUNkO0FBQ0U7QUFDUTtBQUNFO0FBQ0E7QUFDWTtBQUM3QztBQUNDO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vc3JjL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Rpbm9zYXVycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Rpbm9zYXVycy8uL2ltYWdlcy9hbmtseW9zYXVydXMucG5nIiwid2VicGFjazovL2Rpbm9zYXVycy8uL2ltYWdlcy9icmFjaGlvc2F1cnVzLnBuZyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9pbWFnZXMvZWxhc21vc2F1cnVzLnBuZyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9pbWFnZXMvaHVtYW4ucG5nIiwid2VicGFjazovL2Rpbm9zYXVycy8uL2ltYWdlcy9waWdlb24ucG5nIiwid2VicGFjazovL2Rpbm9zYXVycy8uL2ltYWdlcy9wdGVyYW5vZG9uLnBuZyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9pbWFnZXMvc3RlZ29zYXVydXMucG5nIiwid2VicGFjazovL2Rpbm9zYXVycy8uL2ltYWdlcy90cmljZXJhdG9wcy5wbmciLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vaW1hZ2VzL3R5cmFubm9zYXVydXNfcmV4LnBuZyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9zcmMvYXBwLmNzcz9hNjcyIiwid2VicGFjazovL2Rpbm9zYXVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Rpbm9zYXVycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rpbm9zYXVycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGlub3NhdXJzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Rpbm9zYXVycy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kaW5vc2F1cnMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Rpbm9zYXVycy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3RyYWNrcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHZW5lcmFsIFN0eWxlcyAqL1xcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTExLCAyMDgsIDIyNCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLHJnYigxMTEsIDIwOCwgMjI0KSAwJSwgcmdiKDE3MSwgMjI4LCAxNjcpIDEwMCUpO1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0ZyaWpvbGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaDIsXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NTBweCkge1xcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDVlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTIwcHgpIHtcXG4gICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiA4ZW07XFxuICAgIH1cXG59XFxuXFxucCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi8qIEdyaWQgU3R5bGVzICovXFxuI2dyaWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDJlbTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ncmlkLWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCgxKXtcXG4gICAgYmFja2dyb3VuZDogIzAwOTY4N2Y1O1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCgyKXtcXG4gICAgYmFja2dyb3VuZDogI2RjNzY1N2Y1O1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCgzKXtcXG4gICAgYmFja2dyb3VuZDogIzRiYjNjMWZhO1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCg0KXtcXG4gICAgYmFja2dyb3VuZDogI2ZhYzA2OWY5O1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCg1KXtcXG4gICAgYmFja2dyb3VuZDogIzY3YTg2NmY5O1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCg2KXtcXG4gICAgYmFja2dyb3VuZDogI2I5NDE2OWZhO1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCg3KXtcXG4gICAgYmFja2dyb3VuZDogIzdmNjJiM2ZhO1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCg4KXtcXG4gICAgYmFja2dyb3VuZDogIzlmYzM3NmY5O1xcbn1cXG5cXG4uZ3JpZC1pdGVtOm50aC1jaGlsZCg5KXtcXG4gICAgYmFja2dyb3VuZDogIzY3N2JjYmZhO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcXG4gICAgI2dyaWQgZGl2IHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcXG4gICAgfVxcbn1cXG5cXG4uZ3JpZC1pdGVtIGgzIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGNvbG9yOiAjZWVlO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG59XFxuXFxuLmdyaWQtaXRlbSBwIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwMDAsMDAwLDAwMCwgLjMpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuOGVtIDAuOGVtIDEuOGVtO1xcbiAgICBtYXJnaW46MDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8qIEZvcm0gU3R5bGVzICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2VlZTtcXG4gICAgcGFkZGluZzogMS4zZW07XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5mb3JtIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDAuN2VtO1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5mb3JtLWZpZWxkX19zaG9ydCB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIG1hcmdpbi1yaWdodDogMyU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5mb3JtLWZpZWxkX19mdWxsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jYnRuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgICBwYWRkaW5nOiAwLjhlbTtcXG4gICAgbWFyZ2luOiAxLjJlbSBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuM3MgYWxsO1xcbn1cXG5cXG4jYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzc3NztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZpbmUtcHJpbnQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAwLjdlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FwcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsbUJBQW1CO0FBQ25CO0lBQ0ksOEJBQThCO0lBQzlCLGdGQUFnRjtJQUNoRixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLGtFQUFvRDtJQUNwRCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrRUFBa0U7SUFDbEUsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdlbmVyYWwgU3R5bGVzICovXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMTEsIDIwOCwgMjI0KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcscmdiKDExMSwgMjA4LCAyMjQpIDAlLCByZ2IoMTcxLCAyMjgsIDE2NykgMTAwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnRnJpam9sZScsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMixcXG5oMyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY1MHB4KSB7XFxuICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MjBweCkge1xcbiAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDhlbTtcXG4gICAgfVxcbn1cXG5cXG5wIHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLyogR3JpZCBTdHlsZXMgKi9cXG4jZ3JpZCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKC4uL2ltYWdlcy90cmFja3MucG5nKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdyaWQtaXRlbSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDEpe1xcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Njg3ZjU7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDIpe1xcbiAgICBiYWNrZ3JvdW5kOiAjZGM3NjU3ZjU7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDMpe1xcbiAgICBiYWNrZ3JvdW5kOiAjNGJiM2MxZmE7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDQpe1xcbiAgICBiYWNrZ3JvdW5kOiAjZmFjMDY5Zjk7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDUpe1xcbiAgICBiYWNrZ3JvdW5kOiAjNjdhODY2Zjk7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDYpe1xcbiAgICBiYWNrZ3JvdW5kOiAjYjk0MTY5ZmE7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDcpe1xcbiAgICBiYWNrZ3JvdW5kOiAjN2Y2MmIzZmE7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDgpe1xcbiAgICBiYWNrZ3JvdW5kOiAjOWZjMzc2Zjk7XFxufVxcblxcbi5ncmlkLWl0ZW06bnRoLWNoaWxkKDkpe1xcbiAgICBiYWNrZ3JvdW5kOiAjNjc3YmNiZmE7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcbiAgICAjZ3JpZCBkaXYge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xcbiAgICB9XFxufVxcblxcbi5ncmlkLWl0ZW0gaDMge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY29sb3I6ICNlZWU7XFxufVxcblxcbi5ncmlkLWl0ZW0gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uZ3JpZC1pdGVtIHAge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAwMCwwMDAsMDAwLCAuMyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC44ZW0gMC44ZW0gMS44ZW07XFxuICAgIG1hcmdpbjowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLyogRm9ybSBTdHlsZXMgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBwYWRkaW5nOiAxLjNlbTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmZvcm0gcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmlucHV0IHtcXG4gICAgcGFkZGluZzogMC43ZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLmZvcm0tZmllbGRfX3Nob3J0IHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmZvcm0tZmllbGRfX2Z1bGwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNidG4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6ICNjY2M7XFxuICAgIHBhZGRpbmc6IDAuOGVtO1xcbiAgICBtYXJnaW46IDEuMmVtIGF1dG87XFxuICAgIHRyYW5zaXRpb246IGVhc2UgMC4zcyBhbGw7XFxufVxcblxcbiNidG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZmluZS1wcmludCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDAuN2VtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Fua2x5b3NhdXJ1cy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2JyYWNoaW9zYXVydXMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9lbGFzbW9zYXVydXMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9odW1hbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3BpZ2Vvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3B0ZXJhbm9kb24ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9zdGVnb3NhdXJ1cy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3RyaWNlcmF0b3BzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdHlyYW5ub3NhdXJ1c19yZXgucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IERpbm9zIGZyb20gJy4vZGluby5qc29uJyBhc3NlcnQge3R5cGU6ICdqc29uJ307XHJcbmltcG9ydCBIdW1hbnMgZnJvbSAnLi9kaW5vLmpzb24nIGFzc2VydCB7dHlwZTogJ2pzb24nfTtcclxuXHJcbmNvbnN0IGRpbm9zID0gWy4uLkRpbm9zLkRpbm9zXVxyXG5jb25zdCBodW1hbiA9IFsuLi5EaW5vcy5IdW1hbnNdXHJcblxyXG4vLyBDcmVhdGUgRGlubyBDb25zdHJ1Y3RvclxyXG5jb25zdCBEaW5vID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCBzcGVjaWVzID0gXCJcIjtcclxuICAgIGxldCB3ZWlnaHQgPSAwO1xyXG4gICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICBsZXQgZGlldCA9IFwiXCI7XHJcbiAgICBsZXQgd2hlcmUgPSBcIlwiO1xyXG4gICAgbGV0IHdoZW4gPSBcIlwiO1xyXG4gICAgbGV0IGZhY3QgPSBcIlwiO1xyXG4gICAgbGV0IGltYWdlID0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFNwZWNpZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNwZWNpZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRXZWlnaHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdlaWdodDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEhlaWdodDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RGlldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlldDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFdoZXJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aGVyZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFdoZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdoZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRGYWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0SW1hZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0U3BlY2llczogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNwZWNpZXMgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFdlaWdodDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHdlaWdodCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SGVpZ2h0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXREaWV0OiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgZGlldCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0V2hlcmU6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB3aGVyZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0V2hlbjogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHdoZW4gPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEZhY3Q6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBmYWN0ID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJbWFnZTogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGltYWdlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbnZhciBkaW5vc09iamVjdHMgPSBbXVxyXG5cclxuLy8gQ3JlYXRlIERpbm8gT2JqZWN0c1xyXG5kaW5vcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblxyXG4gICAgbGV0IGRpbm8gPSBEaW5vKCk7XHJcbiAgICBkaW5vLnNldFNwZWNpZXMoZWxlbWVudC5zcGVjaWVzKTtcclxuICAgIGRpbm8uc2V0V2VpZ2h0KGVsZW1lbnQud2VpZ2h0KTtcclxuICAgIGRpbm8uc2V0SGVpZ2h0KGVsZW1lbnQuaGVpZ2h0KTtcclxuICAgIGRpbm8uc2V0RGlldChlbGVtZW50LmRpZXQpO1xyXG4gICAgZGluby5zZXRXaGVyZShlbGVtZW50LndoZXJlKTtcclxuICAgIGRpbm8uc2V0V2hlbihlbGVtZW50LndoZW4pO1xyXG4gICAgZGluby5zZXRGYWN0KGVsZW1lbnQuZmFjdCk7XHJcbiAgICBkaW5vLnNldEltYWdlKGVsZW1lbnQuaW1hZ2UpO1xyXG4gICAgZGlub3NPYmplY3RzLnB1c2goZGlubylcclxuXHJcbn0pXHJcblxyXG5cclxuXHJcbi8vTWV0aG9kIGZvciBzaHVmZmxpbmcgYXJyYXkgb2Ygb2JqZWN0c1xyXG5jb25zdCBzaHVmZmxlID0gKGFycmF5KSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XHJcblxyXG4gICAgICAgIC8vIFN3YXBcclxuICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xyXG4gICAgICAgIGFycmF5W2pdID0gdGVtcDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxufTtcclxuXHJcbmxldCBzaHVmZmxlRGlub3NPYmplY3RzID0gc2h1ZmZsZShkaW5vc09iamVjdHMpXHJcblxyXG5cclxuXHJcbi8vc2h1ZmZsZURpbm9zT2JqZWN0cy5mb3JlYWNoKChkaW5vKSA9PiB7XHJcbi8vICAgIGNvbnNvbGUubG9nKGRpbm8uZ2V0SW1hZ2UoKSlcclxuLy8gICAgLy9jb25zb2xlLmxvZyhkaW5vLmdldGRpZXQoKSlcclxuLy8gICAgLy9jb25zb2xlLmxvZyhkaW5vLmdldGhlaWdodCgpKVxyXG5cclxuLy99KVxyXG5cclxuXHJcbi8vSHVtYW4gY29uc3RydWN0b3JcclxuY29uc3QgSHVtYW4gPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHNwZWNpZXMgPSBcIlwiO1xyXG4gICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgbGV0IGhlaWdodCA9IHtcclxuICAgICAgICBmZWV0OiAwLFxyXG4gICAgICAgIGluY2hlczogMFxyXG4gICAgfTtcclxuICAgIGxldCB3ZWlnaHQgPSAwO1xyXG4gICAgbGV0IGRpZXQgPSBcIlwiO1xyXG4gICAgbGV0IGZhY3QgPSBcIlwiO1xyXG4gICAgbGV0IGltYWdlID0gXCJcIjtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFNwZWNpZXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNwZWNpZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXROYW1lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0V2VpZ2h0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3ZWlnaHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldERpZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpZXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRJbWFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRTcGVjaWVzOiBmdW5jdGlvbiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgc3BlY2llcyA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmFtZTogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFdlaWdodDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHdlaWdodCA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SGVpZ2h0OiBmdW5jdGlvbiAobmV3RmVldCxuZXdJbmNoZXMpIHtcclxuICAgICAgICAgICAgaGVpZ2h0LmZlZXQgPSBuZXdGZWV0O1xyXG4gICAgICAgICAgICBoZWlnaHQuaW5jaGVzID0gbmV3SW5jaGVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0RGlldDogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRpZXQgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEZhY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhY3Q7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJbWFnZTogZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGltYWdlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vIENyZWF0ZSBIdW1hbiBPYmplY3RcclxubGV0IGh1bWFuT2JqZWN0ID0gSHVtYW4oKTtcclxuXHJcbi8vIFVzZSBJSUZFIHRvIGdldCBodW1hbiBkYXRhIGZyb20gZm9ybVxyXG5odW1hbk9iamVjdC5zZXRTcGVjaWVzKFwiSm9yZ2VcIik7XHJcbmh1bWFuT2JqZWN0LnNldFdlaWdodCgxMzApO1xyXG5odW1hbk9iamVjdC5zZXRIZWlnaHQoNSwgOCk7XHJcbmh1bWFuT2JqZWN0LnNldERpZXQoXCJcIik7XHJcbmh1bWFuT2JqZWN0LnNldEltYWdlKFwiaHVtYW4ucG5nXCIpO1xyXG5cclxuLy8gQ3JlYXRlIERpbm8gQ29tcGFyZSBNZXRob2QgMVxyXG4vLyBOT1RFOiBXZWlnaHQgaW4gSlNPTiBmaWxlIGlzIGluIGxicywgaGVpZ2h0IGluIGluY2hlcy5cclxuXHJcblxyXG4vLyBDcmVhdGUgRGlubyBDb21wYXJlIE1ldGhvZCAyXHJcbi8vIE5PVEU6IFdlaWdodCBpbiBKU09OIGZpbGUgaXMgaW4gbGJzLCBoZWlnaHQgaW4gaW5jaGVzLlxyXG5cclxuXHJcbi8vIENyZWF0ZSBEaW5vIENvbXBhcmUgTWV0aG9kIDNcclxuLy8gTk9URTogV2VpZ2h0IGluIEpTT04gZmlsZSBpcyBpbiBsYnMsIGhlaWdodCBpbiBpbmNoZXMuXHJcblxyXG4vLyBHZW5lcmF0ZSBUaWxlcyBmb3IgZWFjaCBEaW5vIGluIEFycmF5XHJcbnNodWZmbGVEaW5vc09iamVjdHMuc3BsaWNlKDQsIDAsIGh1bWFuT2JqZWN0KVxyXG5cclxuLy8gT24gYnV0dG9uIGNsaWNrLCBwcmVwYXJlIGFuZCBkaXNwbGF5IGluZm9ncmFwaGljXHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuXCIpO1xyXG5cclxuY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xyXG5cclxuICAgIHZhciBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkXCIpO1xyXG5cclxuIC8vIEFkZCB0aWxlcyB0byBET01cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNodWZmbGVEaW5vc09iamVjdHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gc2h1ZmZsZURpbm9zT2JqZWN0c1tpXS5nZXRTcGVjaWVzKClcclxuICAgICAgICBpbWcuc3JjID0gYC4vaW1hZ2VzLyR7c2h1ZmZsZURpbm9zT2JqZWN0c1tpXS5nZXRJbWFnZSgpfWBcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gc2h1ZmZsZURpbm9zT2JqZWN0c1tpXS5nZXRGYWN0KClcclxuXHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJncmlkLWl0ZW1cIik7XHJcbiAgICB9XHJcblxyXG4gLy8gUmVtb3ZlIGZvcm0gZnJvbSBzY3JlZW5cclxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaW5vLWNvbXBhcmVcIik7XHJcbiAgICBpZiAoeC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIHguc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbnN1Ym1pdEJ0bi5vbmNsaWNrID0gc3VibWl0O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhbmtseW9zYXVydXMgZnJvbSAnLi4vaW1hZ2VzL2Fua2x5b3NhdXJ1cy5wbmcnXHJcbmltcG9ydCBicmFjaGlvc2F1cnVzIGZyb20gJy4uL2ltYWdlcy9icmFjaGlvc2F1cnVzLnBuZydcclxuaW1wb3J0IGVsYXNtb3NhdXJ1cyBmcm9tICcuLi9pbWFnZXMvZWxhc21vc2F1cnVzLnBuZydcclxuaW1wb3J0IGh1bWFuIGZyb20gJy4uL2ltYWdlcy9odW1hbi5wbmcnXHJcbmltcG9ydCBwaWdlb24gZnJvbSAnLi4vaW1hZ2VzL3BpZ2Vvbi5wbmcnXHJcbmltcG9ydCBwdGVyYW5vZG9uIGZyb20gJy4uL2ltYWdlcy9wdGVyYW5vZG9uLnBuZydcclxuaW1wb3J0IHN0ZWdvc2F1cnVzIGZyb20gJy4uL2ltYWdlcy9zdGVnb3NhdXJ1cy5wbmcnXHJcbmltcG9ydCB0cmljZXJhdG9wcyBmcm9tICcuLi9pbWFnZXMvdHJpY2VyYXRvcHMucG5nJ1xyXG5pbXBvcnQgdHlyYW5ub3NhdXJ1c19yZXggZnJvbSAnLi4vaW1hZ2VzL3R5cmFubm9zYXVydXNfcmV4LnBuZydcclxuaW1wb3J0ICcuL2FwcC5qcyc7XHJcbmltcG9ydCAnLi9hcHAuY3NzJztcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==