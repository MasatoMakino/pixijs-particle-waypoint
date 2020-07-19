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
exports.PixiParticleWay = void 0;
var particle_waypoint_1 = require("particle-waypoint");
var pixi_js_1 = require("pixi.js");
var PixiParticleWay = /** @class */ (function (_super) {
    __extends(PixiParticleWay, _super);
    function PixiParticleWay(points, option) {
        var _a, _b;
        var _this = _super.call(this, points) || this;
        _this.passageColor = 0xff0000;
        _this.passageAlpha = 0.25;
        if (!option)
            return _this;
        _this.passageColor = (_a = option === null || option === void 0 ? void 0 : option.passageColor) !== null && _a !== void 0 ? _a : _this.passageColor;
        _this.passageAlpha = (_b = option === null || option === void 0 ? void 0 : option.passageAlpha) !== null && _b !== void 0 ? _b : _this.passageAlpha;
        if (option === null || option === void 0 ? void 0 : option.parent) {
            _this.initPassage(option.parent);
        }
        return _this;
    }
    PixiParticleWay.prototype.initPassage = function (parent) {
        if (this.passage)
            return;
        this.passage = new pixi_js_1.Graphics();
        this.passage.visible = false;
        parent.addChild(this.passage);
        this.drawPassage();
    };
    PixiParticleWay.prototype.drawPassage = function () {
        if (!this.passage)
            return;
        if (!this.points)
            return;
        if (this.points.length <= 1)
            return;
        var isBezier = this.points[1].length === 6;
        var g = this.passage;
        g.clear().lineStyle(1, this.passageColor, this.passageAlpha);
        this.points.forEach(function (p, index) {
            if (index === 0) {
                g.moveTo(p[0], p[1]);
                return;
            }
            if (!isBezier) {
                g.lineTo(p[0], p[1]);
                return;
            }
            g.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
        });
        g.endFill();
    };
    PixiParticleWay.prototype.onSetPoints = function () {
        _super.prototype.onSetPoints.call(this);
        this.drawPassage();
    };
    PixiParticleWay.prototype.showPassage = function () {
        if (!this.passage)
            return;
        this.passage.visible = true;
    };
    PixiParticleWay.prototype.hidePassage = function () {
        if (!this.passage)
            return;
        this.passage.visible = false;
    };
    return PixiParticleWay;
}(particle_waypoint_1.ParticleWay));
exports.PixiParticleWay = PixiParticleWay;
