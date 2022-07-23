import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import Dashboard from "../views/Dashboard.vue";
import CreateCard from "../views/CreateCard.vue";
import OverviewCompany from "../views/OverviewCompany.vue";
import Vacancy from "../views/Vacancy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    meta: { transition: "slide-left" },
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //component: () =>
  //  import(/* webpackChunkName: "about" */ "../views/Steps.vue"),
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { transition: "slide-right" },
    component: Dashboard,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "index",
        component: CreateCard,
      },
      {
        path: "company/:id",
        component: OverviewCompany,
      },
      {
        path: "vacancy/:id",
        component: Vacancy,
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //  import(/* webpackChunkName: "about" */ "../views/Steps.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
