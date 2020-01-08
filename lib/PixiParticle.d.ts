import { Particle } from "particle-waypoint";
import { Container, Sprite } from "pixi.js";
import BLEND_MODES = PIXI.BLEND_MODES;
export declare class PixiParticle extends Particle {
    protected parent: Container;
    protected bitmap: Sprite;
    protected r: number;
    protected rotationSpeedSin: number;
    protected rotationSpeedCos: number;
    protected rotationSin: number;
    protected rotationCos: number;
    init(parent: Container, bitmapURL: string, rangeR: number, rangeRotationSpeed: number, blendMode: BLEND_MODES): void;
    update(t: number): number;
    dispose(): void;
}
//# sourceMappingURL=PixiParticle.d.ts.map