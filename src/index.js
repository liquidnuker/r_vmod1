import "./styles/main.scss";
import Vue from "vue";

import modal from "./modal.vue";

new Vue({
  el: '#app',
  render: h => h(modal)
})