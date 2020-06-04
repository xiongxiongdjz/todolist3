<template>
  <div class="sub-bottom-button">
    <div v-show="length">
      <button @click="subAllPageJump">所有</button>
      <button @click="subCompletedPageJump">已完成</button>
      <button @click="subUnCompletedPageJump">未完成</button>
      <button @click="subSelectedOut" v-show="displaySom">删除选中</button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "selectedOut",
    "displaySom",
    "length",
    "allPageJump",
    "completedPageJump",
    "unCompletedPageJump"
  ],
  methods: {
    subSelectedOut() {
      this.selectedOut();
    },
    subAllPageJump() {
      this.allPageJump();
    },
    subCompletedPageJump() {
      this.completedPageJump();
    },
    subUnCompletedPageJump() {
      this.unCompletedPageJump();
    }
  }
};
</script>
