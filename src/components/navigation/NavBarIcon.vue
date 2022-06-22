<template>
  <div class="bar-container" @click="toggleNavBar">
    <span
      :class="{ 'middle-bar': !isNavBarOpen, 'cross-bar': isNavBarOpen }"
    ></span>
  </div>
</template>

<script>
export default {
  name: "nav-bar-icon",
  props: {
    isNavBarOpen: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    toggleNavBar() {
      this.$emit("toggle-nav");
    },
  },
};
</script>

<style scoped>
.bar-container {
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.middle-bar {
  border-top: 2px solid black;
  width: 20px;
  content: "";
  position: relative;
  transition: 0.3s ease-in-out;
}
.middle-bar::before {
  content: "";
  position: absolute;
  top: -10px;
  border-top: 2px solid black;
  width: 20px;
}
.middle-bar::after {
  content: "";
  position: absolute;
  top: 6px;
  border-top: 2px solid black;
  width: 20px;
}
.cross-bar {
  content: "";
  position: relative;
  border-bottom: 2px solid black;
  width: 20px;
  transform: rotateZ(45deg);
  transition: 0.3s ease-in-out;
}
.cross-bar::after {
  content: "";
  position: absolute;
  top: 0;
  border-bottom: 2px solid black;
  width: 20px;
  transform: rotateZ(90deg);
}
</style>
