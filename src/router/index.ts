import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue';
import i18n from '../i18n';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      redirect: `/${i18n.locale}`

    },
    {
      path: '/:lang',
      component: {
        render(c) { return c('router-view')}
      },
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import(/* webpackChunkName: "login"*/ '../views/auth/Login.vue')
        },
        {
          path: 'signup',
          name: 'Signup',
          component: () => import(/* webpackChunkName: "signup"*/ '../views/auth/Signup.vue')
        },
        {
          path: 'forgot-password',
          name: 'Forgot-Passwprd',
          component: () => import(/* webpackChunkName: "forgotpassword"*/ '../views/auth/ForgotPassword.vue')
        },
        // {
        //   path: '/about',
        //   name: 'About',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        // }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
