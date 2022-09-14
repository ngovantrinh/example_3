<template>
  <div @click.right="handleCLickRight" class="content-item">
    <p class="level">{{ item.level }}</p>
    <p>{{ item.code }}</p>
    <p>{{ item.name }}</p>
    <PopupOptions
      :popupStatus="popupStatus"
      :offsetX="locationX"
      :offsetY="locationY"
      @remove="removeClickRight"
      :item="item"
    />
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import PopupOptions from "@/components/PopupOptions/index.vue";
export default {
  name: "ItemRoom",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      locationX: 0,
      locationY: 0,
      popupStatus: false,
    };
  },
  components: { PopupOptions },
  created() {
    eventBus.$on("message", () => {
      this.popupStatus = false;
    });
  },
  methods: {
    handleCLickRight(e) {
      e.preventDefault();
      this.locationX = e.offsetX;
      this.locationY = e.offsetY;
      this.popupStatus = true;
    },
    removeClickRight() {
      this.popupStatus = false;
    },
  },
};
</script>

<style scoped>
.content-item .level {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #48647f;
  color: white;
  border-radius: 4px;
}
</style>