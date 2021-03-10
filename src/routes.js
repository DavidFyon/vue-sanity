import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";
import Album from "@/views/Album.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: "/", component: Home, meta: { title: "Albums" } },
  {
    path: "/about",
    meta: { title: "About" },
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("./views/About.vue"),
    // component: About
  },
  { path: "/album/:artist/:title", component: Album, name: "Album" },

  { path: "/:path(.*)", component: NotFound },
];
