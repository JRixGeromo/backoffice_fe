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
              <th class="trunc"><span>Order #</span></th>
              <th class="trunc"><span>Status</span></th>
              <th class="trunc"><span>Customer</span></th>
              <th class="trunc"><span>Customer Type</span></th>
              <th class="trunc"><span>Products(S)</span></th>
              <th class="trunc"><span>Item Sold</span></th>
              <th class="trunc"><span>Coupons(s)</span></th>
              <th class="trunc"><span>Net Sales</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="order in orders" :key="order.id">
              <td class="trunc">
                <span>{{ order.ymd }}</span>
              </td>
              <td class="trunc">
                <span>{{ order.order_number }}</span>
              </td>
              <td class="trunc">
                <span>{{ order.customer }}</span>
              </td>
              <td class="trunc">
                <span>{{ order.order_status }}</span>
              </td>
              <td class="trunc">
                <span>{{ order.customer_type }}</span>
              </td>
              <td class="trunc">
                <span>{{ order.product }}</span>
              </td>
              <td class="trunc">
                <span>{{ order.items_sold }}</span>
              </td>
              <td class="trunc">
                <span>{{ order.coupon }}</span>
              </td>
              <td class="trunc">
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
  },
  data() {
    return {
      orders: [],
      isActive: false,
    }
  },
  methods: {
    getData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      axios.get(`analytics/order_list/${curr}/${prev}`).then((response) => {
        const criteria = response.data.criteria // query criteria from input
        let result = response.data.list
        result = result.filter(() =>
          result[0].ymd.includes(criteria.currentFrom)
        ) // query Y criteria
        this.orders = result
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

  // setup() {
  //   const orders = ref([])
  //   const isActive = ref()

  //   const load = async () => {
  //     isActive.value = true
  //     const { data } = await axios.get('analytics/order_list')
  //     orders.value = data.list
  //     isActive.value = false
  //   }

  //   onMounted(load)

  //   return {
  //     orders,
  //     load,
  //     isActive,
  //   }
  // },
})
</script>
<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
