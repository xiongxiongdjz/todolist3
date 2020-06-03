<template>
  <div>
    <!-- {{ $route.query.todos }} -->
    <ul>
      <li v-for="todo in filterTodos" :key="todo.id">
        <centerTodo
          :todo="todo"
          :status="status"
          :outDelete="outDelete"
          :titleChange="titleChange"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import CenterTodo from "../components/sub-center-todo";
export default {
  props: ["todos", "status", "outDelete", "titleChange"],
  components: {
    CenterTodo
  },
  computed: {
    filterTodos() {
      return this.todos.filter(todo => todo.completed);
    }
  }
};
</script>
