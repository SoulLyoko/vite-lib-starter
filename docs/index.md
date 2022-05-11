<div align="center">
<h3>ViteLibStarter</h3>
<span>A template for building Vue components library</span> 
<br>
<a  href="https://soullyoko.github.io/vite-lib-starter/">Docs</a>
</div>

## Install

```bash
npm i vite-lib-starter
# or
yarn add vite-lib-starter
```

## Usage

### Full Import

```ts
import { createApp } from "vue";
import App from "./App.vue";
import LibStarter from "vite-lib-starter";
import "vite-lib-starter/lib/style.css";

const app = createApp(App);
app.use(LibStarter);
// global config
// app.use(LibStarter, { size: "small" });
app.mount("#app");
```

#### Type Support

Add the global component type definition for `Volar`

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vite-lib-starter/global"]
  }
}
```

### Manually import

```html
<!-- App.vue -->
<template>
  <v-button>VButton</v-button>
</template>
<script setup>
  import { VButton } from "vite-lib-starter";
</script>
```
