<script lang="ts">
import { defineComponent, h } from "vue-demi";

export default defineComponent({
  name: "Demo",
  props: {
    title: { type: String }
  },
  setup(props) {
    return () => h("h1", props.title);
  }
});
</script>
