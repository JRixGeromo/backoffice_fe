<template>
  <div class="leader-item-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <!-- <h3>Orders</h3> -->
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class="trunc"><span>Date</span></th>
              <th class="trunc"><span>Orders #</span></th>
              <th class="trunc"><span>Status</span></th>
              <th class="trunc"><span>Customer</span></th>
              <th class="trunc"><span>Customer Type</span></th>
              <th class="trunc"><span>Products(S)</span></th>
              <th class="trunc"><span>Items Sold</span></th>
              <th class="trunc"><span>Coupons(S)</span></th>
              <th class="trunc"><span>Net Sales</span></th>
            </tr>
          </thead>
           <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="r in revenue" :key="r.id">
              <td class="trunc">
                <span>{{ r.ymd }}</span>
              </td>
              <td class="trunc">
                <span>{{ r.order_number }}</span>
              </td>
              <td class="trunc">
                <span>{{ r.customer }}</span>
              </td>
              <td class="trunc">
                <span>{{ r.order_status }}</span>
              </td>
              <td class="trunc">
                <span>{{ r.customer_type }}</span>
              </td>
              <td class="trunc">
                <span>{{ r.product }}</span>
              </td>
              <td class="trunc">
                <span>{{ r.items_sold }}</span>
              </td>
              <td class="trunc">
                <span>{{ r.coupon }}</span>
              </td>
              <td class="trunc">
                <span>
                  ${{
                    r.net_sales
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
  name: 'OrderList',
  components: { VueElementLoading },
  props: {
    refreshData: String,
  },
  data() {
    return {
      revenue: [],
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
        .get(`analytics/revenue_list/${curr}/${prev}/${prod}`)
        .then((response) => {
          const result = response.data.list
          const criteria = response.data.criteria

          const revenue = result.filter((el: any) => {
            return el.gby == criteria.g1
          })

          this.revenue = revenue
          this.isActive = false
        })
    },
  },
  mounted() {
    this.loadData('CurrYearToDate:PrevLastYear:All')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.loadData(this.refreshData)
    },
  },
})

</script>
<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
