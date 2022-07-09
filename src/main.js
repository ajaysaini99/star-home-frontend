import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";

import "./init";

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
