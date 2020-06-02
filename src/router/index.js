import Vue from "vue";
import VueRouter from "vue-router";

import Todolist from "../views/todolist";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/todolist"
  },
  {
    path: "/todolist",
    component: Todolist
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
