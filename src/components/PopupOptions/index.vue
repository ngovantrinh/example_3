<template>
  <div
    class="popup"
    v-if="popupStatus"
    :style="{ left: `${offsetX}px`, top: offsetY + 'px' }"
  >
    <h3>here</h3>
  </div>
</template>

<script>
export default {
  name: 'PopupOptions',
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
  },
};
</script>

<style scoped>
.popup {
  position: absolute;
}
</style>
