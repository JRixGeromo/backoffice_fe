<template>
  <div class="leader-item-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <!-- <h3>Orders</h3> -->
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class=""><input class="" type="checkbox" value="" /></th>
              <th class="trunc"><span>Product Title</span></th>
              <th class="trunc"><span>SKU</span></th>
              <th class="trunc"><span>Items Sold</span></th>
              <th class="trunc"><span>Net Sales</span></th>
              <th class="trunc"><span>Orders</span></th>
              <th class="trunc"><span>Category</span></th>
              <th class="trunc"><span>Variations</span></th>
              <th class="trunc"><span>Status</span></th>
              <th class="trunc"><span>Stock</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="product in products" :key="product.id">
              <td class="">
                <input class="" type="checkbox" value="" />
              </td>
              <td class="trunc">
                <span>{{ product.title }}</span>
              </td>
              <td class="trunc">
                <span>{{ product.sku }}</span>
              </td>
              <td class="trunc">
                <span>{{ product.items_sold }}</span>
              </td>
              <td class="trunc">
                <span>
                  ${{
                    product.net_sales
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </span>
              </td>
              <td class="trunc">
                <span>{{ product.orders }}</span>
              </td>
              <td class="trunc">
                <span>{{ product.product_type }}</span>
              </td>
              <td class="trunc">
                <span>{{ product.variations }}</span>
              </td>
              <td class="trunc">
                <span>{{ product.order_status }}</span>
              </td>
              <td class="trunc">
                <span>{{ product.stock }}</span>
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
  name: 'ProductList',
  components: { VueElementLoading },
  setup() {
    const products = ref([])
    const isActive = ref()

    const load = async () => {
      isActive.value = true
      const { data } = await axios.get('analytics/product_list')
      products.value = data.list
      isActive.value = false
    }

    onMounted(load)

    return {
      products,
      load,
      isActive,
    }
  },
}
</script>
