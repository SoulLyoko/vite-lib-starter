// @ts-nocheck
import { App } from "vue";
import defaultTheme from "vitepress/dist/client/theme-default";
import Demo from "../../../packages";
import components from "../components";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(Demo);
    app.use(components);
  }
};
