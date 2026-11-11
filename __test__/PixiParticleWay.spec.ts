import { describe, it, expect } from "vitest";
import { PixiParticleWay } from "../src/index.js";
import { Container } from "pixi.js";

describe("PixiParticleWay", () => {
  it("adds the passage to the parent option", () => {
    const parent = new Container();
    new PixiParticleWay(
      [
        [0, 0],
        [1, 1],
      ],
      {
        parent,
      },
    );

    expect(parent.children.length).toBe(1);
  });

  it("passage starts hidden and toggles with showPassage and hidePassage", () => {
    const parent = new Container();
    const particleWay = new PixiParticleWay(
      [
        [0, 0],
        [1, 1],
      ],
      { parent },
    );

    const passage = parent.children[0];
    expect(passage.visible).toBe(false);

    particleWay.showPassage();
    expect(passage.visible).toBe(true);

    particleWay.hidePassage();
    expect(passage.visible).toBe(false);
  });
});
