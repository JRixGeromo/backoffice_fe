<template>
	<div class="leader-item-main">
        <div class="leader-item-inner">
            <h3>Top Customers - Total Spend</h3>
            <div class="leader-table-main">
            <table class="table">
                <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Orders</th>
                    <th>Total Spend</th>													      
                </tr>
                </thead>
                <tbody>
                <!-- <tr class="spacer-main"></tr> -->
                <tr v-for="topCustomer in topCustomers" :key="topCustomer.customer">
                    <td>{{ topCustomer.customer }}</td>
                    <td>{{ topCustomer.orders }}</td>
                    <td>${{ topCustomer.total_sales.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</td>
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
  name: "Customers",
  components: {},
  setup() {
    const topCustomers = ref([]);

    const load = async () => {
      const {data} = await axios.get('analytics/customers');
      topCustomers.value = data.top_customers;
    };

    onMounted(load);

    return {
      topCustomers,
      load
    }
  }
}

</script>
