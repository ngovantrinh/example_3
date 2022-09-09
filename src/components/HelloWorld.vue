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
import { data } from "../constants/constant";
import ListRoom from "../components/ListRoom/index.vue";
import { eventBus } from "../main";
import FormAdd from "./FormAdd/index.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      listRoom: data,
      formStatus: false,
    };
  },
  components: { ListRoom, FormAdd },
  created() {
    eventBus.$on("showAddForm", () => {
      this.formStatus = true;
    });
    eventBus.$on("removeAddForm", () => {
      this.formStatus = false;
    });
    eventBus.$on("removeRoom", (item) => {
      eventBus.removeRoom(this.listRoom, item.id);
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
  width: 40%;
}
</style>
