import { createRouter, createWebHistory } from "vue-router";

const DashboardView = () => import("../views/DashboardView.vue");
const AddUserView = () => import("../views/AddUserView.vue");
const LoginView = () => import("../views/LoginView.vue");
const OddView = () => import("../views/OddView.vue");
const BetlistView = () => import("../views/BetlistView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/addUser",
      name: "addUser",
      component: AddUserView,
    },
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/odd",
      name: "odd",
      component: OddView,
    },
    {
      path: "/betlist",
      name: "betlist",
      component: BetlistView,
    },
  ],
});

export default router;
