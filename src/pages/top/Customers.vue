<template>
  <div class="leader-item-main first-item">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <h3>Top Customers - Total Spend</h3>
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class="trunc"><span>Customer Name</span></th>
              <th><span>Orders</span></th>
              <th><span>Total Spend</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="topCustomer in topCustomers" :key="topCustomer.customer">
              <td class="trunc">
                <span>{{ topCustomer.customer }}</span>
              </td>
              <td class="small-w">
                <span>{{ topCustomer.orders }}</span>
              </td>
              <td class="small-w">
                <span>
                  ${{
                    topCustomer.total_sales
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
      topCustomers: [],
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
        .get(`analytics/top_customers/${curr}/${prev}/${prod}`)
        .then((response) => {
          const criteria = response.data.criteria // query criteria from input
          const result = response.data.top_customers

          this.topCustomers = result.filter((el: any) => {
            return el.gby == criteria.g1
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
