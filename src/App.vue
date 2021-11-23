<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo title="vite-lib-starter"></Demo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import { Demo } from "~/index";

export default defineComponent({
  name: "App",
  components: { Demo }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
