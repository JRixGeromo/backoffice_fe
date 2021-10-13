<template>
  <div class="leader-item-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="leader-item-inner">
      <!-- <h3>Orders</h3> -->
      <div class="leader-table-main">
        <table class="table">
          <thead>
            <tr>
              <th class="trunc" v-if="showCategoriesCategories == 1"><span>Categories</span></th>
              <th class="trunc" v-if="showCategoriesItemsSold == 1"><span>Items Sold</span></th>
              <th class="trunc" v-if="showCategoriesNetSales == 1"><span>Net Sales</span></th>
              <th class="trunc" v-if="showCategoriesProducts == 1"><span>Products</span></th>
              <th class="trunc" v-if="showCategoriesOrders == 1"><span>Orders</span></th>
            </tr>
          </thead>
           <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="category in categories" :key="category.id">
              <td class="trunc" v-if="showCategoriesCategories == 1">
                <span>{{ category.categories }}</span>
              </td>
              <td class="trunc" v-if="showCategoriesItemsSold == 1">
                <span>{{ category.items_sold }}</span>
              </td>
              <td class="trunc" v-if="showCategoriesNetSales == 1">
                <span>{{ category.net_sales }}</span>
              </td>
              <td class="trunc" v-if="showCategoriesProducts == 1">
                <span>{{ category.products }}</span>
              </td>
              <td class="trunc" v-if="showCategoriesOrders == 1">
                <span>{{ category.orders }}</span>
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
  name: 'CategoriesList',
  components: { VueElementLoading },
  props: {
    refreshData: String,
    toggleBar: String,
  },
  data() {
    return {
      categories: [],
      isActive: false,
      showCategoriesCategories: 1,
      showCategoriesItemsSold: 1,
      showCategoriesNetSales: 1,
      showCategoriesProducts: 1,
      showCategoriesOrders: 1,
    }
  },
  methods: {
    switchOnOff(toggleBar: any) {
      const t = toggleBar.split(':');
      this.showCategoriesCategories = parseInt(t[0]);
      this.showCategoriesItemsSold = parseInt(t[1]);
      this.showCategoriesNetSales = parseInt(t[2]);
      this.showCategoriesProducts = parseInt(t[3]);
      this.showCategoriesOrders = parseInt(t[4]);
    },
    loadData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      axios
        .get(`analytics/categories_list/${curr}/${prev}/${prod}`)
        .then((response) => {
          const result = response.data.list
          const criteria = response.data.criteria

          const categories = result.filter((el: any) => {
            return el.gby == criteria.g2
          })

          this.categories = categories
          this.isActive = false
        })
    },
  },
  mounted() {
    this.loadData('CurrYearToDate:PrevLastYear:All')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.loadData(this.refreshData)
    },
    toggleBar() {
      this.switchOnOff(this.toggleBar);
    },       
  },
})

</script>
<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
