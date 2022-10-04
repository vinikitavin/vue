<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from '@/store/store'
export default {
  name: 'app',
  store,
  created () {
    if (localStorage.getItem('isAuth') === 'true') {
      this.$store.commit('changeIsAuthValue', true)
      if (this.$route.path !== '/dashboard') {
        return this.$router.push('/dashboard')
      }
    } else {
      this.$store.commit('changeIsAuthValue', false)
      if (this.$route.path !== '/login') {
        return this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss">
</style>
