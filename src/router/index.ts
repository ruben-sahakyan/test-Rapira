import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue'
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/:pathMatch(.*)',
        component: PageNotFound
    },
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router