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
              <th class="trunc"><span>Orders</span></th>
              <th class="trunc"><span>Total Sold</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="topCategory in topCategories" :key="topCategory.country">
              <td class="trunc">
                <span>{{ topCategory.product_type }}</span>
              </td>
              <td>
                <span>{{ topCategory.orders }}</span>
              </td>
              <td>
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
import { onMounted, ref } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default {
  name: 'Categories',
  components: { VueElementLoading },
  setup() {
    const topCategories = ref([])
    const isActive = ref()

    const load = async () => {
      isActive.value = true
      const { data } = await axios.get('analytics/top_categories')
      topCategories.value = data.top_categories
      isActive.value = false
    }

    onMounted(load)

    return {
      topCategories,
      load,
      isActive,
    }
  },
}
</script>
