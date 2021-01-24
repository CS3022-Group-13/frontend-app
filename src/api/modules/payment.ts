import {Status, toStatus} from "@/api/core";
import {apiConn} from "@/api/conn";

export const paymentApi = {

    async addPayment(data: any): Promise<Status> {
        try {
            const res = await apiConn.post(`api/payment/add`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },

    async findPayment(cond: any): Promise<[any, Status]> {
        try {
            const res = await apiConn.get(`api/payment/get-details`, cond);
            console.log(res)
            return [[], toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)];
        }
    },

    async removePayment(paymentId: string): Promise<Status> {
        try {
            const res = await apiConn.delete(`api/payment/remove/${paymentId}`);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    }

};