<template>
  <div>
    <dashboard-header></dashboard-header>
    <dashboard-table></dashboard-table>
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

<style scoped>
</style>
