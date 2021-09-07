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
  props: {
    refreshData: String,
  },
  data() {
    return {
      isActive: true,
      summaryData: {
        totalSales: null,
        netSales: null,
        orders: null,
        itemsSold: null,
      },
      salesPercent: {
        totalSales: null,
        netSales: null,
        orders: null,
        itemsSold: null,
      },
    }
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
  methods: {
    getData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      axios
        .get(`analytics/overview_summary/${curr}/${prev}`)
        .then((response) => {
          let salesSummary = response.data.summary
          let salesSummaryPrev = response.data.summary
          const criteria = response.data.criteria

          console.log(salesSummary)

          salesSummary = salesSummary.filter(
            () => salesSummary[0].y.includes(criteria.currentFrom) // year = Y format
          )
          salesSummaryPrev = salesSummaryPrev.filter(
            () => salesSummaryPrev[0].y.includes(criteria.previousFrom) // year = Y format
          )

          let totalSales = 0
          let netSales = 0
          let orders = 0
          let itemsSold = 0

          if (typeof salesSummary[0] !== 'undefined') {
            totalSales =
              salesSummary[0].total_sales !== 'undefined'
                ? salesSummary[0].total_sales
                : 0

            netSales =
              salesSummary[0].net_sales !== 'undefined'
                ? salesSummary[0].net_sales
                : 0

            orders =
              salesSummary[0].orders !== 'undefined'
                ? salesSummary[0].orders
                : 0

            itemsSold =
              salesSummary[0].items_sold !== 'undefined'
                ? salesSummary[0].items_sold
                : 0
          }
          this.summaryData.total_sales = totalSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.net_sales = netSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.orders = orders
          this.summaryData.items_sold = itemsSold

          let totalSalesPrev = 0
          let netSalesPrev = 0
          let ordersPrev = 0
          let itemsSoldPrev = 0

          if (typeof salesSummary[0] !== 'undefined') {
            totalSalesPrev =
              salesSummary[0].total_sales !== 'undefined'
                ? salesSummary[0].total_sales
                : 0

            netSalesPrev =
              salesSummary[0].net_sales !== 'undefined'
                ? salesSummary[0].net_sales
                : 0

            ordersPrev =
              salesSummary[0].orders !== 'undefined'
                ? salesSummary[0].orders
                : 0

            itemsSoldPrev =
              salesSummary[0].items_sold !== 'undefined'
                ? salesSummary[0].items_sold
                : 0
          }

          this.salesPercent.totalSales = totalSalesPrev / totalSales
          this.salesPercent.netSales = netSalesPrev / netSales
          this.salesPercent.orders = ordersPrev / orders
          this.salesPercent.itemsSold = itemsSoldPrev / itemsSold

          this.isActive = false
        })
    },
  },
})
</script>
<style scoped></style>
