import { defineConfig } from "vite";
import path from "path";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  build: {
    rollupOptions: {
      main: path.resolve(__dirname, "index.html"),
    },
  },
  plugins: [
    postcss({
      plugins: [tailwindcss, autoprefixer],
    }),
  ],
});
