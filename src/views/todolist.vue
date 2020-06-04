<template>
  <div class="todolist">
    <div class="todolist-1">
      <h2>代办事清单</h2>
      <header-input
        :access="access"
        :allCompleted="allCompleted"
        :displayEvery="displayEvery"
        :length="todos.length"
      />
    </div>
    <div class="todolist-2">
      <router-view />
    </div>
    <div class="todolist-3">
      <bottom-button
        :selectedOut="selectedOut"
        :displaySom="displaySom"
        :length="todos.length"
        :allPageJump="allPageJump"
        :completedPageJump="completedPageJump"
        :unCompletedPageJump="unCompletedPageJump"
      />
    </div>
  </div>
</template>

<script>
import HeaderInput from "../components/sub-header-input";
import BottomButton from "../components/sub-bottom-button";
export default {
  data() {
    return {
      todos: []
    };
  },
  components: {
    HeaderInput,
    BottomButton
  },
  methods: {
    //回车存入
    access(content) {
      this.todos.push({
        id: new Date().valueOf(),
        title: content,
        completed: false
      });
    },
    //完成
    status(id) {
      const index = this.todos.findIndex(todo => todo.id == id);
      this.todos[index].completed = !this.todos[index].completed;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    // 删除
    outDelete(id) {
      const index = this.todos.findIndex(todo => todo.id == id);
      this.todos.splice(index, 1);
    },
    titleChange(content, id) {
      const index = this.todos.findIndex(todo => todo.id == id);
      this.todos[index].title = content;
      localStorage.setItem("todos", JSON.stringify(this.todos));
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
    },
    // all页面跳转
    allPageJump() {
      const todosJSON = JSON.stringify(this.todos);
      this.$router.push({
        path: "/todolist/all",
        query: {
          todos: todosJSON,
          status: this.status,
          outDelete: this.outDelete,
          titleChange: this.titleChange
        }
      });
    },
    // 完成页面跳转
    completedPageJump() {
      const completeds = this.todos.filter(todo => todo.completed);
      const completedsJSON = JSON.stringify(completeds);
      this.$router.push({
        path: "/todolist/completed",
        query: {
          completeds: completedsJSON
        }
      });
    },
    // 未完成页面跳转
    unCompletedPageJump() {
      const unCompleteds = this.todos.filter(todo => !todo.completed);
      const unCompletedsJSON = JSON.stringify(unCompleteds);
      this.$router.push({
        path: "/todolist/unCompleted",
        query: {
          unCompleteds: unCompletedsJSON
        }
      });
    }
  },
  computed: {
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
    if (JSON.parse(localStorage.getItem("todos")) == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  }
};
</script>

<style lang="scss" scoped>
.todolist {
  text-align: center;
}
</style>
