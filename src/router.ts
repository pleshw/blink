import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tutorial from './views/Tutorial.vue'
import PlayerSelection from './views/PlayerSelection.vue'
import ModSelection from './views/ModSelection.vue'
import Game from './views/Game.vue'
import Fim from './views/Fim.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial,
    },
    {
      path: '/seleção-de-jogadores',
      name: 'seleção-de-jogadores',
      component: PlayerSelection
    }, {
      path: '/seleção-de-módulos',
      name: 'seleção-de-módulos',
      component: ModSelection,
    },

    {
      path: '/game',
      name: 'game',
      component: Game,
    },

    {
      path: '/fim',
      name: 'fim',
      component: Fim,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
