import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import{ init } from 'emailjs-com';
init("user_4MHQFlff1hpBy3VcP4Cqd");

import store from "./store";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./modules/main.scss";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueSplide);

Vue.config.productionTip = false;

library.add(fas, far);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
