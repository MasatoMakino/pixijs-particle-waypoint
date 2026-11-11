import { afterEach, describe, expect, it, vi } from "vitest";
import { PixiParticle } from "../src/index.js";
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { Assets, Container } from "pixi.js";
import { TestImage } from "./TestImage.js";

describe("PixiParticle", () => {
  const originalRandom = Math.random;
  afterEach(() => {
    Math.random = originalRandom;
  });

  const getParticle = () => {
    const path = new ParticleWay([
      [0, 0],
      [1, 1],
    ]);
    const particle = new PixiParticle(path);
    return {
      path,
      particle,
    };
  };

  it("init adds the sprite to the parent", async () => {
    const { particle } = getParticle();
    const parent = new Container();
    await Assets.load([TestImage]);
    particle.init(parent, TestImage, 0, 0, "normal");
    expect(parent.children.length).toBe(1);
  });

  it("update places the sprite at the path point", async () => {
    const { particle } = getParticle();
    const parent = new Container();
    await Assets.load([TestImage]);
    particle.init(parent, TestImage, 0, 0, "normal");
    particle.update(0.5);
    expect(particle.bitmap.x).toBe(0.5);
    expect(particle.bitmap.y).toBe(0.5);
  });

  it("update throws after dispose, because dispose releases the sprite", async () => {
    const { particle } = getParticle();
    const parent = new Container();
    await Assets.load([TestImage]);
    particle.init(parent, TestImage, 0, 0, "normal");
    particle.dispose();
    expect(() => particle.update(0.5)).toThrow();
  });

  it("update offsets the sprite from the path point by rangeR", async () => {
    Math.random = vi.fn(() => 1);
    const { particle } = getParticle();
    const parent = new Container();
    await Assets.load([TestImage]);
    particle.init(parent, TestImage, 1, 0, "normal");
    particle.update(0.5);
    expect(particle.bitmap.x).toBeCloseTo(1.5);
    expect(particle.bitmap.y).toBeCloseTo(0.5);
  });
});
