import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "./components/pages/HomeComp.vue";
import About from "./components/pages/AboutComp.vue";

const routerHistory = createWebHistory();
const routers = new createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      compotents: Home,
    },
    {
      path: "/about",
      compotents: About,
    },
  ],
});

export default routers;
