<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <todo
          :todo="todo"
          :status="$route.query.status"
          :outDelete="$route.query.outDelete"
          :titleChange="$route.query.titleChange"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from "../components/todo";
export default {
  data() {
    return {
      todos: JSON.parse(this.$route.query.todos)
    };
  },
  components: {
    Todo
  },
  created() {}
};
</script>
