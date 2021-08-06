<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "/@src/components/NavBar/index.vue";
export default defineComponent({
  name: "App",
  components: {
    NavBar
  },
});
</script>

<style>
#app {
}
</style>
