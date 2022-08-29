<template>
  <div class="wrapper">
    <div class="render-room-layout">
      <ListRoom :listRoom="listRoom" />
      <!-- <ListRoom v-if="item.children.length != 0" :item="item" /> -->
      <!-- </ListRoom> -->
    </div>
  </div>
</template>

<script>
import { data } from '../constants/constant';
import ListRoom from '../components/ListRoom/index.vue';
export default {
  name: 'HelloWorld',
  data() {
    return {
      listRoom: data,
    };
  },
  components: { ListRoom },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  padding: 0 30px;
}
.render-room-layout {
  border: 2px solid #dcdcdc;
  width: 40%;
}
</style>
