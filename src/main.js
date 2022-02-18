// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import Vuelidate from 'vuelidate'
// Vue.config.productionTip = false
// Vue.use(Vuelidate)
// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

/* eslint-disable no-new */
// var VueCookie = require('vue-cookie')
// Vue.use(VueCookie)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
