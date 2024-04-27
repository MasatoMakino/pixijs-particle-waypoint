import { describe, it, expect, afterEach, vi } from "vitest";
import {
  PixiParticleGenerator,
  PixiParticleGeneratorOption,
  PixiParticleWay,
} from "../src/index.js";
import { Container } from "pixi.js";
import { TestImage } from "./TestImage.js";

describe("PixiParticleGenerator", () => {
  const createGenerator = (
    map: string | string[] = TestImage,
    option?: PixiParticleGeneratorOption,
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

  const getGenerator = async (
    map: string | string[] = TestImage,
    option?: PixiParticleGeneratorOption,
  ) => {
    const { parent, path, generator } = createGenerator(map, option);
    await generator.initAssets();
    return {
      parent,
      path,
      generator,
    };
  };

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should be constructable", async () => {
    const { generator } = await getGenerator();
    expect(generator).toBeTruthy();
  });

  it("should be constructable with empty map, and warn", async () => {
    const mockWarn = vi.spyOn(console, "warn");
    const { generator } = await getGenerator([]);
    expect(generator).toBeTruthy();
    expect(mockWarn).toBeCalled();
  });

  it("should not able to generate particle without init", () => {
    const { generator } = createGenerator();
    expect(() => generator.generateAll()).toThrow();
  });

  it("should be able to get and set range options", async () => {
    const { generator } = await getGenerator();
    expect(generator.rangeR).toBe(0);
    expect(generator.rangeRotationSpeed).toBe(0);

    generator.rangeR = 1;
    generator.rangeRotationSpeed = 2;
    expect(generator.rangeR).toBe(1);
    expect(generator.rangeRotationSpeed).toBe(2);
  });

  it("should be able to set range options", async () => {
    const { generator } = await getGenerator(TestImage, {
      rangeR: 1,
      rangeRotationSpeed: 2,
    });
    expect(generator.rangeR).toBe(1);
    expect(generator.rangeRotationSpeed).toBe(2);
  });

  it("should be able to generate all", async () => {
    const { generator, parent } = await getGenerator();
    generator.animator.generationInterval = 200;
    generator.generateAll();
    expect(parent.children.length).toBe(72);
  });
});
