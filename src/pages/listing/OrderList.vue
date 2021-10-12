<template>
  <div class="leader-item-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <!-- <h3>Orders</h3> -->
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class="trunc" v-if="showOrdersDate == 1"><span>Date</span></th>
              <th class="trunc" v-if="showOrdersNumber == 1"><span>Order #</span></th>
              <th class="trunc" v-if="showOrdersStatus == 1"><span>Status</span></th>
              <th class="trunc" v-if="showOrdersCustomer == 1"><span>Customer</span></th>
              <th class="trunc" v-if="showOrdersCustomerType == 1"><span>Customer Type</span></th>
              <th class="trunc" v-if="showOrdersProducts == 1"><span>Products(S)</span></th>
              <th class="trunc" v-if="showOrdersItemSold == 1"><span>Item Sold</span></th>
              <th class="trunc" v-if="showOrdersCoupons == 1"><span>Coupons(s)</span></th>
              <th class="trunc" v-if="showOrdersNetSales == 1"><span>Net Sales</span></th>
            </tr>
          </thead>

          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="order in orders" :key="order.id">
              <td class="trunc" v-if="showOrdersDate == 1">
                <span>{{ order.ymd }}</span>
              </td>
              <td class="trunc" v-if="showOrdersNumber == 1">
                <span>{{ order.order_number }}</span>
              </td>
              <td class="trunc" v-if="showOrdersStatus == 1">
                <span>{{ order.customer }}</span>
              </td>
              <td class="trunc" v-if="showOrdersCustomer == 1">
                <span>{{ order.order_status }}</span>
              </td>
              <td class="trunc" v-if="showOrdersCustomerType == 1">
                <span>{{ order.customer_type }}</span>
              </td>
              <td class="trunc" v-if="showOrdersProducts == 1">
                <span>{{ order.product }}</span>
              </td>
              <td class="trunc" v-if="showOrdersItemSold == 1">
                <span>{{ order.items_sold }}</span>
              </td>
              <td class="trunc" v-if="showOrdersCoupons == 1">
                <span>{{ order.coupon }}</span>
              </td>
              <td class="trunc" v-if="showOrdersNetSales == 1">
                <span>
                  ${{
                    order.net_sales
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
    toggleBar: String,
  },
  data() {
    return {
      orders: [],
      isActive: false,
      showOrdersDate: 1,
      showOrdersNumber: 1,
      showOrdersStatus: 1,
      showOrdersCustomer: 1,
      showOrdersCustomerType: 1,
      showOrdersProducts: 1,
      showOrdersItemSold: 1,
      showOrdersCoupons: 1,
      showOrdersNetSales: 1,
    }
  },
  methods: {
    switchOnOff(toggleBar: any) {
      const t = toggleBar.split(':');
      this.showOrdersDate = parseInt(t[0]);
      this.showOrdersNumber = parseInt(t[1]);
      this.showOrdersStatus = parseInt(t[2]);
      this.showOrdersCustomer = parseInt(t[3]);
      this.showOrdersCustomerType = parseInt(t[4]);
      this.showOrdersProducts = parseInt(t[5]);
      this.showOrdersItemSold = parseInt(t[6]);
      this.showOrdersCoupons = parseInt(t[7]);
      this.showOrdersNetSales = parseInt(t[8]);
    },
    loadData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      axios
        .get(`analytics/order_list/${curr}/${prev}/${prod}`)
        .then((response) => {
          const result = response.data.list
          const criteria = response.data.criteria

          const orders = result.filter((el: any) => {
            return el.gby == criteria.g2
          })

          this.orders = orders
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
