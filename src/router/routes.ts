import { RouteConfig } from "vue-router";

import Full from "@/containers/Full.vue";

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Full",
    component: Full,
    children: [
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
    ],
  },
];
