<template>
  <div>
    <navigation></navigation>
    <home-update></home-update>
  </div>
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";
import HomeUpdate from "./components/home-update/home-update.vue";

export default {
  name: "App",
  components: {
    Navigation,
    HomeUpdate,
  },
};
</script>

<style>
@import "./assets/styles/normalize.css";
</style>
