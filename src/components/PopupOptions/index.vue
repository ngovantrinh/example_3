<template>
  <div
    @click.right="removePopup"
    class="popup"
    v-show="popupStatus"
    :style="{ left: `${offsetX}px`, top: offsetY + 'px' }"
  >
    <ul class="list-options">
      <li @click="addRoom" class="option-item">Thêm mới</li>
      <li @click="removeRoom(listRoom)" class="option-item">Xoá phòng ban</li>
      <li @click="onLevelUp(listRoom)" class="option-item">Nâng level</li>
      <li @click="onLevelDown" class="option-item">Giảm level</li>
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
  data() {
    return {
      listRoom: eventBus.$data.listItem,
      findData: null,
    };
  },
  methods: {
    addRoom() {
      eventBus.onChangeItem(this.item.id);
      eventBus.$emit("showAddForm");
    },
    removePopup(e) {
      this.$emit("remove", e);
    },
    removeRoom(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === this.item.id) {
          data.splice(i, 1);
        } else {
          this.removeRoom(data[i].children);
        }
      }
    },
    onLevelUp(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === this.item.id) {
          // data.splice(i, 1);
          // let a = data.splice(i, 1);
          data = [...data, this.item];
          console.log(this.item.name, data, "cho nay nay");
        } else {
          this.onLevelUp(data[i].children);
        }
      }
    },
    onLevelDown() {
      console.log("LEVEL DOWN");
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
