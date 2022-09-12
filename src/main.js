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
    onSaveData(data, item) {
      this.listItem = [...data, item];
    },
    removeRoom(id) {
      console.log(id);
      // for (let i = 0; i < data.length; i++) {
      //   if (data[i].id === id) {
      //     console.log(id, "if");
      //     // data.splice(i, 1);
      //   } else {
      //     this.addNewRoom(data[i].children);
      //     // console.log(data[i].children, "else");
      //   }
      // }
      // console.log(data, id);
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
