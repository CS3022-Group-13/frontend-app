import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import {adminRoutes} from "@/router/admin";
import {cusRoutes} from "@/router/cus";

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '../views/Register.vue')
    },
    {
        path: '/login/user',
        name: 'User Login',
        component: () => import(/* webpackChunkName: "user" */ '../views/LoginUser.vue')
    },
    {
        path: '/login/cus',
        name: 'Customer Login',
        component: () => import(/* webpackChunkName: "user" */ '../views/LoginCus.vue')
    },
    {
        path: '/admin',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/index.vue'),
        children: adminRoutes
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
