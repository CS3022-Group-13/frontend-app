import {RouteConfig} from "vue-router";

export const cusRoutes: Array<RouteConfig> = [
    {
        path: '',
        name: 'Customer Dashboard',
        component: () => import(/* webpackChunkName: "sales-app" */ '../views/customer/Dashboard.vue')
    },
    {
        path: 'orders',
        name: 'Orders',
        component: () => import(/* webpackChunkName: "cus-app" */ '../views/customer/OrderList.vue')
    },
    {
        path: 'payments',
        name: 'Payments',
        component: () => import(/* webpackChunkName: "cus-app" */ '../views/customer/Payments.vue')
    },
    {
        path: 'place-order',
        name: 'Place Order',
        component: () => import(/* webpackChunkName: "cus-app" */ '../views/customer/PlaceOrder.vue')
    }
]