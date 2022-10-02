import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false
  },
  getters: {
    getIsAuth: (state) => state.isAuth
  },
  mutations: {
    setIsAuthMutation (state, payload) {
      state.isAuth = payload
    }
  },
  actions: {
    setIsAuth ({ commit }, payload) {
      commit('setIsAuthMutation', payload)
    }
  }
})
