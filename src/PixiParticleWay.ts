import { ParticleWay } from "@masatomakino/particle-waypoint";
import { Graphics, Container } from "pixi.js";

export class PixiParticleWay extends ParticleWay {
  private passage: Graphics;
  private passageColor: number = 0xff0000;
  private passageAlpha: number = 0.25;

  constructor(
    points: number[][],
    option?: {
      parent?: Container;
      passageColor?: number;
      passageAlpha?: number;
    },
  ) {
    super(points);

    if (!option) return;

    this.passageColor = option?.passageColor ?? this.passageColor;
    this.passageAlpha = option?.passageAlpha ?? this.passageAlpha;
    if (option?.parent) {
      this.initPassage(option.parent);
    }
  }

  private initPassage(parent: Container): void {
    if (this.passage) return;

    this.passage = new Graphics();
    this.passage.visible = false;
    parent.addChild(this.passage);
    this.drawPassage();
  }

  private drawPassage(): void {
    if (!this.passage) return;
    if (!this.points) return;
    if (this.points.length <= 1) return;

    const isBezier = this.points[1].length === 6;

    const g = this.passage;
    g.clear();
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
    g.stroke({ width: 1, color: this.passageColor, alpha: this.passageAlpha });
  }

  protected onSetPoints(): void {
    super.onSetPoints();
    this.drawPassage();
  }

  public showPassage(): void {
    if (!this.passage) return;
    this.passage.visible = true;
  }
  public hidePassage(): void {
    if (!this.passage) return;
    this.passage.visible = false;
  }
}
