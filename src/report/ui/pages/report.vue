<template>
    <main>
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pl-8 lg:pl-14 xl:pl-30 2xl:pl-40">
          <h1 class="text-2xl font-semibold text-gray-900">Report</h1>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pl-8 lg:pl-14 xl:pl-30 2xl:pl-40">
          <!-- Replace with your content -->
          <div class="py-4">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" >
            <table-report/>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
</template>

<script>
import tableReport from '../components/tableReport.vue'
export default {
  components: { tableReport },

}
</script>

<style>

</style>