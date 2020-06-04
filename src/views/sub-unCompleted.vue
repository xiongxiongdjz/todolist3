<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: JSON.parse(this.$route.query.unCompleteds)
    };
  }
};
</script>
