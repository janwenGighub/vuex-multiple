import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: ()=> import ('./views/Home.vue')
        },
        {
          path: '/list',
          component: ()=> import ('./views/List.vue')
        },
        {
          path: '/select',
          component: ()=> import ('./views/Select.vue')
        }
      ]
    }
  ]
})
