import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './config/rem'
if (process.env.NODE_ENV === 'development') require('@/api/mock')
Vue.config.productionTip = false
import './assets/js/iconfont'



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
