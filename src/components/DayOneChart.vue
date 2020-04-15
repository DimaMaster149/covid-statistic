<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  name: 'day-one-chart',
  props: {
    chartData: {
      type: Object,
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
