import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "@/components/pages/homePage.vue";
import About from "@/components/pages/aboutPage.vue";
import NotFound from "@/components/pages/notFoundPage.vue";

const routerHistory = createWebHashHistory();
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
      path: "/:CatchAll(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default routers;
