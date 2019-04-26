import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import address from '@/pages/address/index'
import editAddress from '@/pages/editAddress/index'
import counter from '@/pages/counter/index'
import order from '@/pages/order/index'
import orderDetail from '@/pages/orderDetail/index'
import placeOrders from '@/pages/placeOrders/index'
import search from '@/pages/search/index'
import shop from '@/pages/shop/index'
import user from '@/pages/user/index'
import web from '@/pages/web/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: editAddress
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: orderDetail
    },
    {
      path: '/placeOrders',
      name: 'placeOrders',
      component: placeOrders
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/web',
      name: 'web',
      component: web
    },
  ]
})
