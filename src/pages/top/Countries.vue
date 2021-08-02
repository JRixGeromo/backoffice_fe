<template>
    <div class="leader-item-main second-item">
        <div class="leader-item-inner">
            <h3>Top Countries - Total Spend</h3>
            <div class="leader-table-main">
            <table class="table">
                <thead>
                <tr>
                    <th>Country Name</th>
                    <th>Orders</th>
                    <th>Total Spend</th>													      
                </tr>
                </thead>
                <tbody>
                <!-- <tr class="spacer-main"></tr> -->
                <tr v-for="topCountry in topCountries" :key="topCountry.country">
                    <td>{{ topCountry.country }}</td>
                    <td>{{ topCountry.orders }}</td>
                    <td>${{ topCountry.total_sales.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }}</td>
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
  name: "Countries",
  components: {},
  setup() {
    const topCountries = ref([]);

    const load = async () => {
      const {data} = await axios.get('analytics/countries');
      topCountries.value = data.top_countries;
    };

    onMounted(load);

    return {
      topCountries,
      load
    }
  }
}
</script>
