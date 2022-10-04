<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Dashboard</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-dropdown-item @click="returnToLoginPage()">Sign Out</b-dropdown-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader.vue',
  methods: {
    returnToLoginPage () {
      this.$router.push('/login')
      localStorage.setItem('isAuth', false)
      this.$store.commit('changeIsAuthValue', false)
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 10px 40px;
  justify-content: space-between;
}
</style>
