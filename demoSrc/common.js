import { getHeartPath } from "./SamplePath";
import { ParticleWay, BezierUtil } from "@masatomakino/particle-waypoint";
import { PixiParticleWay } from "..";

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
