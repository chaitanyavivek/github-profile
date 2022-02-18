import Vue from 'vue'
import Vuex from 'Vuex'
import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import 'material-icons/iconfont/material-icons.css'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
