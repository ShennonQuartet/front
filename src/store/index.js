import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import api from '../api';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    newIncident: {
      show: false,
      dateTime: '',
    },
  },
  getters: {
    newIncident: state => state.newIncident,
  },
  mutations: {
    OPEN_INCIDENT(state, dateTime) {
      state.newIncident.show = true;
      state.newIncident.dateTime = dateTime;
    },
    CLOSE_INCIDENT(state) {
      state.newIncident.show = false;
    },
  },
  actions: {},
});
