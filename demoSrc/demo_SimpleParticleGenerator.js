import { PixiParticleGenerator } from "../esm/index.js";
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { Application } from "pixi.js";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = async () => {
  const points = [
    [100, 100],
    [100, 200],
    [200, 200],
    [200, 300],
  ];
  const wayPoint = new ParticleWay(points);

  const app = new Application();
  await app.init({ width: 640, height: 480 });
  document.body.appendChild(app.canvas);
  const generator = new PixiParticleGenerator(app.stage, wayPoint, [
    "./circle.png",
  ]);
  await generator.initAssets();
  generator.play();
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
