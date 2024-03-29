import { defineConfig } from "vitepress";
import { mdDemoTransform } from "./plugins/md-demo-transform";
import pkg from "../../package.json";
import { alias } from "../../vite.config";

const Guide = [
  {
    text: "Guide",
    items: [
      { text: "Start", link: "/guide/start" },
      { text: "Changelog", link: "/guide/changelog" }
    ]
  }
];

const Components = [
  {
    text: "Components",
    items: [
      { text: "Button", link: "/components/button/demo/index" },
      { text: "Input", link: "/components/input/demo/index" }
    ]
  }
];

export default defineConfig({
  base: `/${pkg.name}/`,
  title: pkg.upperName,
  description: pkg.description,
  themeConfig: {
    socialLinks: [{ icon: "github", link: pkg.homepage }],
    nav: [
      { text: "Guide", link: Guide[0].items[0].link },
      { text: "Components", link: Components[0].items[0].link }
    ],
    sidebar: {
      "/guide": Guide,
      "/components": Components
    }
  },
  vite: {
    plugins: [mdDemoTransform()],
    resolve: {
      alias
    }
  }
});
