import { createApp } from "vue-demi";
import App from "./App.vue";
import Lib from "~/index";

const app = createApp(App);
app.use(Lib, { size: "large" });
app.mount("#app");
