<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created () {
    const isAuthLocal = localStorage.getItem('isAuth')
    if (isAuthLocal === 'true') {
      this.setIsAuth(true)
      return this.$router.push('/dashboard')
    }
    if (this.$route.path !== '/login') {
      return this.$router.push('/login')
    }
  },
  methods: {
    ...mapActions({
      setIsAuth: 'setIsAuth'
    })
  }
}
</script>

<style lang="scss">
</style>
