import {RouteConfig} from "vue-router";

export const inventoryRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "admin-app" */ '../views/app/iMan/Dashboard.vue')
    },
    {
        path: 'products',
        name: 'Product List',
        component: () => import(/* webpackChunkName: "admin-app" */ '../views/app/iMan/Products.vue')
    },
    {
        path: 'materials',
        name: 'Material List',
        component: () => import(/* webpackChunkName: "admin-app" */ '../views/app/iMan/Materials.vue')
    },
    // {
    //     path: 'login',
    //     name: 'Customer Login',
    //     component: () => import(/* webpackChunkName: "cus-app" */ '../views/LoginUser.vue')
    // }
]