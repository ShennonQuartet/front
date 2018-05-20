import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import moment from 'moment';
import api from '../api';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    status: 0,
    incidents: [],
    img: {
      url: '',
      verdict: 1,
    },
    newIncident: {
      show: false,
      dateTime: '',
    },
    chartData: [{
      labels: [
        '2017-12-20 10:13:20',
        '2017-12-20 10:13:30',
        '2017-12-20 10:13:40',
        '2017-12-20 10:13:50',
        '2017-12-20 10:14:00',
        '2017-12-20 10:14:10',
        '2017-12-20 10:14:20',
        '2017-12-20 10:14:30',
        '2017-12-20 10:14:40',
        '2017-12-20 10:14:50',
        '2017-12-20 10:15:00',
        '2017-12-20 10:15:10',
        '2017-12-20 10:15:20',
      ],
      datasets: [
        {
          label: 'Е.21402А....ГР.ВОДА.ВЫХ...214TIC101A',
          borderColor: 'rgb(10, 140, 146)',
          data: [
            9.18999958,
            9.159999847,
            9.18999958,
            9.199999809,
            9.220000267,
            9.229999542,
            9.229999542,
            9.170000076,
            9.130000114,
            9.18999958,
            9.220000267,
            9.25,
            9.210000037999999,
          ],
        },
      ],
    },
    {
      labels: [
        '2017-12-20 10:13:20',
        '2017-12-20 10:13:30',
        '2017-12-20 10:13:40',
        '2017-12-20 10:13:50',
        '2017-12-20 10:14:00',
        '2017-12-20 10:14:10',
        '2017-12-20 10:14:20',
        '2017-12-20 10:14:30',
        '2017-12-20 10:14:40',
        '2017-12-20 10:14:50',
        '2017-12-20 10:15:00',
        '2017-12-20 10:15:10',
        '2017-12-20 10:15:20',
      ],
      datasets: [
        {
          label: 'ЦИЛ..9.ТЕМП.УПР...214TIC213A',
          borderColor: 'rgb(10, 140, 146)',
          data: [
            41.12999725,
            41.13999939,
            41.13999939,
            41.15999985,
            41.15999985,
            41.15999985,
            41.18000031,
            41.16999817,
            41.18000031,
            41.20000076,
            41.20000076,
            41.20000076,
            41.20999908,
          ],
        },
      ],
    },
    {

      labels: [
        '2017-12-20 10:13:20',
        '2017-12-20 10:13:30',
        '2017-12-20 10:13:40',
        '2017-12-20 10:13:50',
        '2017-12-20 10:14:00',
        '2017-12-20 10:14:10',
        '2017-12-20 10:14:20',
        '2017-12-20 10:14:30',
        '2017-12-20 10:14:40',
        '2017-12-20 10:14:50',
        '2017-12-20 10:15:00',
        '2017-12-20 10:15:10',
        '2017-12-20 10:15:20',
      ],
      datasets: [
        {
          label: 'УРОВЕНЬ.В...V.25001A...250LI001A',
          borderColor: 'rgb(10, 140, 146)',
          data: [
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
          ],
        },
      ],
    },
    {
      labels: [
        '2017-12-20 10:13:20',
        '2017-12-20 10:13:30',
        '2017-12-20 10:13:40',
        '2017-12-20 10:13:50',
        '2017-12-20 10:14:00',
        '2017-12-20 10:14:10',
        '2017-12-20 10:14:20',
        '2017-12-20 10:14:30',
        '2017-12-20 10:14:40',
        '2017-12-20 10:14:50',
        '2017-12-20 10:15:00',
        '2017-12-20 10:15:10',
        '2017-12-20 10:15:20',
      ],
      datasets: [
        {
          label: 'НАГНЕТАНИЕ.В.EX.21401...250PI001',
          borderColor: 'rgb(10, 140, 146)',
          data: [
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
            234.3000031,
          ],
        },
      ],
    },
    // {
    //   labels: [
    //     '2017-12-20 10:13:20',
    //     '2017-12-20 10:13:30',
    //     '2017-12-20 10:13:40',
    //     '2017-12-20 10:13:50',
    //     '2017-12-20 10:14:00',
    //     '2017-12-20 10:14:10',
    //     '2017-12-20 10:14:20',
    //     '2017-12-20 10:14:30',
    //     '2017-12-20 10:14:40',
    //     '2017-12-20 10:14:50',
    //     '2017-12-20 10:15:00',
    //     '2017-12-20 10:15:10',
    //     '2017-12-20 10:15:20',
    //   ],
    //   datasets: [
    //     {
    //       label: 'ЦИЛ..3.ТЕМП.НАГР...214TI216A',
    //       borderColor: 'rgb(10, 140, 146)',
    //       data: [
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //         234.3000031,
    //       ],
    //     },
    //   ],
    // },
    {
      labels: [
        '2017-12-20 10:13:20',
        '2017-12-20 10:13:30',
        '2017-12-20 10:13:40',
        '2017-12-20 10:13:50',
        '2017-12-20 10:14:00',
        '2017-12-20 10:14:10',
        '2017-12-20 10:14:20',
        '2017-12-20 10:14:30',
        '2017-12-20 10:14:40',
        '2017-12-20 10:14:50',
        '2017-12-20 10:15:00',
        '2017-12-20 10:15:10',
        '2017-12-20 10:15:20',
      ],
      datasets: [
        {
          label: 'prediction',
          borderColor: 'rgb(10, 140, 146)',
          data: [
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
            0.03000031,
          ],
        },
      ],
    },
    ],
  },
  getters: {
    newIncident: state => state.newIncident,
    status: state => state.status,
    incidents: state => state.incidents,
  },
  mutations: {
    OPEN_INCIDENT(state, dateTime) {
      state.newIncident.show = true;
      state.newIncident.dateTime = dateTime;
    },
    CLOSE_INCIDENT(state) {
      state.newIncident.show = false;
    },
    SOCKET_ONOPEN(state, message) {
      console.log('SOCKET_ONOPEN', message);
    },

    SOCKET_ONCLOSE(state, message) {
      console.log('SOCKET_ONCLOSE', message);
    },
    SOCKET_ONMESSAGE(state, message) {
      const dateT = moment(message.date);
      state.chartData.forEach((item) => {
        item.labels.push(message.date);
        item.labels.splice(0, 1);
      });

      Object.keys(message).forEach((key) => {
        if (key !== 'date' && key !== 'verification') {
          const tempArr = [];
          state.chartData.forEach((i) => {
            tempArr.push(i.datasets[0].label);
          });
          // console.log('hh', tempArr);
          const index = tempArr.findIndex(item => item === key);
          console.log('index', index, key, message[key], state.chartData[index]);
          state.chartData[index].datasets[0].data.push(+message[key]);
          state.chartData[index].datasets[0].data.splice(0, 1);
          if (key === 'prediction') {
            state.chartData[index].datasets[0].borderColor = `rgb(${50 + 205 * (+message[key])}, ${155 - (205 * (+message[key]))}, 32)`;
          }
        }
        if (key === 'verification') {
          // console.log(message[key].image_url);
          console.log('message[key]', message[key]);
          state.img.url = message[key].image_url;
          state.img.verdict = message[key].verdict;
          if (message[key].verdict === 0 && state.status < 10) {
            state.status = 1;
            const obj = {
              type: 'vibr',
              datetime: dateT,
              user: {
                pk: 2,
                username: 'system',
              },
            };
            state.incidents.push(Object.assign({}, obj, { pk: state.incidents.length + 1, }));
          } else if (message[key].verdict === 0 && state.status === 10) {
            state.status = 11;
          }
        }
      });
      console.log(state.chartData);
      document.dispatchEvent(window.event1);
    },
    SET_INCIDENTS(state, obj) {
      state.incidents = obj;
    },
    ADD_INCIDENT(state, obj) {
      state.incidents.push(Object.assign({}, obj, { pk: state.incidents.length + 1 }));
    },
  },
  actions: {},
});
