import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false
  },
  getters: {
    getIsAut: state => state.isAuth
  },
  mutations: {
    changeIsAuthValue (state, payload) {
      state.isAuth = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
