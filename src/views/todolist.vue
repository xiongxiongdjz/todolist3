<template>
  <div class="todolist">
    <div class="todolist-1">
      <h2>代办事清单</h2>
      <input type="checkbox" @click="allCompleted" :checked="displayEvery" />
      <input type="text" v-model="content" @keyup.enter="access" />
    </div>
    <div class="todolist-2">
      <ul>
        <li v-for="todo in filters" :key="todo.id">
          <input
            type="checkbox"
            :checked="todo.completed"
            @click="status(todo)"
          />
          {{ todo.title }}
          <button @click="outDelete(todo.id)">删除</button>
        </li>
      </ul>
    </div>
    <div class="todolist-3">
      <button @click="title = 'all'">所有</button>
      <button @click="title = 'completed'">已完成</button>
      <button @click="title = 'unCompleted'">未完成</button>
      <button @click="selectedOut" v-show="displaySom">删除选中</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      content: "",
      title: "all"
    };
  },
  methods: {
    //回车存入
    access() {
      switch (this.content != "") {
        case true:
          this.todos.push({
            id: new Date().valueOf(),
            title: this.content,
            completed: false
          });
          this.content = "";
          break;
      }
    },
    //完成
    status(todo) {
      todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    // 删除
    outDelete(id) {
      const index = this.todos.findIndex(todo => todo.id == id);
      this.todos.splice(index, 1);
    },
    //全选
    allCompleted() {
      switch (this.todos.every(todo => todo.completed)) {
        case true:
          this.todos.forEach(todo => (todo.completed = false));
          localStorage.setItem("todos", JSON.stringify(this.todos));
          break;

        default:
          this.todos.forEach(todo => (todo.completed = true));
          localStorage.setItem("todos", JSON.stringify(this.todos));
          break;
      }
    },
    // 删除选中
    selectedOut() {
      const completeds = this.todos.filter(todo => todo.completed);
      const ids = completeds.map(item => item.id);
      ids.map(item =>
        this.todos.splice(
          this.todos.findIndex(i => i.id == item),
          1
        )
      );
    }
  },
  computed: {
    filters() {
      switch (this.title) {
        case "completed":
          return this.todos.filter(todo => todo.completed);

        case "unCompleted":
          return this.todos.filter(todo => !todo.completed);

        default:
          return this.todos;
      }
    },
    displayEvery() {
      return this.todos.every(todo => todo.completed);
    },
    displaySom() {
      return this.todos.some(todo => todo.completed);
    }
  },
  watch: {
    todos(newValue) {
      localStorage.setItem("todos", JSON.stringify(newValue));
    }
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem("todos"));
  }
};
</script>

<style lang="scss" scoped>
.todolist {
  text-align: center;
}
</style>
