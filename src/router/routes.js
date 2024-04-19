const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/generate",
    component: () => import("pages/GeneratePage.vue"),
  },
  {
    path: "/recognize",
    component: () => import("pages/RecognizePage.vue"),
  },
  {
    path: "/home",
    component: () => import("pages/HomePage.vue"),
  },
  {
    path: "/search",
    component: () => import("pages/SearchPage.vue"),
  },
  {
    path: "/player",
    component: () => import("pages/audioPlayer.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/searchhelper",
    component: () => import("pages/SearchHelper.vue"),
  },
];

export default routes;
