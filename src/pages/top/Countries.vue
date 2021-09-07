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
    getData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      axios.get(`analytics/top_countries/${curr}/${prev}`).then((response) => {
        const criteria = response.data.criteria // query criteria from input
        let result = response.data.top_countries
        result = result.filter(() =>
          result[0].ymd.includes(criteria.currentFrom)
        ) // query Y criteria
        this.topCountries = result
        this.isActive = false
      })
    },
  },
  mounted() {
    this.getData('CurrToday:PrevYesterday')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.getData(this.refreshData)
    },
  },
})
// import { onMounted, ref } from 'vue'
// import axios from 'axios'
// import VueElementLoading from 'vue-element-loading'

// export default {
//   name: 'Countries',
//   components: { VueElementLoading },
//   setup() {
//     const topCountries = ref([])
//     const isActive = ref()

//     const load = async () => {
//       isActive.value = true
//       const { data } = await axios.get('analytics/top_countries')
//       const criteria = data.criteria // query criteria from input
//       let result = data.top_countries
//       result = result.filter(() => result[0].ymd.includes(criteria.currentFrom)) // query Y criteria
//       topCountries.value = result

//       isActive.value = false
//     }

//     onMounted(load)

//     return {
//       topCountries,
//       load,
//       isActive,
//     }
//   },
// }
</script>
