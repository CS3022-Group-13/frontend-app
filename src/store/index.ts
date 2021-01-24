import Vue from 'vue';
import Vuex from 'vuex';
import {user_module } from '@/store/modules/user';
import {customer_module} from "@/store/modules/customer";
import {util_module} from "@/store/modules/utils";

Vue.use(Vuex);

export interface RootState {}

export default new Vuex.Store<RootState>({
	modules: {
		user: user_module,
		customer: customer_module,
		utils: util_module
	}
});
