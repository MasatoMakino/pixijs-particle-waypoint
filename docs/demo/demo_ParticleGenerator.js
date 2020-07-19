/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demo_ParticleGenerator": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./demoSrc/demo_ParticleGenerator.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demoSrc/SamplePath.js":
/*!*******************************!*\
  !*** ./demoSrc/SamplePath.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.getHeartPath = () => {\n  return [[199.999692558296, 139.037809861326], [199.999692558296, 139.037809861326, 216.517501342052, 91.0703552349714, 260.408864739813, 101.478048251449], [304.306569058069, 111.887435228376, 302.040473463538, 149.898168782486, 297.969050788655, 167.089794944798], [293.891253219557, 184.314831799952, 266.291989537884, 213.247676318414, 241.405592420215, 229.538070494226], [216.517501342052, 245.828464670041, 201.360366325658, 263.475297677716, 199.999692558296, 269.360116287618], [198.644947652665, 263.475297677716, 183.481883774538, 245.828464670041, 158.595486656873, 229.538070494226], [133.70739557871, 213.247676318414, 106.111932139903, 184.314831799952, 102.030334327938, 167.089794944798], [97.9589002789453, 149.898168782486, 95.6966160382817, 111.887435228376, 139.592214337275, 101.478048251449], [183.481883774538, 91.0703552349714, 199.999692558296, 139.037809861326, 199.999692558296, 139.037809861326]];\n};\n\nexports.getCircle = () => {\n  const X = 200;\n  const Y = 200;\n  const K = 4 * (Math.sqrt(2) - 1) / 3;\n  const R = 100;\n  const RK = R * K;\n  return [[R + X, 0 + Y], [R + X, RK + Y, RK + X, R + Y, 0 + X, R + Y], [-RK + X, R + Y, -R + X, RK + Y, -R + X, 0 + Y], [-R + X, -RK + Y, -RK + X, -R + Y, 0 + X, -R + Y], [RK + X, -R + Y, R + X, -RK + Y, R + X, 0 + Y]];\n};\n\nexports.getTriangle = () => {\n  return [[200, 100], [300, 273.205080756887], [100, 273.205080756887], [200, 100]];\n};\n\n//# sourceURL=webpack:///./demoSrc/SamplePath.js?");

/***/ }),

/***/ "./demoSrc/common.js":
/*!***************************!*\
  !*** ./demoSrc/common.js ***!
  \***************************/
/*! exports provided: initWay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initWay\", function() { return initWay; });\n/* harmony import */ var _SamplePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SamplePath */ \"./demoSrc/SamplePath.js\");\n/* harmony import */ var _SamplePath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SamplePath__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var _esm___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../esm/ */ \"./esm/index.js\");\n\n\n\n/**\n * ParticleWayを初期化する。\n * @return {ParticleWay}\n */\n\nfunction initWay(stage) {\n  const points = Object(_SamplePath__WEBPACK_IMPORTED_MODULE_0__[\"getHeartPath\"])();\n  const wayPoint = new _esm___WEBPACK_IMPORTED_MODULE_2__[\"PixiParticleWay\"](particle_waypoint__WEBPACK_IMPORTED_MODULE_1__[\"BezierUtil\"].subdivide(points), {\n    parent: stage\n  });\n  return wayPoint;\n}\n\n//# sourceURL=webpack:///./demoSrc/common.js?");

/***/ }),

/***/ "./demoSrc/demo_ParticleGenerator.js":
/*!*******************************************!*\
  !*** ./demoSrc/demo_ParticleGenerator.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var _esm___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm/ */ \"./esm/index.js\");\n/* harmony import */ var _SamplePath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SamplePath */ \"./demoSrc/SamplePath.js\");\n/* harmony import */ var _SamplePath__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SamplePath__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ \"./demoSrc/common.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tweenjs/tween.js */ \"./node_modules/@tweenjs/tween.js/dist/tween.esm.js\");\n\n\n\n\n\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\n\nconst onDomContentsLoaded = () => {\n  const app = new pixi_js__WEBPACK_IMPORTED_MODULE_5__[\"Application\"]({\n    width: 640,\n    height: 480\n  });\n  document.body.appendChild(app.view);\n  const way = Object(_common__WEBPACK_IMPORTED_MODULE_3__[\"initWay\"])(app.stage);\n  const generator = initGenerator(way, app.stage);\n  initGUI(generator);\n};\n/**\n * パーティクル生成機を初期化する。\n * @param way\n * @param stage\n * @return {PixiParticleGenerator}\n */\n\n\nconst initGenerator = (way, stage) => {\n  const bitmap = [];\n\n  for (let i = 0; i < 12; i++) {\n    bitmap.push(`./circle${(i + 1).toString().padStart(2, \"0\")}.png`);\n  }\n\n  const generator = new _esm___WEBPACK_IMPORTED_MODULE_1__[\"PixiParticleGenerator\"](stage, way, bitmap, {\n    ease: _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Easing.Cubic.InOut,\n    blendMode: pixi_js__WEBPACK_IMPORTED_MODULE_5__[\"BLEND_MODES\"].ADD\n  });\n  generator.setSpeed(166, 8 * 6);\n  generator.play();\n  return generator;\n};\n/**\n * デモのパラメーターを操作するGUIを初期化する。\n * @param generator\n */\n\n\nconst initGUI = generator => {\n  const prop = {\n    isPlay: true,\n    path: \"heart\",\n    ease: \"cubicInOut\",\n    valve: true,\n    visiblePassage: false,\n    clear: () => {\n      generator.removeAllParticles();\n    }\n  };\n  const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_4__[\"GUI\"]();\n  gui.add(generator, \"particleInterval\", 1, 1000);\n  gui.add(generator, \"speedPerSec\", 0.0001, 0.5);\n  gui.add(generator, \"rangeR\", 0.0, 32.0, 0.1);\n  gui.add(generator, \"rangeRotationSpeed\", 0.0, 3.14 * 4, 0.01);\n  gui.add(prop, \"ease\", [\"cubicOut\", \"cubicInOut\", \"liner\"]).onChange(() => {\n    let ease = null;\n\n    switch (prop.ease) {\n      case \"cubicOut\":\n        ease = _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Easing.Cubic.Out;\n        break;\n\n      case \"cubicInOut\":\n        ease = _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Easing.Cubic.InOut;\n        break;\n    }\n\n    generator.updateEase(ease, generator.isLoop);\n  });\n  gui.add(prop, \"path\", [\"heart\", \"circle\", \"triangle\"]).onChange(() => {\n    let path;\n\n    switch (prop.path) {\n      case \"heart\":\n        path = particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"BezierUtil\"].subdivide(Object(_SamplePath__WEBPACK_IMPORTED_MODULE_2__[\"getHeartPath\"])());\n        break;\n\n      case \"circle\":\n        path = particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"BezierUtil\"].subdivide(Object(_SamplePath__WEBPACK_IMPORTED_MODULE_2__[\"getCircle\"])());\n        break;\n\n      case \"triangle\":\n        path = Object(_SamplePath__WEBPACK_IMPORTED_MODULE_2__[\"getTriangle\"])();\n        break;\n    }\n\n    generator.path[0].points = path;\n  });\n  gui.add(prop, \"isPlay\").onChange(() => {\n    if (prop.isPlay) {\n      generator.play();\n    } else {\n      generator.stop();\n    }\n  });\n  gui.add(generator, \"isLoop\");\n  gui.add(prop, \"valve\").onChange(() => {\n    if (prop.valve) {\n      generator.openValve();\n    } else {\n      generator.closeValve();\n    }\n  });\n  gui.add(prop, \"visiblePassage\").onChange(() => {\n    if (prop.visiblePassage) {\n      generator.path[0].showPassage();\n    } else {\n      generator.path[0].hidePassage();\n    }\n  });\n  gui.add(prop, \"clear\");\n};\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\n\n\nif (document.readyState !== \"loading\") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", onDomContentsLoaded);\n}\n\n//# sourceURL=webpack:///./demoSrc/demo_ParticleGenerator.js?");

/***/ }),

/***/ "./esm/PixiParticle.js":
/*!*****************************!*\
  !*** ./esm/PixiParticle.js ***!
  \*****************************/
/*! exports provided: PixiParticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PixiParticle\", function() { return PixiParticle; });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\n\nclass PixiParticle extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"Particle\"] {\n  constructor() {\n    super(...arguments);\n    this.r = 0.0; //媒介変数tに応じた回転量\n\n    this.rotationSpeedSin = 0.0;\n    this.rotationSpeedCos = 0.0; //初期回転量\n\n    this.rotationSin = 0.0;\n    this.rotationCos = 0.0;\n  }\n\n  init(parent, bitmapURL, rangeR, rangeRotationSpeed, blendMode) {\n    this.parent = parent;\n    const texture = pixi_js__WEBPACK_IMPORTED_MODULE_1__[\"Texture\"].from(bitmapURL);\n    this.bitmap = new pixi_js__WEBPACK_IMPORTED_MODULE_1__[\"Sprite\"](texture);\n    this.bitmap.anchor.set(0.5, 0.5);\n    this.bitmap.blendMode = blendMode;\n    this.parent.addChild(this.bitmap);\n    this.r = rangeR * Math.random();\n    this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSin = Math.random() * 2 * Math.PI;\n    this.rotationCos = Math.random() * 2 * Math.PI;\n  }\n\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.bitmap.x = pos[0];\n    this.bitmap.y = pos[1];\n\n    if (this.r > 0.0) {\n      const sin = this.rotationSpeedSin * t + this.rotationSin;\n      const cos = this.rotationSpeedCos * t + this.rotationCos;\n      this.bitmap.x += Math.cos(cos) * this.r;\n      this.bitmap.y += Math.sin(sin) * this.r;\n    }\n\n    return n;\n  }\n\n  dispose() {\n    super.dispose();\n\n    if (this.parent && this.bitmap.parent) {\n      this.bitmap.parent.removeChild(this.bitmap);\n    }\n\n    this.parent = null;\n    this.bitmap = null;\n  }\n\n}\n\n//# sourceURL=webpack:///./esm/PixiParticle.js?");

/***/ }),

/***/ "./esm/PixiParticleGenerator.js":
/*!**************************************!*\
  !*** ./esm/PixiParticleGenerator.js ***!
  \**************************************/
/*! exports provided: PixiParticleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PixiParticleGenerator\", function() { return PixiParticleGenerator; });\n/* harmony import */ var _PixiParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PixiParticle */ \"./esm/PixiParticle.js\");\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\n\n\nclass PixiParticleGenerator extends particle_waypoint__WEBPACK_IMPORTED_MODULE_1__[\"ParticleGenerator\"] {\n  constructor(parent, path, map, option) {\n    var _a;\n\n    super(path, option);\n    this.mapCounter = 0;\n    this._rangeR = 0.0;\n    this._rangeRotationSpeed = 0.0;\n    this.parent = parent;\n\n    if (option) {\n      if (option.rangeR) this._rangeR = option.rangeR;\n      if (option.rangeRotationSpeed) this._rangeRotationSpeed = option.rangeRotationSpeed;\n    }\n\n    this._blendMode = (_a = option === null || option === void 0 ? void 0 : option.blendMode) !== null && _a !== void 0 ? _a : pixi_js__WEBPACK_IMPORTED_MODULE_2__[\"BLEND_MODES\"].NORMAL;\n\n    if (Array.isArray(map)) {\n      if (map.length === 0) {\n        console.warn(\"PixiParticleGenerator : オプションとして渡されたテクスチャ配列が空です。このクラスは動作しますが、一切の表示を行いません。\");\n        console.trace();\n      }\n\n      this.map = map;\n    } else {\n      this.map = [map];\n    }\n  }\n\n  generateParticle(path) {\n    const particle = new _PixiParticle__WEBPACK_IMPORTED_MODULE_0__[\"PixiParticle\"](path);\n    particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed, this._blendMode);\n    this.mapCounter = (this.mapCounter += 1) % this.map.length;\n    return particle;\n  }\n\n  generateAll() {\n    this.mapCounter = 0;\n    super.generateAll();\n  }\n\n  get rangeRotationSpeed() {\n    return this._rangeRotationSpeed;\n  }\n\n  set rangeRotationSpeed(value) {\n    this._rangeRotationSpeed = value;\n  }\n\n  get rangeR() {\n    return this._rangeR;\n  }\n\n  set rangeR(value) {\n    this._rangeR = value;\n  }\n\n}\n\n//# sourceURL=webpack:///./esm/PixiParticleGenerator.js?");

/***/ }),

/***/ "./esm/PixiParticleWay.js":
/*!********************************!*\
  !*** ./esm/PixiParticleWay.js ***!
  \********************************/
/*! exports provided: PixiParticleWay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PixiParticleWay\", function() { return PixiParticleWay; });\n/* harmony import */ var particle_waypoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-waypoint */ \"./node_modules/particle-waypoint/esm/index.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/lib/pixi.es.js\");\n\n\nclass PixiParticleWay extends particle_waypoint__WEBPACK_IMPORTED_MODULE_0__[\"ParticleWay\"] {\n  constructor(points, option) {\n    var _a, _b;\n\n    super(points);\n    this.passageColor = 0xff0000;\n    this.passageAlpha = 0.25;\n    if (!option) return;\n    this.passageColor = (_a = option === null || option === void 0 ? void 0 : option.passageColor) !== null && _a !== void 0 ? _a : this.passageColor;\n    this.passageAlpha = (_b = option === null || option === void 0 ? void 0 : option.passageAlpha) !== null && _b !== void 0 ? _b : this.passageAlpha;\n\n    if (option === null || option === void 0 ? void 0 : option.parent) {\n      this.initPassage(option.parent);\n    }\n  }\n\n  initPassage(parent) {\n    if (this.passage) return;\n    this.passage = new pixi_js__WEBPACK_IMPORTED_MODULE_1__[\"Graphics\"]();\n    this.passage.visible = false;\n    parent.addChild(this.passage);\n    this.drawPassage();\n  }\n\n  drawPassage() {\n    if (!this.passage) return;\n    if (!this.points) return;\n    if (this.points.length <= 1) return;\n    const isBezier = this.points[1].length === 6;\n    const g = this.passage;\n    g.clear().lineStyle(1, this.passageColor, this.passageAlpha);\n    this.points.forEach((p, index) => {\n      if (index === 0) {\n        g.moveTo(p[0], p[1]);\n        return;\n      }\n\n      if (!isBezier) {\n        g.lineTo(p[0], p[1]);\n        return;\n      }\n\n      g.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);\n    });\n    g.endFill();\n  }\n\n  onSetPoints() {\n    super.onSetPoints();\n    this.drawPassage();\n  }\n\n  showPassage() {\n    if (!this.passage) return;\n    this.passage.visible = true;\n  }\n\n  hidePassage() {\n    if (!this.passage) return;\n    this.passage.visible = false;\n  }\n\n}\n\n//# sourceURL=webpack:///./esm/PixiParticleWay.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/*! exports provided: PixiParticle, PixiParticleGenerator, PixiParticleWay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PixiParticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PixiParticle */ \"./esm/PixiParticle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PixiParticle\", function() { return _PixiParticle__WEBPACK_IMPORTED_MODULE_0__[\"PixiParticle\"]; });\n\n/* harmony import */ var _PixiParticleGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PixiParticleGenerator */ \"./esm/PixiParticleGenerator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PixiParticleGenerator\", function() { return _PixiParticleGenerator__WEBPACK_IMPORTED_MODULE_1__[\"PixiParticleGenerator\"]; });\n\n/* harmony import */ var _PixiParticleWay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PixiParticleWay */ \"./esm/PixiParticleWay.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PixiParticleWay\", function() { return _PixiParticleWay__WEBPACK_IMPORTED_MODULE_2__[\"PixiParticleWay\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./esm/index.js?");

/***/ })

/******/ });