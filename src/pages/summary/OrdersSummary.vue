<template>
  <div class="product-tab-row">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <a
      class="product-tab-item-main product-blue-item"
      href=""
      rel="product-tab-item-1"
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
    <a
      class="product-tab-item-main product-red-item"
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
      class="product-tab-item-main product-green-item"
      href=""
      rel="product-tab-item-3"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Ave. Order Value</h3>
            <h2 class="text-in-block-1">
              {{ summaryData.ave_order_value }}
            </h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.ave_order_value }}%</span>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a
      class="product-tab-item-main product-black-item"
      href=""
      rel="product-tab-item-4"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Ave. Items Per Order</h3>
            <h2 class="text-in-block-1">
              {{ summaryData.ave_order_value }}
            </h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.ave_item_per_order }}%</span>
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
  name: 'OrdersSummary',
  components: {
    VueElementLoading,
  },
  data() {
    return {
      isActive: true,
      summaryData: {
        total_orders: null,
        total_net_sales: null,
        ave_order_value: null,
        ave_item_per_order: null,
      },
      salesPercent: {
        orders: null,
        net_sales: null,
        ave_order_value: null,
        ave_item_per_order: null,
      },
    }
  },

  mounted() {
    axios.get('analytics/orders_summary').then((response) => {
      const salesSummary = response.data.summary
      const salesPercent = response.data.percent

      this.summaryData.total_orders = salesSummary[0].total_orders
      this.summaryData.total_net_sales = salesSummary[0].total_net_sales
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
      this.summaryData.ave_order_value = (
        salesSummary[0].total_items_sold / salesSummary[0].total_orders
      ).toFixed(2)
      this.summaryData.ave_item_per_order = (
        salesSummary[0].total_items_sold / salesSummary[0].total_orders
      ).toFixed(2)

      // Ave order value =  total_net_sales / total_orders
      // Ave items per order =  total_items_sold / total_orders

      this.salesPercent.orders = salesPercent.orders
      this.salesPercent.net_sales = salesPercent.net_sales
      this.salesPercent.ave_order_value = salesPercent.ave_order_value
      this.salesPercent.ave_item_per_order = salesPercent.ave_item_per_order
      this.isActive = false
    })
  },
})
</script>
<style scoped></style>
