(()=>{"use strict";var __webpack_modules__={96:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n// EXTERNAL MODULE: ./node_modules/@masatomakino/particle-waypoint/esm/index.js + 13 modules\nvar esm = __webpack_require__(362);\n// EXTERNAL MODULE: ./node_modules/pixi.js/lib/index.mjs + 347 modules\nvar lib = __webpack_require__(740);\n;// CONCATENATED MODULE: ./esm/PixiParticle.js\n\n\nclass PixiParticle extends esm/* Particle */.hp {\n  constructor() {\n    super(...arguments);\n    this.r = 0.0;\n    //媒介変数tに応じた回転量\n    this.rotationSpeedSin = 0.0;\n    this.rotationSpeedCos = 0.0;\n    //初期回転量\n    this.rotationSin = 0.0;\n    this.rotationCos = 0.0;\n  }\n  init(parent, bitmapURL, rangeR, rangeRotationSpeed, blendMode) {\n    this.parent = parent;\n    const texture = lib/* Texture.from */.xEZ.from(bitmapURL);\n    this.bitmap = new lib/* Sprite */.jyi(texture);\n    this.bitmap.anchor.set(0.5, 0.5);\n    this.bitmap.blendMode = blendMode;\n    this.parent.addChild(this.bitmap);\n    this.r = rangeR * Math.random();\n    this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);\n    this.rotationSin = Math.random() * 2 * Math.PI;\n    this.rotationCos = Math.random() * 2 * Math.PI;\n  }\n  update(t) {\n    const n = super.update(t);\n    const pos = this.path.getPoint(n);\n    this.bitmap.x = pos[0];\n    this.bitmap.y = pos[1];\n    if (this.r > 0.0) {\n      const sin = this.rotationSpeedSin * t + this.rotationSin;\n      const cos = this.rotationSpeedCos * t + this.rotationCos;\n      this.bitmap.x += Math.cos(cos) * this.r;\n      this.bitmap.y += Math.sin(sin) * this.r;\n    }\n    return n;\n  }\n  dispose() {\n    super.dispose();\n    if (this.parent && this.bitmap.parent) {\n      this.bitmap.parent.removeChild(this.bitmap);\n    }\n    this.parent = null;\n    this.bitmap = null;\n  }\n}\n;// CONCATENATED MODULE: ./esm/PixiParticleGenerator.js\n\n\n\nclass PixiParticleGenerator extends esm/* ParticleGenerator */.F8 {\n  constructor(parent, path, map, option) {\n    var _a;\n    super(path, option);\n    this.mapCounter = 0;\n    this._rangeR = 0.0;\n    this._rangeRotationSpeed = 0.0;\n    this.parent = parent;\n    if (option) {\n      if (option.rangeR) this._rangeR = option.rangeR;\n      if (option.rangeRotationSpeed) this._rangeRotationSpeed = option.rangeRotationSpeed;\n    }\n    this._blendMode = (_a = option === null || option === void 0 ? void 0 : option.blendMode) !== null && _a !== void 0 ? _a : lib/* BLEND_MODES.NORMAL */.T$b.NORMAL;\n    if (Array.isArray(map)) {\n      if (map.length === 0) {\n        console.warn("PixiParticleGenerator : オプションとして渡されたテクスチャ配列が空です。このクラスは動作しますが、一切の表示を行いません。");\n        console.trace();\n      }\n      this.map = map;\n    } else {\n      this.map = [map];\n    }\n  }\n  generateParticle(path) {\n    const particle = new PixiParticle(path);\n    particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed, this._blendMode);\n    this.mapCounter = (this.mapCounter += 1) % this.map.length;\n    return particle;\n  }\n  generateAll() {\n    this.mapCounter = 0;\n    super.generateAll();\n  }\n  get rangeRotationSpeed() {\n    return this._rangeRotationSpeed;\n  }\n  set rangeRotationSpeed(value) {\n    this._rangeRotationSpeed = value;\n  }\n  get rangeR() {\n    return this._rangeR;\n  }\n  set rangeR(value) {\n    this._rangeR = value;\n  }\n}\n;// CONCATENATED MODULE: ./esm/PixiParticleWay.js\n\n\nclass PixiParticleWay extends (/* unused pure expression or super */ null && (ParticleWay)) {\n  constructor(points, option) {\n    var _a, _b;\n    super(points);\n    this.passageColor = 0xff0000;\n    this.passageAlpha = 0.25;\n    if (!option) return;\n    this.passageColor = (_a = option === null || option === void 0 ? void 0 : option.passageColor) !== null && _a !== void 0 ? _a : this.passageColor;\n    this.passageAlpha = (_b = option === null || option === void 0 ? void 0 : option.passageAlpha) !== null && _b !== void 0 ? _b : this.passageAlpha;\n    if (option === null || option === void 0 ? void 0 : option.parent) {\n      this.initPassage(option.parent);\n    }\n  }\n  initPassage(parent) {\n    if (this.passage) return;\n    this.passage = new Graphics();\n    this.passage.visible = false;\n    parent.addChild(this.passage);\n    this.drawPassage();\n  }\n  drawPassage() {\n    if (!this.passage) return;\n    if (!this.points) return;\n    if (this.points.length <= 1) return;\n    const isBezier = this.points[1].length === 6;\n    const g = this.passage;\n    g.clear().lineStyle(1, this.passageColor, this.passageAlpha);\n    this.points.forEach((p, index) => {\n      if (index === 0) {\n        g.moveTo(p[0], p[1]);\n        return;\n      }\n      if (!isBezier) {\n        g.lineTo(p[0], p[1]);\n        return;\n      }\n      g.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);\n    });\n    g.endFill();\n  }\n  onSetPoints() {\n    super.onSetPoints();\n    this.drawPassage();\n  }\n  showPassage() {\n    if (!this.passage) return;\n    this.passage.visible = true;\n  }\n  hidePassage() {\n    if (!this.passage) return;\n    this.passage.visible = false;\n  }\n}\n;// CONCATENATED MODULE: ./esm/index.js\n\n\n\n;// CONCATENATED MODULE: ./demoSrc/demo_SimpleParticleGenerator.js\n\n\n\n\n/**\n * DOMContentLoaded後の初期化処理。\n * デモに必要なパーツを一式初期化する。\n */\nconst onDomContentsLoaded = () => {\n  const points = [[100, 100], [100, 200], [200, 200], [200, 300]];\n  const wayPoint = new esm/* ParticleWay */.mG(points);\n  const app = new lib/* Application */.MxU({\n    width: 640,\n    height: 480\n  });\n  document.body.appendChild(app.view);\n  const generator = new PixiParticleGenerator(app.stage, wayPoint, ["./circle.png"]);\n  generator.play();\n};\n\n/**\n * DOMContentLoaded以降に初期化処理を実行する\n */\nif (document.readyState !== "loading") {\n  onDomContentsLoaded();\n} else {\n  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7RUFBSSxDQUFDLENBQUM7RUFDeERDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO0VBQ25DLE1BQU1DLFNBQVMsR0FBRyxJQUFJdEQscUJBQXFCLENBQUMrQyxHQUFHLENBQUNRLEtBQUssRUFBRVQsUUFBUSxFQUFFLENBQy9ELGNBQWMsQ0FDZixDQUFDO0VBQ0ZRLFNBQVMsQ0FBQ0UsSUFBSSxFQUFFO0FBQ2xCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSU4sUUFBUSxDQUFDTyxVQUFVLEtBQUssU0FBUyxFQUFFO0VBQ3JDWixtQkFBbUIsRUFBRTtBQUN2QixDQUFDLE1BQU07RUFDTEssUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRWIsbUJBQW1CLENBQUM7QUFDcEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3BpeGlqcy1wYXJ0aWNsZS13YXlwb2ludC8uL2VzbS9QaXhpUGFydGljbGUuanM/MmFlOSIsIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3BpeGlqcy1wYXJ0aWNsZS13YXlwb2ludC8uL2VzbS9QaXhpUGFydGljbGVHZW5lcmF0b3IuanM/Y2Y3ZCIsIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3BpeGlqcy1wYXJ0aWNsZS13YXlwb2ludC8uL2VzbS9QaXhpUGFydGljbGVXYXkuanM/M2ZmMyIsIndlYnBhY2s6Ly9AbWFzYXRvbWFraW5vL3BpeGlqcy1wYXJ0aWNsZS13YXlwb2ludC8uL2VzbS9pbmRleC5qcz9iMjM5Iiwid2VicGFjazovL0BtYXNhdG9tYWtpbm8vcGl4aWpzLXBhcnRpY2xlLXdheXBvaW50Ly4vZGVtb1NyYy9kZW1vX1NpbXBsZVBhcnRpY2xlR2VuZXJhdG9yLmpzP2YyMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tIFwiQG1hc2F0b21ha2luby9wYXJ0aWNsZS13YXlwb2ludFwiO1xuaW1wb3J0IHsgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanNcIjtcbmV4cG9ydCBjbGFzcyBQaXhpUGFydGljbGUgZXh0ZW5kcyBQYXJ0aWNsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuciA9IDAuMDtcbiAgICAgICAgLy/lqpLku4vlpInmlbB044Gr5b+c44GY44Gf5Zue6Lui6YePXG4gICAgICAgIHRoaXMucm90YXRpb25TcGVlZFNpbiA9IDAuMDtcbiAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkQ29zID0gMC4wO1xuICAgICAgICAvL+WIneacn+Wbnui7oumHj1xuICAgICAgICB0aGlzLnJvdGF0aW9uU2luID0gMC4wO1xuICAgICAgICB0aGlzLnJvdGF0aW9uQ29zID0gMC4wO1xuICAgIH1cbiAgICBpbml0KHBhcmVudCwgYml0bWFwVVJMLCByYW5nZVIsIHJhbmdlUm90YXRpb25TcGVlZCwgYmxlbmRNb2RlKSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gVGV4dHVyZS5mcm9tKGJpdG1hcFVSTCk7XG4gICAgICAgIHRoaXMuYml0bWFwID0gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcbiAgICAgICAgdGhpcy5iaXRtYXAuYW5jaG9yLnNldCgwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuYml0bWFwLmJsZW5kTW9kZSA9IGJsZW5kTW9kZTtcbiAgICAgICAgdGhpcy5wYXJlbnQuYWRkQ2hpbGQodGhpcy5iaXRtYXApO1xuICAgICAgICB0aGlzLnIgPSByYW5nZVIgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICB0aGlzLnJvdGF0aW9uU3BlZWRTaW4gPSByYW5nZVJvdGF0aW9uU3BlZWQgKiAoTWF0aC5yYW5kb20oKSAqIDIgLSAxKTtcbiAgICAgICAgdGhpcy5yb3RhdGlvblNwZWVkQ29zID0gcmFuZ2VSb3RhdGlvblNwZWVkICogKE1hdGgucmFuZG9tKCkgKiAyIC0gMSk7XG4gICAgICAgIHRoaXMucm90YXRpb25TaW4gPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgICAgIHRoaXMucm90YXRpb25Db3MgPSBNYXRoLnJhbmRvbSgpICogMiAqIE1hdGguUEk7XG4gICAgfVxuICAgIHVwZGF0ZSh0KSB7XG4gICAgICAgIGNvbnN0IG4gPSBzdXBlci51cGRhdGUodCk7XG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucGF0aC5nZXRQb2ludChuKTtcbiAgICAgICAgdGhpcy5iaXRtYXAueCA9IHBvc1swXTtcbiAgICAgICAgdGhpcy5iaXRtYXAueSA9IHBvc1sxXTtcbiAgICAgICAgaWYgKHRoaXMuciA+IDAuMCkge1xuICAgICAgICAgICAgY29uc3Qgc2luID0gdGhpcy5yb3RhdGlvblNwZWVkU2luICogdCArIHRoaXMucm90YXRpb25TaW47XG4gICAgICAgICAgICBjb25zdCBjb3MgPSB0aGlzLnJvdGF0aW9uU3BlZWRDb3MgKiB0ICsgdGhpcy5yb3RhdGlvbkNvcztcbiAgICAgICAgICAgIHRoaXMuYml0bWFwLnggKz0gTWF0aC5jb3MoY29zKSAqIHRoaXMucjtcbiAgICAgICAgICAgIHRoaXMuYml0bWFwLnkgKz0gTWF0aC5zaW4oc2luKSAqIHRoaXMucjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5iaXRtYXAucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmJpdG1hcC5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5iaXRtYXApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5iaXRtYXAgPSBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBpeGlQYXJ0aWNsZSB9IGZyb20gXCIuL1BpeGlQYXJ0aWNsZVwiO1xuaW1wb3J0IHsgUGFydGljbGVHZW5lcmF0b3IsIH0gZnJvbSBcIkBtYXNhdG9tYWtpbm8vcGFydGljbGUtd2F5cG9pbnRcIjtcbmltcG9ydCB7IEJMRU5EX01PREVTIH0gZnJvbSBcInBpeGkuanNcIjtcbmV4cG9ydCBjbGFzcyBQaXhpUGFydGljbGVHZW5lcmF0b3IgZXh0ZW5kcyBQYXJ0aWNsZUdlbmVyYXRvciB7XG4gICAgY29uc3RydWN0b3IocGFyZW50LCBwYXRoLCBtYXAsIG9wdGlvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyKHBhdGgsIG9wdGlvbik7XG4gICAgICAgIHRoaXMubWFwQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuX3JhbmdlUiA9IDAuMDtcbiAgICAgICAgdGhpcy5fcmFuZ2VSb3RhdGlvblNwZWVkID0gMC4wO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICAgICAgaWYgKG9wdGlvbi5yYW5nZVIpXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFuZ2VSID0gb3B0aW9uLnJhbmdlUjtcbiAgICAgICAgICAgIGlmIChvcHRpb24ucmFuZ2VSb3RhdGlvblNwZWVkKVxuICAgICAgICAgICAgICAgIHRoaXMuX3JhbmdlUm90YXRpb25TcGVlZCA9IG9wdGlvbi5yYW5nZVJvdGF0aW9uU3BlZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmxlbmRNb2RlID0gKF9hID0gb3B0aW9uID09PSBudWxsIHx8IG9wdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9uLmJsZW5kTW9kZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogQkxFTkRfTU9ERVMuTk9STUFMO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXApKSB7XG4gICAgICAgICAgICBpZiAobWFwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlBpeGlQYXJ0aWNsZUdlbmVyYXRvciA6IOOCquODl+OCt+ODp+ODs+OBqOOBl+OBpua4oeOBleOCjOOBn+ODhuOCr+OCueODgeODo+mFjeWIl+OBjOepuuOBp+OBmeOAguOBk+OBruOCr+ODqeOCueOBr+WLleS9nOOBl+OBvuOBmeOBjOOAgeS4gOWIh+OBruihqOekuuOCkuihjOOBhOOBvuOBm+OCk+OAglwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFwID0gW21hcF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2VuZXJhdGVQYXJ0aWNsZShwYXRoKSB7XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBpeGlQYXJ0aWNsZShwYXRoKTtcbiAgICAgICAgcGFydGljbGUuaW5pdCh0aGlzLnBhcmVudCwgdGhpcy5tYXBbdGhpcy5tYXBDb3VudGVyXSwgdGhpcy5fcmFuZ2VSLCB0aGlzLl9yYW5nZVJvdGF0aW9uU3BlZWQsIHRoaXMuX2JsZW5kTW9kZSk7XG4gICAgICAgIHRoaXMubWFwQ291bnRlciA9ICh0aGlzLm1hcENvdW50ZXIgKz0gMSkgJSB0aGlzLm1hcC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwYXJ0aWNsZTtcbiAgICB9XG4gICAgZ2VuZXJhdGVBbGwoKSB7XG4gICAgICAgIHRoaXMubWFwQ291bnRlciA9IDA7XG4gICAgICAgIHN1cGVyLmdlbmVyYXRlQWxsKCk7XG4gICAgfVxuICAgIGdldCByYW5nZVJvdGF0aW9uU3BlZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yYW5nZVJvdGF0aW9uU3BlZWQ7XG4gICAgfVxuICAgIHNldCByYW5nZVJvdGF0aW9uU3BlZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmFuZ2VSb3RhdGlvblNwZWVkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCByYW5nZVIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yYW5nZVI7XG4gICAgfVxuICAgIHNldCByYW5nZVIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmFuZ2VSID0gdmFsdWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGFydGljbGVXYXkgfSBmcm9tIFwiQG1hc2F0b21ha2luby9wYXJ0aWNsZS13YXlwb2ludFwiO1xuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xuZXhwb3J0IGNsYXNzIFBpeGlQYXJ0aWNsZVdheSBleHRlbmRzIFBhcnRpY2xlV2F5IHtcbiAgICBjb25zdHJ1Y3Rvcihwb2ludHMsIG9wdGlvbikge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBzdXBlcihwb2ludHMpO1xuICAgICAgICB0aGlzLnBhc3NhZ2VDb2xvciA9IDB4ZmYwMDAwO1xuICAgICAgICB0aGlzLnBhc3NhZ2VBbHBoYSA9IDAuMjU7XG4gICAgICAgIGlmICghb3B0aW9uKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnBhc3NhZ2VDb2xvciA9IChfYSA9IG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbi5wYXNzYWdlQ29sb3IpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMucGFzc2FnZUNvbG9yO1xuICAgICAgICB0aGlzLnBhc3NhZ2VBbHBoYSA9IChfYiA9IG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbi5wYXNzYWdlQWxwaGEpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMucGFzc2FnZUFscGhhO1xuICAgICAgICBpZiAob3B0aW9uID09PSBudWxsIHx8IG9wdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9uLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5pbml0UGFzc2FnZShvcHRpb24ucGFyZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0UGFzc2FnZShwYXJlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucGFzc2FnZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5wYXNzYWdlID0gbmV3IEdyYXBoaWNzKCk7XG4gICAgICAgIHRoaXMucGFzc2FnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHBhcmVudC5hZGRDaGlsZCh0aGlzLnBhc3NhZ2UpO1xuICAgICAgICB0aGlzLmRyYXdQYXNzYWdlKCk7XG4gICAgfVxuICAgIGRyYXdQYXNzYWdlKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFzc2FnZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF0aGlzLnBvaW50cylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMucG9pbnRzLmxlbmd0aCA8PSAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBpc0JlemllciA9IHRoaXMucG9pbnRzWzFdLmxlbmd0aCA9PT0gNjtcbiAgICAgICAgY29uc3QgZyA9IHRoaXMucGFzc2FnZTtcbiAgICAgICAgZy5jbGVhcigpLmxpbmVTdHlsZSgxLCB0aGlzLnBhc3NhZ2VDb2xvciwgdGhpcy5wYXNzYWdlQWxwaGEpO1xuICAgICAgICB0aGlzLnBvaW50cy5mb3JFYWNoKChwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZy5tb3ZlVG8ocFswXSwgcFsxXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0Jlemllcikge1xuICAgICAgICAgICAgICAgIGcubGluZVRvKHBbMF0sIHBbMV0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGcuYmV6aWVyQ3VydmVUbyhwWzBdLCBwWzFdLCBwWzJdLCBwWzNdLCBwWzRdLCBwWzVdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGcuZW5kRmlsbCgpO1xuICAgIH1cbiAgICBvblNldFBvaW50cygpIHtcbiAgICAgICAgc3VwZXIub25TZXRQb2ludHMoKTtcbiAgICAgICAgdGhpcy5kcmF3UGFzc2FnZSgpO1xuICAgIH1cbiAgICBzaG93UGFzc2FnZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhc3NhZ2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMucGFzc2FnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaGlkZVBhc3NhZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXNzYWdlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnBhc3NhZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BpeGlQYXJ0aWNsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vUGl4aVBhcnRpY2xlR2VuZXJhdG9yXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9QaXhpUGFydGljbGVXYXlcIjtcbiIsImltcG9ydCB7IFBpeGlQYXJ0aWNsZUdlbmVyYXRvciB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgUGFydGljbGVXYXkgfSBmcm9tIFwiQG1hc2F0b21ha2luby9wYXJ0aWNsZS13YXlwb2ludFwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwicGl4aS5qc1wiO1xuXG4vKipcbiAqIERPTUNvbnRlbnRMb2FkZWTlvozjga7liJ3mnJ/ljJblh6bnkIbjgIJcbiAqIOODh+ODouOBq+W/heimgeOBquODkeODvOODhOOCkuS4gOW8j+WIneacn+WMluOBmeOCi+OAglxuICovXG5jb25zdCBvbkRvbUNvbnRlbnRzTG9hZGVkID0gKCkgPT4ge1xuICBjb25zdCBwb2ludHMgPSBbXG4gICAgWzEwMCwgMTAwXSxcbiAgICBbMTAwLCAyMDBdLFxuICAgIFsyMDAsIDIwMF0sXG4gICAgWzIwMCwgMzAwXSxcbiAgXTtcbiAgY29uc3Qgd2F5UG9pbnQgPSBuZXcgUGFydGljbGVXYXkocG9pbnRzKTtcblxuICBjb25zdCBhcHAgPSBuZXcgQXBwbGljYXRpb24oeyB3aWR0aDogNjQwLCBoZWlnaHQ6IDQ4MCB9KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XG4gIGNvbnN0IGdlbmVyYXRvciA9IG5ldyBQaXhpUGFydGljbGVHZW5lcmF0b3IoYXBwLnN0YWdlLCB3YXlQb2ludCwgW1xuICAgIFwiLi9jaXJjbGUucG5nXCIsXG4gIF0pO1xuICBnZW5lcmF0b3IucGxheSgpO1xufTtcblxuLyoqXG4gKiBET01Db250ZW50TG9hZGVk5Lul6ZmN44Gr5Yid5pyf5YyW5Yem55CG44KS5a6f6KGM44GZ44KLXG4gKi9cbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIikge1xuICBvbkRvbUNvbnRlbnRzTG9hZGVkKCk7XG59IGVsc2Uge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBvbkRvbUNvbnRlbnRzTG9hZGVkKTtcbn1cbiJdLCJuYW1lcyI6WyJQYXJ0aWNsZSIsIlNwcml0ZSIsIlRleHR1cmUiLCJQaXhpUGFydGljbGUiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInIiLCJyb3RhdGlvblNwZWVkU2luIiwicm90YXRpb25TcGVlZENvcyIsInJvdGF0aW9uU2luIiwicm90YXRpb25Db3MiLCJpbml0IiwicGFyZW50IiwiYml0bWFwVVJMIiwicmFuZ2VSIiwicmFuZ2VSb3RhdGlvblNwZWVkIiwiYmxlbmRNb2RlIiwidGV4dHVyZSIsImZyb20iLCJiaXRtYXAiLCJhbmNob3IiLCJzZXQiLCJhZGRDaGlsZCIsIk1hdGgiLCJyYW5kb20iLCJQSSIsInVwZGF0ZSIsInQiLCJuIiwicG9zIiwicGF0aCIsImdldFBvaW50IiwieCIsInkiLCJzaW4iLCJjb3MiLCJkaXNwb3NlIiwicmVtb3ZlQ2hpbGQiLCJQYXJ0aWNsZUdlbmVyYXRvciIsIkJMRU5EX01PREVTIiwiUGl4aVBhcnRpY2xlR2VuZXJhdG9yIiwibWFwIiwib3B0aW9uIiwiX2EiLCJtYXBDb3VudGVyIiwiX3JhbmdlUiIsIl9yYW5nZVJvdGF0aW9uU3BlZWQiLCJfYmxlbmRNb2RlIiwiTk9STUFMIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiY29uc29sZSIsIndhcm4iLCJ0cmFjZSIsImdlbmVyYXRlUGFydGljbGUiLCJwYXJ0aWNsZSIsImdlbmVyYXRlQWxsIiwidmFsdWUiLCJQYXJ0aWNsZVdheSIsIkdyYXBoaWNzIiwiUGl4aVBhcnRpY2xlV2F5IiwicG9pbnRzIiwiX2IiLCJwYXNzYWdlQ29sb3IiLCJwYXNzYWdlQWxwaGEiLCJpbml0UGFzc2FnZSIsInBhc3NhZ2UiLCJ2aXNpYmxlIiwiZHJhd1Bhc3NhZ2UiLCJpc0JlemllciIsImciLCJjbGVhciIsImxpbmVTdHlsZSIsImZvckVhY2giLCJwIiwiaW5kZXgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJiZXppZXJDdXJ2ZVRvIiwiZW5kRmlsbCIsIm9uU2V0UG9pbnRzIiwic2hvd1Bhc3NhZ2UiLCJoaWRlUGFzc2FnZSIsIkFwcGxpY2F0aW9uIiwib25Eb21Db250ZW50c0xvYWRlZCIsIndheVBvaW50IiwiYXBwIiwid2lkdGgiLCJoZWlnaHQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZpZXciLCJnZW5lcmF0b3IiLCJzdGFnZSIsInBsYXkiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///96\n')}},__webpack_module_cache__={},deferred;function __webpack_require__(Q){var U=__webpack_module_cache__[Q];if(void 0!==U)return U.exports;var F=__webpack_module_cache__[Q]={id:Q,loaded:!1,exports:{}};return __webpack_modules__[Q].call(F.exports,F,F.exports,__webpack_require__),F.loaded=!0,F.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(Q,U,F,B)=>{if(!U){var I=1/0;for(C=0;C<deferred.length;C++){for(var[U,F,B]=deferred[C],s=!0,i=0;i<U.length;i++)(!1&B||I>=B)&&Object.keys(__webpack_require__.O).every((Q=>__webpack_require__.O[Q](U[i])))?U.splice(i--,1):(s=!1,B<I&&(I=B));if(s){deferred.splice(C--,1);var g=F();void 0!==g&&(Q=g)}}return Q}B=B||0;for(var C=deferred.length;C>0&&deferred[C-1][2]>B;C--)deferred[C]=deferred[C-1];deferred[C]=[U,F,B]},__webpack_require__.n=Q=>{var U=Q&&Q.__esModule?()=>Q.default:()=>Q;return __webpack_require__.d(U,{a:U}),U},__webpack_require__.d=(Q,U)=>{for(var F in U)__webpack_require__.o(U,F)&&!__webpack_require__.o(Q,F)&&Object.defineProperty(Q,F,{enumerable:!0,get:U[F]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(Q){if("object"==typeof window)return window}}(),__webpack_require__.o=(Q,U)=>Object.prototype.hasOwnProperty.call(Q,U),__webpack_require__.nmd=Q=>(Q.paths=[],Q.children||(Q.children=[]),Q),__webpack_require__.j=702,(()=>{var Q={702:0};__webpack_require__.O.j=U=>0===Q[U];var U=(U,F)=>{var B,I,[s,i,g]=F,C=0;if(s.some((U=>0!==Q[U]))){for(B in i)__webpack_require__.o(i,B)&&(__webpack_require__.m[B]=i[B]);if(g)var n=g(__webpack_require__)}for(U&&U(F);C<s.length;C++)I=s[C],__webpack_require__.o(Q,I)&&Q[I]&&Q[I][0](),Q[I]=0;return __webpack_require__.O(n)},F=self.webpackChunk_masatomakino_pixijs_particle_waypoint=self.webpackChunk_masatomakino_pixijs_particle_waypoint||[];F.forEach(U.bind(null,0)),F.push=U.bind(null,F.push.bind(F))})();var __webpack_exports__=__webpack_require__.O(void 0,[736],(()=>__webpack_require__(96)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();