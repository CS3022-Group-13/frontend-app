import { Status, toStatus } from "@/api/core";
import { apiConn } from "@/api/conn";


export const customerApi = {

    async login(username: string, password: string): Promise<[any, Status]> {
        try {
            const res = await apiConn.post('api/customer/login', {username, password});
            return [{token: res.data.token, customerData: res.data.data.customerData}, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    },

    async addCustomer(customerData: any): Promise<[string, Status]> {
        try {
            const res = await apiConn.post('api/customer/add-customer', customerData)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return ['', toStatus(e.response)]
        }
    },

    async getCustomer(condition: any): Promise<[any, Status]> {
        try {
            const res = await apiConn.get('api/customer/get-details', condition)
            console.log(res.data)
            return [res.data.data.data, toStatus(res)]
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