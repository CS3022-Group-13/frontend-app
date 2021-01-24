import { Status, toStatus } from "@/api/core";
import { apiConn } from "@/api/conn";


export const customerApi = {

    async login(username: string, password: string): Promise<[any, Status]> {
        try {
            const res = await apiConn.post('api/cus/login', {username, password});
            const {token, data} = res.data;
            return [{token, customerData: data.customerData}, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    },

    async addCustomer(customerData: any): Promise<[string, Status]> {
        try {
            const res = await apiConn.post('api/cus/add-cus', customerData)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return ['', toStatus(e.response)]
        }
    },

    async getCustomer(condition: any): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get('api/cus/get-details', condition)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [[], toStatus(e.response)]
        }
    },

    async updateCustomer(customerId: string, customerData: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/customer/update-details/${customerId}`, customerData)
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async updateCredentials(customerId: string, accountData: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/customer/update-acc/${customerId}`, accountData)
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },


}