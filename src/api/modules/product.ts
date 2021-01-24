import {Status, toStatus} from "@/api/core";
import {apiConn} from "@/api/conn";

export const productApi = {

    async addProduct(data: any): Promise<Status> {
        try {
            const res = await apiConn.post(`api/product/register`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },

    async getProducts(cond: any): Promise<Status> {
        try {
            const res = await apiConn.get(`api/product/view`, cond);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },

    async updateProduct(productId: string, data: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/product/update/${productId}`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },


    async removeProduct(productId: string): Promise<Status> {
        try {
            const res = await apiConn.delete(`api/product/delete/${productId}`);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },

    stock : {
        async addProductStock(data: any): Promise<Status> {
            try {
                const res = await apiConn.post(`api/product/stock/register`, data);
                return toStatus(res);
            } catch (e) {
                return toStatus(e.response);
            }
        },

        async getProductStocks(cond: any): Promise<Status> {
            try {
                const res = await apiConn.get(`api/product/stock/view`, cond);
                return toStatus(res);
            } catch (e) {
                return toStatus(e.response);
            }
        },

        async updateProductStock(stockId: string, data: any): Promise<Status> {
            try {
                const res = await apiConn.put(`api/product/stock/update/${stockId}`, data);
                return toStatus(res);
            } catch (e) {
                return toStatus(e.response);
            }
        },


        async removeProductStock(stockId: string): Promise<Status> {
            try {
                const res = await apiConn.delete(`api/product/stock/delete/${stockId}`);
                return toStatus(res);
            } catch (e) {
                return toStatus(e.response);
            }
        },
    }
};