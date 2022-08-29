<template>
  <div class="render-room">
    <div class="room-box-item" v-for="item in listRoom" :key="item.id">
      <div class="room-item">
        <div class="test">
          <div class="line-level"></div>
          <div class="item-box" @click.right="handleCLick">
            <div class="content-item">
              <p class="level">{{ item.level }}</p>
              <p>{{ item.code }}</p>
              <p>{{ item.name }}</p>
            </div>
            <!-- <PopupOptions
              :popupStatus="popupStatus"
              :offsetX="locationX"
              :offsetY="locationY"
            /> -->
          </div>
        </div>
        <ListRoom v-if="item.children.length != 0" :listRoom="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
// import PopupOptions from '../PopupOptions/index.vue';
export default {
  name: 'ListRoom',
  props: {
    listRoom: {
      type: [Object, Array],
    },
    // item: {
    //   type: [Object, Array],
    // },
  },
  data() {
    return {
      locationX: 0,
      locationY: 0,
      popupStatus: false,
    };
  },
  methods: {
    handleCLick(e) {
      e.preventDefault();
      this.locationX = e.offsetX;
      this.locationY = e.offsetY;
      this.popupStatus = true;

      console.log(this.item, e.offsetX, e.offsetY, 'click');
    },
  },
  // components: { PopupOptions },
};
</script>

<style scoped>
.render-room {
  margin-left: 16px;
  max-width: 500px;
  text-align: left;
  border-left: 2px solid #dcdcdc;
}

.line-level {
  width: 16px;
  background: #dcdcdc;
  height: 2px;
}

.room-box-item .room-item {
  padding-top: 8px;
}
.test {
  align-items: center;
  display: flex;
}
.item-box {
  position: relative;
  width: 100%;
}
.room-item .test .content-item {
  background: #f0f0f0;
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  padding: 8px;
  display: flex;
  align-items: center;
  column-gap: 9px;
}
.room-item .content-item span {
  color: #666666;
}
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
