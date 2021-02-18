import { PixiParticle } from "./PixiParticle";
import { ParticleGenerator } from "particle-waypoint";
import { BLEND_MODES } from "pixi.js";
export class PixiParticleGenerator extends ParticleGenerator {
    constructor(parent, path, map, option) {
        var _a;
        super(path, option);
        this.mapCounter = 0;
        this._rangeR = 0.0;
        this._rangeRotationSpeed = 0.0;
        this.parent = parent;
        if (option) {
            if (option.rangeR)
                this._rangeR = option.rangeR;
            if (option.rangeRotationSpeed)
                this._rangeRotationSpeed = option.rangeRotationSpeed;
        }
        this._blendMode = (_a = option === null || option === void 0 ? void 0 : option.blendMode) !== null && _a !== void 0 ? _a : BLEND_MODES.NORMAL;
        if (Array.isArray(map)) {
            if (map.length === 0) {
                console.warn("PixiParticleGenerator : オプションとして渡されたテクスチャ配列が空です。このクラスは動作しますが、一切の表示を行いません。");
                console.trace();
            }
            this.map = map;
        }
        else {
            this.map = [map];
        }
    }
    generateParticle(path) {
        const particle = new PixiParticle(path);
        particle.init(this.parent, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed, this._blendMode);
        this.mapCounter = (this.mapCounter += 1) % this.map.length;
        return particle;
    }
    generateAll() {
        this.mapCounter = 0;
        super.generateAll();
    }
    get rangeRotationSpeed() {
        return this._rangeRotationSpeed;
    }
    set rangeRotationSpeed(value) {
        this._rangeRotationSpeed = value;
    }
    get rangeR() {
        return this._rangeR;
    }
    set rangeR(value) {
        this._rangeR = value;
    }
}
