import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";
import { data } from "@/constants/constant";

Vue.config.productionTip = false;
export const eventBus = new Vue({
  data: {
    item: null,
    formStatus: false,
    listItem: data,
  },
  methods: {
    onChangeItem(data) {
      this.item = data;
      this.formStatus = true;
    },
    onSaveChange() {
      this.item = null;
      this.formStatus = false;
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
