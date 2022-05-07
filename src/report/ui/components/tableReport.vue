<template>
<div class="bg-white pb-4 px-4 rounded-md w-full">
      
    <div class="overflow-x-auto mt-6">
        <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select v-model="filterType"
                            class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">ALL</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
                    
                    <input type="date" v-model="filterDate"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
      <table class="table-auto border-collapse w-full">
        <thead>
          <tr class="rounded-lg text-sm font-medium text-gray-700 text-center" style="font-size: 0.9674rem">
            <th class="px-4 py-2 bg-gray-200 " style="background-color:#f8f8f8">Type</th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">Order</th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">By</th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">Date</th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">Total Price</th>
          </tr>
        </thead>
        <tbody class="text-sm font-normal text-gray-700">
          <tr v-for="(item,key) in itemOrder" :key="key" class="hover:bg-gray-100 border-b border-gray-200 py-2 text-center">
            <td class="px-4 py-4">{{item.ticketType.type}}</td>
            <td class="px-4 py-4">{{item.amount}}</td>
            <td class="px-4 py-4">K.{{item.user.firstName || ''}} {{item.user.lastName || ''}}</td>
            <td class="px-4 py-4">{{item.date}}</td>
            <td class="px-4 py-4" >{{Number(item.amount)*Number(item.ticketType.price)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>


</template>

<script>
import { mapGetters } from 'vuex'
export default {
created(){
    this.getItemOrder()
},
props: {},
computed: {
  ...mapGetters({
      itemOrder: 'itemorder/getItemOrder'
      }),
},
data() {
    return {
        filterDate: '',
        filterType: 'A'
    }
},
watch: {
    filterDate (newDate) {
        this.getItemOrder()
    },
    filterType (newType) {
        this.getItemOrder()
    }
},
methods: {
    async getItemOrder () {
        if (this.filterDate && this.filterType) {
            this.$store.dispatch("itemorder/getItemOrderByDateType",{date:this.filterDate, type:this.filterType})
        } else if (this.filterDate && this.filterType === '') {
            this.$store.dispatch("itemorder/getItemOrderByDate",this.filterDate)
        } else if (this.filterDate === '' && this.filterType) {
            this.$store.dispatch("itemorder/getItemOrderByType",this.filterType)
        } else {
            this.$store.dispatch("itemorder/getItemOrder")
        }
    }

}

}
</script>

<style scoped>
  
thead tr th:first-child { border-top-left-radius: 10px; border-bottom-left-radius: 10px;}
thead tr th:last-child { border-top-right-radius: 10px; border-bottom-right-radius: 10px;}

tbody tr td:first-child { border-top-left-radius: 5px; border-bottom-left-radius: 0px;}
tbody tr td:last-child { border-top-right-radius: 5px; border-bottom-right-radius: 0px;}


</style>