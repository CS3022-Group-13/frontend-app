import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import { adminRoutes } from '@/router/admin';
import { cusRoutes } from '@/router/cus';
import {inventoryRoutes} from "@/router/iMan"
import {salesRoutes} from "@/router/sMan";

import Home from '../views/Home.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
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
		path: '/login/customer',
		name: 'Customer Login',
		component: () => import(/* webpackChunkName: "user" */ '../views/LoginCus.vue')
	},

	{
		path: '/admin',
		component: () => import(/* webpackChunkName: "web-app" */ '../views/app/admin/index.vue'),
		children: adminRoutes
	},
	{
		path: '/inventory',
		component: () => import(/* webpackChunkName: "web-app" */ '../views/app/iMan/index.vue'),
		children: inventoryRoutes
	},
    {
        path: '/sales',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/app/sMan/index.vue'),
        children: salesRoutes
	},
	{
        path: '/customer',
        component: () => import(/* webpackChunkName: "web-app" */ '../views/customer/index.vue'),
        children: cusRoutes
    }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
