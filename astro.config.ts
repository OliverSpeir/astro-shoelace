import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import { viteStaticCopy } from "vite-plugin-static-copy";

const config: AstroUserConfig = defineConfig({
  vite: {
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/@shoelace-style/shoelace/dist/assets/**/*",
            dest: "./shoelace/assets",
          },
        ],
      }),
    ],
  },
});

export default defineConfig(config);
