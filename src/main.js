// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* eslint-disable no-alert */
/* eslint-disable */
import Vue from "vue";
import App from "./App";
import router from "@/router/index.js";
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router: router,
  components: { App },
  template: "<App/>"
});
// new Vue({
//   render: h => h(App),
//   // ES6 문법 속성명과 속성값이 같은 이름이면 하나로 적을 수 있다.
//   // 원래는 다음과 같다.
//   // router: router,
//   router,
// }).$mount('#app')
