<template>
  <div class="right-content">
    <div class="form-add">
      <div class="title">
        <h2>Thêm mới phòng ban</h2>
      </div>
      <div class="form-content">
        <label class="input-line" for="">
          <h3 class="form-title">Tên phòng ban</h3>
          <input
            :class="{ warnning: warnning }"
            v-model.lazy="theNewItem.name"
            type="text"
            placeholder="Tên phòng ban..."
          />
        </label>
        <label class="input-line" for="">
          <h3 class="form-title">Mã phòng ban</h3>
          <input
            v-model.lazy="theNewItem.code"
            type="text"
            placeholder="Mã phòng ban( Không bắt buộc )"
          />
        </label>
      </div>
      <div class="list-btn">
        <BaseButton
          :nameButton="buttonSave"
          @buttonAction="addNewRoom(listRoom)"
        />
        <BaseButton :nameButton="buttonCancel" @buttonAction="hideFormAdd" />
      </div>
    </div>
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
      warnning: false,
    };
  },
  methods: {
    addNewRoom(item) {
      if (this.theNewItem.name) {
        for (let i = 0; i < item.length; i++) {
          if (item[i].id === eventBus.$data.item) {
            eventBus.$emit("removeAddForm");
            const newItem = {
              id: Math.random().toFixed(2) * 10,
              level: item[i].level + 1,
              ...this.theNewItem,
              children: [],
            };
            item[i].children = [...item[i].children, newItem];
            this.theNewItem.name = "";
            this.theNewItem.code = "";
            this.warnning = false;
          } else {
            this.addNewRoom(item[i].children);
          }
        }
      } else {
        this.warnning = true;
        console.log("warnning...");
      }
    },
    hideFormAdd() {
      eventBus.$emit("removeAddForm");
    },
  },
};
</script>

<style scoped>
.right-content {
  width: 48%;
  display: flex;
  justify-content: center;
}
.form-add {
  display: flex;
  width: 550px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #dcdcdc;
}
.form-add .title {
  width: 100%;
  padding: 11px 30px;
  background: #48647f;
}
.form-add .title h2 {
  color: white;
}
.form-add .form-content {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 100%;
}
.form-content .form-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  padding-bottom: 5px;
}
.form-content .input-line {
  padding-bottom: 30px;
  width: 100%;
}
.form-content .input-line input {
  width: 100%;
  padding: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  border: 2px solid #dcdcdc;
  outline: none;
  border-radius: 6px;
}
.list-btn {
  width: 100%;
  display: flex;
  justify-content: end;
  cursor: pointer;
}
.warnning {
  border-color: #ff7777;
}
</style>
