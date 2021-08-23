<template>
  <div class="leader-item-main second-item">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <h3>Top Countries - Total Spend</h3>
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class="trunc"><span>Country Name</span></th>
              <th><span>Orders</span></th>
              <th><span>Total Spend</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="topCountry in topCountries" :key="topCountry.country">
              <td class="trunc">
                <span>{{ topCountry.country }}</span>
              </td>
              <td class="small-w">
                <span>{{ topCountry.orders }}</span>
              </td>
              <td class="small-w">
                <span>
                  ${{
                    topCountry.total_sales
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
  name: 'Countries',
  components: { VueElementLoading },
  setup() {
    const topCountries = ref([])
    const isActive = ref()

    const load = async () => {
      isActive.value = true
      const { data } = await axios.get('analytics/top_countries')
      topCountries.value = data.top_countries
      isActive.value = false
    }

    onMounted(load)

    return {
      topCountries,
      load,
      isActive,
    }
  },
}
</script>
