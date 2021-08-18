import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import("../views/user/index")
      },
      // 首页 - 安全设置
      {
        path: '/safe',
        name: 'Safe',
        component: () => import("../views/safe/index")
      },
      // 首页 - 密码设置
      {
        path: '/password',
        name: 'Password',
        component: () => import("../views/safe/password")
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
