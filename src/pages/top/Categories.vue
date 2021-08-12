<template>
    <div class="leader-item-main third-item">
        <div class="leader-item-inner">
            <h3>Top Categories - Item Sold</h3>
            <div class="leader-table-main">
            <table class="table">
                <thead>
                <tr>
                    <th>Categories</th>
					<th>Orders</th>
                    <th>Total Sold</th>
                </tr>
                </thead>
                <tbody>
                <!-- <tr class="spacer-main"></tr> -->
                <tr v-for="topCategory in topCategories" :key="topCategory.country">
                    <td>{{ topCategory.product_type }}</td>
                    <td>{{ topCategory.orders }}</td>
                    <td>${{ topCategory.total_sales.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</td>
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
  name: "Categories",
  components: {},
  setup() {
    const topCategories = ref([]);

    const load = async () => {
      const {data} = await axios.get('analytics/categories');
      topCategories.value = data.top_categories;
    };

    onMounted(load);

    return {
      topCategories,
      load
    }
  }
}
</script>
