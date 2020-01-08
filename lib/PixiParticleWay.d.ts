import { ParticleWay } from "particle-waypoint";
import { Container } from "pixi.js";
export declare class PixiParticleWay extends ParticleWay {
    private passage;
    private passageColor;
    private passageAlpha;
    constructor(points: number[][], option?: {
        parent?: Container;
        passageColor?: number;
        passageAlpha?: number;
    });
    private initPassage;
    private drawPassage;
    protected onSetPoints(): void;
    showPassage(): void;
    hidePassage(): void;
}
//# sourceMappingURL=PixiParticleWay.d.ts.map