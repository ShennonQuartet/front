<template>
  <div class="hello">
    <div class="row">
      <div class="col-9"><line-chart :dataPlot="chartOptions[4]" :options="chartOptions"></line-chart></div>
      <div class="col-3"><img :src="this.$store.state.img.url" :class="{'img-green':this.$store.state.img.verdict, 'img-red':!this.$store.state.img.verdict}"/></div>
    </div>
    <div class="row">
      <div class="col-6"><line-chart :dataPlot="chartOptions[1]" chartId='one1' :options="chartOptions"></line-chart></div>
      <div class="col-6"><line-chart :dataPlot="chartOptions[2]" chartId='one2' :options="chartOptions"></line-chart></div>
    </div>
    <div class="row">
      <div class="col-6"><line-chart :dataPlot="chartOptions[3]" chartId='one3' :options="chartOptions"></line-chart></div>
      <div class="col-6"><line-chart :dataPlot="chartOptions[0]" chartId='one4' :options="chartOptions"></line-chart></div>
    </div>
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
    };
  },
  computed: {
    chartOptions() {
      return this.$store.state.chartData;
    },
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  .img-green {
    margin-top: 30px;
    min-width: 100%;
    min-height: 20px;
    border: 3px solid rgb(36, 192, 36);
  }
  .img-red {
    margin-top: 30px;
    min-width: 100%;
    min-height: 20px;
    border: 3px solid rgb(36, 192, 36);
  }
</style>
