<template>
<div>
    <div class="relative flex items-center gap-4 pt-2">
        <div class="pl-5">
            <b>Ticket Type</b>
        </div>
    
        <select v-model="selectTicket"
            class="appearance-none h-full rounded-md border block appearance-none w-1/3 bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option value="" selected >Add</option>
            <option v-for="(item, key) in tickets" :key="key" :value="item">{{item.type}}</option>
        </select>
        <div
            class="pointer-events-none absolute inset-y-0 left-[42%] flex items-center px-2 text-gray-700 top-[10px]">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
    </div>
    <hr class="divide-y-2 my-2" /> 
    <div class=" mx-2">
        <form class="relative w-full mt-6 space-y-8" @submit="handleOnSubmit">
            <div class="relative">
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Ticket Type</label>
               <input type="text" v-model="ticketObj.type" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black">
            </div>
            <div class="relative">
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Price</label>
               <input type="text" v-model="ticketObj.price" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black">
            </div>
            <div class="relative">
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Amount limit per day</label>
               <input type="text" v-model="ticketObj.amount" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black">
            </div>
            <div class="relative">
               <label class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Minimum buying</label>
               <input type="text" v-model="ticketObj.minimum" class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black">
            </div>
            <div class="relative">
               <button type="submit" class="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500 ease">Submit</button>
            </div>
         </form>    
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
        tickets: 'ticket/getTickets'
      }),
    },
    created (){
    },
    data () {
        return {
            selectTicket:"",
            ticketObj: {}
        }
    },
    watch: {
        selectTicket(newValue) {
            if (newValue === "") {
                this.ticketObj = {}
            } else {
                this.ticketObj = {...newValue}
            }
        }
    },
    methods: {
        async handleOnSubmit (e) {
            e.preventDefault()
            if (this.ticketObj.type === "" || this.ticketObj.price === "" || this.ticketObj.amount === "" || this.ticketObj.minimum === "") {
                alert("Do not leave fields empty");
                return
            }
            if (this.ticketObj.id) {
                // update
                await this.$store.dispatch("ticket/updateTicketType",this.ticketObj)
            } else {
                // create
                await this.$store.dispatch("ticket/createTicketType",this.ticketObj)
            }
            this.ticketObj = {}
            this.selectTicket = ""
            this.$store.dispatch("ticket/getTicket")
        }
    }

}
</script>

<style>

</style>