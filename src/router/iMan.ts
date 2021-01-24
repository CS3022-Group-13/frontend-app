import {RouteConfig} from "vue-router";

export const inventoryRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "admin-app" */ '../views/app/iMan/Dashboard.vue')
    },
    {
        path: 'users',
        name: 'User List',
        component: () => import(/* webpackChunkName: "admin-app" */ '../views/app/iMan/UserList.vue')
    },
    // {
    //     path: 'login',
    //     name: 'Customer Login',
    //     component: () => import(/* webpackChunkName: "cus-app" */ '../views/LoginUser.vue')
    // }
]