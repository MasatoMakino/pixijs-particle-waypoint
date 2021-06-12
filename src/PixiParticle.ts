import { Particle } from "particle-waypoint";
import * as PIXI from "pixi.js";
import { Container, Sprite, Texture } from "pixi.js";
import BLEND_MODES = PIXI.BLEND_MODES;

export class PixiParticle extends Particle {
  protected parent: Container;
  protected bitmap: Sprite;

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
    blendMode: BLEND_MODES
  ): void {
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

  update(t: number): number {
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

  dispose(): void {
    super.dispose();
    if (this.parent && this.bitmap.parent) {
      this.bitmap.parent.removeChild(this.bitmap);
    }
    this.parent = null;
    this.bitmap = null;
  }
}
