<template>
  <div class="leader-item-main fourth-item">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <h3>Top Products - Items Sold</h3>
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class="trunc"><span>Products</span></th>
              <th><span>Items Sold</span></th>
              <th><span>Net Sales</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="topProduct in topProducts" :key="topProduct.title">
              <td class="trunc">
                <span>{{ topProduct.title }}</span>
              </td>
              <td class="small-w">
                <span>{{ topProduct.items_sold }}</span>
              </td>
              <td class="small-w">
                <span>
                  ${{
                    topProduct.net_sales
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
  name: 'Products',
  components: { VueElementLoading },
  props: {
    refreshData: String,
  },
  data() {
    return {
      topProducts: [],
      isActive: false,
    }
  },
  methods: {
    getData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      axios.get(`analytics/top_products/${curr}/${prev}`).then((response) => {
        const criteria = response.data.criteria // query criteria from input
        let result = response.data.top_products
        result = result.filter(() =>
          result[0].ymd.includes(criteria.currentFrom)
        ) // query Y criteria
        this.topProducts = result
        this.isActive = false
      })
    },
  },
  mounted() {
    this.getData('CurrToday:PrevYesterday')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.getData(this.refreshData)
    },
  },
})
</script>
