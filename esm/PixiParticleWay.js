import { ParticleWay } from "particle-waypoint";
import { Graphics } from "pixi.js";
export class PixiParticleWay extends ParticleWay {
    constructor(points, option) {
        var _a, _b;
        super(points);
        this.passageColor = 0xff0000;
        this.passageAlpha = 0.25;
        if (!option)
            return;
        this.passageColor = (_a = option === null || option === void 0 ? void 0 : option.passageColor) !== null && _a !== void 0 ? _a : this.passageColor;
        this.passageAlpha = (_b = option === null || option === void 0 ? void 0 : option.passageAlpha) !== null && _b !== void 0 ? _b : this.passageAlpha;
        if (option === null || option === void 0 ? void 0 : option.parent) {
            this.initPassage(option.parent);
        }
    }
    initPassage(parent) {
        if (this.passage)
            return;
        this.passage = new Graphics();
        this.passage.visible = false;
        parent.addChild(this.passage);
        this.drawPassage();
    }
    drawPassage() {
        if (!this.passage)
            return;
        if (!this.points)
            return;
        if (this.points.length <= 1)
            return;
        const isBezier = this.points[1].length === 6;
        const g = this.passage;
        g.clear().lineStyle(1, this.passageColor, this.passageAlpha);
        this.points.forEach((p, index) => {
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
    }
    onSetPoints() {
        super.onSetPoints();
        this.drawPassage();
    }
    showPassage() {
        if (!this.passage)
            return;
        this.passage.visible = true;
    }
    hidePassage() {
        if (!this.passage)
            return;
        this.passage.visible = false;
    }
}
