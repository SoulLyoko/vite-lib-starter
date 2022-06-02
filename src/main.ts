import { createApp } from "vue-demi";
import ViteLibStarter from "vite-lib-starter";

import App from "./App.vue";
import "vite-lib-starter/styles/index.scss";

const app = createApp(App);
app.use(ViteLibStarter, { size: "large" });
app.mount("#app");
