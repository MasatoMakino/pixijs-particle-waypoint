import { ParticleGenerator, Particle, ParticleWay, ParticleGeneratorOption } from "particle-waypoint";
import Container = PIXI.Container;
export declare class PixiParticleGenerator extends ParticleGenerator {
    protected parent: Container;
    protected map: string[];
    private mapCounter;
    private _rangeR;
    private _rangeRotationSpeed;
    constructor(parent: Container, path: ParticleWay | ParticleWay[], map: string | string[], option?: CanvasParticleGeneratorOption);
    protected generateParticle(path: ParticleWay): Particle;
    generateAll(): void;
    get rangeRotationSpeed(): number;
    set rangeRotationSpeed(value: number);
    get rangeR(): number;
    set rangeR(value: number);
}
export interface CanvasParticleGeneratorOption extends ParticleGeneratorOption {
    rangeR?: number;
    rangeRotationSpeed?: number;
}
//# sourceMappingURL=PixiParticleGenerator.d.ts.map