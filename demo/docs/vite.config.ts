import { SearchPlugin } from "@fast-crud/vitepress-plugin-search";
import { defineConfig } from "vite";
import path from "path";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [
    SearchPlugin({
      placeholder: "Procure por algo!",
      buttonLabel: "Procurar",
      previewLength: 10,
    }),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["../.."],
    },
  },
});
