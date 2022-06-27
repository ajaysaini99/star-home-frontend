<template>
  <div class="header-container">
    <div class="nav-container">
      <div class="mobile-header">
        <nav-bar-icon
          class="bar-icon"
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
          :class="{ 'link-wrapper-transition': isNavBarOpen }"
          v-for="(nav, index) in navLinks"
          :key="nav.display + index"
        >
          <i class="nav-link-icon" :class="nav.image" aria-hidden="true"></i>
          <a class="link-display"> {{ nav.display }} </a>
        </div>
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
          name: "new",
          display: "New",
          link: "/",
          image: "fa fa-home",
        },
        {
          name: "sold",
          display: "Sold",
          link: "/sold",
          image: "fa fa-address-book",
        },
        {
          name: "contact us",
          display: "Contact Us",
          link: "/contact-us",
          image: "admin.com",
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
.header-container {
  height: 68px;
  width: 100vw;
  background: bisque;
  position: fixed;
  top: 0;
  z-index: 10;
}
.nav-container {
  max-width: 1200px;
  margin: auto;
  height: 100%;
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
  cursor: pointer;
}
.logo img {
  height: 30px;
  width: 48px;
}
.nav-wrapper {
  max-width: 1200px;
  height: 0;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  transition: height 0.3s ease-in-out;
}
.show-nav {
  visibility: visible;
  height: calc(100vh - 68px);
  transition: height 0.3s ease-in-out;
}
.link-wrapper {
  width: 100%;
  padding: 4px 0;
  height: 0;
  visibility: none;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: height 0.5s ease-in-out;
  cursor: pointer;
}
.link-wrapper-transition {
  visibility: visible;
  height: 48px;
  transition-delay: 0.1s;
  transition: height 0.5s ease-in-out;
}
.nav-link-icon {
  margin-right: 16px;
  height: 20px;
  width: 20px;
}

@media screen and (min-width: 768px) {
  .nav-container {
    display: flex;
  }
  .bar-icon {
    display: none;
  }
  .logo {
    position: unset;
    transform: none;
  }
  .nav-wrapper {
    flex: 1;
    flex-direction: row;
    visibility: visible;
    background: none;
    padding: 0;
    height: 100%;
    align-items: center;
    margin: auto 24px;
    justify-content: center;
  }
  .link-wrapper {
    border: none;
    width: unset;
    padding: 0 24px;
  }
  .nav-link-icon {
    display: none;
  }
}
@media screen and (min-width: 1200px) {
  .mobile-header {
    max-width: 1200px;
    margin: auto;
    padding: 0 16px;
  }
}
</style>
