<template>
  <div class="table">
    <div class="overflow-auto">
      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      />
      <b-pagination
        class="table__pagination"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      />
    </div>
  </div>
</template>

<script>
import api from '../api/axios'

export default {
  name: 'DashboardTable',
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      items: []
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  },
  async mounted () {
    try {
      const response = await api.get('posts')
      this.items = response.map((item) => {
        return {
          id: item.id,
          title: item.title,
          body: item.body
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  padding: 40px;

  &__pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
