<template>
  <button @click="handleAction">{{ nameButton }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    nameButton: {
      type: String,
    },
  },
  methods: {
    handleAction() {
      this.$emit("buttonAction");
    },
  },
};
</script>

<style>
</style>