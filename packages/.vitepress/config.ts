import { defineConfig } from "vitepress";
import path from "path";
import { mdDemoTransform } from "./plugins/md-demo-transform";

export default defineConfig({
  base: "/vite-lib-starter/",
  lang: "zh-CN",
  title: "vite-lib-starter",
  description: "vite-lib-starter",
  themeConfig: {
    docsDir: "packages",
    repo: "SoulLyoko/vite-lib-starter",
    nav: [],
    sidebar: {
      "/": [
        { text: "CHANGELOG", link: "/CHANGELOG" },
        { text: "Quick Start", link: "/" },
        {
          text: "Components",
          children: [
            { text: "Button", link: "/components/button/demo/index" },
            { text: "Input", link: "/components/input/demo/index" }
          ]
        }
      ]
    }
  },
  vite: {
    plugins: [mdDemoTransform()],
    resolve: {
      alias: {
        "@": path.join(__dirname, "../../src"),
        "~": path.join(__dirname, "../../packages"),
        "vite-lib-starter": path.resolve(__dirname, "../../packages")
      }
    }
  }
});
