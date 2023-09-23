import { getHeartPath } from "./SamplePath.js";
import { ParticleWay, BezierUtil } from "@masatomakino/particle-waypoint";
import { PixiParticleWay } from "../esm/index.js";

/**
 * ParticleWayを初期化する。
 * @return {ParticleWay}
 */
export function initWay(stage) {
  const points = getHeartPath();
  const wayPoint = new PixiParticleWay(BezierUtil.subdivide(points), {
    parent: stage,
  });
  return wayPoint;
}
