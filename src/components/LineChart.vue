<template>
  <canvas :id="chartId" @click="cl">
  </canvas>
</template>
<script>
import Chart from 'chart.js';
import moment from 'moment';

export default {

  props: {
    options: {},
    chartId: {
      default: 'myChart',
    },
    width: {
      default: 400,
      type: Number,
    },
    height: {
      default: 400,
      type: Number,
    },
    cssClasses: {
      type: String,
      default: '',
    },
    styles: {
      type: Object,
    },
    dataPlot: {
    // default() {
    //   return {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets: [{
    //       label: "My First dataset",
    //       // backgroundColor: 'rgb(255, 99, 132)',
    //       borderColor: 'rgb(255, 99, 132)',
    //       data: [10, 10, 5, 2, 20, 30, 45],
    //     },
    //     {
    //       label: "My Second dataset",
    //       // backgroundColor: 'rgb(155, 99, 132)',
    //       borderColor: 'rgb(255, 199, 132)',
    //       data: [5, 6, 15, 72, 71, 72, 44],
    //     }],
    //   };
    // },
    },
  },
  // computed: {
  //   dataPlot() {
  //     return this.$store.state.chartData;
  //   },
  // },
  data() {
    return {
      chart: {},
    };
  },
  methods: {
    cl(e) {
      if (this.chart.getElementsAtEvent(e)[0] !== undefined) {
        const i = this.chart.getElementsAtEvent(e)[0]._index;
        console.log('open inc', this.dataPlot.labels[i]);
        const td = moment(this.dataPlot.labels[i], 'YYYY-MM-DD hh:mm:ss').format('DD.MM.YYYY hh:mm:ss');
        this.$store.commit('OPEN_INCIDENT', td);
      }
    },
  },
  watch: {
    dataPlot() {
      console.log('upd');
      this.chart.update();
    },
  },
  mounted() {
    const ctx = document.getElementById(this.chartId).getContext('2d');

    this.chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: this.dataPlot,

      // Configuration options go here
      options: {
        animation: {
          duration: 0,
        },
      },
    });

    document.addEventListener(
      'build',
      () => {
        console.log('up kostyl');
        this.chart.update();
      }, false);

    // console.log(chart.getElementsAtEvent);
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
  },
};
</script>
