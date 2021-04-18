import { RouteConfig } from "vue-router";

// @ is an alias to /src
import Full from "@/containers/Full.vue";

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Full,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "Not Found",
    // route level code-splitting
    // this generates a separate chunk (not-found.[hash].js) for this route
    // which is lazy-loaded when the route is ../views/NotFound.vue
    component: () =>
      import(/* webpackChunkName: "not-found" */ "@/views/NotFound.vue"),
  },
];
