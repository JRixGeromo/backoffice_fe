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
import { defineComponent } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'Countries',
  components: { VueElementLoading },
  props: {
    refreshData: String,
  },
  data() {
    return {
      topCountries: [],
      isActive: false,
    }
  },
  methods: {
    loadData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      axios
        .get(`analytics/top_countries/${curr}/${prev}/${prod}`)
        .then((response) => {
          const criteria = response.data.criteria // query criteria from input
          const result = response.data.top_countries

          this.topCountries = result.filter((el: any) => {
            return el.gby == criteria.g2
          })

          this.isActive = false
        })
    },
  },
  mounted() {
    this.loadData('CurrYearToDate:PrevLastYear')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.loadData(this.refreshData)
    },
  },
})
</script>
