import Vue from 'vue'
import App from './app/ui/pages/index.vue'
import router from './app/router'
import store from './app/stores'
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
