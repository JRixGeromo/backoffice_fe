<template>
  <div class="product-tab-row">
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <a
      class="product-tab-item-main"
      @click="onSummaryClick(1)"
      :class="{ 'product-tab-active': selected == 1 }"
      href="javascript:void(0)"
      rel="product-tab-item-1"
    >
      <div class="product-tab-item-inner">
        <div class="product-tab-item-con">
          <div class="product-tab-item-con-left">
            <h3>Items Sold</h3>
            <h2 class="text-in-block-1">
              {{ summaryData.itemsSold }}
            </h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.itemsSold }}%</span>
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
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'ProductsSummary',
  props: {
    refreshData: String,
  },
  components: {
    VueElementLoading,
  },
  data() {
    return {
      isActive: false,
      selected: 1,
      summaryData: {
        itemsSold: null,
        orders: null,
        netSales: null,
      },
      salesPercent: {
        orders: null,
        netSales: null,
        itemsSold: null,
      },
    }
  },
  mounted() {
    this.getDates('CurrYearToDate:PrevLastYear')
  },
  watch: {
    refreshData() {
      console.log(this.refreshData)
      this.getDates(this.refreshData)
    },
  },
  methods: {
    getDates(criteria = '') {
      const c = criteria.split(':')
      const curr = c[0]
      const prev = c[1]
      axios
        .get(`analytics/products_summary/${curr}/${prev}/All`)
        .then((response) => {
          // let salesSummary = response.data.summary
          // let salesSummaryPrev = response.data.summary
          // const criteria = response.data.criteria

          const result = response.data.summary
          const criteria = response.data.criteria

          const salesSummary = result.filter((el) => {
            return el.gby == criteria.g1
          })

          const salesSummaryPrev = result.filter((el) => {
            return el.gby == criteria.g2
          })

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

          this.summaryData.netSales = netSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.orders = orders
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          this.summaryData.itemsSold = itemsSold
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          let netSalesPrev = 0
          let ordersPrev = 0
          let itemsSoldPrev = 0

          //if (typeof salesSummaryPrev[0] !== 'undefined') {
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

          console.log(netSales)

          console.log(orders)

          console.log(itemsSold)

          this.salesPercent.netSales =
            netSales > 0
              ? (parseFloat(netSalesPrev) / parseFloat(netSales)) * 100
              : -100
          this.salesPercent.orders =
            orders > 0
              ? (parseFloat(ordersPrev) / parseFloat(orders)) * 100
              : -100
          this.salesPercent.itemsSold =
            itemsSold > 0
              ? (parseFloat(itemsSoldPrev) / parseFloat(itemsSold)) * 100
              : -100

          this.salesPercent.netSales = (
            Math.round(this.salesPercent.netSales * 100) / 100
          )
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.salesPercent.orders = (
            Math.round(this.salesPercent.orders * 100) / 100
          )
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.salesPercent.itemsSold = (
            Math.round(this.salesPercent.itemsSold * 100) / 100
          )
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.isActive = false
        })
    },
    onSummaryClick(selected) {
      this.selected = selected
      this.$emit('selected', selected)
    },
  },
})
</script>
<style scoped></style>
