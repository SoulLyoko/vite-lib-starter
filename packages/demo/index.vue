<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts" setup>
import { ref } from "vue-demi";
const title = ref("demo of vite-lib-starter");
</script>

<script lang="ts">
export default { name: "Demo" };
</script>
