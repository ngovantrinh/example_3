<template>
  <div class="form-add">
    <div class="title">
      <h2>Thêm mới phòng ban</h2>
    </div>
    <div class="form-content">
      <label for="">
        <h3>Tên phòng ban</h3>
        <input
          v-model.lazy="theNewItem.name"
          type="text"
          placeholder="Tên phòng ban..."
        />
      </label>
      <label for="">
        <h3>Mã phòng ban</h3>
        <input
          v-model.lazy="theNewItem.code"
          type="text"
          placeholder="Mã phòng ban( Không bắt buộc )"
        />
      </label>
    </div>
    <BaseButton :nameButton="buttonSave" @buttonAction="addNewRoom(listRoom)" />
    <BaseButton :nameButton="buttonCancel" @buttonAction="hideFormAdd" />
  </div>
</template>

<script>
import BaseButton from "../BaseButton/index.vue";
import { BUTTON_CANCEL, BUTTON_SAVE } from "@/constants/constant";
import { eventBus } from "@/main";
export default {
  name: "FormAdd",
  props: {
    listRoom: {
      type: Array,
    },
  },
  components: { BaseButton },
  data() {
    return {
      buttonSave: BUTTON_SAVE,
      buttonCancel: BUTTON_CANCEL,
      theNewItem: {
        name: "",
        code: "",
      },
    };
  },
  methods: {
    addNewRoom(item) {
      for (let i = 0; i < item.length; i++) {
        if (item[i].id === eventBus.$data.item) {
          eventBus.$emit("removeAddForm");
          // eventBus.addNewRoom(data)
          const newItem = {
            id: Math.random().toFixed(2) * 10,
            level: item[i].level + 1,
            ...this.theNewItem,
            children: [],
          };
          item[i].children = [...item[i].children, newItem];
        } else {
          this.addNewRoom(item[i].children);
        }
      }
    },
    hideFormAdd() {
      eventBus.$emit("removeAddForm");
    },
  },
};
</script>

<style scoped>
.form-add {
  display: flex;
  flex-direction: column;
}
.form-add .form-content {
  display: flex;
  flex-direction: column;
}
</style>
