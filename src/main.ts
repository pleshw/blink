import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { GameManager } from './includes/GameManager'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.prototype.$GameManager = new GameManager();



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
