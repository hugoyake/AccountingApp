import { Pie, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  name: 'eventPie',
  extends: Pie,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}