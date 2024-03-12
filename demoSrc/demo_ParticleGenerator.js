import { BezierUtil } from "@masatomakino/particle-waypoint";
import { PixiParticleGenerator } from "../esm/index.js";
import { getCircle, getHeartPath, getTriangle } from "./SamplePath.js";
import { initWay } from "./common.js";
import GUI from "lil-gui";
import { Application } from "pixi.js";
import TWEEN from "@tweenjs/tween.js";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = async () => {
  const app = new Application();
  await app.init({ width: 640, height: 480 });
  document.body.appendChild(app.canvas);

  const way = initWay(app.stage);
  const generator = initGenerator(way, app.stage);
  await generator.initAssets();
  generator.play();
  initGUI(generator);
};

/**
 * パーティクル生成機を初期化する。
 * @param way
 * @param stage
 * @return {PixiParticleGenerator}
 */
const initGenerator = (way, stage) => {
  const bitmap = [];
  for (let i = 0; i < 12; i++) {
    bitmap.push(`./circle${(i + 1).toString().padStart(2, "0")}.png`);
  }

  const generator = new PixiParticleGenerator(stage, way, bitmap, {
    ease: TWEEN.Easing.Cubic.InOut,
    blendMode: "add",
  });
  generator.animator.setSpeed(166, 8 * 6);
  return generator;
};

/**
 * デモのパラメーターを操作するGUIを初期化する。
 * @param generator
 */
const initGUI = (generator) => {
  const prop = {
    isPlay: true,
    path: "heart",
    ease: "cubicInOut",
    valve: true,
    mode: "sequential",
    visiblePassage: false,
    clear: () => {
      generator.particleContainer.removeAll();
    },
  };
  const gui = new GUI();
  const animator = generator.animator;
  gui.add(animator, "generationInterval", 1, 1000);
  gui.add(animator, "speedPerSec", 0.0001, 0.5);

  gui.add(generator, "rangeR", 0.0, 32.0, 0.1);
  gui.add(generator, "rangeRotationSpeed", 0.0, 3.14 * 4, 0.01);

  gui.add(prop, "ease", ["cubicOut", "cubicInOut", "liner"]).onChange(() => {
    let ease = null;
    switch (prop.ease) {
      case "cubicOut":
        ease = TWEEN.Easing.Cubic.Out;
        break;
      case "cubicInOut":
        ease = TWEEN.Easing.Cubic.InOut;
        break;
    }
    animator.updateEase(ease, generator.isLoop);
  });
  gui.add(prop, "path", ["heart", "circle", "triangle"]).onChange(() => {
    let path;
    switch (prop.path) {
      case "heart":
        path = BezierUtil.subdivide(getHeartPath());
        break;
      case "circle":
        path = BezierUtil.subdivide(getCircle());
        break;
      case "triangle":
        path = getTriangle();
        break;
    }
    generator.path[0].points = path;
  });
  gui.add(prop, "isPlay").onChange(() => {
    if (prop.isPlay) {
      generator.play();
    } else {
      generator.stop();
    }
  });
  const modeManager = generator.modeManager;
  gui.add(modeManager, "mode", ["sequential", "loop"]);
  gui.add(prop, "valve").onChange(() => {
    const valve = generator.valve;
    if (prop.valve) {
      valve.open();
    } else {
      valve.close();
    }
  });
  gui.add(prop, "visiblePassage").onChange(() => {
    const ways = generator.multipleWays.ways;
    if (prop.visiblePassage) {
      ways[0].showPassage();
    } else {
      ways[0].hidePassage();
    }
  });
  gui.add(prop, "clear");
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
