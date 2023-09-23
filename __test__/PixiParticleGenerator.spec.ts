import { describe, it, expect, afterEach, vi } from "vitest";
import {
  PixiParticleGenerator,
  PixiParticleGeneratorOption,
  PixiParticleWay,
} from "../src/index.js";
import { Container } from "pixi.js";

describe("PixiParticleGenerator", () => {
  const getGenerator = (
    map: string | string[] = "./assets/particle.png",
    option?: PixiParticleGeneratorOption
  ) => {
    const parent = new Container();
    const path = new PixiParticleWay([
      [0, 0],
      [1, 1],
    ]);
    const generator = new PixiParticleGenerator(parent, path, map, option);
    return {
      parent,
      path,
      generator,
    };
  };
  const originalConsoleWarn = console.warn;
  afterEach(() => {
    console.warn = originalConsoleWarn;
  });
  it("should be constructable", () => {
    const { generator } = getGenerator();
    expect(generator).toBeTruthy();
  });

  it("should be constructable with empty map, and warn", () => {
    const mockWarn = vi.fn();
    console.warn = mockWarn;
    const { generator } = getGenerator([]);
    expect(generator).toBeTruthy();
    expect(mockWarn).toBeCalled();
  });

  it("should be able to get and set range options", () => {
    const { generator } = getGenerator();
    expect(generator.rangeR).toBe(0);
    expect(generator.rangeRotationSpeed).toBe(0);

    generator.rangeR = 1;
    generator.rangeRotationSpeed = 2;
    expect(generator.rangeR).toBe(1);
    expect(generator.rangeRotationSpeed).toBe(2);
  });

  it("should be able to set range options", () => {
    const { generator } = getGenerator("./assets/particle.png", {
      rangeR: 1,
      rangeRotationSpeed: 2,
    });
    expect(generator.rangeR).toBe(1);
    expect(generator.rangeRotationSpeed).toBe(2);
  });

  it("should be able to generate all", () => {
    const { generator, parent } = getGenerator();
    generator.animator.generationInterval = 200;
    generator.generateAll();
    expect(parent.children.length).toBe(72);
  });
});
