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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#score {\n    position: relative;\n    width: 300px;\n    font-size: 20px;\n    padding: 5px 0;\n}\n\n.container {\n    position: relative;\n    width: 300px;\n    height: 300px;\n}\n\n.controller-container {\n    position: relative;\n    width: 300px;\n    height: 90px;\n}\n\n#left {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 150px;\n    height: 90px;\n    background-color: #cc0;\n}\n\n#right {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 150px;\n    height: 90px;\n    background-color: #0cc;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://snake-game/./src/style.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://snake-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://snake-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://snake-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://snake-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ts/controller.ts":
/*!******************************!*\
  !*** ./src/ts/controller.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Controller_view, _Controller_model, _Controller_leftButton, _Controller_rightButton;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Controller {\n    constructor(view, model) {\n        _Controller_view.set(this, void 0);\n        _Controller_model.set(this, void 0);\n        _Controller_leftButton.set(this, void 0);\n        _Controller_rightButton.set(this, void 0);\n        __classPrivateFieldSet(this, _Controller_view, view, \"f\");\n        __classPrivateFieldSet(this, _Controller_model, model, \"f\");\n        __classPrivateFieldSet(this, _Controller_leftButton, document.getElementById('left'), \"f\");\n        __classPrivateFieldSet(this, _Controller_rightButton, document.getElementById('right'), \"f\");\n        __classPrivateFieldGet(this, _Controller_leftButton, \"f\").addEventListener('pointerdown', this.turnLeft.bind(this));\n        __classPrivateFieldGet(this, _Controller_rightButton, \"f\").addEventListener('pointerdown', this.turnRight.bind(this));\n        __classPrivateFieldGet(this, _Controller_leftButton, \"f\").addEventListener('pointerup', this.stopTurn.bind(this));\n        __classPrivateFieldGet(this, _Controller_rightButton, \"f\").addEventListener('pointerup', this.stopTurn.bind(this));\n    }\n    turnLeft(e) {\n        e.preventDefault();\n        __classPrivateFieldGet(this, _Controller_model, \"f\").turnAngle = -5;\n    }\n    turnRight(e) {\n        e.preventDefault();\n        __classPrivateFieldGet(this, _Controller_model, \"f\").turnAngle = 5;\n    }\n    stopTurn(e) {\n        e.preventDefault();\n        __classPrivateFieldGet(this, _Controller_model, \"f\").turnAngle = 0;\n    }\n    reset() {\n        __classPrivateFieldGet(this, _Controller_leftButton, \"f\").removeEventListener('pointerdown', this.turnLeft.bind(this));\n        __classPrivateFieldGet(this, _Controller_rightButton, \"f\").removeEventListener('pointerdown', this.turnRight.bind(this));\n        __classPrivateFieldGet(this, _Controller_leftButton, \"f\").removeEventListener('pointerup', this.stopTurn.bind(this));\n        __classPrivateFieldGet(this, _Controller_rightButton, \"f\").removeEventListener('pointerup', this.stopTurn.bind(this));\n    }\n}\n_Controller_view = new WeakMap(), _Controller_model = new WeakMap(), _Controller_leftButton = new WeakMap(), _Controller_rightButton = new WeakMap();\nexports[\"default\"] = Controller;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/controller.ts?");

/***/ }),

/***/ "./src/ts/food.ts":
/*!************************!*\
  !*** ./src/ts/food.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Food {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n}\nexports[\"default\"] = Food;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/food.ts?");

/***/ }),

/***/ "./src/ts/game.ts":
/*!************************!*\
  !*** ./src/ts/game.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _Game_view, _Game_model;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst controller_1 = __importDefault(__webpack_require__(/*! ./controller */ \"./src/ts/controller.ts\"));\nconst model_1 = __importDefault(__webpack_require__(/*! ./model */ \"./src/ts/model.ts\"));\nconst score_1 = __importDefault(__webpack_require__(/*! ./score */ \"./src/ts/score.ts\"));\nconst view_1 = __importDefault(__webpack_require__(/*! ./view */ \"./src/ts/view.ts\"));\nclass Game {\n    constructor() {\n        _Game_view.set(this, void 0);\n        _Game_model.set(this, void 0);\n        __classPrivateFieldSet(this, _Game_model, new model_1.default(), \"f\");\n        __classPrivateFieldSet(this, _Game_view, new view_1.default(__classPrivateFieldGet(this, _Game_model, \"f\")), \"f\");\n        __classPrivateFieldGet(this, _Game_view, \"f\").render();\n    }\n    step() {\n        __classPrivateFieldGet(this, _Game_model, \"f\").update(__classPrivateFieldGet(this, _Game_view, \"f\").ctx);\n        __classPrivateFieldGet(this, _Game_view, \"f\").render();\n    }\n    start() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const controller = new controller_1.default(__classPrivateFieldGet(this, _Game_view, \"f\"), __classPrivateFieldGet(this, _Game_model, \"f\"));\n            score_1.default.init();\n            while (!__classPrivateFieldGet(this, _Game_model, \"f\").gameOver) {\n                yield new Promise((resolve) => setTimeout(resolve, 10));\n                this.step();\n            }\n            controller.reset();\n        });\n    }\n}\n_Game_view = new WeakMap(), _Game_model = new WeakMap();\nexports[\"default\"] = Game;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/game.ts?");

/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ../style.css */ \"./src/style.css\");\nconst game_1 = __importDefault(__webpack_require__(/*! ./game */ \"./src/ts/game.ts\"));\nconst size = 300;\nclass Main {\n    constructor() {\n        const game = new game_1.default();\n        game.start();\n    }\n}\nnew Main();\n// const init = () => {\n//     const canvas = document.getElementById('canvas') as HTMLCanvasElement;\n//     const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;\n//     ctx.fillStyle = '#f00';\n//     ctx.fillRect(0, 0, size, size);\n// };\n// window.onload = () => {\n//     init();\n// };\n\n\n//# sourceURL=webpack://snake-game/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/judger.ts":
/*!**************************!*\
  !*** ./src/ts/judger.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst snake_1 = __importDefault(__webpack_require__(/*! ./snake */ \"./src/ts/snake.ts\"));\nconst stage_1 = __importDefault(__webpack_require__(/*! ./stage */ \"./src/ts/stage.ts\"));\nclass Judger {\n    static checkCollisionWall(snake) {\n        return (snake.mx < snake_1.default.halfWidth ||\n            snake.mx >= stage_1.default.Size - snake_1.default.halfWidth ||\n            snake.my < snake_1.default.halfWidth ||\n            snake.my >= stage_1.default.Size - snake_1.default.halfWidth);\n    }\n    static checkCollisionSelf(snake, ctx) {\n        const tx = snake.mx + Math.cos((snake.angle * Math.PI) / 180) * (snake_1.default.halfWidth + 2);\n        const ty = snake.my + Math.sin((snake.angle * Math.PI) / 180) * (snake_1.default.halfWidth + 2);\n        const data = ctx.getImageData(0, 0, stage_1.default.Size, stage_1.default.Size).data;\n        const index = (Math.trunc(ty) * stage_1.default.Size + Math.trunc(tx)) * 4;\n        return data[index] !== 0 || data[index + 1] !== 0 || data[index + 2] !== 0;\n    }\n    static checkCollisionFood(snake, food) {\n        return (snake.mx - food.x) ** 2 + (snake.my - food.y) ** 2 <= ((snake_1.default.halfWidth + 2) * 2) ** 2;\n    }\n}\nexports[\"default\"] = Judger;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/judger.ts?");

/***/ }),

/***/ "./src/ts/model.ts":
/*!*************************!*\
  !*** ./src/ts/model.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _Model_snake, _Model_stage, _Model_food, _Model_gameOver, _Model_turnAngle;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst food_1 = __importDefault(__webpack_require__(/*! ./food */ \"./src/ts/food.ts\"));\nconst judger_1 = __importDefault(__webpack_require__(/*! ./judger */ \"./src/ts/judger.ts\"));\nconst score_1 = __importDefault(__webpack_require__(/*! ./score */ \"./src/ts/score.ts\"));\nconst snake_1 = __importDefault(__webpack_require__(/*! ./snake */ \"./src/ts/snake.ts\"));\nconst stage_1 = __importDefault(__webpack_require__(/*! ./stage */ \"./src/ts/stage.ts\"));\nclass Model {\n    constructor() {\n        _Model_snake.set(this, void 0);\n        _Model_stage.set(this, void 0);\n        _Model_food.set(this, null);\n        _Model_gameOver.set(this, false);\n        _Model_turnAngle.set(this, 0);\n        __classPrivateFieldSet(this, _Model_snake, new snake_1.default(), \"f\");\n        __classPrivateFieldSet(this, _Model_stage, new stage_1.default(), \"f\");\n        __classPrivateFieldSet(this, _Model_food, this.createFood(), \"f\");\n    }\n    update(ctx) {\n        __classPrivateFieldGet(this, _Model_snake, \"f\").turn(__classPrivateFieldGet(this, _Model_turnAngle, \"f\"));\n        __classPrivateFieldGet(this, _Model_snake, \"f\").move();\n        if (__classPrivateFieldGet(this, _Model_food, \"f\") && judger_1.default.checkCollisionFood(__classPrivateFieldGet(this, _Model_snake, \"f\"), __classPrivateFieldGet(this, _Model_food, \"f\"))) {\n            __classPrivateFieldSet(this, _Model_food, this.createFood(), \"f\");\n            __classPrivateFieldGet(this, _Model_snake, \"f\").grow();\n            score_1.default.addScore();\n            return;\n        }\n        if (judger_1.default.checkCollisionWall(__classPrivateFieldGet(this, _Model_snake, \"f\")) || judger_1.default.checkCollisionSelf(__classPrivateFieldGet(this, _Model_snake, \"f\"), ctx)) {\n            __classPrivateFieldSet(this, _Model_gameOver, true, \"f\");\n        }\n    }\n    createFood() {\n        const x = Math.random() * (stage_1.default.Size - 2 * snake_1.default.halfWidth) + snake_1.default.halfWidth;\n        const y = Math.random() * (stage_1.default.Size - 2 * snake_1.default.halfWidth) + snake_1.default.halfWidth;\n        return new food_1.default(x, y);\n    }\n    set turnAngle(turnAngle) {\n        __classPrivateFieldSet(this, _Model_turnAngle, turnAngle, \"f\");\n    }\n    get snake() {\n        return __classPrivateFieldGet(this, _Model_snake, \"f\");\n    }\n    get stage() {\n        return __classPrivateFieldGet(this, _Model_stage, \"f\");\n    }\n    get food() {\n        return __classPrivateFieldGet(this, _Model_food, \"f\");\n    }\n    get gameOver() {\n        return __classPrivateFieldGet(this, _Model_gameOver, \"f\");\n    }\n}\n_Model_snake = new WeakMap(), _Model_stage = new WeakMap(), _Model_food = new WeakMap(), _Model_gameOver = new WeakMap(), _Model_turnAngle = new WeakMap();\nexports[\"default\"] = Model;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/model.ts?");

/***/ }),

/***/ "./src/ts/score.ts":
/*!*************************!*\
  !*** ./src/ts/score.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _a, _Score_score, _Score_element;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Score {\n    static init() {\n        __classPrivateFieldSet(this, _a, 0, \"f\", _Score_score);\n        __classPrivateFieldSet(this, _a, document.getElementById('score'), \"f\", _Score_element);\n        __classPrivateFieldGet(this, _a, \"f\", _Score_element).innerHTML = `Score: ${__classPrivateFieldGet(this, _a, \"f\", _Score_score).toString()}`;\n    }\n    static addScore() {\n        __classPrivateFieldSet(this, _a, __classPrivateFieldGet(this, _a, \"f\", _Score_score) + 10, \"f\", _Score_score);\n        __classPrivateFieldGet(this, _a, \"f\", _Score_element).innerText = `Score: ${__classPrivateFieldGet(this, _a, \"f\", _Score_score).toString()}`;\n    }\n}\n_a = Score;\n_Score_score = { value: 0 };\n_Score_element = { value: void 0 };\nexports[\"default\"] = Score;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/score.ts?");

/***/ }),

/***/ "./src/ts/snake.ts":
/*!*************************!*\
  !*** ./src/ts/snake.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _Snake_positionList, _Snake_mx, _Snake_my, _Snake_speed, _Snake_angle;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst stage_1 = __importDefault(__webpack_require__(/*! ./stage */ \"./src/ts/stage.ts\"));\nclass Snake {\n    constructor() {\n        _Snake_positionList.set(this, []);\n        _Snake_mx.set(this, stage_1.default.Size / 2);\n        _Snake_my.set(this, (stage_1.default.Size * 4) / 5);\n        _Snake_speed.set(this, 1);\n        _Snake_angle.set(this, -90);\n        for (let i = 0; i < Snake.initialLength; i++) {\n            __classPrivateFieldGet(this, _Snake_positionList, \"f\").push([__classPrivateFieldGet(this, _Snake_mx, \"f\"), __classPrivateFieldGet(this, _Snake_my, \"f\")]);\n        }\n    }\n    turn(turnAngle) {\n        __classPrivateFieldSet(this, _Snake_angle, __classPrivateFieldGet(this, _Snake_angle, \"f\") + turnAngle, \"f\");\n    }\n    move() {\n        __classPrivateFieldSet(this, _Snake_mx, __classPrivateFieldGet(this, _Snake_mx, \"f\") + __classPrivateFieldGet(this, _Snake_speed, \"f\") * Math.cos((__classPrivateFieldGet(this, _Snake_angle, \"f\") * Math.PI) / 180), \"f\");\n        __classPrivateFieldSet(this, _Snake_my, __classPrivateFieldGet(this, _Snake_my, \"f\") + __classPrivateFieldGet(this, _Snake_speed, \"f\") * Math.sin((__classPrivateFieldGet(this, _Snake_angle, \"f\") * Math.PI) / 180), \"f\");\n        __classPrivateFieldGet(this, _Snake_positionList, \"f\").push([__classPrivateFieldGet(this, _Snake_mx, \"f\"), __classPrivateFieldGet(this, _Snake_my, \"f\")]);\n        __classPrivateFieldGet(this, _Snake_positionList, \"f\").shift();\n    }\n    grow() {\n        const tailPosition = __classPrivateFieldGet(this, _Snake_positionList, \"f\")[0];\n        for (let i = 0; i < 30; i++) {\n            __classPrivateFieldGet(this, _Snake_positionList, \"f\").unshift(tailPosition);\n        }\n    }\n    get positionList() {\n        return __classPrivateFieldGet(this, _Snake_positionList, \"f\");\n    }\n    get angle() {\n        return __classPrivateFieldGet(this, _Snake_angle, \"f\");\n    }\n    get mx() {\n        return __classPrivateFieldGet(this, _Snake_mx, \"f\");\n    }\n    get my() {\n        return __classPrivateFieldGet(this, _Snake_my, \"f\");\n    }\n}\n_Snake_positionList = new WeakMap(), _Snake_mx = new WeakMap(), _Snake_my = new WeakMap(), _Snake_speed = new WeakMap(), _Snake_angle = new WeakMap();\nSnake.initialLength = 150;\nSnake.halfWidth = 8;\nexports[\"default\"] = Snake;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/snake.ts?");

/***/ }),

/***/ "./src/ts/stage.ts":
/*!*************************!*\
  !*** ./src/ts/stage.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass Stage {\n}\nStage.Size = 300;\nexports[\"default\"] = Stage;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/stage.ts?");

/***/ }),

/***/ "./src/ts/view.ts":
/*!************************!*\
  !*** ./src/ts/view.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _View_model, _View_ctx;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst snake_1 = __importDefault(__webpack_require__(/*! ./snake */ \"./src/ts/snake.ts\"));\nconst stage_1 = __importDefault(__webpack_require__(/*! ./stage */ \"./src/ts/stage.ts\"));\nclass View {\n    constructor(model) {\n        _View_model.set(this, void 0);\n        _View_ctx.set(this, void 0);\n        __classPrivateFieldSet(this, _View_model, model, \"f\");\n        const canvas = document.getElementById('canvas');\n        __classPrivateFieldSet(this, _View_ctx, canvas.getContext('2d'), \"f\");\n    }\n    renderStage() {\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fillStyle = '#000';\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fillRect(0, 0, stage_1.default.Size, stage_1.default.Size);\n    }\n    renderSnake() {\n        let i = 0;\n        for (const [x, y] of __classPrivateFieldGet(this, _View_model, \"f\").snake.positionList) {\n            __classPrivateFieldGet(this, _View_ctx, \"f\").fillStyle = __classPrivateFieldGet(this, _View_model, \"f\").gameOver\n                ? '#800'\n                : `hsl(${120 - (__classPrivateFieldGet(this, _View_model, \"f\").snake.positionList.length - i) * 2}deg, 100%, 50%)`;\n            __classPrivateFieldGet(this, _View_ctx, \"f\").beginPath();\n            __classPrivateFieldGet(this, _View_ctx, \"f\").arc(x, y, snake_1.default.halfWidth, 0, 2 * Math.PI);\n            __classPrivateFieldGet(this, _View_ctx, \"f\").fill();\n            __classPrivateFieldGet(this, _View_ctx, \"f\").closePath();\n            i++;\n        }\n    }\n    renderSnakeEye() {\n        const lex = __classPrivateFieldGet(this, _View_model, \"f\").snake.mx + Math.cos(((__classPrivateFieldGet(this, _View_model, \"f\").snake.angle - 60) * Math.PI) / 180) * snake_1.default.halfWidth * 0.4;\n        const ley = __classPrivateFieldGet(this, _View_model, \"f\").snake.my + Math.sin(((__classPrivateFieldGet(this, _View_model, \"f\").snake.angle - 60) * Math.PI) / 180) * snake_1.default.halfWidth * 0.4;\n        const rex = __classPrivateFieldGet(this, _View_model, \"f\").snake.mx + Math.cos(((__classPrivateFieldGet(this, _View_model, \"f\").snake.angle + 60) * Math.PI) / 180) * snake_1.default.halfWidth * 0.4;\n        const rey = __classPrivateFieldGet(this, _View_model, \"f\").snake.my + Math.sin(((__classPrivateFieldGet(this, _View_model, \"f\").snake.angle + 60) * Math.PI) / 180) * snake_1.default.halfWidth * 0.4;\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fillStyle = '#fff';\n        __classPrivateFieldGet(this, _View_ctx, \"f\").beginPath();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").arc(lex, ley, snake_1.default.halfWidth * 0.4, 0, 2 * Math.PI);\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fill();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").closePath();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fillStyle = '#000';\n        __classPrivateFieldGet(this, _View_ctx, \"f\").beginPath();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").arc(lex, ley, snake_1.default.halfWidth * 0.2, 0, 2 * Math.PI);\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fill();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").closePath();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fillStyle = '#fff';\n        __classPrivateFieldGet(this, _View_ctx, \"f\").beginPath();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").arc(rex, rey, snake_1.default.halfWidth * 0.4, 0, 2 * Math.PI);\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fill();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").closePath();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fillStyle = '#000';\n        __classPrivateFieldGet(this, _View_ctx, \"f\").beginPath();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").arc(rex, rey, snake_1.default.halfWidth * 0.2, 0, 2 * Math.PI);\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fill();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").closePath();\n    }\n    renderFood() {\n        if (__classPrivateFieldGet(this, _View_model, \"f\").food === null) {\n            return;\n        }\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;\n        __classPrivateFieldGet(this, _View_ctx, \"f\").beginPath();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").arc(__classPrivateFieldGet(this, _View_model, \"f\").food.x, __classPrivateFieldGet(this, _View_model, \"f\").food.y, snake_1.default.halfWidth, 0, 2 * Math.PI);\n        __classPrivateFieldGet(this, _View_ctx, \"f\").fill();\n        __classPrivateFieldGet(this, _View_ctx, \"f\").closePath();\n    }\n    render() {\n        this.renderStage();\n        this.renderSnake();\n        this.renderSnakeEye();\n        this.renderFood();\n    }\n    get ctx() {\n        return __classPrivateFieldGet(this, _View_ctx, \"f\");\n    }\n}\n_View_model = new WeakMap(), _View_ctx = new WeakMap();\nexports[\"default\"] = View;\n\n\n//# sourceURL=webpack://snake-game/./src/ts/view.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;