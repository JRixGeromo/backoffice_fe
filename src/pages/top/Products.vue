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
      const criteria = data.criteria // query criteria from input
      let result = data.top_products
      result = result.filter(() => result[0].ymd.includes(criteria.currentFrom)) // query Y criteria
      topProducts.value = result
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
