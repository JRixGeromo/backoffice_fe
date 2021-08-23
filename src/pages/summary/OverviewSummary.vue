<template>
  <div class="per-block-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="per-block-row">
      <div class="per-block-item-main">
        <div class="per-block-item-inner">
          <div class="per-block-item-con">
            <div class="per-block-item-con-left">
              <h3>Total Sales</h3>
              <h2 class="text-in-block-1">
                ${{ summaryData.total_total_net }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.total_total_net }}%</span>
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
              <h2 class="text-in-block-1">${{ summaryData.total_net }}</h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.total_net }}%</span>
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
                {{ summaryData.total_orders }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.total_orders }}%</span>
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
                {{ summaryData.total_items_sold }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.total_items_sold }}%</span>
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
                {{ summaryData.total_black }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.total_black }}%</span>
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
        total_total_net: null,
        total_net: null,
        total_orders: null,
        total_items_sold: null,
        total_black: null,
      },
      salesPercent: {
        total_total_net: null,
        total_net: null,
        total_orders: null,
        total_items_sold: null,
        total_black: null,
      },
    }
  },

  mounted() {
    axios.get('analytics/overview_summary').then((response) => {
      const salesSummary = response.data.summary
      const salesPercent = response.data.percent

      this.summaryData.total_total_net = salesSummary[0].total_total_net
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
      this.summaryData.total_net = salesSummary[0].total_net
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
      this.summaryData.total_orders = salesSummary[0].total_orders
      this.summaryData.total_items_sold = salesSummary[0].total_items_sold
      this.summaryData.total_black = salesSummary[0].total_black

      this.salesPercent.total_total_net = salesPercent.total_total_net
      this.salesPercent.total_net = salesPercent.total_net
      this.salesPercent.total_orders = salesPercent.total_orders
      this.salesPercent.total_items_sold = salesPercent.total_items_sold
      this.salesPercent.total_black = salesPercent.total_black
      this.isActive = false
    })
  },
})
</script>
<style scoped></style>
