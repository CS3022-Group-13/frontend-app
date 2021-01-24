import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

export interface CustomerState {
    token?: string
    customerData: {
        customerId: string | null
        firstName?: string
        lastName?: string
        email?: string
        telephone?: string
        userType: string
    }
}

const state: CustomerState = {
    customerData: {
        customerId: '',
        userType: ''
    }
}

const getters: GetterTree<CustomerState, RootState> = {
    isAuth(state) {
        return state.customerData.userType != ''
    },
    getType(state) {
        if (state.customerData && state.customerData.userType) {
            return state.customerData.userType
        }
        return 'None'
    }
}

const mutations: MutationTree<CustomerState> = {
    SET_USER_DATA: (state, payload) => {
        state.customerData = payload
    },

    CLEAR_USER_DATA: (state) => {
        state.customerData = { userType: '', customerId: ''}
    },

    SET_TOKEN(state, payload) {
        state.token = payload
    }
}

export const actions: ActionTree<CustomerState, RootState> = {
    async login(store, payload) {
        const [data, status] = await api.customer.login(payload.username, payload.password)
        console.log(data, status)
        if (status.code === 200) {
            await store.commit('SET_USER_DATA', {...data.customerData, userType: "Customer"})
            await store.commit('SET_TOKEN', data.token)
            await store.dispatch('setLocalStorage')
            api.token.set(data.token)
        }
        return status
    },

    async loadLocalStorage(store) {
        if (store.state.customerData.userType != '') {
            return;
        }
        const token = await sessionStorage.getItem('token')
        const customerData = await sessionStorage.getItem('customerData')
        if (token && customerData) {
            await store.commit('SET_USER_DATA', JSON.parse(customerData))
            await store.commit('SET_TOKEN', token)
            api.token.set(token)
        } else {
            await sessionStorage.clear()
        }
    },

    async setLocalStorage(store) {
        await sessionStorage.clear()
        const {token, customerData} = store.state
        if (token && customerData) {
            await sessionStorage.setItem('token', token)
            await sessionStorage.setItem('customerData', JSON.stringify(customerData))
        }
    },

    async logout(store) {
        store.commit('CLEAR_USER_DATA')
        api.token.remove()
        sessionStorage.clear()
    }
}

export const customer_module: Module<CustomerState, RootState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}