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
