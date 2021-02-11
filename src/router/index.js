/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../views/home.vue";
import About from "../views/about.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/homes",
      name: "home",
      component: HelloWorld
    },
    {
      path: "/abuot",
      name: "about",
      component: About
    }
  ]
});
