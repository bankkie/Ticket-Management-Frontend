import Vue from 'vue'
import Vuex from 'vuex'
import itemOrderModule from './modules/itemOrders.module'
import ticketModule from './modules/ticket.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ticket: ticketModule,
    itemorder: itemOrderModule
  }
})
