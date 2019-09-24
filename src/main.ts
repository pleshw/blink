import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Gerenciador } from './includes/game_manager/GameManager'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.prototype.$GameManager = new Gerenciador();



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
