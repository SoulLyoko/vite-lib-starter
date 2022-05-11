import { defineConfig } from "vitepress";
import path from "path";
import { mdDemoTransform } from "./plugins/md-demo-transform";

const Guide = [
  { text: "Start", link: "/guide/start" },
  { text: "Changelog", link: "/guide/changelog" }
];
const Components = [
  {
    text: "Components",
    children: [
      { text: "Button", link: "/components/button/demo/index" },
      { text: "Input", link: "/components/input/demo/index" }
    ]
  }
];

export default defineConfig({
  base: "/vite-lib-starter/",
  lang: "zh-CN",
  title: "vite-lib-starter",
  description: "vite-lib-starter",
  themeConfig: {
    docsDir: "packages",
    repo: "SoulLyoko/vite-lib-starter",
    nav: [
      { text: "Guide", link: Guide[0].link },
      { text: "Components", link: Components[0].children[0].link }
    ],
    sidebar: {
      "/guide": Guide,
      "/components": Components
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
