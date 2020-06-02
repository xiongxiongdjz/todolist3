<template>
  <div class="sub-header-input">
    <input type="checkbox" @click="subAllCompleted" :checked="displayEvery" />
    <input type="text" v-model="content" @keyup.enter="subAccess" />
  </div>
</template>

<script>
export default {
  props: ["access", "allCompleted", "displayEvery"],
  data() {
    return {
      content: ""
    };
  },
  methods: {
    subAccess() {
      switch (this.content != "") {
        case true:
          this.access(this.content);
          this.content = "";
          break;
      }
    },
    subAllCompleted() {
      this.allCompleted();
    }
  }
};
</script>
