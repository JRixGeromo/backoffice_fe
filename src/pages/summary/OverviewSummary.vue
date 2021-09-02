<template>
  <div class="per-block-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="per-block-row">
      <div class="per-block-item-main">
        <div class="per-block-item-inner">
          <div class="per-block-item-con">
            <div class="per-block-item-con-left">
              <h3>Total Sales</h3>
              <h2 class="text-in-block-1">${{ summaryData.total_sales }}</h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.total_sales }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="per-block-item-main green-item">
        <div class="per-block-item-inner">
          <div class="per-block-item-con">
            <div class="per-block-item-con-left">
              <h3>Net Sales</h3>
              <h2 class="text-in-block-1">${{ summaryData.net_sales }}</h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.net_sales }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="per-block-item-main blue-item">
        <div class="per-block-item-inner">
          <div class="per-block-item-con">
            <div class="per-block-item-con-left">
              <h3>Orders</h3>
              <h2 class="text-in-block-1">
                {{ summaryData.orders }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.orders }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="per-block-item-main red-item">
        <div class="per-block-item-inner">
          <div class="per-block-item-con">
            <div class="per-block-item-con-left">
              <h3>Items Sold</h3>
              <h2 class="text-in-block-1">
                {{ summaryData.items_sold }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.items_sold }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="per-block-item-main black-item">
        <div class="per-block-item-inner">
          <div class="per-block-item-con">
            <div class="per-block-item-con-left">
              <h3>Items Sold</h3>
              <h2 class="text-in-block-1">
                {{ summaryData.items_sold }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.items_sold }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'OverviewSummary',
  components: {
    VueElementLoading,
  },
  data() {
    return {
      isActive: true,
      summaryData: {
        total_sales: null,
        net_sales: null,
        orders: null,
        items_sold: null,
      },
      salesPercent: {
        total_sales: null,
        net_sales: null,
        orders: null,
        items_sold: null,
      },
    }
  },

  mounted() {
    axios.get('analytics/overview_summary').then((response) => {
      const salesSummary = response.data.summary

      this.summaryData.total_sales = salesSummary[0].total_sales
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
      this.summaryData.net_sales = salesSummary[0].net_sales
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
      this.summaryData.orders = salesSummary[0].orders
      this.summaryData.items_sold = salesSummary[0].items_sold

      this.salesPercent.total_sales = salesSummary.total_sales
      this.salesPercent.net_sales = salesSummary.net_sales
      this.salesPercent.total_orders = salesSummary.total_orders
      this.salesPercent.orders = salesSummary.orders
      this.salesPercent.items_sold = salesSummary.items_sold
      this.isActive = false
    })
  },
})
</script>
<style scoped></style>
