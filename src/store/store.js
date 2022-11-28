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
    setIsAuthValue (state, payload) {
      state.isAuth = payload
    }
  },
  actions: {
    changeIsAuthValue (context, payload) {
      context.commit('setIsAuthValue', payload)
    }
  }
})
