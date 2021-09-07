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
              {{ summaryData.itemSold }}
            </h2>
          </div>
          <div class="product-tab-item-con-right">
            <div class="product-tab-item-con-right-inner">
              <span>{{ salesPercent.itemSold }}%</span>
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
        .get(`analytics/products_summary/${curr}/${prev}`)
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

          let netSales = 0
          let orders = 0
          let itemsSold = 0

          if (typeof salesSummary[0] !== 'undefined') {
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

          this.summaryData.net_sales = netSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.orders = orders
          this.summaryData.items_sold = itemsSold

          let netSalesPrev = 0
          let ordersPrev = 0
          let itemsSoldPrev = 0

          if (typeof salesSummaryPrev[0] !== 'undefined') {
            netSalesPrev =
              salesSummaryPrev[0].net_sales !== 'undefined'
                ? salesSummaryPrev[0].net_sales
                : 0

            ordersPrev =
              salesSummaryPrev[0].orders !== 'undefined'
                ? salesSummaryPrev[0].orders
                : 0

            itemsSoldPrev =
              salesSummaryPrev[0].items_sold !== 'undefined'
                ? salesSummaryPrev[0].items_sold
                : 0
          }

          this.salesPercent.netSales = netSalesPrev / netSales
          this.salesPercent.orders = ordersPrev / orders
          this.salesPercent.itemsSold = itemsSoldPrev / itemsSold

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
