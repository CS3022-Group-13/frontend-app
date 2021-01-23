import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import {appRoutes} from "@/router/app";
import {cusRoutes} from "@/router/cus";

import Home from '../views/home/Home.vue'

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
        path: '/user/login',
        name: 'User Login',
        component: () => import(/* webpackChunkName: "user" */ '../views/Login.vue')
    },
    {
        path: '/customer/login',
        name: 'User Login',
        component: () => import(/* webpackChunkName: "user" */ '../views/CusLogin.vue')
    },
    {
        path:'/add-complaint',
        name:'Add Complaint',
        component: () => import(/* webpackChunkName: "complaint" */ '../views/AddComplaint.vue')

    },
    {
        path: '/app',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/index.vue'),
        children: appRoutes
    },
    {
        path: '/customer',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/index.vue'),
        children: cusRoutes
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
