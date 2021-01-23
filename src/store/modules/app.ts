import { GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";

export interface AppState {
    showMessage: boolean,
    message: {
        text: string
        type: string
    }
}

const state: AppState = {
    showMessage: false,
    message: {
        text: 'Welcome',
        type: 'info'
    }
}

const mutations: MutationTree<AppState> = {
    SHOW_MSG(state, payload) {
        state.showMessage = false
        state.message.type = payload.type || 'info'
        state.message.text = payload.text || 'Message'
        state.showMessage = true
    }
}

export const app_module: Module<AppState, RootState> = {
    namespaced: true,
    state,
    mutations,
}