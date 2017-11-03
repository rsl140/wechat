import Vue from 'vue'
import Router from 'vue-router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
import Lists from '@/components/List'
import Home from '@/components/home'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: Login
    },
    {
      path: '/admin',
      name: 'indexPage',
      component: Home,
      children:[
                {
                    path:'list',
                    name: 'list',
                    component: Lists,
                }
            ]
    },
    {
        path:'*',
        redirect: '/'
    }
  ]
})