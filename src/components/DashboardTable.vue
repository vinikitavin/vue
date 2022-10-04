<template>
  <div>
    <div class="table-with-data">
      <div class="overflow-auto">
        <b-table
          id="my-table"
          :items="posts"
          :per-page="perPage"
          :current-page="currentPage"
          small
        />
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        />
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/axios'
export default {
  name: 'DashboardTable',
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      posts: []
    }
  },
  computed: {
    rows () {
      return this.posts.length
    }
  },
  async mounted () {
    try {
      const response = await api.get('posts')
      this.posts = response.map((item) => {
        return {
          id: item.id,
          title: item.title,
          body: item.body
        }
      })
    } catch (error) {
      console.log(error)
    }
  },
  method: {

  }
}
</script>

<style lang="scss" scoped>
.table-with-data {
  padding: 40px;
}
.pagination {
  justify-content: center;
}
</style>
