<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "loader",

  data() {
    return {};
  },
  methods: {},
  mounted() {
    document.body.classList.add("disable-scroll");
  },
  destroyed() {
    document.body.classList.remove("disable-scroll");
  },
};
</script>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.loader {
  width: 8vmax;
  height: 8vmax;
  border-right: 4px solid #ffffff;
  border-radius: 100%;
  animation: spinRight 800ms linear infinite;
}

.loader::before,
.loader::after {
  content: "";
  width: 6vmax;
  height: 6vmax;
  display: block;
  position: absolute;
  top: calc(50% - 3vmax);
  left: calc(50% - 3vmax);
  border-left: 3px solid #ffffff;
  border-radius: 100%;
  animation: spinLeft 800ms linear infinite;
}
.loader::after {
  width: 4vmax;
  height: 4vmax;
  top: calc(50% - 2vmax);
  left: calc(50% - 2vmax);
  border: 0;
  border-right: 2px solid #ffffff;
  animation: none;
}

@keyframes spinLeft {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
}

@keyframes spinRight {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>

<style>
.disable-scroll {
  overflow: hidden;
  height: 100%;
}
</style>
