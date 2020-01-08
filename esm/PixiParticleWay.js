import { ParticleWay } from "particle-waypoint";
import { Graphics } from "pixi.js";
export class PixiParticleWay extends ParticleWay {
    constructor(points, option) {
        var _a, _b, _c, _d, _e;
        super(points);
        this.passageColor = 0xff0000;
        this.passageAlpha = 0.25;
        if (!option)
            return;
        this.passageColor = (_b = (_a = option) === null || _a === void 0 ? void 0 : _a.passageColor, (_b !== null && _b !== void 0 ? _b : this.passageColor));
        this.passageAlpha = (_d = (_c = option) === null || _c === void 0 ? void 0 : _c.passageAlpha, (_d !== null && _d !== void 0 ? _d : this.passageAlpha));
        if ((_e = option) === null || _e === void 0 ? void 0 : _e.parent) {
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
