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
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ErrorNotFound.vue") },
    ],
  },
  {
    path: "/searchhelper",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SearchHelper.vue") }],
  },
  {
    path: "/generate",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GeneratePage.vue") }],
  },
  {
    path: "/recognize",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/RecognizePage.vue") },
    ],
  },
  {
    path: "/search",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/SearchPage.vue") }],
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
];

export default routes;
