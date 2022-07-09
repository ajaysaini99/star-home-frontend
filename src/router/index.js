import Router from "vue-router";

import Home from "./../components/home.vue";
import HomeUpdate from "./../components/home-update/home-update.vue";

const router = new Router({
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "homeUpdate",
      path: "/add-home",
      component: HomeUpdate,
    },
  ],
});

export default router;
