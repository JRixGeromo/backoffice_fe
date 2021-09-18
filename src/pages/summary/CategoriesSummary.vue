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
      selected: 1,
      summaryData: {
        grossSales: null,
        coupons: null,
        taxes: null,
        shipping: null,
        netSales: null,
        totalSales: null,
        returns: null,
      },
      salesPercent: {
        grossSales: null,
        coupons: null,
        taxes: null,
        shipping: null,
        netSales: null,
        totalSales: null,
        returns: null,
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
        .get(`analytics/revenue_summary/${curr}/${prev}/${prod}`)
        .then((response) => {
          const result = response.data.summary
          const criteria = response.data.criteria

          const salesSummary = result.filter((el) => {
            return el.gby == criteria.g1
          })

          const salesSummaryPrev = result.filter((el) => {
            return el.gby == criteria.g2
          })

          // const salesSummary = response.data.summary
          // const salesPercent = response.data.percent

          let grossSales = 0
          let coupons = 0
          let taxes = 0
          let shipping = 0
          let netSales = 0
          let totalSales = 0
          const returns = 0

          if (salesSummary.length > 0) {
            grossSales =
              salesSummary[0].gross_sales > 0 ? salesSummary[0].gross_sales : 0

            coupons = salesSummary[0].coupons > 0 ? salesSummary[0].coupons : 0

            taxes = salesSummary[0].taxes > 0 ? salesSummary[0].taxes : 0

            shipping =
              salesSummary[0].shipping > 0 ? salesSummary[0].shipping : 0

            netSales =
              salesSummary[0].net_sales > 0 ? salesSummary[0].net_sales : 0

            totalSales =
              salesSummary[0].taxes > 0 ? salesSummary[0].total_sales : 0
          }

          this.summaryData.grossSales = grossSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.returns = 0

          this.summaryData.coupons = coupons
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.netSales = netSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.taxes = taxes
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.shipping = shipping
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.summaryData.totalSales = totalSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          let grossSalesPrev = 0
          let couponsPrev = 0
          let taxesPrev = 0
          let shippingPrev = 0
          let netSalesPrev = 0
          let totalSalesPrev = 0
          const returnsPrev = 0

          if (salesSummaryPrev.length > 0) {
            grossSalesPrev =
              salesSummaryPrev[0].gross_sales > 0
                ? salesSummaryPrev[0].gross_sales
                : 0

            couponsPrev =
              salesSummaryPrev[0].coupons > 0 ? salesSummaryPrev[0].coupons : 0

            taxesPrev =
              salesSummaryPrev[0].taxes > 0 ? salesSummaryPrev[0].taxes : 0

            shippingPrev =
              salesSummaryPrev[0].shipping > 0
                ? salesSummaryPrev[0].shipping
                : 0

            netSalesPrev =
              salesSummaryPrev[0].net_sales > 0
                ? salesSummaryPrev[0].net_sales
                : 0

            totalSalesPrev =
              salesSummaryPrev[0].taxes > 0
                ? salesSummaryPrev[0].total_sales
                : 0
          }

          this.salesPercent.netSales =
            netSales > 0
              ? parseFloat(netSales) / parseFloat(netSalesPrev)
              : -100

          this.salesPercent.grossSales =
            grossSales > 0
              ? parseFloat(grossSales) / parseFloat(grossSalesPrev)
              : -100
          this.salesPercent.coupons =
            coupons > 0 ? parseFloat(coupons) / parseFloat(couponsPrev) : -100
          this.salesPercent.taxes =
            taxes > 0 ? parseFloat(taxes) / parseFloat(taxesPrev) : -100
          this.salesPercent.shipping =
            shipping > 0
              ? parseFloat(shipping) / parseFloat(shippingPrev)
              : -100
          this.salesPercent.totalSales =
            totalSales > 0
              ? parseFloat(totalSales) / parseFloat(totalSalesPrev)
              : -100
          this.salesPercent.returns =
            returns > 0 ? parseFloat(returns) / parseFloat(returnsPrev) : -100

          this.salesPercent.netSales = this.salesPercent.netSales
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.salesPercent.grossSales = this.salesPercent.grossSales
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.salesPercent.coupons = this.salesPercent.coupons
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.salesPercent.taxes = this.salesPercent.taxes
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.salesPercent.shipping = this.salesPercent.shipping
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.salesPercent.totalSales = this.salesPercent.totalSales
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.salesPercent.returns = this.salesPercent.returns
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          console.log(grossSalesPrev)
          console.log(couponsPrev)
          console.log(taxesPrev)
          console.log(shippingPrev)
          console.log(netSalesPrev)
          console.log(totalSalesPrev)
          console.log(returnsPrev)

          console.log(this.summaryData.grossSales)
          console.log(this.summaryData.coupons)
          console.log(this.summaryData.taxes)
          console.log(this.summaryData.shipping)
          console.log(this.summaryData.netSales)
          console.log(this.summaryData.totalSales)
          console.log(this.summaryData.returns)

          console.log(this.salesPercent.grossSales)
          console.log(this.salesPercent.coupons)
          console.log(this.salesPercent.taxes)
          console.log(this.salesPercent.shipping)
          console.log(this.salesPercent.netSales)
          console.log(this.salesPercent.totalSales)
          console.log(this.salesPercent.returns)

          this.isActive = false
        })
    },
    onSummaryClick(selected) {
      this.selected = selected
      this.$emit('selected', selected)
    },
  },
})

/*
export default defineComponent({
  name: 'RevenueSummary',
  components: {
    VueElementLoading,
  },
  data() {
    return {
      isActive: true,
      selected: 1,
      summaryData: {
        total_gross_sales: null,
        total_returns: null,
        total_coupons: null,
        total_net_sales: null,
        total_taxes: null,
        total_shipping: null,
        total_sales: null,
      },
      salesPercent: {
        gross_sales: null,
        returns: null,
        coupons: null,
        net_sales: null,
        taxes: null,
        total_shipping: null,
        total_sales: null,
      },
    }
  },
  methods: {
    onSummaryClick(selected) {
      this.selected = selected
      this.$emit('selected', selected)
    },
  },
  mounted() {
    axios
      .get(`analytics/revenue_summary/${curr}/${prev}/${prod}`)
      .then((response) => {
        const salesSummary = response.data.summary
        const salesPercent = response.data.percent

        this.summaryData.total_gross_sales = salesSummary[0].total_gross_sales
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        this.summaryData.total_returns = salesSummary[0].total_returns
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        this.summaryData.total_coupons = salesSummary[0].total_coupons
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        this.summaryData.total_net_sales = salesSummary[0].total_net_sales
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        this.summaryData.total_taxes = salesSummary[0].total_taxes
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        this.summaryData.total_shipping = salesSummary[0].total_shipping
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        this.summaryData.total_sales = salesSummary[0].total_sales
          .toFixed(2)
          .replace(/\d(?=(\d{3})+\.)/g, '$&,')

        this.salesPercent.gross_sales = salesPercent.gross_sales
        this.salesPercent.returns = salesPercent.returns
        this.salesPercent.coupons = salesPercent.coupons
        this.salesPercent.net_sales = salesPercent.net_sales
        this.salesPercent.taxes = salesPercent.taxes
        this.salesPercent.shipping = salesPercent.shipping
        this.salesPercent.total_sales = salesPercent.total_sales
        this.isActive = false
      })
  },
})
*/
</script>
<style scoped></style>
