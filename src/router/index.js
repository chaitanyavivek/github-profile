import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Navbar from '@/components/Navbar'
import User from '@/components/User'
import followers from '@/components/followers'
import following from '@/components/following'
import profile from '@/components/profile'
import UserList from '@/components/UserList'
// import 'material-icons/iconfont/material-icons.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/:name/followers',
      props: true,
      name: 'followers',
      component: followers
    },
    {
      path: '/:name/following',
      props: true,
      name: 'following',
      component: following
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/profile/:name',
      props: true,
      name: 'profile',
      component: profile
    }
    // {
    //   path: '/UserList',
    //   props: true,
    //   name: 'UserList',
    //   component: UserList
    // }
  ]
})
