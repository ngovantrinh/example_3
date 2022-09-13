<template>
  <div @click.left="handleCLickleft" class="wrapper">
    <div class="render-room-layout">
      <ListRoom :listRoom="listRoom" />
      <!-- <ListRoom v-if="item.children.length != 0" :item="item" /> -->
      <!-- </ListRoom> -->
    </div>
    <FormAdd v-show="formStatus" :listRoom="listRoom" />
  </div>
</template>

<script>
import ListRoom from "../components/ListRoom/index.vue";
import { eventBus } from "../main";
import FormAdd from "./FormAdd/index.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      listRoom: eventBus.$data.listItem,
      formStatus: false,
    };
  },
  components: { ListRoom, FormAdd },
  created() {
    // this.listRoom = eventBus.$data.listItem;
    eventBus.$on("showAddForm", () => {
      this.formStatus = true;
    });
    eventBus.$on("removeAddForm", () => {
      this.formStatus = false;
    });
  },
  methods: {
    handleCLickleft() {
      eventBus.$emit("message");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  padding: 0 30px;
  display: flex;
  align-items: center;
}
.render-room-layout {
  height: 500px;
  border: 2px solid #dcdcdc;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  min-width: 600px;
  padding-bottom: 10px;
  overflow-y: scroll;
}
.render-room-layout::-webkit-scrollbar-track {
  border: 1px solid rgb(104, 104, 104);
  padding: 2px 0;
  background-color: #cccccc;
}

.render-room-layout::-webkit-scrollbar {
  width: 10px;
}

.render-room-layout::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(138, 138, 138, 0.3);
  background-color: #737272;
  border: 1px solid #000;
}
</style>
