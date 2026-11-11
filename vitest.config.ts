import { defineConfig } from "vitest/config";

// The DevContainer sets both to the Debian packages. CI leaves them unset and
// uses the runner's Chrome with a driver that WebdriverIO downloads.
const chromeBinary = process.env.CHROME_BIN;
const chromedriverBinary = process.env.CHROMEDRIVER_BIN;

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: "webdriverio",
      headless: true,
      screenshotFailures: false,
      instances: [
        {
          browser: "chrome",
          capabilities: {
            "goog:chromeOptions": {
              args: [
                // The DevContainer keeps the default seccomp profile, which blocks
                // the user namespaces that the Chromium sandbox needs.
                ...(chromeBinary ? ["--no-sandbox"] : []),
                "--use-gl=angle",
                "--use-angle=swiftshader",
                "--disable-background-networking",
              ],
              ...(chromeBinary && { binary: chromeBinary }),
            },
            ...(chromedriverBinary && {
              "wdio:chromedriverOptions": { binary: chromedriverBinary },
            }),
          },
        },
      ],
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
    },
  },
});
