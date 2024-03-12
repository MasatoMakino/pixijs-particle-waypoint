import { Particle } from "@masatomakino/particle-waypoint";
import { Container, Sprite, BLEND_MODES, Assets } from "pixi.js";

export class PixiParticle extends Particle {
  get bitmap(): Sprite {
    return this._bitmap;
  }
  protected parent: Container;
  private _bitmap?: Sprite;

  protected r: number = 0.0;
  //媒介変数tに応じた回転量
  protected rotationSpeedSin: number = 0.0;
  protected rotationSpeedCos: number = 0.0;
  //初期回転量
  protected rotationSin: number = 0.0;
  protected rotationCos: number = 0.0;

  init(
    parent: Container,
    bitmapURL: string,
    rangeR: number,
    rangeRotationSpeed: number,
    blendMode: BLEND_MODES,
  ) {
    this.parent = parent;
    this._bitmap = Sprite.from(bitmapURL);
    this._bitmap.anchor.set(0.5, 0.5);
    this._bitmap.blendMode = blendMode;

    this.parent.addChild(this._bitmap);

    this.r = rangeR * Math.random();
    this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);
    this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);
    this.rotationSin = Math.random() * 2 * Math.PI;
    this.rotationCos = Math.random() * 2 * Math.PI;
  }

  update(t: number): number {
    const n = super.update(t);
    const pos = this.path.getPoint(n);
    this._bitmap.x = pos[0];
    this._bitmap.y = pos[1];

    if (this.r > 0.0) {
      const sin = this.rotationSpeedSin * t + this.rotationSin;
      const cos = this.rotationSpeedCos * t + this.rotationCos;
      this._bitmap.x += Math.cos(cos) * this.r;
      this._bitmap.y += Math.sin(sin) * this.r;
    }

    return n;
  }

  dispose(): void {
    super.dispose();
    if (this.parent && this._bitmap.parent) {
      this._bitmap.parent.removeChild(this._bitmap);
    }
    this.parent = null;
    this._bitmap = null;
  }
}
