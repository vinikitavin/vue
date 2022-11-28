<template>
  <div class="dashboard-header">
    <b-navbar class="dashboard-header__navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="dashboard-header__logo" href="#">Dashboard</b-navbar-brand>
      <b-navbar-nav class="dashboard-header__logout-wrapper">
        <b-dropdown-item class="dashboard-header__logout" @click="returnToLoginPage()">Sign Out</b-dropdown-item>
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
      this.$store.dispatch('setIsAuthValue', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-header {
  &__navbar {
    padding: 10px 40px;
    justify-content: space-between;
  }
}
</style>
