import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckStatus from '../ui/pages/checkStatus.vue'
import AdminLayout from '../ui/layout/adminLayout.vue'
import Report from '../../report/ui/pages/report.vue'
import Dashboard from '../../dashboard/ui/pages/dashboard.vue'
import ManageTicket from '../../manage/ui/pages/manageTicket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: CheckStatus
      },
      {
        path: '/report',
        component: Report
      },
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/manage',
        component: ManageTicket
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
