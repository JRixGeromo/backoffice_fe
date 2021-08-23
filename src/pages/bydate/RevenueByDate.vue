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
              <th class="trunc"><span>Orders</span></th>
              <th class="trunc"><span>Gross Sales</span></th>
              <th class="trunc"><span>Returns</span></th>
              <th class="trunc"><span>Coupons</span></th>
              <th class="trunc"><span>Products(S)</span></th>
              <th class="trunc"><span>Net Sales</span></th>
              <th class="trunc"><span>Shipping</span></th>
              <th class="trunc"><span>Total Sales</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="topProduct in topProducts" :key="topProduct.country">
              <td class="trunc">
                <span>{{ topProduct.title }}</span>
              </td>
              <td class="trunc">
                <span>{{ topProduct.orders }}</span>
              </td>
              <td class="trunc">
                <span>
                  ${{
                    topProduct.total_sales
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </span>
              </td>
              <td class="trunc"><span></span></td>
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
  name: 'Products',
  components: { VueElementLoading },
  setup() {
    const topProducts = ref([])
    const isActive = ref()

    const load = async () => {
      isActive.value = true
      const { data } = await axios.get('analytics/top_products')
      topProducts.value = data.top_products
      isActive.value = false
    }

    onMounted(load)

    return {
      topProducts,
      load,
      isActive,
    }
  },
}
</script>
<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
