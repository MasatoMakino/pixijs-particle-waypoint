"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixiParticle = void 0;
var particle_waypoint_1 = require("particle-waypoint");
var pixi_js_1 = require("pixi.js");
var PixiParticle = /** @class */ (function (_super) {
    __extends(PixiParticle, _super);
    function PixiParticle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.r = 0.0;
        //媒介変数tに応じた回転量
        _this.rotationSpeedSin = 0.0;
        _this.rotationSpeedCos = 0.0;
        //初期回転量
        _this.rotationSin = 0.0;
        _this.rotationCos = 0.0;
        return _this;
    }
    PixiParticle.prototype.init = function (parent, bitmapURL, rangeR, rangeRotationSpeed, blendMode) {
        this.parent = parent;
        var texture = pixi_js_1.Texture.from(bitmapURL);
        this.bitmap = new pixi_js_1.Sprite(texture);
        this.bitmap.anchor.set(0.5, 0.5);
        this.bitmap.blendMode = blendMode;
        this.parent.addChild(this.bitmap);
        this.r = rangeR * Math.random();
        this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSin = Math.random() * 2 * Math.PI;
        this.rotationCos = Math.random() * 2 * Math.PI;
    };
    PixiParticle.prototype.update = function (t) {
        var n = _super.prototype.update.call(this, t);
        var pos = this.path.getPoint(n);
        this.bitmap.x = pos[0];
        this.bitmap.y = pos[1];
        if (this.r > 0.0) {
            var sin = this.rotationSpeedSin * t + this.rotationSin;
            var cos = this.rotationSpeedCos * t + this.rotationCos;
            this.bitmap.x += Math.cos(cos) * this.r;
            this.bitmap.y += Math.sin(sin) * this.r;
        }
        return n;
    };
    PixiParticle.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this.parent && this.bitmap.parent) {
            this.bitmap.parent.removeChild(this.bitmap);
        }
        this.parent = null;
        this.bitmap = null;
    };
    return PixiParticle;
}(particle_waypoint_1.Particle));
exports.PixiParticle = PixiParticle;
