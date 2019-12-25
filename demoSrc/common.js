import { getHeartPath } from "./SamplePath";
import { ParticleWay, BezierUtil } from "particle-waypoint";

/**
 * ParticleWayを初期化する。
 * @return {ParticleWay}
 */
export function initWay() {
  const points = getHeartPath();
  const wayPoint = new ParticleWay(BezierUtil.subdivide(points));
  return wayPoint;
}
