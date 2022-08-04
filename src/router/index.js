import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 
import HelloWorld from '../components/HelloWorld.vue'
import Home from '../components/Home'
import Fav from '../components/Fav'
import Config from '../components/Config'
import login from '../components/login'
import Info from '../components/HomeChildren/Info'
import Function1 from '../components/HomeChildren/Function1'
import Function2 from '../components/HomeChildren/Function2'
import shareStore from '@/store/index.js'//全局store
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/', redirect: '/home/info' },
      {
        // 孩子不用加info
        path: 'info',
        component: Info
      },
      {
        path: 'function1',
        component: Function1
      },
      {
        path: 'function2',
        component: Function2
      }
    ]
  },

  {
    path: '/',
    name: 'main',
    component: HelloWorld
  },

  {
    path: '/login',
    component: login
  },

  {
    path: '/Fav',
    component: Fav
  },
  {
    path: '/Config',
    component: Config
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
//路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from, next)
  // next()
  // let token = shareStore.getAction('token')
  if (to.path === '/home' || to.path === '/login') { 
    next();
  }
  else if (shareStore.getAction('token')) {  //token有值
    next();
  }
  else {  //判断用户是否登录  同源cookie 非同源 token
    next('/login')  
  }
})
export default router
