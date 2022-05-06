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
        { text: "更新日志", link: "/CHANGELOG" },
        { text: "开始", link: "/" },
        {
          text: "示例",
          children: [{ text: "HelloWorld", link: "/hello-world/hello-world" }]
        }
      ]
    }
  }
});
