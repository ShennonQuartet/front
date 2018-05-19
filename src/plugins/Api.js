import api from '../api';

const ApiPlugin = {
  install(Vue) {
    // eslint-disable-next-line
    Vue.prototype.$api = api;
  },
};

export { ApiPlugin as default };
