<template>
  <Demo :title="title" @click="changeTitle"></Demo>
</template>

<script lang="ts" setup>
import { ref } from "vue-demi";

const title = ref("demo of vite-lib-starter");

function changeTitle() {
  title.value = "title changed";
}
</script>

<script lang="ts">
export default { name: "demo-demo" };
</script>
