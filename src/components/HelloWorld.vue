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
  border: 2px solid #dcdcdc;
  width: max-content;
  min-width: 600px;
  padding-bottom: 10px;
}
</style>
