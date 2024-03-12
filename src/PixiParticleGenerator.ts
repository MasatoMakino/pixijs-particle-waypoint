import {
  Particle,
  ParticleGenerator,
  ParticleGeneratorOption,
} from "@masatomakino/particle-waypoint";
import { Container, BLEND_MODES, Assets } from "pixi.js";
import { PixiParticle, PixiParticleWay } from "./index.js";

export class PixiParticleGenerator extends ParticleGenerator {
  protected parent: Container;
  protected map: string[]; //パーティクルに使用するテクスチャ配列。
  private mapCounter: number = 0;

  private _rangeR: number;
  private _rangeRotationSpeed: number;
  private _blendMode: BLEND_MODES;

  constructor(
    parent: Container,
    path: PixiParticleWay | PixiParticleWay[],
    map: string | string[],
    option?: PixiParticleGeneratorOption,
  ) {
    super(path, option);

    this.parent = parent;

    this._rangeR = option?.rangeR ?? 0;
    this._rangeRotationSpeed = option?.rangeRotationSpeed ?? 0;
    this._blendMode = option?.blendMode ?? "normal";

    if (Array.isArray(map)) {
      if (map.length === 0) {
        console.warn(
          "PixiParticleGenerator : オプションとして渡されたテクスチャ配列が空です。このクラスは動作しますが、一切の表示を行いません。",
        );
        console.trace();
      }

      this.map = map;
    } else {
      this.map = [map];
    }
  }

  async initAssets() {
    await Assets.load(this.map);
  }

  protected generateParticle(path: PixiParticleWay): Particle {
    const particle = new PixiParticle(path);
    particle.init(
      this.parent,
      this.map[this.mapCounter],
      this._rangeR,
      this._rangeRotationSpeed,
      this._blendMode,
    );
    this.mapCounter = (this.mapCounter += 1) % this.map.length;
    return particle;
  }

  public generateAll(): void {
    this.mapCounter = 0;
    super.generateAll();
  }

  get rangeRotationSpeed(): number {
    return this._rangeRotationSpeed;
  }

  set rangeRotationSpeed(value: number) {
    this._rangeRotationSpeed = value;
  }
  get rangeR(): number {
    return this._rangeR;
  }

  set rangeR(value: number) {
    this._rangeR = value;
  }
}

export interface PixiParticleGeneratorOption extends ParticleGeneratorOption {
  rangeR?: number;
  rangeRotationSpeed?: number;
  blendMode?: BLEND_MODES;
}
