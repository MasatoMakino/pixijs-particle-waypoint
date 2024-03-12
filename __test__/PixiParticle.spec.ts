import { afterEach, describe, expect, it, vi } from "vitest";
import { PixiParticle } from "../src/index.js";
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { Container } from "pixi.js";

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
  it("should be constructable", () => {
    const { particle } = getParticle();
    expect(particle).toBeTruthy();
  });

  it("should be able to init", () => {
    const { particle } = getParticle();
    const parent = new Container();
    const bitmapURL = "./assets/particle.png";
    particle.init(parent, bitmapURL, 0, 0, "normal");
    expect(parent.children.length).toBe(1);
  });

  it("should be able to update", () => {
    const { particle } = getParticle();
    const parent = new Container();
    const bitmapURL = "./assets/particle.png";
    particle.init(parent, bitmapURL, 0, 0, "normal");
    particle.update(0.5);
    expect(particle.bitmap.x).toBe(0.5);
    expect(particle.bitmap.y).toBe(0.5);
  });

  it.fails("update after dispose", () => {
    const { particle } = getParticle();
    const parent = new Container();
    const bitmapURL = "./assets/particle.png";
    particle.init(parent, bitmapURL, 0, 0, "normal");
    particle.dispose();
    particle.update(0.5); //undefined particle._bitmap
  });

  it("should be able to update with r", () => {
    Math.random = vi.fn(() => 1);
    const { particle } = getParticle();
    const parent = new Container();
    const bitmapURL = "./assets/particle.png";
    particle.init(parent, bitmapURL, 1, 0, "normal");
    particle.update(0.5);
    expect(particle.bitmap.x).toBeCloseTo(1.5);
    expect(particle.bitmap.y).toBeCloseTo(0.5);
  });
});
