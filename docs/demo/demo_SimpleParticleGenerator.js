/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/demo_SimpleParticleGenerator.js":
/*!*************************************************!*\
  !*** ./demoSrc/demo_SimpleParticleGenerator.js ***!
  \*************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _esm___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../esm/ */ \"./esm/index.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\n\nconst onDomContentsLoaded = () => {\n  const points = [[100, 100], [100, 200], [200, 200], [200, 300]];\n  const wayPoint = new particle_waypoint__WEBPACK_IMPORTED_MODULE_1__.ParticleWay(points);\n  const app = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Application({\n    width: 640,\n    height: 480\n  });\n  document.body.appendChild(app.view);\n  const generator = new _esm___WEBPACK_IMPORTED_MODULE_0__.PixiParticleGenerator(app.stage, wayPoint, [\"./circle.png\"]);\n  generator.play();\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack://pixijs-particle-waypoint/./demoSrc/demo_SimpleParticleGenerator.js?");

/***/ }),

/***/ "./esm/PixiParticle.js":
/*!*****************************!*\
  !*** ./esm/PixiParticle.js ***!
  \*****************************/
/*! namespace exports */
/*! export PixiParticle [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PixiParticle\": () => /* binding */ PixiParticle\n/* harmony export */ });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\n\nclass PixiParticle extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.Particle {\n  constructor() {\n    super(...arguments);\n    this.r = 0.0; //媒介変数tに応じた回転量\n\n    this.rotationSpeedSin = 0.0;\n    this.rotationSpeedCos = 0.0; //初期回転量\n\n    this.rotationSin = 0.0;\n    this.rotationCos = 0.0;\n  }\n\n  init(parent, bitmapURL, rangeR, rangeRotationSpeed, blendMode) {\n    this.parent = parent;\n    const texture = pixi_js__WEBPACK_IMPORTED_MODULE_1__.Texture.from(bitmapURL);\n    this.bitmap = new pixi_js__WEBPACK_IMPORTED_MODULE_1__.Sprite(texture);\n    this.bitmap.anchor.set(0.5, 0.5);\n    this.bitmap.blendMode = blendMode;\n    this.parent.addChild(this.bitmap);\n    this.r = rangeR * Math.random();\n    this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSin = Math.random() * 2 * Math.PI;\n    this.rotationCos = Math.random() * 2 * Math.PI;\n  }\n\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.bitmap.x = pos[0];\n    this.bitmap.y = pos[1];\n\n    if (this.r > 0.0) {\n      const sin = this.rotationSpeedSin * t + this.rotationSin;\n      const cos = this.rotationSpeedCos * t + this.rotationCos;\n      this.bitmap.x += Math.cos(cos) * this.r;\n      this.bitmap.y += Math.sin(sin) * this.r;\n    }\n\n    return n;\n  }\n\n  dispose() {\n    super.dispose();\n\n    if (this.parent && this.bitmap.parent) {\n      this.bitmap.parent.removeChild(this.bitmap);\n    }\n\n    this.parent = null;\n    this.bitmap = null;\n  }\n\n}\n\n//# sourceURL=webpack://pixijs-particle-waypoint/./esm/PixiParticle.js?");

/***/ }),

/***/ "./esm/PixiParticleGenerator.js":
/*!**************************************!*\
  !*** ./esm/PixiParticleGenerator.js ***!
  \**************************************/
/*! namespace exports */
/*! export PixiParticleGenerator [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PixiParticleGenerator\": () => /* binding */ PixiParticleGenerator\n/* harmony export */ });\n/* harmony import */ var _PixiParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PixiParticle */ \"./esm/PixiParticle.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\n\n\nclass PixiParticleGenerator extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__.ParticleGenerator {\n  constructor(parent, path, map, option) {\n    var _a;\n\n    super(path, option);\n    this.mapCounter = 0;\n    this._rangeR = 0.0;\n    this._rangeRotationSpeed = 0.0;\n    this.parent = parent;\n\n    if (option) {\n      if (option.rangeR) this._rangeR = option.rangeR;\n      if (option.rangeRotationSpeed) this._rangeRotationSpeed = option.rangeRotationSpeed;\n    }\n\n    this._blendMode = (_a = option === null || option === void 0 ? void 0 : option.blendMode) !== null && _a !== void 0 ? _a : pixi_js__WEBPACK_IMPORTED_MODULE_2__.BLEND_MODES.NORMAL;\n\n    if (Array.isArray(map)) {\n      if (map.length === 0) {\n        console.warn(\"PixiParticleGenerator : オプションとして渡されたテクスチャ配列が空です。このクラスは動作しますが、一切の表示を行いません。\");\n        console.trace();\n      }\n\n      this.map = map;\n    } else {\n      this.map = [map];\n    }\n  }\n\n  generateParticle(path) {\n    const particle = new _PixiParticle__WEBPACK_IMPORTED_MODULE_0__.PixiParticle(path);\n    particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed, this._blendMode);\n    this.mapCounter = (this.mapCounter += 1) % this.map.length;\n    return particle;\n  }\n\n  generateAll() {\n    this.mapCounter = 0;\n    super.generateAll();\n  }\n\n  get rangeRotationSpeed() {\n    return this._rangeRotationSpeed;\n  }\n\n  set rangeRotationSpeed(value) {\n    this._rangeRotationSpeed = value;\n  }\n\n  get rangeR() {\n    return this._rangeR;\n  }\n\n  set rangeR(value) {\n    this._rangeR = value;\n  }\n\n}\n\n//# sourceURL=webpack://pixijs-particle-waypoint/./esm/PixiParticleGenerator.js?");

/***/ }),

/***/ "./esm/PixiParticleWay.js":
/*!********************************!*\
  !*** ./esm/PixiParticleWay.js ***!
  \********************************/
/*! namespace exports */
/*! export PixiParticleWay [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PixiParticleWay\": () => /* binding */ PixiParticleWay\n/* harmony export */ });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\n\nclass PixiParticleWay extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__.ParticleWay {\n  constructor(points, option) {\n    var _a, _b;\n\n    super(points);\n    this.passageColor = 0xff0000;\n    this.passageAlpha = 0.25;\n    if (!option) return;\n    this.passageColor = (_a = option === null || option === void 0 ? void 0 : option.passageColor) !== null && _a !== void 0 ? _a : this.passageColor;\n    this.passageAlpha = (_b = option === null || option === void 0 ? void 0 : option.passageAlpha) !== null && _b !== void 0 ? _b : this.passageAlpha;\n\n    if (option === null || option === void 0 ? void 0 : option.parent) {\n      this.initPassage(option.parent);\n    }\n  }\n\n  initPassage(parent) {\n    if (this.passage) return;\n    this.passage = new pixi_js__WEBPACK_IMPORTED_MODULE_1__.Graphics();\n    this.passage.visible = false;\n    parent.addChild(this.passage);\n    this.drawPassage();\n  }\n\n  drawPassage() {\n    if (!this.passage) return;\n    if (!this.points) return;\n    if (this.points.length <= 1) return;\n    const isBezier = this.points[1].length === 6;\n    const g = this.passage;\n    g.clear().lineStyle(1, this.passageColor, this.passageAlpha);\n    this.points.forEach((p, index) => {\n      if (index === 0) {\n        g.moveTo(p[0], p[1]);\n        return;\n      }\n\n      if (!isBezier) {\n        g.lineTo(p[0], p[1]);\n        return;\n      }\n\n      g.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);\n    });\n    g.endFill();\n  }\n\n  onSetPoints() {\n    super.onSetPoints();\n    this.drawPassage();\n  }\n\n  showPassage() {\n    if (!this.passage) return;\n    this.passage.visible = true;\n  }\n\n  hidePassage() {\n    if (!this.passage) return;\n    this.passage.visible = false;\n  }\n\n}\n\n//# sourceURL=webpack://pixijs-particle-waypoint/./esm/PixiParticleWay.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/*! namespace exports */
/*! export PixiParticle [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/PixiParticle.js .PixiParticle */
/*! export PixiParticleGenerator [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/PixiParticleGenerator.js .PixiParticleGenerator */
/*! export PixiParticleWay [provided] [no usage info] [missing usage info prevents renaming] -> ./esm/PixiParticleWay.js .PixiParticleWay */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PixiParticle\": () => /* reexport safe */ _PixiParticle__WEBPACK_IMPORTED_MODULE_0__.PixiParticle,\n/* harmony export */   \"PixiParticleGenerator\": () => /* reexport safe */ _PixiParticleGenerator__WEBPACK_IMPORTED_MODULE_1__.PixiParticleGenerator,\n/* harmony export */   \"PixiParticleWay\": () => /* reexport safe */ _PixiParticleWay__WEBPACK_IMPORTED_MODULE_2__.PixiParticleWay\n/* harmony export */ });\n/* harmony import */ var _PixiParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PixiParticle */ \"./esm/PixiParticle.js\");\n/* harmony import */ var _PixiParticleGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PixiParticleGenerator */ \"./esm/PixiParticleGenerator.js\");\n/* harmony import */ var _PixiParticleWay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PixiParticleWay */ \"./esm/PixiParticleWay.js\");\n\n\n\n\n//# sourceURL=webpack://pixijs-particle-waypoint/./esm/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo_SimpleParticleGenerator": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demo_SimpleParticleGenerator.js","vendor"]
/******/ 		];
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
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpixijs_particle_waypoint"] = self["webpackChunkpixijs_particle_waypoint"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;