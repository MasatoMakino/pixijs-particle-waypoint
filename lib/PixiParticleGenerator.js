"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PixiParticle_1 = require("./PixiParticle");
var particle_waypoint_1 = require("particle-waypoint");
var pixi_js_1 = require("pixi.js");
var PixiParticleGenerator = /** @class */ (function (_super) {
    __extends(PixiParticleGenerator, _super);
    function PixiParticleGenerator(parent, path, map, option) {
        var _a;
        var _this = _super.call(this, path, option) || this;
        _this.mapCounter = 0;
        _this._rangeR = 0.0;
        _this._rangeRotationSpeed = 0.0;
        _this.parent = parent;
        if (option) {
            if (option.rangeR)
                _this._rangeR = option.rangeR;
            if (option.rangeRotationSpeed)
                _this._rangeRotationSpeed = option.rangeRotationSpeed;
        }
        _this._blendMode = (_a = option === null || option === void 0 ? void 0 : option.blendMode) !== null && _a !== void 0 ? _a : pixi_js_1.BLEND_MODES.NORMAL;
        if (Array.isArray(map)) {
            if (map.length === 0) {
                console.warn("PixiParticleGenerator : オプションとして渡されたテクスチャ配列が空です。このクラスは動作しますが、一切の表示を行いません。");
                console.trace();
            }
            _this.map = map;
        }
        else {
            _this.map = [map];
        }
        return _this;
    }
    PixiParticleGenerator.prototype.generateParticle = function (path) {
        var particle = new PixiParticle_1.PixiParticle(path);
        particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed, this._blendMode);
        this.mapCounter = (this.mapCounter += 1) % this.map.length;
        return particle;
    };
    PixiParticleGenerator.prototype.generateAll = function () {
        this.mapCounter = 0;
        _super.prototype.generateAll.call(this);
    };
    Object.defineProperty(PixiParticleGenerator.prototype, "rangeRotationSpeed", {
        get: function () {
            return this._rangeRotationSpeed;
        },
        set: function (value) {
            this._rangeRotationSpeed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PixiParticleGenerator.prototype, "rangeR", {
        get: function () {
            return this._rangeR;
        },
        set: function (value) {
            this._rangeR = value;
        },
        enumerable: true,
        configurable: true
    });
    return PixiParticleGenerator;
}(particle_waypoint_1.ParticleGenerator));
exports.PixiParticleGenerator = PixiParticleGenerator;
