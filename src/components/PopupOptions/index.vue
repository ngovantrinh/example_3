<template>
  <div
    @click.right="removePopup"
    class="popup"
    v-show="popupStatus"
    :style="{ left: `${offsetX}px`, top: offsetY + 'px' }"
  >
    <ul class="list-options">
      <li @click.left="addRoom" class="option-item">Thêm mới</li>
      <li @click="removeRoom" class="option-item">Xoá phòng ban</li>
      <li class="option-item">Nâng level</li>
      <li class="option-item">Giảm level</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "@/main";
export default {
  name: "PopupOptions",
  props: {
    offsetX: {
      type: Number,
      required: true,
    },
    offsetY: {
      type: Number,
      required: true,
    },
    popupStatus: {
      type: Boolean,
    },
    item: {
      type: Object,
    },
  },
  methods: {
    addRoom() {
      eventBus.onChangeItem(this.item.id);
      eventBus.$emit("showAddForm");
    },
    removePopup(e) {
      this.$emit("remove", e);
    },
    removeRoom() {
      eventBus.$emit("removeRoom", this.item);
    },
  },
};
</script>

<style scoped>
.popup {
  position: absolute;
  z-index: 1;
  display: block;
  width: max-content;
}
.list-options {
  list-style: none;
}
.list-options .option-item {
  padding: 8px 12px;
  border: 1px solid #6e6e6e;
  background: white;
  cursor: pointer;
}
.list-options .option-item:hover {
  background-color: #4049ca;
  color: white;
}
</style>
