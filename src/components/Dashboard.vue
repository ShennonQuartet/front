<template>
  <div class="hello">
    <h1>Температура экструдера</h1>
     <line-chart :chartData="chartOptions" :options="chartOptions"></line-chart>
  </div>
</template>

<script>
import LineChart from './LineChart';

export default {
  components: {
    LineChart,
  },
  name: 'Dashboard',
  data() {
    return {
      //

      //
      msg: 'Welcome to Your Vue.js App',
      datacollection: {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'],
        datasets: [
          {
            label: 'Средняя температура в месяце',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
    };
  },
  computed: {
    chartOptions() {
      return {
        chartData: this.datacollection,
      };
    },
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (46)) + 5;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>

</style>
