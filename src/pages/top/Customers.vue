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
import { onMounted, ref } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default {
  name: 'Customers',
  components: { VueElementLoading },
  setup() {
    const topCustomers = ref([])
    const isActive = ref()

    const load = async () => {
      isActive.value = true
      const { data } = await axios.get('analytics/top_customers')
      topCustomers.value = data.top_customers
      isActive.value = false
    }

    onMounted(load)

    return {
      topCustomers,
      load,
      isActive,
    }
  },
}
</script>
