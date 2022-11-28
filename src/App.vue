<template>
  <div id="app">
    <RouterView/>
  </div>
</template>

<script>
import store from '@/store/store'
export default {
  name: 'app',
  store,
  created () {
    if (localStorage.getItem('isAuth') === 'true') {
      this.$store.dispatch('setIsAuthValue', true)
      if (this.$route.path !== '/dashboard') {
        return this.$router.push('/dashboard')
      }
    } else {
      this.$store.dispatch('setIsAuthValue', false)
      if (this.$route.path !== '/login') {
        return this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
