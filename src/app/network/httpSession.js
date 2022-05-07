import axios from 'axios'

const ENDPOINT_URL = process.env.VUE_APP_DEV || 'http://localhost:3000'

const rest = axios.create({
  baseURL: 'http://localhost:3000/'
})

const get = rest.get
const post = rest.post
const put = rest.put
const patch = rest.patch

export { get, post, put, patch }
