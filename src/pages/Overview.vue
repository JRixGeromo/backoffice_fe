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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                <template #content>
                  <DateRangeCriteria :getDates="getDates" />
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
                <TogglePerformanceSummary :toggle="toggle"/>
              </template>
            </Popper>
          </div>
        </div>
        <OverviewSummary 
          :refreshData="refreshData"
          :toggleVar="toggleVar" 
        />
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
                <Popper arrow placement="bottom">
                <li class="first-list-icon">
                  <a href="javascript:void(0)">
                    By Day
                    <svg width="10" height="6" viewBox="0 0 10 6"  fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.825 8.50953e-07L5 3.7085L1.175 1.82168e-07L-5.28948e-07 1.1417L5 6L10 1.1417L8.825 8.50953e-07Z" fill="white"/> </svg>
                  </a>
                </li>
                <template #content>
                  <FilterDay />
                </template>
                </Popper>
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
                    <ToggleChart :toggleChart="toggleChart"/>
                  </template>
                </Popper>
              </ul>
            </div>
          </div>
        </div>
        <div class="dash-chart-content-main">
          <div class="dash-chart-content-inner-area">
            <div class="row">
              <div class="col-lg-6" v-if="show.netSalesChart">
                <div class="dash-chart-item-main">
                  <div class="dash-chart-item-inner">
                    <vue-element-loading
                      :active="isChartActive"
                      :is-full-screen="false"
                    />
                    <h3>Net Sales</h3>
                    <div class="chart-area-main">
                      <div class="chart" ref="salesChart"></div>
                    </div>
                    <div class="chart-bottom-area">
                      <div class="chart-bottom-area-inner">
                        <div class="chart-bottom-item">
                          <div class="chart-bottom-left">
                            <label class="form-check-label">
														<input class="form-check-input" type="checkbox" checked="checked" value="" @change="filterData('sales2',$event)">
														<span class="form-check-sign">
															<span class="checkbox-orange check"></span>
														</span>
                            </label>
                            <p>{{ currentText }}</p>
                          </div>
                          <div class="chart-bottom-right">
                            <p>${{ summaryData.netSales }}</p>
                          </div>
                        </div>
                        <div class="chart-bottom-item">
                          <div class="chart-bottom-left">
                            <label class="form-check-label">
														<input class="form-check-input" type="checkbox" :id="1" checked="checked" value="" @change="filterData('sales1',$event)">
														<span class="form-check-sign">
															<span class="checkbox-blue check"></span>
														</span>
                            </label>
                            <p>{{ previousText }}</p>
                          </div>
                          <div class="chart-bottom-right">
                            <p>${{ summaryDataPrev.netSales }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6" v-if="show.ordersChart">
                <div class="dash-chart-item-main">
                  <div class="dash-chart-item-inner">
                    <h3>Orders</h3>
                    <div class="chart-area-main">
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
                            <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" checked="checked" value="" @change="filterData('orders2',$event)">
														<span class="form-check-sign">
															<span class="checkbox-green check"></span>
														</span>
                            </label>
                            <p>{{ currentText }}</p>
                          </div>
                          <div class="chart-bottom-right">
                            <p>{{ summaryData.orders }}</p>
                          </div>
                        </div>
                        <div class="chart-bottom-item">
                          <div class="chart-bottom-left">
                            <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" checked="checked" value="" @change="filterData('orders1',$event)">
														<span class="form-check-sign">
															<span class="checkbox-red check"></span>
														</span>
                            </label>
                            <p>vs. {{ previousText }}</p>
                          </div>
                          <div class="chart-bottom-right">
                            <p>{{ summaryDataPrev.orders }}</p>
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
                <ToggleLeaderBoard :toggle="toggle"/>
              </template>
            </Popper>
          </div>
        </div>
        <div class="dash-leader-content-main">
          <div class="dash-leader-content-inner">
            <div class="row">
              <div class="col-lg-6" v-if="show.listTopCustomers">
                <Customers :refreshData="refreshData" />
              </div>
              <div class="col-lg-6" v-if="show.listTopCountries">
                <Countries :refreshData="refreshData" />
              </div>
              <div class="col-lg-6" v-if="show.listTopCategories">
                <Categories :refreshData="refreshData" />
              </div>
              <div class="col-lg-6" v-if="show.listTopProducts">
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
import TogglePerformanceSummary from './common/TogglePerformanceSummary.vue'
import ToggleLeaderBoard from './common/ToggleLeaderBoard.vue'
import ToggleChart from './common/ToggleChart.vue'
import DateRangeCriteria from './common/DateRangeCriteria.vue'
import FilterDay from '@/pages/common/FilterDay.vue'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { reduceData } from '@/helper/helper'
import {_} from 'vue-underscore';
import { toggleSwitch } from '@/helper/helper'
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
    TogglePerformanceSummary,
    ToggleChart,
    ToggleLeaderBoard,
    DateRangeCriteria,
    OverviewSummary,
    FilterDay
  },
  //extends: Bar,
  data() {
    return {
      dtX: null,
      resultRaw: {},
      processedRaw: {},
      forUi: {},
      showNetSalesCurrent: true,
      showOrdersCurrent: true,
      showNetSalesPrev: true,
      showOrdersPrev: true,
      summaryData: {
        orders: null,
        netSales: null,
      },
      summaryDataPrev: {
        orders: null,
        netSales: null,
      },
      currentText: '',
      previousText: '',
      isChartActive: true,
      refreshData: null,
      dates: 'CurrYearToDate:PrevLastYear',
      product: 'All',
      show: {
        sales1: true,
        sales2: true,
        orders1: true,
        orders2: true,
        totalSales: 1,
        netSales: 1,
        orders: 1,
        itemsSold: 1,
        listTopCustomers: true,
        listTopCountries: true,
        listTopCategories: true,
        listTopProducts: true,
        netSalesChart: true,
        ordersChart: true,
      },
      toggleVar: null,
    }
  },

  mounted() {
    this.refreshData = this.dates + ':' + this.product
    this.loadData()
  },
  beforeUnmount() {
    if (this.salesChart) {
      this.salesChart.dispose()
      this.ordersChart.dispose()
    }
  },
  methods: {
    getDates(curr, prev) {
      this.dates = curr + ':' + prev
      this.refreshData = this.dates + ':' + this.product
      this.loadData()
    },
    loadData() {
      const c = this.refreshData.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      this.showLoader();

      axios
        .get(`analytics/overview/${curr}/${prev}/${prod}`)
        .then((response) => {
          this.resultRaw = response.data // for reload original data 
          const summaryResult = this.resultRaw.sales_summary
          const criteria = this.resultRaw.criteria

          const salesSummary = summaryResult.filter((el) => {
            return el.gby == criteria.g2
          })
          const salesSummaryPrev = summaryResult.filter((el) => {
            return el.gby == criteria.g1
          })

          let netSales = 0
          let orders = 0

          if (salesSummary.length > 0) {
            netSales =
              salesSummary[0].net_sales > 0 ? salesSummary[0].net_sales : 0

            orders = salesSummary[0].orders > 0 ? salesSummary[0].orders : 0

          }

          this.summaryData.orders = orders
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.summaryData.netSales = netSales
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          let netSalesPrev = 0
          let ordersPrev = 0

          if (salesSummaryPrev.length > 0) {
            netSalesPrev =
              salesSummaryPrev[0].net_sales > 0
                ? salesSummaryPrev[0].net_sales
                : 0

            ordersPrev =
              salesSummaryPrev[0].orders > 0 ? salesSummaryPrev[0].orders : 0
          }

          this.summaryDataPrev.orders = ordersPrev
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          this.summaryDataPrev.netSales = netSalesPrev
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          this.currentText = criteria.currentText
          this.previousText = criteria.previousText
          this.processedRaw = reduceData(this.resultRaw, 'overview')
          console.log(this.processedRaw);
          this.chartSource();
          this.renderGraph();  
        })
    },
    renderGraph() {
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
      salesChart.data = this.forUi

      const dateAxis = salesChart.xAxes.push(new am4charts.DateAxis())
      dateAxis.renderer.grid.template.location = 0

      // First value
      const valueAxis = salesChart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.tooltip.disabled = true
      valueAxis.renderer.minWidth = 35

      // First series
      const series = salesChart.series.push(new am4charts.LineSeries())
      series.dataFields.dateX = 'mdy2'
      series.dataFields.valueY = 'sales1'
      series.strokeWidth = 1
      series.tensionX = 0.8
      // series.bullets.push(new am4charts.CircleBullet())
      series.fill = am4core.color('#239f4f91')
      series.fillOpacity = 0.2
      series.stroke = am4core.color('blue')
      series.strokeOpacity = 0.5

      const fillModifier = new am4core.LinearGradientModifier()
      fillModifier.opacities = [1, 0]
      fillModifier.offsets = [0, 1]
      fillModifier.gradient.rotation = 90
      series.segments.template.fillModifier = fillModifier

      series.tooltipText = '{valueY.sales1}'

      // Second value
      const valueAxis2 = salesChart.yAxes.push(new am4charts.ValueAxis())
      // valueAxis2.title.text = 'Units sold'
      valueAxis2.renderer.opposite = true
      valueAxis2.tooltip.disabled = true
      valueAxis2.renderer.minWidth = 35

      // Second series
      const series2 = salesChart.series.push(new am4charts.LineSeries())
      series2.dataFields.dateX = 'mdy2'
      series2.dataFields.valueY = 'sales2'
      series2.strokeWidth = 3
      series2.yAxis = valueAxis2
      series2.strokeWidth = 1
      series2.tensionX = 0.8
      series2.fill = am4core.color('#eadc2f94')
      series2.fillOpacity = 0.2
      series2.stroke = am4core.color('orange')
      series2.strokeOpacity = 0.5

      series2.tooltipText = '{valueY.sales2}'

      salesChart.cursor = new am4charts.XYCursor()

      const scrollbarX = new am4charts.XYChartScrollbar()
      scrollbarX.series.push(series)
      scrollbarX.series.push(series2)
      salesChart.scrollbarX = scrollbarX
      this.salesChart = salesChart

      // orders
      ordersChart.data = this.forUi

      const dateAxisO = ordersChart.xAxes.push(new am4charts.DateAxis())
      dateAxisO.renderer.grid.template.location = 0

      const valueAxisO = ordersChart.yAxes.push(new am4charts.ValueAxis())
      valueAxisO.tooltip.disabled = true
      valueAxisO.renderer.minWidth = 35

      const seriesO = ordersChart.series.push(new am4charts.ColumnSeries())
      seriesO.dataFields.dateX = 'mdy2'
      seriesO.dataFields.valueY = 'orders1'

      seriesO.tooltipText = '{valueY.orders1}'
      ordersChart.cursor = new am4charts.XYCursor()

      const scrollbarXO = new am4charts.XYChartScrollbar()
      scrollbarXO.series.push(seriesO)
      ordersChart.scrollbarX = scrollbarXO
      this.ordersChart = ordersChart
      this.hideLoader()
    },
    hideLoader() {
      setTimeout(() => this.isChartActive = false, 500);
    },
    showLoader() {
      this.isChartActive = true;
    },    
    filterData(option, e) {
      this.showLoader();
      switch(option) {
        case "sales1": // previous
          this.show.sales1 = e.target.checked;
          break;
        case "sales2": // current
          this.show.sales2 = e.target.checked;
          break;
        case "orders1": // previous
          this.show.orders1 = e.target.checked;
          break;
        case "orders2": // current
          this.show.orders2 = e.target.checked;
          break;
        default:
          this.show.sales1 = true;
          this.show.sales2 = true;
          this.show.orders1 = true;
          this.show.orders2 = true;
      }
      this.chartSource();
      this.renderGraph();        
      this.hideLoader();
    },
    chartSource() {
      this.forUi = this.processedRaw;
      if(!this.show.sales1) {
        this.forUi = _.map(this.forUi, function(o) { return _.omit(o, 'sales1'); });
      }
      if (!this.show.sales2) {
        this.forUi = _.map(this.forUi, function(o) { return _.omit(o, 'sales2'); });
      }
      if (!this.show.orders1) {
        this.forUi = _.map(this.forUi, function(o) { return _.omit(o, 'orders1'); });
      }
      if (!this.show.orders2) {
        this.forUi = _.map(this.forUi, function(o) { return _.omit(o, 'orders2'); });
      }
    },
    toggleChart(el) {
      const toggleTF = toggleSwitch(el)
      if (toggleTF) {
        if(el == 'netSalesChart') {
          this.show.netSalesChart = true;
        }
        if(el == 'ordersChart') {
          this.show.ordersChart = true;
        }        
      } else {
        if(el == 'netSalesChart') {
          this.show.netSalesChart = true;
        }
        if(el == 'ordersChart') {
          this.show.ordersChart = true;
        }        
      }  
    },
    toggle(el) {
      const toggleTF = toggleSwitch(el)
      if (toggleTF) {

        if(el == 'performanceTotalSales') {
          this.show.totalSales = 1;
        }
        if(el == 'performancerNetSales') {
          this.show.netSales = 1;
        }
        if(el == 'performanceOrders') {
          this.show.orders = 1;
        }
        if(el == 'performanceItemsSold') {
          this.show.itemsSold = 1;
        }
        
        if(el == 'listTopCustomers') {
          this.show.listTopCustomers = true;
        }
        if(el == 'listTopCountries') {
          this.show.listTopCountries = true;
        }
        if(el == 'listTopCategories') {
          this.show.listTopCategories = true;
        }
        if(el == 'listTopProducts') {
          this.show.listTopProducts = true;
        }

      } else {

        if(el == 'performanceTotalSales') {
          this.show.totalSales = 0;
        }
        if(el == 'performancerNetSales') {
          this.show.netSales = 0;
        }
        if(el == 'performanceOrders') {
          this.show.orders = 0;
        }
        if(el == 'performanceItemsSold') {
          this.show.itemsSold = 0;
        }

        if(el == 'listTopCustomers') {
          this.show.listTopCustomers = false;
        }
        if(el == 'listTopCountries') {
          this.show.listTopCountries = false;
        }
        if(el == 'listTopCategories') {
          this.show.listTopCategories = false;
        }
        if(el == 'listTopProducts') {
          this.show.listTopProducts = false;
        }
      }
      this.toggleVar = `${this.show.totalSales}:${this.show.netSales}:${this.show.orders}:${this.show.itemsSold}`;
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
