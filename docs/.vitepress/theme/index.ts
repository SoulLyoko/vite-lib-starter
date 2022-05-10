import type { Theme } from "vitepress";
import defaultTheme from "vitepress/theme";
import ViteLibStarter from "~/index";
import components from "../components";

export default {
  ...defaultTheme,
  enhanceApp({ app }: any) {
    app.use(ViteLibStarter);
    app.use(components);
  }
} as Theme;
