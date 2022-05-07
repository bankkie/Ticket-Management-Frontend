<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { mapGetters } from 'vuex'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 160
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    
  },
  computed: {
  ...mapGetters({
        sumOrders: 'itemorder/getSumOrder',
        chartData: 'itemorder/getChartData'
      }),
    },
  watch: {
  },
  data() {
    return {
      chartOptions: {
        responsive: true
      }
    }
  },
  mounted () {
  },
  methods: {
    setupChartData() {
      // this.sumOrders.map(el => {
      //   this.chartData.labels.push(el.type)
      //   this.chartData.datasets[0].data.push(Number(el.sum))
      // })
      this.chartData.labels[0] = 'Z'
      this.chartData.datasets.push({data:[10]})
      // console.log(this.chartData);
    }
  }
}
</script>   