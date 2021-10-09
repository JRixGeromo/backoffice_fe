<template>
  <div class="product-tab-row">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <a
      class="product-tab-item-main product-blue-item"
      href="javascript:void(0)"
      rel="product-tab-item-1"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Orders</h3>
            <h2 class="text-in-block-1">
              {{ summaryData.orders }}
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
      href="javascript:void(0)"
      rel="product-tab-item-2"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Net Sales</h3>
            <h2 class="text-in-block-1">${{ summaryData.netSales }}</h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.netSales }}%</span>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a
      class="product-tab-item-main product-green-item"
      href="javascript:void(0)"
      rel="product-tab-item-3"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Ave. Order Value</h3>
            <h2 class="text-in-block-1">
              {{ summaryData.aveOrderValue }}
            </h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.aveOrderValue }}%</span>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a
      class="product-tab-item-main product-black-item"
      href="javascript:void(0)"
      rel="product-tab-item-4"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Ave. Items Per Order</h3>
            <h2 class="text-in-block-1">
              {{ summaryData.aveItemPerOrder }}
            </h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.aveItemPerOrder }}%</span>
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
  props: {
    refreshData: String,
  },
  components: {
    VueElementLoading,
  },
  data() {
    return {
      isActive: true,
      summaryData: {
        orders: null,
        netSales: null,
        aveOrderValue: null,
        aveItemPerOrder: null,
      },
      salesPercent: {
        orders: null,
        netSales: null,
        aveOrderValue: null,
        aveItemPerOrder: null,
      },
    }
  },
  mounted() {
    this.loadData('CurrYearToDate:PrevLastYear:All')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.loadData(this.refreshData)
    },
  },
  methods: {
    loadData(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      axios
        .get(`analytics/orders_summary/${curr}/${prev}/${prod}`)
        .then((response) => {
          const result = response.data.summary
          const criteria = response.data.criteria

          const salesSummary = result.filter((el) => {
            return el.gby == criteria.g2
          })

          const salesSummaryPrev = result.filter((el) => {
            return el.gby == criteria.g1
          })

          /*

        let salesSummary = response.data.summary
        let salesSummaryPrev = response.data.summary
        const criteria = response.data.criteria

        console.log(salesSummary)

        salesSummary = salesSummary.filter(
          () => salesSummary[0].gby.includes(criteria[0].gby) // year = Y format
        )
        salesSummaryPrev = salesSummaryPrev.filter(
          () => salesSummaryPrev[0].gby.includes(criteria[1].gby) // year = Y format
        )
        */

          let netSales = 0
          let orders = 0
          let itemsSold = 0

          if (salesSummary.length > 0) {
            netSales =
              salesSummary[0].net_sales > 0 ? salesSummary[0].net_sales : 0

            orders = salesSummary[0].orders > 0 ? salesSummary[0].orders : 0

            itemsSold =
              salesSummary[0].items_sold > 0 ? salesSummary[0].items_sold : 0
          }

          this.summaryData.orders = orders
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.summaryData.netSales = netSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          // need review
          this.summaryData.aveOrderValue =
            orders > 0 ? (parseFloat(netSales) / parseFloat(orders)) * 100 : 0
          this.summaryData.aveItemPerOrder =
            orders > 0 ? (parseFloat(itemsSold) / parseFloat(orders)) * 100 : 0
          // ened of: need review

          this.summaryData.aveOrderValue = this.summaryData.aveOrderValue
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')
          this.summaryData.aveItemPerOrder = this.summaryData.aveItemPerOrder
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          let netSalesPrev = 0
          let ordersPrev = 0
          let itemsSoldPrev = 0

          if (salesSummaryPrev.length > 0) {
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

          this.salesPercent.netSales =
            netSales > 0
              ? parseFloat(netSales) / parseFloat(netSalesPrev)
              : -100

          this.salesPercent.orders =
            orders > 0
              ? (parseFloat(orders) / parseFloat(ordersPrev)) * 100
              : -100

          /*  computation for confirmation
          this.salesPercent.aveOrderValue =
            orders > 0
              ? (parseFloat(netSales) / parseFloat(orders)) * 100
              : -100
          this.salesPercent.aveItemPerOrder =
            orders > 0
              ? (parseFloat(itemsSold) / parseFloat(orders)) * 100
              : -100
          */

          this.salesPercent.aveOrderValue = -100
          this.salesPercent.aveItemPerOrder = -100

          this.salesPercent.netSales = (
            Math.round(this.salesPercent.netSales * 100) / 100
          )
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.salesPercent.orders = (
            Math.round(this.salesPercent.orders * 100) / 100
          )
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.salesPercent.aveOrderValue = (
            Math.round(this.salesPercent.aveOrderValue * 100) / 100
          )
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.salesPercent.aveItemPerOrder = (
            Math.round(this.salesPercent.aveItemPerOrder * 100) / 100
          )
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.salesPercent.aveOrderValue = this.salesPercent.aveOrderValue
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.salesPercent.aveItemPerOrder = this.salesPercent.aveItemPerOrder
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          // Ave order value =  net_sales / orders
          // Ave items per order =  items_sold / orders

          this.isActive = false
        })
    },
  },
})
</script>
<style scoped></style>
