import {RouteConfig} from "vue-router";

export const salesRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Sales Dashboard',
        component: () => import(/* webpackChunkName: "sales-app" */ '../views/app/sMan/Dashboard.vue')
    },
    {
        path: 'add-customer',
        name: 'Add Customer',
        component: () => import(/* webpackChunkName: "sales-app" */ '../views/app/sMan/AddCustomer.vue')
    },
    {
        path: 'customers',
        name: 'Customer List',
        component: () => import(/* webpackChunkName: "sales-app" */ '../views/app/sMan/CustomerList.vue')
    },
    {
        path: 'orders',
        name: 'Order List',
        component: () => import(/* webpackChunkName: "sales-app" */ '../views/app/sMan/OrderList.vue')
    },
    // {
    //     path: 'login',
    //     name: 'Customer Login',
    //     component: () => import(/* webpackChunkName: "cus-app" */ '../views/LoginUser.vue')
    // }
]