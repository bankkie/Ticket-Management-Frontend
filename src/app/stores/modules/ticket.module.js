import ServiceApi from '../../apis'
const ticketModule = {
  state: () => ({
    tickets: []
  }),
  namespaced: true,
  actions: {
    async getTicket ({ state, commit, rootState }) {
      const result = await ServiceApi.getTickets()
      commit('SET_TICKETS', result)
    },
    async createTicketType ({ state, commit }, payload) {
      await ServiceApi.createTicketType(payload)
    },
    async updateTicketType ({ state, commit }, payload) {
      await ServiceApi.updateTicketType(payload)
    }
  },
  mutations: {
    SET_TICKETS (state, data) {
      state.tickets = data
    }
  },
  getters: {
    getTickets: (state) => {
      return state.tickets
    }
  }
}
export default ticketModule
