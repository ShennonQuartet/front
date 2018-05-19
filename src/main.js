// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Api from './plugins/Api';
import './assets/scss/index.scss';
import App from './App';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

Vue.config.productionTip = false;
Vue.axios.defaults.withCredentials = true;
Vue.axios.defaults.header = { 'Content-type': 'application/json' };

Vue.use(Api);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
