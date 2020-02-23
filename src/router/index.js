import Vue from 'vue'
import Router from 'vue-router'
import Merchant from '@/components/Merchant/Merchant'
import Admin from '@/components/Admin/Admin'
import Integral from '@/components/Integral/Integral'
import Member from '@/components/Member/Member'
import Carousel from '@/components/Carousel/Carousel'
import Prefix from '@/components/Prefix/Prefix'

import Login from '@/components/Login/Login'
// @绝对路径 检索到 ...src/

// 如果Router当做局部模块使用一定要Vue.use(Router)
// 以后在组件中，可以通过this.$router 获取Router实例化对象
// 路由信息对象 this.$routes 获取路由配置信息
Vue.use(Router)

// 配置路由规则
export default new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes: [
    {
      'path': '/',
      redirect: '/merchant'
    },
    {
      'path': '/merchant',
      name: Merchant,
      component: Merchant
    },
    {
      'path': '/admin',
      name: Admin,
      component: Admin
    },
    {
      'path': '/integral',
      name: Integral,
      component: Integral
    },
    {
      'path': '/member',
      name: Member,
      component: Member
    },
    {
      'path': '/carousel',
      name: Carousel,
      component: Carousel
    },
    {
      'path': '/prefix',
      name: Prefix,
      component: Prefix
    },
    {
      'path':'/login',
      name: 'Login',
      component: Login
    }
  ]
})
