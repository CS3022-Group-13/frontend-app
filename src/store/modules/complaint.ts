import {ActionContext, ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

interface Complaint {
    complaintId: string,
    refNo: string,
    type: string,
    customerId: string,
    subject: string,
    description: string,
    status: string,
    createdDate: Date,
    assignedDiv: string,
    assignedBy: string,
    assignedDate: Date
}

export interface ComplaintState {
    drafts: Array<Complaint>
    awaitingApproval: Array<Complaint>
    approved: Array<Complaint>
    awaitingAccept: Array<Complaint>
    inProgress: Array<Complaint>
}

const state: ComplaintState = {
    drafts: [],
    awaitingApproval: [],
    approved: [],
    awaitingAccept: [],
    inProgress: []
}

const mutations: MutationTree<ComplaintState> = {}

async function LOAD_Complaints(store: ActionContext<ComplaintState, RootState>, status: string, dest: string) {
    const [complaints, res] = await api.complaint.getComplaints({status: 'Draft'})
    if (res.code == 200) {
        // @ts-ignore
        store.state[dest] = complaints || []
    }
    return res;
}

export const actions: ActionTree<ComplaintState, RootState> = {
    async LOAD_DraftComplaints(store) {
        return LOAD_Complaints(store, 'Draft', 'draft')
    },
    async LOAD_AwaitingApprovalComplaints(store) {
        return LOAD_Complaints(store, 'Awaiting Approval', 'awaitingApproval')
    },
    async LOAD_ApprovedComplaints(store) {
        return LOAD_Complaints(store, 'Approved', 'approved')
    },
    async LOAD_AwaitingAccept(store) {
        return LOAD_Complaints(store, 'Awaiting Accept', 'awaitingAccept')
    },
    async LOAD_InProgress(store) {
        return LOAD_Complaints(store, 'In Progress', 'inProgress')
    }
}

export const complaint_module: Module<ComplaintState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}