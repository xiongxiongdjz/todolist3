import Vue from "vue";
import VueRouter from "vue-router";

import Todolist from "../views/todolist";

import All from "../views/sub-all";
import Completed from "../views/sub-completed";
import UnCompleted from "../views/sub-unCompleted";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/todolist"
  },
  {
    path: "/todolist",
    component: Todolist,
    children: [
      {
        path: "",
        redirect: "/todolist/all"
      },
      {
        path: "/todolist/all",
        component: All
      },
      {
        path: "/todolist/completed",
        component: Completed
      },
      {
        path: "/todolist/unCompleted",
        component: UnCompleted
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
