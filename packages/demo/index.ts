import { defineComponent } from "vue-demi";
import { h } from "../utils";

export const Demo = defineComponent({
  name: "Demo",
  props: {
    title: { type: String }
  },
  setup(props) {
    return () => h("h1", null, props.title);
  }
});

export type Demo = InstanceType<typeof Demo>;
