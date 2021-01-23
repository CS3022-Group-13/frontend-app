import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

export interface UserState {
    token?: string
    userData: {
        customerId?: string | null
        firstName?: string
        lastName?: string
        email?: string
        telephone?: string
        userType: string
    }
}

const state: UserState = {
    userData: {
        userType: ''
    }
}

const getters: GetterTree<UserState, RootState> = {
    isAuth(state) {
        return state.userData.userType != ''
    },
    getRole(state) {
        if (state.userData && state.userData.userType) {
            return state.userData.userType
        }
        return 'None'
    }
}

const mutations: MutationTree<UserState> = {
    SET_USER_DATA: (state, payload) => {
        state.userData = payload
    },

    CLEAR_USER_DATA: (state) => {
        state.userData = { userType: ''}
    },

    SET_TOKEN(state, payload) {
        state.token = payload
    }
}

export const actions: ActionTree<UserState, RootState> = {
    async login(store, payload) {
        const [data, status] = await api.customer.login(payload.username, payload.password)
        if (status.code === 200) {
            await store.commit('SET_USER_DATA', {...data.userData, userType: "Customer"})
            await store.commit('SET_TOKEN', data.token)
            await store.dispatch('setLocalStorage')
            api.token.set(data.token)
        }
        return status
    },

    async loadLocalStorage(store) {
        if (store.state.userData.userType != '') {
            return;
        }
        const token = await sessionStorage.getItem('token')
        const userData = await sessionStorage.getItem('userData')
        if (token && userData) {
            await store.commit('SET_USER_DATA', JSON.parse(userData))
            await store.commit('SET_TOKEN', token)
            api.token.set(token)
        } else {
            await sessionStorage.clear()
        }
    },

    async setLocalStorage(store) {
        await sessionStorage.clear()
        const {token, userData} = store.state
        if (token && userData) {
            await sessionStorage.setItem('token', token)
            await sessionStorage.setItem('userData', JSON.stringify(userData))
        }
    },

    async logout(store) {
        store.commit('CLEAR_USER_DATA')
        api.token.remove()
        sessionStorage.clear()
    }
}

export const customer_module: Module<UserState, RootState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}