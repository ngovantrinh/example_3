import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";

Vue.config.productionTip = false;
export const eventBus = new Vue({
  data: {
    item: null,
    formStatus: false,
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
    addNewRoom(data, newItem) {
      data.children = [
        ...data.children,
        { id: Math.random(), level: data.level + 1, ...newItem },
      ];
    },
    removeRoom(data, id) {
      // for (let i = 0; i < data.length; i++) {
      //   if (data[i].id === id) {
      //     console.log(data[i].id, id);
      //     // data.splice(i, 1);
      //   } else {
      //     this.addNewRoom(data[i].children, id);
      //   }
      // }
      console.log(data, id);
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
