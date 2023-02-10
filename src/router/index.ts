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
        path: "/createAccount",
        name: "createAccount",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/CreateAccount.vue"),
    },
    {
        path: "/404",
        name: "notFound",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/NotFound.vue"),
    },
    {
        path: "/settings",
        name: "settings",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/SettingsView.vue"),
    },
    {
        path: "/profile/:id",
        name: "profile",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/ProfileView.vue"),
        props: (route) => {
            const userId = route.params.id;
            return { userId }
        },
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
