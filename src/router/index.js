import {createRouter, createWebHistory} from "vue-router";
import authRoutes from "./auth.js";
import productRoutes from "./product.js";
import AppDefault from "@/layouts/AppDefault.vue";
import HomeView from "@/views/HomeView.vue";
import userProfileRoutes from "@/router/userProfile.js";
import orderRoutes from "@/router/order.js";
import NotFound from "@/views/NotFound.vue";
import organizationRoutes from "@/router/organization.js";
import gcpRoutes from "@/router/gcp.js";

const routes = [
    {
        path: '/',
        component: AppDefault,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
        ]
    },
    ...authRoutes,
    ...productRoutes,
    ...userProfileRoutes,
    ...orderRoutes,
    ...organizationRoutes,
    ...gcpRoutes,
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    console.log('Before each')
    next()
});

router.afterEach(() => {
    console.log('After each')
});

export default router;