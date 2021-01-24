import {Status, toStatus} from "@/api/core";
import {apiConn} from "@/api/conn";

export const orderApi = {

    async placeOrder(data: any): Promise<Status> {
        try {
            const res = await apiConn.post(`api/order/place-order`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },

    async viewDetails(cond: any): Promise<Status> {
        try {
            const res = await apiConn.get(`api/order/view-order`, cond);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },

    async changeStatus(orderId: string, orderStatus: boolean): Promise<Status> {
        try {
            const res = await apiConn.put(`api/order/update-status/${orderId}`, {orderStatus});
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },


};