import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PublicView from "../views/PublicView.vue";

const routes: Array<RouteRecordRaw> = [
    // PublicView
    {
        path: "/",
        name: "home",
        component: PublicView,
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/LoginView.vue"),
    },
    {
        path: "/privateView",
        name: "privateView",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/PrivateView.vue"),
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
