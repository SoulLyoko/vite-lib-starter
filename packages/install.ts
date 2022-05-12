import type { App, Plugin } from "vue-demi";
import type { Config } from "./types";
import { useConfig } from "./composables";
import components from "./components.all";

export default {
  install(app: App, options: Config = {}) {
    useConfig(app, options);
    Object.values(components).forEach(component => {
      app.component(component.name, component);
    });
  }
} as unknown as Plugin;
