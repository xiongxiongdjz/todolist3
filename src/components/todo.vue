<template>
  <div class="sub-center-todo">
    <div class="todo">
      <div v-if="display" class="todo-1">
        <input
          type="text"
          v-model="content"
          @keyup.enter="subTitleChange(todo.id)"
        />
      </div>
      <div
        v-else
        @dblclick="(display = true), (content = todo.title)"
        class="todo-2"
      >
        <input
          type="checkbox"
          :checked="todo.completed"
          @click="subStatus(todo.id)"
        />
        <span>{{ todo.title }}</span>
        <button @click="subOutDelete(todo.id)">删除</button>
      </div>
    </div>
    <div class="sub-todo"></div>
  </div>
</template>

<script>
export default {
  props: ["todo", "status", "outDelete", "titleChange", "todos"],
  data() {
    return {
      display: false,
      content: ""
    };
  },
  components: {},
  methods: {
    subStatus(id) {
      this.status(id);
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

<style lang="scss" scoped></style>
