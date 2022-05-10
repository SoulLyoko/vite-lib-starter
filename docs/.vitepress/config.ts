import { defineConfig } from "vitepress";
import path from "path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "../../src"),
        "~": path.join(__dirname, "../../packages")
      }
    }
  },
  base: "/vite-lib-starter/",
  lang: "zh-CN",
  title: "vite-lib-starter",
  description: "vite-lib-starter",
  themeConfig: {
    repo: "SoulLyoko/vite-lib-starter",
    nav: [],
    sidebar: {
      "/": [
        { text: "CHANGELOG", link: "/CHANGELOG" },
        { text: "Quick Start", link: "/" },
        {
          text: "Examples",
          children: [
            { text: "Input", link: "/examples/input/index" },
            { text: "Button", link: "/examples/button/index" }
          ]
        }
      ]
    }
  }
});
