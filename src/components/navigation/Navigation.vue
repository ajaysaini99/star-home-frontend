<template>
  <div class="nav-container">
    <div class="mobile-header">
      <nav-bar-icon
        :isNavBarOpen="isNavBarOpen"
        @toggle-nav="toggleNav"
      ></nav-bar-icon>
      <div class="logo">
        <img src="./../../assets/images/logo.png" alt="star home" />
        <span>Star Home</span>
      </div>
    </div>

    <div class="nav-wrapper" :class="{ 'show-nav': isNavBarOpen }">
      <div
        class="link-wrapper"
        v-for="(nav, index) in navLinks"
        :key="nav.display + index"
      >
        <i class="nav-link-icon" :class="nav.image" aria-hidden="true"></i>
        <a class="link-display"> {{ nav.display }} </a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarIcon from "./NavBarIcon.vue";
export default {
  name: "navbar",
  components: {
    NavBarIcon,
  },
  data() {
    return {
      navLinks: [
        {
          name: "home",
          display: "Home",
          link: "/",
          image: "fa fa-home",
        },
        {
          name: "contact",
          display: "Contact Us",
          link: "/contact-us",
          image: "fa fa-address-book",
        },
        {
          name: "admin",
          display: "Admin",
          link: "/admin",
          image: "admin.com",
        },
      ],
      isNavBarOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavBarOpen = !this.isNavBarOpen;
    },
  },
};
</script>

<style scoped>
.nav-container {
  height: 68px;
  width: 100vw;
  background: bisque;
}
.mobile-header {
  margin: 0 16px;
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
}
.logo {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
}
.logo img {
  height: 30px;
  width: 48px;
}
.nav-wrapper {
  max-width: 1200px;
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  display: flex;
  display: flex;
  flex-direction: column;
  visibility: hidden;
}
.show-nav {
  visibility: visible;
}
.link-wrapper {
  width: 100%;
  height: 32px;
  padding: 4px 0;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
}
.nav-link-icon {
  margin-right: 16px;
  height: 20px;
  width: 20px;
}
</style>
