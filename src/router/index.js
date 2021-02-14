/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../views/home.vue";
import About from "../views/about.vue";
import VueChartJS from "@/views/VueChartJS";
import VueChartKick from "@/views/VueChartKick";
import VueCharts from "@/views/VueCharts";
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
    },
    {
      path: "/chartjs",
      name: "VueChartJS",
      component: VueChartJS
    },
    {
      path: "/chartkick",
      name: "VueChartKick",
      component: VueChartKick
    },
    {
      path: "/charts",
      name: "VueCharts",
      component: VueCharts
    }
  ]
});
