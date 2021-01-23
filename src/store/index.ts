import Vue from 'vue'
import Vuex, {Module} from 'vuex'
import {user_module} from "@/store/modules/user";
import {utils_module} from "@/store/modules/utils";
import {app_module} from "@/store/modules/app";

Vue.use(Vuex)

export interface RootState {}

export default new Vuex.Store<RootState>({
    modules: {
        user: user_module,
        utils: utils_module,
        app: app_module
    }
})

