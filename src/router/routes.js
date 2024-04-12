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
];

export default routes;
