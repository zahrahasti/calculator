import icon from "astro-icon";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    icon({
      include: {
        lucide: ["plus", "minus", "x", "divide", "delete", "trash-2"],
      },
    }),
  ],
  base: "calculator",
  trailingSlash: "ignore",
  build: {
    format: "file",
    assets: "assets",
  },
  server: {
    port: 3000,
    host: "127.0.0.1",
    open: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
