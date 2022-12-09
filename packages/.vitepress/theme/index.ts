import type { App } from "vue-demi";
import type { Theme } from "vitepress";

import defaultTheme from "vitepress/theme";
import components from "../components";
import ViteLibStarter from "../..";
import "../../styles/index.scss";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(components);
    app.use(ViteLibStarter);
  }
} as Theme;
