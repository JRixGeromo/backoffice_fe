<template>
  <div class="per-block-main">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="per-block-row">
      <div class="per-block-item-main"   v-if="showTotalSales === 1">
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
      <div class="per-block-item-main green-item" v-if="showNetSales == '1'">
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
      <div class="per-block-item-main blue-item" v-if="showOrders == '1'">
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
      <div class="per-block-item-main red-item" v-if="showItemsSold == '1'">
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
    refreshData: Array,
    toggleVar: String,
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
      showTotalSales: 1,
      showNetSales: 1,
      showOrders: 1,
      showItemsSold: 1,
    }
  },
  mounted() {
    this.loadData('CurrYearToDate:PrevLastYear')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.loadData(this.refreshData)
    },
    toggleVar() {
      this.switchOnOff(this.toggleVar);
    }
  },
  methods: {
    switchOnOff(toggleVar) {
      const t = toggleVar.split(':');
      this.showTotalSales = parseInt(t[0]);
      this.showNetSales = parseInt(t[1]);
      this.showOrders = parseInt(t[2]);
      this.showItemsSold = parseInt(t[3]);
    },
    loadData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      axios
        .get(`analytics/overview_summary/${curr}/${prev}/${prod}`)
        .then((response) => {
          const result = response.data.summary
          const criteria = response.data.criteria

          const salesSummary = result.filter((el) => {
            return el.gby == criteria.g2
          })

          const salesSummaryPrev = result.filter((el) => {
            return el.gby == criteria.g1
          })

          console.log(salesSummary)
          console.log(salesSummaryPrev)

          let totalSales = 0
          let netSales = 0
          let orders = 0
          let itemsSold = 0

          if (salesSummary.length > 0) {
            totalSales =
              salesSummary[0].total_sales > 0 ? salesSummary[0].total_sales : 0

            console.log(salesSummary[0].total_sales)
            console.log(totalSales)
            netSales =
              salesSummary[0].net_sales > 0 ? salesSummary[0].net_sales : 0

            orders = salesSummary[0].orders > 0 ? salesSummary[0].orders : 0

            itemsSold =
              salesSummary[0].items_sold > 0 ? salesSummary[0].items_sold : 0
          }
          this.summaryData.totalSales = totalSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.netSales = netSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.orders = orders
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.summaryData.itemsSold = itemsSold
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          let totalSalesPrev = 0
          let netSalesPrev = 0
          let ordersPrev = 0
          let itemsSoldPrev = 0

          if (salesSummaryPrev.length > 0) {
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
          }

          this.salesPercent.totalSales =
            totalSales > 0
              ? (parseFloat(totalSales) / parseFloat(totalSalesPrev)) * 100
              : -100
          this.salesPercent.netSales =
            netSales > 0
              ? (parseFloat(netSales) / parseFloat(netSalesPrev)) * 100
              : -100
          this.salesPercent.orders =
            orders > 0 ? (parseInt(orders) / parseInt(ordersPrev)) * 100 : -100
          this.salesPercent.itemsSold =
            itemsSold > 0
              ? (parseInt(itemsSold) / parseInt(itemsSoldPrev)) * 100
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
