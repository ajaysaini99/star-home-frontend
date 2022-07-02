<template>
  <div>
    <navigation></navigation>
    <home-card></home-card>
    <!-- <home-update></home-update> -->
  </div>
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";
import HomeCard from "./components/common/home-card.vue";
// import HomeUpdate from "./components/home-update/home-update.vue";
export default {
  name: "App",
  components: {
    Navigation,
    HomeCard,
    // HomeUpdate,
  },
};
</script>

<style>
@import "./assets/styles/normalize.css";
</style>
