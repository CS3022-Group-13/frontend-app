import {Status, toStatus} from "@/api/core";
import {apiConn} from "@/api/conn";

export const complaintApi = {
    async addComplaint(complaintData: any): Promise<[string, Status]> {
        try {
            const res = await apiConn.post('api/complaint/add-complaint', complaintData)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return ['', toStatus(e.response)]
        }
    },

    async addAttachment(complaintId: string, attachmentId: string): Promise<Status> {
        try {
            const res = await apiConn.post(`api/complaint/add-attachment/${complaintId}`, {
                attachmentId
            })
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async assignDivision(complaintId: string, division: string): Promise<Status> {
        try {
            const res = await apiConn.post(`api/complaint/assign-div/${complaintId}`, {
                division
            })
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async reassignDivision(complaintId: string, division: string): Promise<Status> {
        try {
            const res = await apiConn.put(`api/complaint/reassign-div/${complaintId}`, {
                division
            })
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },

    async getComplaintCount(condition: any): Promise<[number, Status]> {
        try {
            const res = await apiConn.get('api/complaint/get-count', condition)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [-1, toStatus(e.response)]
        }
    },

    async getComplaints(condition: any): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get(`api/complaint/get-complaint`, condition)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [[], toStatus(e.response)]
        }
    },

    async getAttachments(complaintId: string): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get(`api/complaint/get-attachments/${complaintId}`)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [[], toStatus(e.response)]
        }
    },

    async getLogs(complaintId: string): Promise<[any[], Status]> {
        try {
            const res = await apiConn.get(`api/complaint/get-complaint-log/${complaintId}`)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [[], toStatus(e.response)]
        }
    },

    async getFullDetails(complaintId: string): Promise<[any, Status]> {
        try {
            const res = await apiConn.get(`api/complaint/get-full-details/${complaintId}`)
            return [res.data.data, toStatus(res)]
        } catch (e) {
            return [null, toStatus(e.response)]
        }
    },

    async writeLogEntry(complaintId: string, data: any): Promise<Status> {
        try {
            const res = await apiConn.post(`api/complaint/write-log/${complaintId}`, data)
            return toStatus(res)
        } catch (e) {
            return toStatus(e.response)
        }
    },

    mark: {

        async markForApproval(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/aw-approval/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markAsApproved(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/approved/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markForAccept(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/aw-accept/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markAsAccepted(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/accepted/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markForDivSecReview(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/aw-div-review/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markAsDivSecReviewed(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/div-reviewed/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markForDisSecReview(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/aw-dis-review/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markAsDisSecReviewed(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/dis-reviewed/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markAsSolved(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/solved/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        },

        async markAsRejected(complaintId: string, data: any = undefined): Promise<Status> {
            try {
                const res = await apiConn.put(`api/complaint/mark-complaint/reject/${complaintId}`, data)
                return toStatus(res)
            } catch (e) {
                return toStatus(e.response)
            }
        }

    }
}