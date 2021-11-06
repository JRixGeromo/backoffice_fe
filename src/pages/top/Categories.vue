<template>
  <div class="leader-item-main third-item">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <h3>Top Categories - Item Sold</h3>
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class="trunc"><span>Categories</span></th>
              <th><span>Orders</span></th>
              <th><span>Total Sold</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="topCategory in topCategories" :key="topCategory.country">
              <td class="trunc">
                <span>{{ topCategory.categories }}</span>
              </td>
              <td class="small-w">
                <span>{{ topCategory.orders }}</span>
              </td>
              <td class="small-w">
                <span>
                  ${{
                    topCategory.total_sales
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'Categories',
  components: { VueElementLoading },
  props: {
    refreshData: String,
  },
  data() {
    return {
      topCategories: [],
      isActive: false,
    }
  },
  methods: {
    loadData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      axios
        .get(`analytics/top_categories/${curr}/${prev}/${prod}`)
        .then((response) => {
          const criteria = response.data.criteria // query criteria from input
          const result = response.data.top_categories

          this.topCategories = result.filter((el: any) => {
            return el.gby == criteria.g2
          })

          this.isActive = false
        })
    },
  },
  mounted() {
    this.loadData('CurrYearToDate:PrevLastYear')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.loadData(this.refreshData)
    },
  },
})
</script>
