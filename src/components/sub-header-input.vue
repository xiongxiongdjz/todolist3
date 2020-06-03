<template>
  <div class="sub-header-input">
    <input
      type="checkbox"
      @click="subAllCompleted"
      :checked="displayEvery"
      v-show="length"
    />
    <input type="text" v-model="content" @keyup.enter="subAccess" />
  </div>
</template>

<script>
export default {
  props: ["access", "allCompleted", "displayEvery", "length"],
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
