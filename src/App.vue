<template>
  <div id="app">
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: {
    LoginForm
  },
  computed: {
    username () {
      // Мы скоро разберём что такое `params`
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
</style>
