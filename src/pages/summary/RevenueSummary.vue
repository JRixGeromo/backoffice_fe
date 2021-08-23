<template>
  <div>
    <vue-element-loading :active="isActive" :is-full-screen="false" />
    <div class="product-tab-row">
      <a
        class="product-tab-item-main product-green-item"
        href=""
        rel="product-tab-item-1"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Gross Sales</h3>
              <h2 class="text-in-block-1">
                ${{ summaryData.total_gross_sales }}
              </h2>
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
        class="product-tab-item-main product-black-item"
        href=""
        rel="product-tab-item-2"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Returns</h3>
              <h2 class="text-in-block-1">${{ summaryData.total_returns }}</h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>{{ salesPercent.returns }}%</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        class="product-tab-item-main product-blue-item"
        href=""
        rel="product-tab-item-3"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Coupons</h3>
              <h2 class="text-in-block-1">${{ summaryData.total_coupons }}</h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>{{ salesPercent.coupons }}%</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        class="product-tab-item-main product-red-item"
        href=""
        rel="product-tab-item-4"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Net Sales</h3>
              <h2 class="text-in-block-1">
                ${{ summaryData.total_net_sales }}
              </h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>{{ salesPercent.net_sales }}%</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="product-tab-row">
      <a
        class="product-tab-item-main product-blue-item"
        href=""
        rel="product-tab-item-5"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Taxes</h3>
              <h2 class="text-in-block-1">${{ summaryData.total_taxes }}</h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>{{ salesPercent.taxes }}%</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        class="product-tab-item-main product-red-item"
        href=""
        rel="product-tab-item-6"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Shipping</h3>
              <h2 class="text-in-block-1">${{ summaryData.total_shipping }}</h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>{{ salesPercent.shipping }}%</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        class="product-tab-item-main product-orange-item"
        href=""
        rel="product-tab-item-7"
      >
        <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Total Sales</h3>
              <h2 class="text-in-block-1">${{ summaryData.total_sales }}</h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>{{ salesPercent.total_sales }}%</span>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        class="product-tab-item-main product-black-item"
        href=""
        rel="product-tab-item-4"
      >
        <!-- <div class="product-tab-item-inner">
          <div class="product-tab-item-con">
            <div class="product-tab-item-con-left">
              <h3>Ave. Items Per Order</h3>
              <h2>
                {{ summaryData.ave_order_value }}
              </h2>
            </div>
            <div class="product-tab-item-con-right">
              <div class="product-tab-item-con-right-inner">
                <span>-85%</span>
              </div>
            </div>
          </div>
        </div> -->
      </a>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import VueElementLoading from 'vue-element-loading'

export default defineComponent({
  name: 'RevenueSummary',
  components: {
    VueElementLoading,
  },
  data() {
    return {
      isActive: true,
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

  mounted() {
    axios.get('analytics/revenue_summary').then((response) => {
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
</script>
<style scoped></style>
