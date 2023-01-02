import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "@/components/pages/homePage";
import About from "@/components/pages/aboutPage";
import NotFound from "@/components/pages/notFoundPage";
import Alias from "@/components/pages/itemAlias";

const routerHistory = createWebHistory();
const routers = new createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/:itemAlias",
      name: "itemAlias",
      component: Alias,
    },
    {
      path: "/:CatchAll(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default routers;
