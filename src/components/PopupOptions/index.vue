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
      <li @click="onLevelDown(listRoom)" class="option-item">Giảm level</li>
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
  computed: {
    levelUpItem() {
      return console.log("hehehe");
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
      console.log("data");
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === this.item.id) {
          if (data[i].level > 1) {
            data[i].level = data[i].level - 1;
          } else {
            console.log("max level");
          }
        } else {
          this.onLevelUp(data[i].children);
        }
      }
    },
    onLevelDown(data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === this.item.id) {
          data[i].level = data[i].level + 1;
          console.log(data[i].level);
        } else {
          this.onLevelDown(data[i].children);
        }
      }
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
