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

  it("warns when the texture list is empty", async () => {
    const mockWarn = vi.spyOn(console, "warn");
    await getGenerator([]);
    expect(mockWarn).toBeCalled();
  });

  it("generateAll throws before initAssets loads the textures", () => {
    const { generator } = createGenerator();
    expect(() => generator.generateAll()).toThrow();
  });

  it("constructor option sets the ranges", async () => {
    const { generator } = await getGenerator(TestImage, {
      rangeR: 1,
      rangeRotationSpeed: 2,
    });
    expect(generator.rangeR).toBe(1);
    expect(generator.rangeRotationSpeed).toBe(2);
  });

  it("generateAll fills the path at the generation interval", async () => {
    const { generator, parent } = await getGenerator();
    generator.animator.generationInterval = 200;
    generator.generateAll();
    expect(parent.children.length).toBe(72);
  });
});
