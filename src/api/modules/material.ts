import {Status, toStatus} from "@/api/core";
import {apiConn} from "@/api/conn";

export const materialApi = {

    async addMaterial(data: any): Promise<Status> {
        try {
            const res = await apiConn.post(`api/material/register`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },

    async getMaterials(cond: any): Promise<[any, Status]> {
        try {
            const res = await apiConn.get(`api/material/view`, cond);
            return [res.data.data, toStatus(res)];
        } catch (e) {
            return [null, toStatus(e.response)];
        }
    },

    async updateMaterial(materialId: string, data: any): Promise<Status> {
        try {
            const res = await apiConn.put(`api/material/update/${materialId}`, data);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },


    async removeMaterial(materialId: string): Promise<Status> {
        try {
            const res = await apiConn.delete(`api/material/delete/${materialId}`);
            return toStatus(res);
        } catch (e) {
            return toStatus(e.response);
        }
    },

    stock : {
        async addMaterialStock(data: any): Promise<Status> {
            try {
                const res = await apiConn.post(`api/material/stock/register`, data);
                return toStatus(res);
            } catch (e) {
                return toStatus(e.response);
            }
        },

        async getMaterialStocks(cond: any): Promise<Status> {
            try {
                const res = await apiConn.get(`api/material/stock/view`, cond);
                return toStatus(res);
            } catch (e) {
                return toStatus(e.response);
            }
        },

        async updateMaterialStock(stockId: string, data: any): Promise<Status> {
            try {
                const res = await apiConn.put(`api/material/stock/update/${stockId}`, data);
                return toStatus(res);
            } catch (e) {
                return toStatus(e.response);
            }
        },


        async removeMaterialStock(stockId: string): Promise<Status> {
            try {
                const res = await apiConn.delete(`api/material/stock/delete/${stockId}`);
                return toStatus(res);
            } catch (e) {
                return toStatus(e.response);
            }
        },
    }
};