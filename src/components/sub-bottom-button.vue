<template>
  <div class="sub-bottom-button">
    <button @click="title = 'all'">所有</button>
    <button @click="title = 'completed'">已完成</button>
    <button @click="title = 'unCompleted'">未完成</button>
    <button @click="subSelectedOut" v-show="displaySom">删除选中</button>
  </div>
</template>

<script>
export default {
  props: ["selectedOut", "displaySom"],
  data() {
    return {
      title: "all"
    };
  },
  methods: {
    subSelectedOut() {
      this.selectedOut();
    }
  },
  watch: {
    title(newValue) {
      this.$emit("titleChange", newValue);
    }
  }
};
</script>
