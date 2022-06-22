<template>
  <div>
    <navigation></navigation>
    <home-form></home-form>
  </div>
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";
import HomeForm from "./components/form/home-form.vue";

export default {
  name: "App",
  components: {
    Navigation,
    HomeForm,
  },
};
</script>

<style>
@import "./assets/styles/normalize.css";
</style>
