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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/products/products.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/products/products.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../product-images/logo.webp */ \"./src/product-images/logo.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n* :root {\\n  --trans: all 0.5s ease-in-out;\\n}\\n\\nbody {\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, Oxygen, Ubuntu, Cantarell, \\\"Open Sans\\\", \\\"Helvetica Neue\\\", sans-serif;\\n  font-weight: 400;\\n  line-height: 1.75;\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-size: 14px;\\n}\\nbody .header {\\n  margin: 0 auto;\\n  position: sticky;\\n  top: 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  z-index: 1;\\n  flex-direction: column;\\n  min-height: 150px;\\n}\\nbody .header .navbar {\\n  min-height: 140px;\\n  background-color: rgba(19, 17, 17, 0.8);\\n  position: fixed;\\n  top: 0;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  -ms-transform: translateX(-50%);\\n  width: 100%;\\n  align-items: center;\\n  display: flex;\\n  justify-content: space-between;\\n  z-index: 1;\\n  padding: 0 60px;\\n  height: 70px;\\n}\\nbody .header .navbar .header-icon {\\n  display: flex;\\n  gap: 40px;\\n}\\nbody .header .navbar .header-icon a {\\n  text-decoration: none;\\n  color: #ffffff;\\n  font-size: 18px;\\n  font-weight: 300;\\n  position: relative;\\n  padding-bottom: 5px;\\n  transition: color 0.3s ease;\\n}\\nbody .header .navbar .header-icon a::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  bottom: 0;\\n  left: 0;\\n  width: 0;\\n  height: 2px;\\n  background-color: #f39c12;\\n  transition: width 0.3s ease;\\n}\\nbody .header .navbar .header-icon a:hover, body .header .navbar .header-icon a:focus {\\n  color: #f39c12;\\n}\\nbody .header .navbar .header-icon a:hover::after, body .header .navbar .header-icon a:focus::after {\\n  width: 100%;\\n}\\nbody .header .navbar .btn-header-logo {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  width: 65px;\\n  height: 65px;\\n}\\nbody .header .navbar .btn-header-logo .btn-logo {\\n  position: relative;\\n  width: 65px;\\n  height: 65px;\\n  cursor: pointer;\\n}\\nbody .header .navbar .btn-header-logo .btn-logo .logo {\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-position: center;\\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\\n}\\nbody .header .navbar .btn-header-logo .btn-logo .logo:hover {\\n  transform: scale(1.1);\\n}\\nbody .header .navbar .header-contact a {\\n  text-decoration: none;\\n  color: #ffffff;\\n  font-size: 18px;\\n  font-weight: 300;\\n  transition: color 0.3s ease;\\n}\\nbody .header .navbar .header-contact a:hover, body .header .navbar .header-contact a:focus {\\n  color: #f39c12;\\n  border-bottom: 2px solid #f39c12;\\n}\\nbody .header .navbar #line {\\n  position: fixed;\\n  left: 0;\\n  top: 143px;\\n  width: 0;\\n  height: 2px;\\n  background-color: #f39c12;\\n}\\nbody .filters-container {\\n  margin: 0 auto;\\n  margin-top: 50px;\\n  padding: 20px;\\n  max-width: 1120px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 1rem;\\n}\\nbody .filters-container .search-box {\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n}\\nbody .filters-container .search-box .search-txt {\\n  padding: 0 10px;\\n  height: 40px;\\n  width: 300px;\\n  border-top: 1px solid #ddd;\\n  border-radius: 1px;\\n  font-size: 1rem;\\n}\\nbody .filters-container .search-box .material-icons {\\n  position: absolute;\\n  right: 10px;\\n  font-size: 1.5rem;\\n  color: #888;\\n  cursor: pointer;\\n  transition: color 0.3s ease;\\n}\\nbody .filters-container .search-box .material-icons:hover {\\n  color: #000;\\n}\\nbody .filters-container .companies {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 10px;\\n}\\nbody .filters-container .companies .company-btn {\\n  background: none;\\n  border: none;\\n  text-transform: capitalize;\\n  color: #333;\\n  font-size: 1rem;\\n  padding: 5px 10px;\\n  border-radius: 4px;\\n  transition: var(--trans);\\n  cursor: pointer;\\n}\\nbody .filters-container .companies .company-btn:hover {\\n  background-color: #0e0d0d;\\n  color: #fff;\\n}\\nbody .products-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\\n  gap: 1rem;\\n  padding: 2rem;\\n  max-width: 1120px;\\n  margin: 0 auto;\\n}\\nbody .products-container .product {\\n  background: #fff;\\n  overflow: hidden;\\n  transition: var(--trans);\\n}\\nbody .products-container .product .img-container {\\n  overflow: hidden;\\n  height: 20rem;\\n}\\nbody .products-container .product .img-container img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  transition: var(--trans);\\n}\\nbody .products-container .product .img-container img:hover {\\n  transform: scale(1.05);\\n}\\nbody .products-container .product .product-footer {\\n  text-align: center;\\n  padding: 1rem;\\n}\\nbody .products-container .product .product-footer .product-name {\\n  text-transform: capitalize;\\n  font-size: 1rem;\\n  margin-bottom: 0.5rem;\\n}\\nbody .products-container .product .product-footer .product-price {\\n  font-size: 1rem;\\n  font-weight: bold;\\n  color: #0e0d0d;\\n}\\n\\n@media screen and (max-width: 768px) {\\n  .filters-container {\\n    flex-direction: column;\\n    gap: 1rem;\\n  }\\n  .companies {\\n    justify-content: center;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task-2.7/./src/pages/products/products.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://task-2.7/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://task-2.7/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://task-2.7/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/pages/products/products.css":
/*!*****************************************!*\
  !*** ./src/pages/products/products.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./products.css */ \"./node_modules/css-loader/dist/cjs.js!./src/pages/products/products.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\n;\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"] && _node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_products_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://task-2.7/./src/pages/products/products.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://task-2.7/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://task-2.7/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://task-2.7/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://task-2.7/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js":
/*!************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join(\"\\n\");\n  };\n}();\n\n/* istanbul ignore next  */\nfunction apply(styleElement, index, remove, obj) {\n  var css;\n  if (remove) {\n    css = \"\";\n  } else {\n    css = \"\";\n    if (obj.supports) {\n      css += \"@supports (\".concat(obj.supports, \") {\");\n    }\n    if (obj.media) {\n      css += \"@media \".concat(obj.media, \" {\");\n    }\n    var needLayer = typeof obj.layer !== \"undefined\";\n    if (needLayer) {\n      css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n    }\n    css += obj.css;\n    if (needLayer) {\n      css += \"}\";\n    }\n    if (obj.media) {\n      css += \"}\";\n    }\n    if (obj.supports) {\n      css += \"}\";\n    }\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = styleElement.childNodes;\n    if (childNodes[index]) {\n      styleElement.removeChild(childNodes[index]);\n    }\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index]);\n    } else {\n      styleElement.appendChild(cssNode);\n    }\n  }\n}\nvar singletonData = {\n  singleton: null,\n  singletonCounter: 0\n};\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") return {\n    update: function update() {},\n    remove: function remove() {}\n  };\n\n  // eslint-disable-next-line no-undef,no-use-before-define\n  var styleIndex = singletonData.singletonCounter++;\n  var styleElement =\n  // eslint-disable-next-line no-undef,no-use-before-define\n  singletonData.singleton || (\n  // eslint-disable-next-line no-undef,no-use-before-define\n  singletonData.singleton = options.insertStyleElement(options));\n  return {\n    update: function update(obj) {\n      apply(styleElement, styleIndex, false, obj);\n    },\n    remove: function remove(obj) {\n      apply(styleElement, styleIndex, true, obj);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://task-2.7/./node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js?");

/***/ }),

/***/ "./src/lego/filter.ts":
/*!****************************!*\
  !*** ./src/lego/filter.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Filter = void 0;\nvar Filter = /** @class */ (function () {\n    function Filter(productList) {\n        this.productList = productList;\n        this.products = [];\n        this.searchWord = \"\";\n        this.company = \"\";\n        this.initFilter();\n    }\n    Filter.prototype.setSearchWord = function (word) {\n        this.searchWord = word.trim().toLowerCase();\n    };\n    Filter.prototype.setCompany = function (company) {\n        this.company = company;\n    };\n    Filter.prototype.filterProducts = function () {\n        var _this = this;\n        return this.products.filter(function (product) {\n            return (product.title.indexOf(_this.searchWord) !== -1 && (_this.company ? product.company === _this.company : true) && product.price);\n        });\n    };\n    Filter.prototype.getFilteredProducts = function () {\n        return this.filterProducts();\n    };\n    Filter.prototype.filterRenderProducts = function (filteredProducts) {\n        this.productList.renderList(filteredProducts);\n    };\n    Filter.prototype.upgradeProducts = function () {\n        if (this.products) {\n            var filteredProducts = this.getFilteredProducts();\n            this.filterRenderProducts(filteredProducts);\n        }\n    };\n    Filter.prototype.filterByColorWine = function (color) {\n        this.setCompany(color);\n        this.upgradeProducts();\n    };\n    Filter.prototype.filterByPriceWine = function () {\n        this.upgradeProducts();\n    };\n    Filter.prototype.filterBySearchWine = function (searchWord) {\n        this.setSearchWord(searchWord);\n        this.upgradeProducts();\n    };\n    Filter.prototype.resetFiltersWine = function () {\n        var slider = document.querySelector(\".slider\");\n        if (slider) {\n            slider.value = \"100\";\n        }\n        this.setSearchWord(\"\");\n        this.setCompany(\"\");\n        this.upgradeProducts();\n        var rangeLabel = document.getElementById(\"range-label\");\n        if (rangeLabel) {\n            rangeLabel.innerText = \"100$\";\n        }\n    };\n    Filter.prototype.addEventListeners = function () {\n        var _this = this;\n        var redButton = document.getElementById(\"red\");\n        var whiteButton = document.getElementById(\"white\");\n        var roseButton = document.getElementById(\"rose\");\n        var sparklingButton = document.getElementById(\"sparkling\");\n        var allButton = document.getElementById(\"all\");\n        var searchInput = document.querySelector(\".search-txt\");\n        var reset = document.querySelector(\"#reset\");\n        redButton === null || redButton === void 0 ? void 0 : redButton.addEventListener(\"click\", function () {\n            _this.filterByColorWine('red');\n        });\n        whiteButton === null || whiteButton === void 0 ? void 0 : whiteButton.addEventListener(\"click\", function () {\n            _this.filterByColorWine('white');\n        });\n        roseButton === null || roseButton === void 0 ? void 0 : roseButton.addEventListener(\"click\", function () {\n            _this.filterByColorWine('rose');\n        });\n        sparklingButton === null || sparklingButton === void 0 ? void 0 : sparklingButton.addEventListener(\"click\", function () {\n            _this.filterByColorWine('sparkling');\n        });\n        allButton === null || allButton === void 0 ? void 0 : allButton.addEventListener(\"click\", function () {\n            _this.filterByColorWine('');\n        });\n        if (searchInput) {\n            searchInput.addEventListener(\"keyup\", function (e) {\n                var searchWord = e.target.value;\n                _this.filterBySearchWine(searchWord);\n            });\n        }\n        reset === null || reset === void 0 ? void 0 : reset.addEventListener(\"click\", function () {\n            _this.setSearchWord('');\n            _this.setCompany('');\n            _this.resetFiltersWine();\n        });\n    };\n    Filter.prototype.initFilter = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var products;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.productList.fetchProducts()];\n                    case 1:\n                        _a.sent();\n                        return [4 /*yield*/, this.productList.getProducts()];\n                    case 2:\n                        products = _a.sent();\n                        this.products = products;\n                        this.addEventListeners();\n                        this.productList.renderList(products);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return Filter;\n}());\nexports.Filter = Filter;\n\n\n//# sourceURL=webpack://task-2.7/./src/lego/filter.ts?");

/***/ }),

/***/ "./src/lego/product.ts":
/*!*****************************!*\
  !*** ./src/lego/product.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.newProduct = exports.NewProduct = exports.ProductList = exports.productDOM = void 0;\nexports.productDOM = document.querySelector(\".products-container\");\nvar ProductList = /** @class */ (function () {\n    function ProductList(productDOM) {\n        this.productDOM = productDOM;\n    }\n    ProductList.prototype.getProducts = function () {\n        var productsData = localStorage.getItem(\"products\");\n        return productsData ? JSON.parse(productsData) : [];\n    };\n    ProductList.prototype.fetchProducts = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var response, data, cart;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, fetch(\"/products.json\")];\n                    case 1:\n                        response = _a.sent();\n                        return [4 /*yield*/, response.json()];\n                    case 2:\n                        data = _a.sent();\n                        cart = localStorage.getItem(\"cart\") || \"[]\";\n                        localStorage.setItem(\"products\", JSON.stringify(data));\n                        if (!cart) {\n                            localStorage.setItem(\"cart\", \"[]\");\n                        }\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    ProductList.prototype.renderList = function (items) {\n        var productDOM = document.querySelector(\".products-container\");\n        if (productDOM) {\n            productDOM.innerHTML = \"\";\n            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {\n                var product = items_1[_i];\n                var element = document.createElement('article');\n                element.classList.add('product');\n                element.innerHTML = \"\\n                <div class=\\\"img-container\\\">\\n                    <img src=\\\"\".concat(product.image, \"\\\" class=\\\"product-img\\\" alt=\\\"\\\" />\\n                </div>\\n                <div class=\\\"product-footer\\\">\\n                    <h5 class=\\\"product-name\\\">\").concat(product.title, \"</h5>\\n                    <span class=\\\"company-btn\\\">\").concat(product.company, \"</span>\\n                     <span class=\\\"product-price\\\">\\u00A3\").concat(product.price, \"</span>\\n                </div>\");\n                if (productDOM) {\n                    productDOM.appendChild(element);\n                }\n            }\n        }\n    };\n    return ProductList;\n}());\nexports.ProductList = ProductList;\nvar NewProduct = /** @class */ (function () {\n    function NewProduct(productDOM) {\n        this.productList = new ProductList(productDOM);\n    }\n    return NewProduct;\n}());\nexports.NewProduct = NewProduct;\nexports.newProduct = new NewProduct(exports.productDOM);\n\n\n//# sourceURL=webpack://task-2.7/./src/lego/product.ts?");

/***/ }),

/***/ "./src/pages/products/products.ts":
/*!****************************************!*\
  !*** ./src/pages/products/products.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.mainController = exports.MainController = void 0;\n__webpack_require__(/*! ./products.css */ \"./src/pages/products/products.css\");\nvar filter_1 = __webpack_require__(/*! ../../lego/filter */ \"./src/lego/filter.ts\");\nvar product_1 = __webpack_require__(/*! ../../lego/product */ \"./src/lego/product.ts\");\nvar MainController = /** @class */ (function () {\n    function MainController(productDOM) {\n        var _this = this;\n        this.updateView = function () { return __awaiter(_this, void 0, void 0, function () {\n            var filteredProducts;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.productList.fetchProducts()];\n                    case 1:\n                        _a.sent();\n                        filteredProducts = this.filter.getFilteredProducts();\n                        this.filter.filterRenderProducts(filteredProducts);\n                        this.progressBar();\n                        return [2 /*return*/];\n                }\n            });\n        }); };\n        this.productDOM = document.querySelector(\".products-container\");\n        this.productList = new product_1.ProductList(this.productDOM);\n        this.filter = new filter_1.Filter(this.productList);\n        this.line = document.getElementById('line');\n        this.updateView();\n        window.addEventListener('scroll', this.progressBar);\n    }\n    MainController.prototype.progressBar = function () {\n        var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;\n        var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;\n        var width_progress_line = (windowScroll / windowHeight) * 100;\n        this.line.style.width = width_progress_line + '%';\n    };\n    return MainController;\n}());\nexports.MainController = MainController;\nexports.mainController = new MainController(product_1.productDOM);\n\n\n//# sourceURL=webpack://task-2.7/./src/pages/products/products.ts?");

/***/ }),

/***/ "./src/product-images/logo.webp":
/*!**************************************!*\
  !*** ./src/product-images/logo.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f55644813a1c825b3afd.webp\";\n\n//# sourceURL=webpack://task-2.7/./src/product-images/logo.webp?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 		__webpack_require__.p = "/";
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
/******/ 			"products": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/products/products.ts");
/******/ 	
/******/ })()
;