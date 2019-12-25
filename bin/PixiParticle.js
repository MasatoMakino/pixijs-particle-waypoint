import { Particle } from "particle-waypoint";
import { Sprite, Texture } from "pixi.js";
export class PixiParticle extends Particle {
    constructor() {
        super(...arguments);
        this.r = 0.0;
        //媒介変数tに応じた回転量
        this.rotationSpeedSin = 0.0;
        this.rotationSpeedCos = 0.0;
        //初期回転量
        this.rotationSin = 0.0;
        this.rotationCos = 0.0;
    }
    init(parent, bitmapURL, rangeR, rangeRotationSpeed, blendMode) {
        this.parent = parent;
        const texture = Texture.from(bitmapURL);
        this.bitmap = new Sprite(texture);
        this.bitmap.anchor.set(0.5, 0.5);
        this.bitmap.blendMode = blendMode;
        this.parent.addChild(this.bitmap);
        this.r = rangeR * Math.random();
        this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSin = Math.random() * 2 * Math.PI;
        this.rotationCos = Math.random() * 2 * Math.PI;
    }
    update(t) {
        const n = super.update(t);
        const pos = this.path.getPoint(n);
        this.bitmap.x = pos[0];
        this.bitmap.y = pos[1];
        if (this.r > 0.0) {
            const sin = this.rotationSpeedSin * t + this.rotationSin;
            const cos = this.rotationSpeedCos * t + this.rotationCos;
            this.bitmap.x += Math.cos(cos) * this.r;
            this.bitmap.y += Math.sin(sin) * this.r;
        }
        return n;
    }
    dispose() {
        super.dispose();
        if (this.parent && this.bitmap.parent) {
            this.bitmap.parent.removeChild(this.bitmap);
        }
        this.parent = null;
        this.bitmap = null;
    }
}
