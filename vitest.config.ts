import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "jsdomTest",
    environment: "jsdom",
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
    },
  },
});
