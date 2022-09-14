<template>
  <div @click.left="handleCLickleft" class="wrapper">
    <div class="render-room-layout">
      <ListRoom :listRoom="listRoom" />
    </div>
    <FormAdd
      class="formAdd"
      :class="{ show_form: formStatus }"
      :listRoom="listRoom"
    />
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
  position: relative;
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
.wrapper .formAdd {
  transition: 0.5s;
  opacity: 0;
  width: max-content;
  position: absolute;
  visibility: hidden;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -30%);
}
.wrapper .show_form {
  opacity: 1;
  transition: 0.5s;
  visibility: initial;
  left: 50%;
  transform: translate(-50%, -30%);
}
</style>
