<template>
  <div class="dashboard-page">
    <DashboardHeader/>
    <DashboardTable/>
  </div>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader'
import DashboardTable from '@/components/DashboardTable'
export default {
  name: 'DashboardPage',
  components: {
    DashboardHeader,
    DashboardTable
  }
}
</script>

<style lang="scss" scoped>
</style>
