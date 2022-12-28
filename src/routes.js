import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "./components/pages/Home-comp.vue";
import About from "./components/pages/About-comp.vue";

const routerHistory = createWebHistory();
const routers = createRouter({
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
