import {
    createWebHistory,
    createWebHashHistory,
    createRouter,
} from "vue-router";
import Index from "@/pages/Index.vue";
import Tesla from "@/pages/Tesla.vue";

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition && to.meta.keepAlive) {
        return savedPosition;
    }
    return { left: 0, top: 0 };
};

const routes = [
    {
        // Intro
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        // Tesla
        path: "/Tesla",
        name: "Tesla",
        component: Tesla,
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    scrollBehavior,
    routes,
});
