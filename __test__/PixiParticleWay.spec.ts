import { describe, it, vi, afterEach, expect } from "vitest";
import { PixiParticleWay } from "../src/index.js";
import { Container } from "pixi.js";

describe("PixiParticleWay", () => {
  it("should be constructable", () => {
    const particleWay = new PixiParticleWay([
      [0, 0],
      [1, 1],
    ]);
    expect(particleWay).toBeTruthy();
  });

  it("should draw passage", () => {
    const parent = new Container();
    const particleWay = new PixiParticleWay(
      [
        [0, 0],
        [1, 1],
      ],
      {
        parent,
      }
    );

    expect(parent.children.length).toBe(1);
  });

  it.fails("draw passage with single point", () => {
    const parent = new Container();
    const particleWay = new PixiParticleWay([[0, 0]], {
      parent,
    });
    expect(parent.children.length).toBe(0);
  });

  it("should be able to switching passage visible", () => {
    const parent = new Container();
    const particleWay = new PixiParticleWay(
      [
        [0, 0],
        [1, 1],
      ],
      { parent }
    );

    const passage = parent.children[0];
    expect(passage.visible).toBe(false);

    particleWay.showPassage();
    expect(passage.visible).toBe(true);

    particleWay.hidePassage();
    expect(passage.visible).toBe(false);
  });
});
