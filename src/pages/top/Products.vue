<template>
    <div class="leader-item-main fourth-item">
        <div class="leader-item-inner">
            <h3>Top Products - Items Sold</h3>
            <div class="leader-table-main">
            <table class="table">
                <thead>
                <tr>
                    <th>Products</th>
					<th>Items Sold</th>
                    <th>Net Sales</th>
                </tr>
                </thead>
                <tbody>
                <!-- <tr class="spacer-main"></tr> -->
                <tr v-for="topProduct in topProducts" :key="topProduct.country">
                    <td>{{ topProduct.title }}</td>
                    <td>{{ topProduct.orders }}</td>
                    <td>${{ topProduct.total_sales.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue';
import axios from 'axios';

export default {
  name: "Products",
  components: {},
  setup() {
    const topProducts = ref([]);

    const load = async () => {
      const {data} = await axios.get('analytics/products');
      topProducts.value = data.top_products;
    };

    onMounted(load);

    return {
      topProducts,
      load
    }
  }
}
</script>
