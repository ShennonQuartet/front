// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueNativeSock from 'vue-native-websocket';
import Api from './plugins/Api';
import './assets/scss/index.scss';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(VueNativeSock, 'ws://localhost:5678/', { store, format: 'json' });

Vue.config.productionTip = false;
Vue.axios.defaults.withCredentials = false;
Vue.axios.defaults.header = { 'Content-type': 'application/json' };

Vue.use(Api);
/* eslint-disable no-new */
window.event1 = new Event('build');
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
