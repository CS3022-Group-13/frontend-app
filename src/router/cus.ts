import {RouteConfig} from "vue-router";

export const cusRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Customer Dashboard',
        component: () => import(/* webpackChunkName: "sales-app" */ '../views/customer/Dashboard.vue')
    },
    // {
    //     path: 'login',
    //     name: 'Customer Login',
    //     component: () => import(/* webpackChunkName: "cus-app" */ '../views/LoginUser.vue')
    // }
]