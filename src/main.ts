import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// import Snotify from 'vue-snotify'
// import Notifications from 'vue-notification'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// import 'vue-multiselect/dist/vue-multiselect.min.css';

// import 'vue-snotify/styles/material.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
