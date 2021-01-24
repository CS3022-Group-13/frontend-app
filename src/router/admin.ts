import {RouteConfig} from "vue-router";

export const adminRoutes: Array<RouteConfig> = [
    // {
    //     path: '',
    //     name: 'Dashboard',
    //     component: () => import(/* webpackChunkName: "cus-app" */ '../views/app/Dashboard.vue')
    // },
    {
        path: 'login',
        name: 'Customer Login',
        component: () => import(/* webpackChunkName: "cus-app" */ '../views/LoginUser.vue')
    }
]