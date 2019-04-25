import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import editAddress from '@/pages/editAddress/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: editAddress
    },
  ]
})
