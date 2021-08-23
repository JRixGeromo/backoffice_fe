<template>
  <div class="product-tab-row">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <a
      class="product-tab-item-main product-tab-active"
      href=""
      rel="product-tab-item-1"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Items Sold</h3>
            <h2 class="text-in-block-1">
              {{ summaryData.total_items_sold }}
            </h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.item_sold }}%</span>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a
      class="product-tab-item-main product-green-item"
      href=""
      rel="product-tab-item-2"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Net Sales</h3>
            <h2 class="text-in-block-1">${{ summaryData.total_net_sales }}</h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.net_sales }}%</span>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a
      class="product-tab-item-main product-blue-item"
      href=""
      rel="product-tab-item-3"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Orders</h3>
            <h2 class="text-in-block-1">
              {{ summaryData.total_orders }}
            </h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.orders }}%</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'ProductsSummary',
  components: {
    VueElementLoading,
  },
  data() {
    return {
      isActive: true,
      summaryData: {
        total_items_sold: null,
        total_orders: null,
        total_net_sales: null,
      },
      salesPercent: {
        orders: null,
        net_sales: null,
        item_sold: null,
      },
    }
  },

  mounted() {
    axios.get('analytics/products_summary').then((response) => {
      const salesSummary = response.data.summary
      const salesPercent = response.data.percent

      this.summaryData.total_items_sold = salesSummary[0].total_items_sold
      this.summaryData.total_orders = salesSummary[0].total_orders
      this.summaryData.total_net_sales = salesSummary[0].total_net_sales
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')

      this.salesPercent.orders = salesPercent.orders
      this.salesPercent.net_sales = salesPercent.net_sales
      this.salesPercent.item_sold = salesPercent.item_sold
      this.isActive = false
    })
  },
})
</script>
<style scoped></style>
