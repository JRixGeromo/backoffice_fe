<template>
  <div class="product-tab-row">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
      <a
        class="product-tab-item-main product-orange-item"
        @click="onSummaryClick(1)"
        :class="{ 'product-tab-active': selected == 1 }"
        href="javascript:void(0)"
        rel="product-tab-item-1"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Items Sold</h3>
              <h2>678</h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>-85%</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        class="product-tab-item-main product-green-item"
        @click="onSummaryClick(2)"
        :class="{ 'product-tab-active': selected == 2 }"
        href="javascript:void(0)"
        rel="product-tab-item-2"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Net Sales</h3>
              <h2>$36,231.11</h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>-87%</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        class="product-tab-item-main product-orange-item"
        @click="onSummaryClick(3)"
        :class="{ 'product-tab-active': selected == 3 }"
        href="javascript:void(0)"
        rel="product-tab-item-3"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Orders</h3>
              <h2>79</h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>-85%</span>
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
  name: 'RevenueSummary',
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
        .get(`analytics/categories_summary/${curr}/${prev}/${prod}`)
        .then((response) => {
  const result = response.data.summary
          const criteria = response.data.criteria

          const salesSummary = result.filter((el) => {
            return el.gby == criteria.g1
          })

          const salesSummaryPrev = result.filter((el) => {
            return el.gby == criteria.g2
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

          this.summaryData.itemsSold = itemsSold
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

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

          this.salesPercent.itemsSold =
            itemsSold > 0
              ? (parseFloat(itemsSold) / parseFloat(itemsSoldPrev)) * 100
              : -100


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

          this.salesPercent.itemsSold = (
            Math.round(this.salesPercent.itemsSold * 100) / 100
          )
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          
          console.log(this.summaryData.netSales)
          console.log(this.summaryData.orders)
          console.log(this.summaryData.itemsSold)

          console.log(this.salesPercent.netSales)
          console.log(this.salesPercent.orders)
          console.log(this.salesPercent.itemsSold)


          this.isActive = false
        })
    },
  },
})
</script>
<style scoped></style>