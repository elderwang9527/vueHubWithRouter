import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routes = [
  { path: "/", component: () => import("../components/a.vue") },
  { path: "/b", component: () => import("../components/b.vue") },
  { path: "/c", component: () => import("../components/c.vue") },
];

const router = new Router({
  routes,
});

export default router;