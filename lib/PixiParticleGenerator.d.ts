import { Particle, ParticleGenerator, ParticleGeneratorOption } from "particle-waypoint";
import { Container, BLEND_MODES } from "pixi.js";
import { PixiParticleWay } from "./PixiParticleWay";
export declare class PixiParticleGenerator extends ParticleGenerator {
    protected parent: Container;
    protected map: string[];
    private mapCounter;
    private _rangeR;
    private _rangeRotationSpeed;
    private _blendMode;
    constructor(parent: Container, path: PixiParticleWay | PixiParticleWay[], map: string | string[], option?: PixiParticleGeneratorOption);
    protected generateParticle(path: PixiParticleWay): Particle;
    generateAll(): void;
    get rangeRotationSpeed(): number;
    set rangeRotationSpeed(value: number);
    get rangeR(): number;
    set rangeR(value: number);
}
export interface PixiParticleGeneratorOption extends ParticleGeneratorOption {
    rangeR?: number;
    rangeRotationSpeed?: number;
    blendMode?: BLEND_MODES;
}
//# sourceMappingURL=PixiParticleGenerator.d.ts.map