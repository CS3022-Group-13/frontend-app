import {RouteConfig} from "vue-router";

export const adminRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "admin-app" */ '../views/app/admin/Dashboard.vue')
    },
    {
        path: 'users',
        name: 'User List',
        component: () => import(/* webpackChunkName: "admin-app" */ '../views/app/admin/UserList.vue')
    },
    // {
    //     path: 'login',
    //     name: 'Customer Login',
    //     component: () => import(/* webpackChunkName: "cus-app" */ '../views/LoginUser.vue')
    // }
]