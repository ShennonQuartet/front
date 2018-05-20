<template>
  <div class="hello">
    <div class="row">
      <div class="col-12"><line-chart :dataPlot="chartOptions[4]" :options="chartOptions"></line-chart></div>
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

</style>
