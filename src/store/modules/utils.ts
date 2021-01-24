import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";

const utilState = {
    userTypes: {
      admin: "Administrator",
      sMan: "Sales Manager",
      iMan: "Inventory Manager"
    },
    orderStatus: {
        placed: "Placed",
        paid: "Paid",
        delivered: "Delivered"
    }
}

type UtilState = typeof utilState

const state: UtilState = utilState
const getters: GetterTree<UtilState, RootState> = {
    userTypes(state) {
        return Object.values(state.userTypes)
    },
    orderStates(state) {
        return Object.values(state.orderStatus)
    }
}

export const util_module: Module<UtilState, RootState> = {
    namespaced: true,
    state,
    getters
}