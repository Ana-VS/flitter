import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FlitsView from "@/views/FlitsView.vue";

const routes: Array<RouteRecordRaw> = [
    // FlitsView
    {
        path: "/",
        name: "home",
        component: FlitsView,
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/LoginView.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/ProfileView.vue"),
    },
    {
        path: "/createAccount",
        name: "createAccount",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/CreateAccount.vue"),
    },
    {
        path: "/:pathMatch(.*)",
        component: import(
            /*webpackChunkName: notFound*/ "../views/NotFound.vue"
        ),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
