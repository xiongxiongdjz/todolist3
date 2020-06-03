<template>
  <div class="sub-bottom-button">
    <div v-show="length">
      <router-link
        :to="{
          path: '/todolist/all'
        }"
        tag="button"
        replace
        >所有</router-link
      >
      <router-link :to="{ path: '/todolist/completed' }" tag="button" replace
        >已完成</router-link
      >
      <router-link :to="{ path: '/todolist/unCompleted' }" tag="button" replace
        >未完成</router-link
      >
      <button @click="subSelectedOut" v-show="displaySom">删除选中</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectedOut", "displaySom", "length"],
  methods: {
    subSelectedOut() {
      this.selectedOut();
    }
  }
};
</script>
