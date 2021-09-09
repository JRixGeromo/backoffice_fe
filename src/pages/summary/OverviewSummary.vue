<template>
  <div class="per-block-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="per-block-row">
      <div class="per-block-item-main">
        <div class="per-block-item-inner">
          <div class="per-block-item-con">
            <div class="per-block-item-con-left">
              <h3>Total Sales</h3>
              <h2 class="text-in-block-1">${{ summaryData.totalSales }}</h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.totalSales }}%</span>
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
              <h2 class="text-in-block-1">${{ summaryData.netSales }}</h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.netSales }}%</span>
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
                {{ summaryData.itemsSold }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.itemsSold }}%</span>
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
                {{ summaryData.itemsSold }}
              </h2>
            </div>
            <div class="per-block-item-con-right">
              <div class="per-block-item-con-right-inner">
                <span>{{ salesPercent.itemsSold }}%</span>
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
          const result = response.data.summary
          const criteria = response.data.criteria

          const salesSummary = result.filter(function(el) {
            return el.gby == criteria.g1
          })

          const salesSummaryPrev = result.filter(function(el) {
            return el.gby == criteria.g2
          })

          console.log(salesSummary)
          console.log(salesSummaryPrev)

          let totalSales = 0
          let netSales = 0
          let orders = 0
          let itemsSold = 0

          //if (typeof salesSummary !== 'undefined') {
          totalSales =
            salesSummary[0].total_sales > 0 ? salesSummary[0].total_sales : 0

          console.log(salesSummary[0].total_sales)
          console.log(totalSales)
          netSales =
            salesSummary[0].net_sales > 0 ? salesSummary[0].net_sales : 0

          orders = salesSummary[0].orders > 0 ? salesSummary[0].orders : 0

          itemsSold =
            salesSummary[0].items_sold > 0 ? salesSummary[0].items_sold : 0
          //}
          this.summaryData.totalSales = totalSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.netSales = netSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.orders = orders
          this.summaryData.itemsSold = itemsSold

          let totalSalesPrev = 0
          let netSalesPrev = 0
          let ordersPrev = 0
          let itemsSoldPrev = 0

          //if (typeof salesSummaryPrev !== 'undefined') {
          totalSalesPrev =
            salesSummaryPrev[0].total_sales > 0
              ? salesSummaryPrev[0].total_sales
              : 0

          netSalesPrev =
            salesSummaryPrev[0].net_sales > 0
              ? salesSummaryPrev[0].net_sales
              : 0

          ordersPrev =
            salesSummaryPrev[0].orders > 0 ? salesSummaryPrev[0].orders : 0

          itemsSoldPrev =
            salesSummaryPrev[0].items_sold > 0
              ? salesSummaryPrev[0].items_sold
              : 0
          //}

          this.salesPercent.totalSales =
            totalSales > 0
              ? (parseFloat(totalSalesPrev) / parseFloat(totalSales)) * 100
              : -100
          this.salesPercent.netSales =
            netSales > 0
              ? (parseFloat(netSalesPrev) / parseFloat(netSales)) * 100
              : -100
          this.salesPercent.orders =
            orders > 0 ? (parseInt(ordersPrev) / parseInt(orders)) * 100 : -100
          this.salesPercent.itemsSold =
            itemsSold > 0
              ? (parseInt(itemsSoldPrev) / parseInt(itemsSold)) * 100
              : -100

          this.salesPercent.totalSales =
            Math.round(this.salesPercent.totalSales * 100) / 100
          this.salesPercent.netSales =
            Math.round(this.salesPercent.netSales * 100) / 100
          this.salesPercent.orders =
            Math.round(this.salesPercent.orders * 100) / 100
          this.salesPercent.itemsSold =
            Math.round(this.salesPercent.itemsSold * 100) / 100

          //Math.round(num * 100) / 100

          console.log('Current')

          console.log(totalSales)
          console.log(netSales)
          console.log(orders)
          console.log(itemsSold)

          console.log('Prev')
          console.log(totalSalesPrev)
          console.log(netSalesPrev)
          console.log(ordersPrev)
          console.log(itemsSoldPrev)

          this.isActive = false
        })
    },
  },
})
</script>
<style scoped></style>
