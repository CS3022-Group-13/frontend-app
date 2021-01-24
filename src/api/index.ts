import {apiConn} from "@/api/conn";
// import {utilApi} from "@/api/modules/util";
import {userApi} from "@/api/modules/user";
import {customerApi} from "@/api/modules/customer";
import {orderApi} from "@/api/modules/order";
import {paymentApi} from "@/api/modules/payment";
import {productApi} from "@/api/modules/product";
import {materialApi} from "@/api/modules/material";

const token = {
    set(token: string) {
        apiConn.enableAuth(token)
    },
    remove() {
        apiConn.removeAuth()
    }
}

export const api = {
    user: userApi,
    customer: customerApi,
    order: orderApi,
    payment: paymentApi,
    product: productApi,
    material: materialApi,
    token
}