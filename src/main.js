// Default main.js start
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Axios start
import axios from 'axios'
import VueAxios from 'vue-axios'
// Axios end

// Bootstrap start
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Bootstrap end

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// Default main.js end
