<template>
  <div class="sub-center-todo">
    <div v-if="display">
      <input
        type="text"
        v-model="content"
        @keyup.enter="subTitleChange(todo.id)"
      />
    </div>
    <div v-else @dblclick="(display = true), (content = todo.title)">
      <input
        type="checkbox"
        :checked="todo.completed"
        @click="subStatus(todo)"
      />
      <span>{{ todo.title }}</span>
      <button @click="subOutDelete(todo.id)">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo", "status", "outDelete", "titleChange"],
  data() {
    return {
      display: false,
      content: ""
    };
  },
  methods: {
    subStatus(todo) {
      this.status(todo);
    },
    subOutDelete(id) {
      this.outDelete(id);
    },
    subTitleChange(id) {
      switch (this.content != "") {
        case true:
          this.titleChange(this.content, id);
          this.display = false;
          break;

        default:
          this.display = false;
          break;
      }
    }
  }
};
</script>
