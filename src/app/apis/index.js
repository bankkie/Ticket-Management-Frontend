import { get } from '../network/httpSession'
class ServiceApi {
  async getTickets () {
    try {
      const result = await get('/ticket-type')
      return result.data
    } catch (error) {
      console.error(error)
    }
  }

  async getItemOrderByDate (date) {
    try {
      const result = await get('/item-order/ticket-date?date=' + date)
      return result.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getItemOrderByType (type) {
    try {
      const result = await get('/item-order/ticket-type?type=' + type)
      return result.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getItemOrderByDateType (data) {
    try {
      const { date, type } = data
      const result = await get('/item-order/ticket-date-type?date=' + date + '&type=' + type)
      return result.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getSumItemOrderByDate (date) {
    try {
      console.log(date)
      const result = await get('/item-order/check-status?date=' + date)
      return result.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getItemOrder () {
    try {
      const result = await get('/item-order')
      return result.data.data
    } catch (error) {
      console.error(error)
    }
  }
}
export default new ServiceApi()
