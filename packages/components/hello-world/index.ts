import { defineComponent } from "vue-demi";
import { h } from "~/utils";

export const HelloWorld = defineComponent({
  name: "HelloWorld",
  setup() {
    return () => h("h1", null, "Hello World");
  }
});

export type HelloWorld = InstanceType<typeof HelloWorld>;
