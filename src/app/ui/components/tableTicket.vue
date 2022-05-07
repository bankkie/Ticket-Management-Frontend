<template>
<div class="bg-white pb-4 px-4 rounded-md w-full">
      
    <div class="overflow-x-auto mt-6">

      <table class="table-auto border-collapse w-full">
        <thead>
          <tr class="rounded-lg text-sm font-medium text-gray-700 text-center" style="font-size: 0.9674rem">
            <th class="px-4 py-2 bg-gray-200 " style="background-color:#f8f8f8">Type</th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">Price</th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">Amount limit per day</th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">Status</th>
            <th class="px-4 py-2 " style="background-color:#f8f8f8">Total Ordered</th>
          </tr>
        </thead>
        <tbody class="text-sm font-normal text-gray-700">
          <tr v-for="(item,key) in resultData" :key="key" class="hover:bg-gray-100 border-b border-gray-200 py-2 text-center">
            <td class="px-4 py-4">{{item.ticketType.type}}</td>
            <td class="px-4 py-4">{{item.ticketType.price}}</td>
            <td class="px-4 py-4">{{item.ticketType.amount}}</td>
            <td class="px-4 py-4" v-if="item.status === 1">
              <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                  <span aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span class="relative">open</span>
              </span>
            </td>
            <td class="px-4 py-4" v-else>
              <span
                  class="relative inline-block px-3 py-1 font-semibold text-red-500 leading-tight">
                  <span aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                  <span class="relative">close</span>
              </span>
            </td>
            <td class="px-4 py-4" v-if="item.item">{{item.item.sum}}</td>
            <td class="px-4 py-4" v-else>0</td>
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
},
props: {},
computed: {
  ...mapGetters({
        tickets: 'ticket/getTickets',
        sumOrders: 'itemorder/getSumOrder'
      }),
      resultData() {
       const match = this.tickets.map(el => {
        const haveItem = this.sumOrders.find(i => i.type === el.type )
         if(haveItem){
          return {
            ticketType: el,
            status:  el.amount === Number(haveItem.sum) ? 0 : 1,
            item: haveItem
          }
         } else { 
           return {
            ticketType: el,
            status: 1
            }
          }
        })
        console.log(match);
        return match
      }
},
data() {
    return {
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