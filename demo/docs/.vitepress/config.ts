import { defineConfig } from "vitepress";

export default defineConfig({
  vite:{
    ssr: {
      noExternal: ['segmentit']
    }
  },

  outDir: "./.vitepress/out",
  base: "/test/",
  // srcExclude: ["subfolder"],
});
