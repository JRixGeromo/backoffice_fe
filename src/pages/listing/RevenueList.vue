<template>
  <div class="leader-item-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <!-- <h3>Orders</h3> -->
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class="trunc" v-if="showRevenueDate == 1"><span>Date</span></th>
              <th class="trunc" v-if="showRevenueOrders == 1"><span>Orders #</span></th>
              <th class="trunc" v-if="showRevenueStatus == 1"><span>Status</span></th>
              <th class="trunc" v-if="showRevenueCustomer == 1"><span>Customer</span></th>
              <th class="trunc" v-if="showRevenueCustomerType == 1"><span>Customer Type</span></th>
              <th class="trunc" v-if="showRevenueProducts == 1"><span>Products(S)</span></th>
              <th class="trunc" v-if="showRevenueItemsSold == 1"><span>Items Sold</span></th>
              <th class="trunc" v-if="showRevenueCoupons == 1"><span>Coupons(S)</span></th>
              <th class="trunc" v-if="showRevenueNetSales == 1"><span>Net Sales</span></th>
            </tr>
          </thead>
           <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="r in revenue" :key="r.id">
              <td class="trunc" v-if="showRevenueDate == 1">
                <span>{{ r.ymd }}</span>
              </td>
              <td class="trunc" v-if="showRevenueOrders == 1">
                <router-link :to="`/orderdetails/${r.order_number}`" active-class="active">
                <span>{{ r.order_number }}</span>
                </router-link>
              </td>
              <td class="trunc" v-if="showRevenueStatus == 1">
                <span>{{ r.customer }}</span>
              </td>
              <td class="trunc" v-if="showRevenueCustomer == 1">
                <span>{{ r.order_status }}</span>
              </td>
              <td class="trunc" v-if="showRevenueCustomerType == 1">
                <span>{{ r.customer_type }}</span>
              </td>
              <td class="trunc" v-if="showRevenueProducts == 1">
                <span>{{ r.product }}({{r.product_count}})</span>
              </td>
              <td class="trunc" v-if="showRevenueItemsSold == 1">
                <span>{{ r.items_sold }}</span>
              </td>
              <td class="trunc" v-if="showRevenueCoupons == 1">
                <span>{{ r.coupon }}</span>
              </td>
              <td class="trunc" v-if="showRevenueNetSales == 1">
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
  name: 'ReveneuList',
  components: { VueElementLoading },
  props: {
    refreshData: String,
    toggleBar: String,
  },
  data() {
    return {
      revenue: [],
      isActive: false,
      showRevenueDate: 1,
      showRevenueOrders: 1,
      showRevenueStatus: 1,
      showRevenueCustomer: 1,
      showRevenueCustomerType: 1,
      showRevenueProducts: 1,
      showRevenueItemsSold: 1,
      showRevenueCoupons: 1,
      showRevenueNetSales: 1,
    }
  },
  methods: {
    switchOnOff(toggleBar: any) {
      const t = toggleBar.split(':');
      this.showRevenueDate = parseInt(t[0]);
      this.showRevenueOrders = parseInt(t[1]);
      this.showRevenueStatus = parseInt(t[2]);
      this.showRevenueCustomer = parseInt(t[3]);
      this.showRevenueCustomerType = parseInt(t[4]);
      this.showRevenueProducts = parseInt(t[5]);
      this.showRevenueItemsSold = parseInt(t[6]);
      this.showRevenueCoupons = parseInt(t[7]);
      this.showRevenueNetSales = parseInt(t[8]);

    },    
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
            return el.gby == criteria.g2
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
    toggleBar() {
      this.switchOnOff(this.toggleBar);
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
