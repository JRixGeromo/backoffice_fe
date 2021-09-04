<template>
  <div class="dash-content-area-inner">
    <div class="dash-title-area">
      <div class="dash-title-area-inner">
        <div class="dash-left-title">
          <h2>Categories</h2>
        </div>
        <div class="dash-right-title">
          <a href="javascript:void(0)">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3333 16H16C16 17.0609 15.5786 18.0783 14.8284 18.8284C14.0783 19.5786 13.0609 20 12 20C10.9391 20 9.92172 19.5786 9.17157 18.8284C8.42143 18.0783 8 17.0609 8 16H2.66667V2.66667H21.3333V16ZM21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z"
                fill="#367BF5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="dash-date-main-area">
      <div class="dash-date-inner-area">
        <h3>Date Range</h3>
        <div class="dash-date-con-area">
          <div class="dash-date-con-area-inner text-in-block-max">
            <h3>Month to Date (Jun 1 - 29,2021)</h3>
            <p>vs. Previous Year (Jun 1 - 29,2020)</p>
          </div>
        </div>
      </div>
      <div class="dash-date-inner-area">
        <h3>Show:</h3>
        <div class="dash-date-con-area">
          <div class="dash-select-product-area-inner">
            <select class="select-product">
              <option value="All Products">All Products</option>
              <option value="All Products">All Products</option>
              <option value="All Products">All Products</option>
              <option value="All Products">All Products</option>
              <option value="All Products">All Products</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="product-tab-main-sec-area">
      <div class="product-tab-inner-area">
        <div class="product-tab-main">
          <CategoriesSummary />

          <!-- Product Tab Content -->
          <div class="product-tab-content-main-area">
            <div
              class="product-tab-content-item"
              id="product-tab-item-1"
              style=""
            >
              <div class="product-tab-content-header">
                <div class="product-tab-content-title">
                  <h3>Items Sold</h3>
                </div>
                <div class="product-tab-content-center">
                  <div class="product-tab-header-date">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z"
                        fill="#F3AA18"
                      ></path>
                    </svg>
                    <p>Month to Date (Jun 1 - 19,2021)</p>
                    <span>678</span>
                  </div>
                  <div class="product-tab-header-date">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z"
                        fill="#367BF5"
                      ></path>
                    </svg>
                    <p>Previous Year (Jun 1 - 29,2020)</p>
                    <span>4,531</span>
                  </div>
                </div>
                <div class="product-tab-content-right">
                  <ul>
                    <li class="first-list-icon">
                      <a href="javascript:void(0)">
                        By Day
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.825 8.50953e-07L5 3.7085L1.175 1.82168e-07L-5.28948e-07 1.1417L5 6L10 1.1417L8.825 8.50953e-07Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="second-icon-list blue-list">
                      <a href="javascript:void(0)">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 10H1.66667V8.33333H0V10ZM2.77778 10H4.44444V6.11111H2.77778V10ZM5.55556 10H7.22222V3.33333H5.55556V10ZM8.33333 10H10V0H8.33333V10Z"
                            fill="#367BF5"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="second-icon-list gray-list">
                      <a href="javascript:void(0)">
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 10H0V3.15789L4.3 5.78947L6.81333 4.24561L12 7.39649V10ZM0 1.53684V0L4.3 2.63158L6.81333 1.08772L12 4.2386V5.78947L6.81333 2.63158L4.3 4.15439L0 1.53684Z"
                            fill="#868686"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="product-tab-chart-area chart-min-height">
                <vue-element-loading
                  :active="isChartActive"
                  :is-full-screen="false"
                />
                <div class="chart" ref="productsChart"></div>
              </div>
            </div>
            <div
              class="product-tab-content-item"
              id="product-tab-item-2"
              style="display: none;"
            >
              <div class="product-tab-content-header">
                <div class="product-tab-content-title">
                  <h3>Net Sales</h3>
                </div>
                <div class="product-tab-content-center">
                  <div class="product-tab-header-date">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z"
                        fill="#F3AA18"
                      ></path>
                    </svg>
                    <p>Month to Date (Jun 1 - 19,2021)</p>
                    <span>678</span>
                  </div>
                  <div class="product-tab-header-date">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z"
                        fill="#367BF5"
                      ></path>
                    </svg>
                    <p>Previous Year (Jun 1 - 29,2020)</p>
                    <span>4,531</span>
                  </div>
                </div>
                <div class="product-tab-content-right">
                  <ul>
                    <li class="first-list-icon">
                      <a href="javascript:void(0)">
                        By Day
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.825 8.50953e-07L5 3.7085L1.175 1.82168e-07L-5.28948e-07 1.1417L5 6L10 1.1417L8.825 8.50953e-07Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="second-icon-list blue-list">
                      <a href="javascript:void(0)">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 10H1.66667V8.33333H0V10ZM2.77778 10H4.44444V6.11111H2.77778V10ZM5.55556 10H7.22222V3.33333H5.55556V10ZM8.33333 10H10V0H8.33333V10Z"
                            fill="#367BF5"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="second-icon-list gray-list">
                      <a href="javascript:void(0)">
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 10H0V3.15789L4.3 5.78947L6.81333 4.24561L12 7.39649V10ZM0 1.53684V0L4.3 2.63158L6.81333 1.08772L12 4.2386V5.78947L6.81333 2.63158L4.3 4.15439L0 1.53684Z"
                            fill="#868686"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="product-tab-content-item"
              id="product-tab-item-3"
              style="display: none;"
            >
              <div class="product-tab-content-header">
                <div class="product-tab-content-title">
                  <h3>Orders</h3>
                </div>
                <div class="product-tab-content-center">
                  <div class="product-tab-header-date">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z"
                        fill="#F3AA18"
                      ></path>
                    </svg>
                    <p>Month to Date (Jun 1 - 19,2021)</p>
                    <span>678</span>
                  </div>
                  <div class="product-tab-header-date">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z"
                        fill="#367BF5"
                      ></path>
                    </svg>
                    <p>Previous Year (Jun 1 - 29,2020)</p>
                    <span>4,531</span>
                  </div>
                </div>
                <div class="product-tab-content-right">
                  <ul>
                    <li class="first-list-icon">
                      <a href="javascript:void(0)">
                        By Day
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.825 8.50953e-07L5 3.7085L1.175 1.82168e-07L-5.28948e-07 1.1417L5 6L10 1.1417L8.825 8.50953e-07Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="second-icon-list blue-list">
                      <a href="javascript:void(0)">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 10H1.66667V8.33333H0V10ZM2.77778 10H4.44444V6.11111H2.77778V10ZM5.55556 10H7.22222V3.33333H5.55556V10ZM8.33333 10H10V0H8.33333V10Z"
                            fill="#367BF5"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li class="second-icon-list gray-list">
                      <a href="javascript:void(0)">
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 10H0V3.15789L4.3 5.78947L6.81333 4.24561L12 7.39649V10ZM0 1.53684V0L4.3 2.63158L6.81333 1.08772L12 4.2386V5.78947L6.81333 2.63158L4.3 4.15439L0 1.53684Z"
                            fill="#868686"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Tabel Section -->
      <div class="product-table-main-area">
        <div class="product-table-inner-area">
          <div class="Product-table-header-area">
            <div class="product-table-header-title">
              <h2>Products</h2>
            </div>
            <div class="product-table-header-second">
              <span><a href="#">Compare</a></span>
              <form>
                <input type="text" name="search" placeholder="Search" />
                <a href="#" class="prodct-search-ic">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
                      fill="#636363"
                    ></path>
                  </svg>
                </a>
              </form>
            </div>
            <div class="product-table-header-third">
              <ul>
                <li class="download-btn">
                  <a href="#">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="cloud-download-alt"
                      class="svg-inline--fa fa-cloud-download-alt fa-w-20"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"
                      ></path>
                    </svg>
                    Download
                  </a>
                </li>
                <Popper arrow placement="bottom">
                    <a href="javascript:void(0)">
                      <svg width="4" height="19" viewBox="0 0 4 19" fill="#868686" xmlns="http://www.w3.org/2000/svg" >
                        <g opacity="0.5">
                          <circle cx="2" cy="16.6667" r="2" transform="rotate(90 2 16.6667)" fill="#868686"></circle>
                          <circle cx="2" cy="9.33331" r="2" transform="rotate(90 2 9.33331)" fill="#868686"></circle>
                          <circle cx="2" cy="2" r="2" transform="rotate(90 2 2)" fill="#868686"></circle>
                        </g>
                      </svg>
                    </a>
                  <template #content>
                    <categoryProduct />
                  </template>
                </Popper>
              </ul>
            </div>
          </div>
          <div class="product-tabel-sec-area">
            <div class="product-tabel-sec-inner-area">
              <ProductsByDate />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import JQuery from 'jquery'
// window.$ = JQuery

import { defineComponent } from 'vue'
import axios from 'axios'
import ProductsByDate from './bydate/ProductsByDate.vue'
import CategoriesSummary from './summary/CategoriesSummary.vue'
import Popper from 'vue3-popper'
import categoryProduct from './dropdowns/categoryProduct.vue'
import VueElementLoading from 'vue-element-loading'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
am4core.useTheme(am4themes_animated)

export default defineComponent({
  name: 'Categories',
  components: {
    ProductsByDate,
    VueElementLoading,
    CategoriesSummary,
    Popper,
    categoryProduct
  },
  //extends: Bar,
  data() {
    return {
      isChartActive: null,
    }
  },
  mounted() {
    this.isChartActive = true
    const productsChart = am4core.create(
      this.$refs.productsChart,
      am4charts.XYChart
    )
    productsChart.paddingRight = 20
    const productsData = []

    axios.get('analytics/products').then((response) => {
      const salesResult = response.data.sales

      // items_sold
      for (let i = 1; i < salesResult.length; i++) {
        productsData.push({
          date: salesResult[i].date,
          // name: salesResult[i].orders,
          value: salesResult[i].items_sold,
        })
      }

      productsChart.data = productsData

      const dateAxis = productsChart.xAxes.push(new am4charts.DateAxis())
      dateAxis.renderer.grid.template.location = 0

      // dateAxis.renderer.polyspline.tensionX = 0.8
      // dateAxis.renderer.polyspline.tensionY = 0.8

      const valueAxis = productsChart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.tooltip.disabled = true
      valueAxis.renderer.minWidth = 35

      const series = productsChart.series.push(new am4charts.LineSeries())
      series.dataFields.dateX = 'date'
      series.dataFields.valueY = 'value'
      series.strokeWidth = 1
      series.tensionX = 0.8
      series.bullets.push(new am4charts.CircleBullet())
      series.fill = am4core.color('#eadc2f94')
      series.fillOpacity = 0.2
      series.stroke = am4core.color('orange')
      series.strokeOpacity = 0.5

      const fillModifier = new am4core.LinearGradientModifier()
      fillModifier.opacities = [1, 0]
      fillModifier.offsets = [0, 1]
      fillModifier.gradient.rotation = 90
      series.segments.template.fillModifier = fillModifier

      series.tooltipText = '{valueY.value}'
      productsChart.cursor = new am4charts.XYCursor()

      const scrollbarX = new am4charts.XYChartScrollbar()
      scrollbarX.series.push(series)
      productsChart.scrollbarX = scrollbarX

      this.productsChart = productsChart
      this.isChartActive = false
    })
  },
  beforeUnmount() {
    if (this.productsChart) {
      this.productsChart.dispose()
    }
  },
})
</script>
<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
