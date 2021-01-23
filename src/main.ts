import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import vuetify from './plugins/vuetify';
// ts-ignore
import VueToastify from 'vue-toastify';

Vue.config.productionTip = false;
Vue.use(VueToastify, {
	theme: "light",
	hideProgressbar: true
});

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
