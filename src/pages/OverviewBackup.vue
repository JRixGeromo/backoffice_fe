<template>
  <div class="dash-content-area-inner">
    <div class="dash-title-area">
      <div class="dash-title-area-inner">
        <div class="dash-left-title">
          <h2>Overview</h2>
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
              />
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
            <h3>
              {{ currentText }}
            </h3>
            <div class="dash-date-con-area-inner-arrow">
              <Popper arrow placement="bottom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#868686"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
                <template #content>
                  <overDateRange :getData="getData" />
                </template>
              </Popper>
            </div>
            <p>vs. {{ previousText }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="dash-performance-main-area">
      <div class="dash-performance-inner-area">
        <div class="per-title-main">
          <div class="per-title-inner">
            <div class="per-title-left">
              <h2>Performance</h2>
            </div>
            <Popper arrow placement="bottom">
              <div class="per-title-right">
                <a href="javascript:void(0)" class="per-popup-btn">
                  <svg
                    width="28"
                    height="6"
                    viewBox="0 0 28 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <circle cx="25" cy="3" r="3" fill="#868686" />
                      <circle cx="14" cy="3" r="3" fill="#868686" />
                      <circle cx="3" cy="3" r="3" fill="#868686" />
                    </g>
                  </svg>
                </a>
              </div>
              <template #content>
                <overPerformance />
              </template>
            </Popper>
          </div>
        </div>
        <OverviewSummary :refreshData="refreshData" />
      </div>
    </div>
    <div class="dash-chart-main-area">
      <div class="dash-chart-inner-area">
        <div class="dash-chart-title-main">
          <div class="dash-chart-title-inner">
            <div class="dash-chart-title-left">
              <h2>Charts</h2>
            </div>
            <div class="dash-chart-title-right">
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
                      />
                    </svg>
                  </a>
                </li>
                <li class="second-icon-list">
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
                        fill="#868686"
                      />
                    </svg>
                  </a>
                </li>
                <li class="second-icon-list">
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
                      />
                    </svg>
                  </a>
                </li>
                <Popper arrow placement="bottom">
                  <a href="javascript:void(0)">
                    <svg
                      width="28"
                      height="6"
                      viewBox="0 0 28 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <circle cx="25" cy="3" r="3" fill="#868686" />
                        <circle cx="14" cy="3" r="3" fill="#868686" />
                        <circle cx="3" cy="3" r="3" fill="#868686" />
                      </g>
                    </svg>
                  </a>
                  <template #content>
                    <overChart />
                  </template>
                </Popper>
              </ul>
            </div>
          </div>
        </div>
        <div class="dash-chart-content-main">
          <div class="dash-chart-content-inner-area">
            <div class="row">
              <div class="col-lg-6">
                <div class="dash-chart-item-main">
                  <div class="dash-chart-item-inner">
                    <h3>Net Sales</h3>
                    <div class="chart-area-main">
                      <!-- <canvas id="myChart"></canvas> -->
                      <vue-element-loading
                        :active="isChartActive"
                        :is-full-screen="false"
                      />
                      <div class="chart" ref="salesChart"></div>
                    </div>
                    <div class="chart-bottom-area">
                      <div class="chart-bottom-area-inner">
                        <div class="chart-bottom-item">
                          <div class="chart-bottom-left">
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
                              />
                            </svg>
                            <p>Month to Date (Jun 1 - 19,2021)</p>
                          </div>
                          <div class="chart-bottom-right">
                            <p>$5,742.13</p>
                          </div>
                        </div>
                        <div class="chart-bottom-item">
                          <div class="chart-bottom-left">
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
                              />
                            </svg>
                            <p>Previous Year (Jun 1 - 29,2020)</p>
                          </div>
                          <div class="chart-bottom-right">
                            <p>$34,167.10</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="dash-chart-item-main">
                  <div class="dash-chart-item-inner">
                    <h3>Orders</h3>
                    <div class="chart-area-main">
                      <!-- <canvas id="myChartsecond"></canvas> -->
                      <vue-element-loading
                        :active="isChartActive"
                        :is-full-screen="false"
                      />
                      <div class="chart" ref="ordersChart"></div>
                    </div>
                    <div class="chart-bottom-area">
                      <div class="chart-bottom-area-inner">
                        <div class="chart-bottom-item">
                          <div class="chart-bottom-left">
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
                                fill="#2FA84F"
                              />
                            </svg>
                            <h3>{{ currentText }}</h3>
                          </div>
                          <div class="chart-bottom-right">
                            <p>79</p>
                          </div>
                        </div>
                        <div class="chart-bottom-item">
                          <div class="chart-bottom-left">
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
                                fill="#EA3D2F"
                              />
                            </svg>
                            <p>vs. {{ previousText }}</p>
                          </div>
                          <div class="chart-bottom-right">
                            <p>729</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dash-leaderboard-main-sec">
      <div class="dash-leader-inner-sec">
        <div class="dash-leader-title-main">
          <div class="dash-leader-title-inner">
            <div class="dash-leader-title-left">
              <h2>Leaderboards</h2>
            </div>
            <Popper arrow placement="bottom">
              <div class="dash-leader-title-right">
                <ul>
                  <li>
                    <a href="javascript:void(0)" class="leaderboard-popup-btn">
                      <svg
                        width="28"
                        height="6"
                        viewBox="0 0 28 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <circle cx="25" cy="3" r="3" fill="#868686"></circle>
                          <circle cx="14" cy="3" r="3" fill="#868686"></circle>
                          <circle cx="3" cy="3" r="3" fill="#868686"></circle>
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <template #content>
                <overLeaderboard />
              </template>
            </Popper>
          </div>
        </div>
        <div class="dash-leader-content-main">
          <div class="dash-leader-content-inner">
            <div class="row">
              <div class="col-lg-6">
                <Customers :refreshData="refreshData" />
              </div>
              <div class="col-lg-6">
                <Countries :refreshData="refreshData" />
              </div>
              <div class="col-lg-6">
                <Categories :refreshData="refreshData" />
              </div>
              <div class="col-lg-6">
                <Products :refreshData="refreshData" />
              </div>
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
import Customers from './top/Customers.vue'
import Countries from './top/Countries.vue'
import Categories from './top/Categories.vue'
import Products from './top/Products.vue'
import OverviewSummary from './summary/OverviewSummary.vue'
import VueElementLoading from 'vue-element-loading'
import Popper from 'vue3-popper'
import overPerformance from './dropdowns/overPerformance.vue'
import overLeaderboard from './dropdowns/overLeaderboard.vue'
import overChart from './dropdowns/overChart.vue'
import overDateRange from './dropdowns/overDateRange.vue'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { reduceData } from '@/helper/helper'
am4core.useTheme(am4themes_animated)

export default defineComponent({
  name: 'Overview',
  components: {
    Customers,
    Countries,
    Categories,
    Products,
    VueElementLoading,
    Popper,
    overPerformance,
    overChart,
    overLeaderboard,
    overDateRange,
    OverviewSummary,
  },
  //extends: Bar,
  data() {
    return {
      currentText: '',
      previousText: '',
      isChartActive: true,
      refreshData: 'CurrYearToDate:PrevLastYear',
    }
  },

  mounted() {
    this.loadData()
  },
  beforeUnmount() {
    if (this.salesChart) {
      this.salesChart.dispose()
      this.ordersChart.dispose()
    }
  },
  methods: {
    getData(curr, prev) {
      this.refreshData = curr + ':' + prev
      this.loadData(curr, prev)
    },
    loadData(curr = 'CurrToday', prev = 'PrevYesterday') {
      const salesChart = am4core.create(
        this.$refs.salesChart,
        am4charts.XYChart
      )
      const ordersChart = am4core.create(
        this.$refs.ordersChart,
        am4charts.XYChart
      )
      salesChart.paddingRight = 20
      ordersChart.paddingRight = 20
      const salesData = []
      const ordersData = []

      axios.get(`analytics/overview/${curr}/${prev}`).then((response) => {
        const salesResult = response.data.sales
        const salesCriteria = response.data.criteria
        this.currentText = salesCriteria.currentText
        this.previousText = salesCriteria.previousText
        const result = reduceData(salesResult, 'overview')

        /*
        for (let i = 1; i < salesResult.length; i++) {
          salesData.push({
            ymd: salesResult[i].ymd,
            value: salesResult[i].net_sales,
          })
          ordersData.push({
            ymd: salesResult[i].ymd,
            value: salesResult[i].orders,
          })
        }
        */

        // sales
        salesChart.data = result

        const dateAxis = salesChart.xAxes.push(new am4charts.DateAxis())
        dateAxis.renderer.grid.template.location = 0

        const valueAxis = salesChart.yAxes.push(new am4charts.ValueAxis())
        valueAxis.tooltip.disabled = true
        valueAxis.renderer.minWidth = 35

        const series = salesChart.series.push(new am4charts.LineSeries())
        series.dataFields.dateX = 'date'
        series.dataFields.valueY = 'sales1'
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
        salesChart.cursor = new am4charts.XYCursor()

        const scrollbarX = new am4charts.XYChartScrollbar()
        scrollbarX.series.push(series)
        salesChart.scrollbarX = scrollbarX

        this.salesChart = salesChart

        // orders
        ordersChart.data = result

        const dateAxisO = ordersChart.xAxes.push(new am4charts.DateAxis())
        dateAxisO.renderer.grid.template.location = 0

        const valueAxisO = ordersChart.yAxes.push(new am4charts.ValueAxis())
        valueAxisO.tooltip.disabled = true
        valueAxisO.renderer.minWidth = 35

        const seriesO = ordersChart.series.push(new am4charts.ColumnSeries())
        seriesO.dataFields.dateX = 'date'
        seriesO.dataFields.valueY = 'orders1'

        seriesO.tooltipText = '{valueY.value}'
        ordersChart.cursor = new am4charts.XYCursor()

        const scrollbarXO = new am4charts.XYChartScrollbar()
        scrollbarXO.series.push(seriesO)
        ordersChart.scrollbarX = scrollbarXO

        this.ordersChart = ordersChart

        this.isChartActive = false
      })
    },
  },
})
</script>
<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
</style>
