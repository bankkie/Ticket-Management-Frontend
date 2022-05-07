<template>
    <main>
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pl-8 lg:pl-14 xl:pl-30 2xl:pl-40">
          <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1> ( {{dateNow}} )
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pl-8 lg:pl-14 xl:pl-30 2xl:pl-40">
          <!-- Replace with your content -->
          <div class="py-4">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-[30rem]" >
            <bar-chart/>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
</template>

<script>
import barChart from '../components/barChart.vue'
export default {
  components: { barChart },
  created() {
    this.setupChartData()
  },
  computed: {
    dateNow () {
      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      return dd + '/' + mm + '/' + yyyy;
    }
  },
  data () {
    return {
      timeout: 60000,
      timeoutFunction: {}
    }
  },
  methods: {
    setupChartData() {
      const date = new Date()
      this.$store.dispatch("itemorder/getSumItemOrderByDate",date.toISOString().split('T')[0])
      this.timeoutFunction = setTimeout(() => {
        this.setupChartData()
      }, this.timeout);
    }
  },
  destroyed() {
    clearTimeout(this.timeoutFunction);
  }

}
</script>

<style>

</style>