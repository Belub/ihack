import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VSwitch from "v-switch-case";
import axios from "axios";
axios.defaults.headers.common["X-CSRF-TOKEN"] = process.env.VUE_APP_KEY;
Vue.use(VSwitch);
axios.defaults.headers.common["X-CSRF-TOKEN"] = process.env.VUE_APP_KEY;

Vue.config.productionTip = false;

new Vue({
  axios,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
