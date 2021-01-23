import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

type Office = { name: string, address: string }
type Role = { role: string, description: string }
type ComState = { state: string, description: string }
type ComType = { type: string, description: string }

export interface UtilsData {
    divisions: Office[],
    gn_offices: Office[],
    roles: Role[],
    comTypes: ComType[],
    comStates: ComState[]
}

const state: UtilsData = {
    divisions: [],
    gn_offices: [],
    roles: [],
    comTypes: [],
    comStates: []
}

const getters: GetterTree<UtilsData, RootState> = {
    getNameOnly_Divisions(state) {
        const name_only = []
        for (let i  = 0; i < state.divisions.length; i++) {
            name_only.push(state.divisions[i].name)
        }
        return name_only
    },
    getNameOnly_GnOffices(state) {
        const name_only = []
        for (let i  = 0; i < state.gn_offices.length; i++) {
            name_only.push(state.gn_offices[i].name)
        }
        return name_only
    },
    getNameOnly_UserRoles(state) {
        const name_only = []
        for (let i  = 0; i < state.roles.length; i++) {
            name_only.push(state.roles[i].role)
        }
        return name_only
    },
    getNameOnly_ComStates(state) {
        const name_only = []
        for (let i  = 0; i < state.comStates.length; i++) {
            name_only.push(state.comStates[i].state)
        }
        return name_only
    },
    getNameOnly_ComTypes(state) {
        const name_only = []
        for (let i  = 0; i < state.comTypes.length; i++) {
            name_only.push(state.comTypes[i].type)
        }
        return name_only
    }
}

const mutations: MutationTree<UtilsData> = {
    ADD_DIVISION(state, payload) {
        state.divisions.push(payload)
    },
    ADD_GN_OFFICE(state, payload) {
        state.gn_offices.push(payload)
    },
    REMOVE_DIVISION(state, payload) {
        state.divisions = state.divisions.filter((d) => d.name !== payload.name)
    },
    REMOVE_GN_OFFICE(state, payload) {
        state.gn_offices = state.gn_offices.filter((d) => d.name !== payload.name)
    },
}

const actions: ActionTree<UtilsData, RootState> = {

    async addDivision(store, payload) {
        const status = await api.util.addDivision(payload.name, payload.address)
        if (status.code === 200) {
            store.commit('ADD_DIVISION', payload)
        }
        return status
    },

    async addGNOffice(store, payload) {
        const status = await api.util.addGNOffice(payload.name, payload.address)
        if (status.code === 200) {
            store.commit('ADD_GN_OFFICE', payload)
        }
        return status
    },

    async removeDivision(store, payload) {
        const status = await api.util.deleteDivision(payload.name)
        if (status.code === 200) {
            store.commit('REMOVE_DIVISION', payload)
        }
        return status
    },

    async removeGNOffice(store, payload) {
        const status = await api.util.deleteGNOffice(payload.name)
        if (status.code === 200) {
            store.commit('REMOVE_GN_OFFICE', payload)
        }
        return status
    },

    async loadDivisions(store) {
        const [divisions, status] = await api.util.getAllDivisions()
        if (status.code === 200) {
            store.state.divisions = divisions;
        }
        return status
    },

    async loadGNOffices(store) {
        const [gnOffices, status] = await api.util.getAllGNOffices()
        if (status.code === 200) {
            store.state.gn_offices = gnOffices
        }
        return status
    },

    async loadUserRoles(store) {
        const [roles, status] = await api.util.getAllUserRoles()
        if (status.code === 200) {
            store.state.roles = roles;
        }
        return status
    },

    async loadComStates(store) {
        const [states, status] = await api.util.getAllComStates()
        if (status.code === 200) {
            store.state.comStates = states
        }
        return status
    },

    async loadComTypes(store) {
        const [types, status] = await api.util.getAllComTypes()
        if (status.code === 200) {
            store.state.comTypes = types
        }
        return status
    },

    async loadAll(store) {
        const actions = [
            "loadDivisions",
            "loadGNOffices",
            "loadUserRoles",
            "loadComStates",
            "loadComTypes"
        ]
        let status
        for (let i = 0; i < actions.length; i++) {
            status = await store.dispatch(`${actions[i]}`)
            if (status.code !== 200) {
                return status
            }
        }
        return status
    }

}

export const utils_module: Module<UtilsData, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}