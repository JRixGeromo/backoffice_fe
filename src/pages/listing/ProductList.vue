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
              <th class="trunc" v-if="showProductsTitle == 1"><span>Product Title</span></th>
              <th class="trunc" v-if="showProductsSku == 1"><span>SKU</span></th>
              <th class="trunc" v-if="showProductsItemsSold == 1"><span>Items Sold</span></th>
              <th class="trunc" v-if="showProductsNetSales == 1"><span>Net Sales</span></th>
              <th class="trunc" v-if="showProductsOrders == 1"><span>Orders</span></th>
              <th class="trunc" v-if="showProductsCategory == 1"><span>Category</span></th>
              <th class="trunc" v-if="showProductsVariations == 1"><span>Variations</span></th>
              <th class="trunc" v-if="showProductsOrderStatus == 1"><span>Status</span></th>
              <th class="trunc" v-if="showProductsStock == 1"><span>Stock</span></th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="spacer-main"></tr> -->
            <tr v-for="product in products" :key="product.id">
              <td class="">
                <input class="" type="checkbox" value="" />
              </td>
              <td class="trunc" v-if="showProductsTitle == 1">
                <span>{{ product.title }}</span>
              </td>
              <td class="trunc" v-if="showProductsSku == 1">
                <span>{{ product.sku }}</span>
              </td>
              <td class="trunc" v-if="showProductsItemsSold == 1">
                <span>{{ product.items_sold }}</span>
              </td>
              <td class="trunc" v-if="showProductsNetSales == 1">
                <span>
                  ${{
                    product.net_sales
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }}
                </span>
              </td>
              <td class="trunc" v-if="showProductsOrders == 1">
                <span>{{ product.orders }}</span>
              </td>
              <td class="trunc" v-if="showProductsCategory == 1">
                <span>{{ product.product_type }}</span>
              </td>
              <td class="trunc" v-if="showProductsVariations == 1">
                <span>{{ product.variations }}</span>
              </td>
              <td class="trunc" v-if="showProductsOrderStatus == 1">
                <span>{{ product.order_status }}</span>
              </td>
              <td class="trunc" v-if="showProductsStock == 1">
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
import { defineComponent } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'OrderList',
  components: { VueElementLoading },
  props: {
    refreshData: String,
    toggleBar: String,
  },
  data() {
    return {
      products: [],
      isActive: false,
      showProductsTitle: 1,
      showProductsSku: 1,
      showProductsItemsSold: 1,
      showProductsNetSales: 1,
      showProductsOrders: 1,
      showProductsCategory: 1,
      showProductsVariations: 1,
      showProductsOrderStatus: 1,
      showProductsStock: 1,
    }
  },
  methods: {
    switchOnOff(toggleBar: any) {
      const t = toggleBar.split(':');
      this.showProductsTitle = parseInt(t[0]);
      this.showProductsSku = parseInt(t[1]);
      this.showProductsItemsSold = parseInt(t[2]);
      this.showProductsNetSales = parseInt(t[3]);
      this.showProductsOrders = parseInt(t[4]);
      this.showProductsCategory = parseInt(t[5]);
      this.showProductsVariations = parseInt(t[6]);
      this.showProductsOrderStatus = parseInt(t[7]);
      this.showProductsStock = parseInt(t[8]);
    },    
    loadData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      axios
        .get(`analytics/product_list/${curr}/${prev}/${prod}`)
        .then((response) => {
          const result = response.data.list
          const criteria = response.data.criteria

          const products = result.filter((el: any) => {
            return el.gby == criteria.g2
          })

          this.products = products
          this.isActive = false
        })
    },
  },
  mounted() {
    this.loadData('CurrYearToDate:PrevLastYear:All')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData);
      this.loadData(this.refreshData);
    },
    toggleBar() {
      this.switchOnOff(this.toggleBar);
    },      
  },
})
</script>
