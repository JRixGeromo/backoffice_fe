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
              <th><span>Orders</span></th>
              <th><span>Total Sold</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="topCategory in topCategories" :key="topCategory.country">
              <td class="trunc">
                <span>{{ topCategory.product_type }}</span>
              </td>
              <td class="small-w">
                <span>{{ topCategory.orders }}</span>
              </td>
              <td class="small-w">
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
import { defineComponent } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'Categories',
  components: { VueElementLoading },
  props: {
    refreshData: String,
  },
  data() {
    return {
      topCategories: [],
      isActive: false,
    }
  },
  methods: {
    getData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      axios.get(`analytics/top_categories/${curr}/${prev}`).then((response) => {
        const criteria = response.data.criteria // query criteria from input
        const result = response.data.top_categories

        this.topCategories = result.filter((el: any) => {
          return el.gby == criteria.g1
        })

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
//   name: 'Categories',
//   components: { VueElementLoading },
//   setup() {
//     const topCategories = ref([])
//     const isActive = ref()

//     const load = async () => {
//       isActive.value = true
//       const { data } = await axios.get('analytics/top_categories')
//       const criteria = data.criteria // query criteria from input
//       let result = data.top_categories
//       result = result.filter(() => result[0].ymd.includes(criteria.currentFrom)) // query Y criteria
//       topCategories.value = result
//       isActive.value = false
//     }

//     onMounted(load)

//     return {
//       topCategories,
//       load,
//       isActive,
//     }
//   },
// }
</script>
