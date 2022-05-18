import { createApp } from "vue-demi";
import App from "./App.vue";
import ViteLibStarter from "vite-lib-starter";
import "vite-lib-starter/styles/index.scss";

const app = createApp(App);
app.use(ViteLibStarter, { size: "large" });
app.mount("#app");
