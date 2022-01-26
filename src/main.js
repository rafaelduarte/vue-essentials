import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Products from "./components/Products.vue";
import Checkout from "./components/Checkout.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faShoppingCart,
  faDollarSign,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign, faMinus, faPlus);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Products,
    },
    {
      path: "/checkout",
      component: Checkout,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
