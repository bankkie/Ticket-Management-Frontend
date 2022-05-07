import ServiceApi from '../../apis'
const itemOrderModule = {
  state: () => ({
    sumOrder: [],
    itemOrder: [],
    chartData: {}
  }),
  namespaced: true,
  actions: {
    async getSumItemOrderByDate ({ state, commit, rootState }, payload) {
      const result = await ServiceApi.getSumItemOrderByDate(payload)
      commit('SET_SUMORDERS', result)
      commit('SET_CHARTDATA', result)
    },
    async getItemOrderByDate ({ state, commit, rootState }, payload) {
      const result = await ServiceApi.getItemOrderByDate(payload)
      commit('SET_ITEMORDER', result)
    },
    async getItemOrderByType ({ state, commit, rootState }, payload) {
      const result = await ServiceApi.getItemOrderByType(payload)
      commit('SET_ITEMORDER', result)
    },
    async getItemOrderByDateType ({ state, commit, rootState }, payload) {
      const result = await ServiceApi.getItemOrderByDateType(payload)
      commit('SET_ITEMORDER', result)
    },
    async getItemOrder ({ state, commit, rootState }) {
      const result = await ServiceApi.getItemOrder()
      commit('SET_ITEMORDER', result)
    }
  },
  mutations: {
    SET_SUMORDERS (state, data) {
      state.sumOrder = data
    },
    SET_ITEMORDER (state, data) {
      state.itemOrder = data
    },
    SET_CHARTDATA (state, data) {
      const chartData = {
        labels: [],
        datasets: []
      }
      const obj = []
      const newData = data.sort((a, b) => a.type.localeCompare(b.type))
      data.map(el => {
        chartData.labels.push(el.type)
        obj.push(Number(el.sum))
      })
      chartData.datasets.push({ data: obj, label: 'Order' })
      state.chartData = chartData
    }
  },
  getters: {
    getSumOrder: (state) => {
      return state.sumOrder
    },
    getItemOrder: (state) => {
      return state.itemOrder
    },
    getChartData: (state) => {
      return state.chartData
    }
  }
}
export default itemOrderModule
