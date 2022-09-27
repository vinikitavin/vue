<template>
  <div>
    <div class="table-with-data">
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
        <b-table
          id="my-table"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DashboardTable',
  data () {
    return {
      perPage: 3,
      currentPage: 1,
      URL: 'https://jsonplaceholder.typicode.com/posts',
      items: []
    }
  },
  computed: {
    rows () {
      return this.items.length
    }
  },
  mounted () {
    axios
      .get(this.URL)
      .then(response => (this.items = response.data).map((item) => delete item.userId))
  }
}
</script>

<style scoped>
.table-with-data {
  padding: 40px;
}
</style>
