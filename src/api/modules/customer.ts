import { Status, toStatus } from "@/api/core";
import { apiConn } from "@/api/conn";


export const customerApi = {
    async addCustomer(customerData: any): Promise<[string, Status]> {
        try {
            const res = await apiConn.post('api/customer/add-customer', customerData)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return ['', toStatus(e.response)]
        }
    },

    async getCustomer(condition: any): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get('api/customer/get-customer', condition)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [[], toStatus(e.response)]
        }
    },

    async getCustomerCount(condition: any): Promise<[number, Status]> {
        try {
            const res = await apiConn.get('api/customer/get-count', condition)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [-1, toStatus(e.response)]
        }
    },

    async updateCustomer(customerId: string, customerData: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/customer/update-customer/${customerId}`, customerData)
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },


}