import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify';
import {Notificator} from "@/plugins/notificator";

Vue.config.productionTip = false
Vue.use(Notificator);

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
