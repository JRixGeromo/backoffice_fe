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
      <div class="dash-date-inner-area">
        <h3>Show:</h3>
        <ProductOptions :getSelectedProduct="getSelectedProduct" />
      </div>
    </div>
    <div class="product-tab-main-sec-area">
      <div class="product-tab-inner-area">
        <div class="product-tab-main">
          <!-- <RevenueSummary @selected="selectedSummary" /> -->
          <CategoriesSummary :refreshData="refreshData" @selected="selectedSummary"/>
          <!-- Product Tab Content -->
          <div class="product-tab-content-main-area">
            <div
              class="product-tab-content-item"
              id="product-tab-item-1"
              style=""
              v-show="selected == 1"
            >
              <div class="product-tab-content-header">
                <div class="product-tab-content-title">
                  <h3 class="product-tab-content-orange-title">Items Sold</h3>
                </div>
                <div class="product-tab-content-center">
                  <div class="product-tab-header-date">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" checked="checked" value="" @change="filterData('itemsSold2',$event)">
                      <span class="form-check-sign">
                        <span class="checkbox-orange check"></span>
                      </span>
                    </label>
                    <p>Month to Date (Jun 1 - 19,2021)</p>
                    <span>678</span>
                  </div>
                  <div class="product-tab-header-date">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" checked="checked" value="" @change="filterData('itemsSold1',$event)">
                      <span class="form-check-sign">
                        <span class="checkbox-blue check"></span>
                      </span>
                    </label>
                    <p>Previous Year (Jun 1 - 29,2020)</p>
                    <span>4,531</span>
                  </div>
                </div>
                <div class="product-tab-content-right">
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
              id="product-tab-item-2"
              v-show="selected == 2"
            >
              <div class="product-tab-content-header">
                <div class="product-tab-content-title">
                  <h3 class="product-tab-content-green-title">Net Sales</h3>
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
              v-show="selected == 3"
            >
              <div class="product-tab-content-header">
                <div class="product-tab-content-title">
                  <h3 class="product-tab-content-orange-title">Orders</h3>
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
              id="product-tab-item-4"
              v-show="selected == 4"
            >
              <div class="product-tab-content-header">
                <div class="product-tab-content-title">
                  <h3>Average Items</h3>
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
          <div class="product-tab-chart-area chart-min-height">
                <!-- <canvas id="myChartsecond"></canvas> -->
                <vue-element-loading
                  :active="isChartActive"
                  :is-full-screen="false"
                />
                <div class="chart" ref="categoriesChart"></div>
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
                    <svg
                      width="4"
                      height="19"
                      viewBox="0 0 4 19"
                      fill="#868686"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <circle
                          cx="2"
                          cy="16.6667"
                          r="2"
                          transform="rotate(90 2 16.6667)"
                          fill="#868686"
                        ></circle>
                        <circle
                          cx="2"
                          cy="9.33331"
                          r="2"
                          transform="rotate(90 2 9.33331)"
                          fill="#868686"
                        ></circle>
                        <circle
                          cx="2"
                          cy="2"
                          r="2"
                          transform="rotate(90 2 2)"
                          fill="#868686"
                        ></circle>
                      </g>
                    </svg>
                  </a>
                  <template #content>
                    <ToggleCategoriesList :toggle="toggle"/>
                  </template>
                </Popper>
              </ul>
            </div>
          </div>
          <div class="product-tabel-sec-area">
            <div class="product-tabel-sec-inner-area">
              <CategoriesList 
                :refreshData="refreshData"
                :toggleBar="toggleBar"
              />
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
import CategoriesList from './listing/CategoriesList.vue'
import CategoriesSummary from './summary/CategoriesSummary.vue'
import ToggleCategoriesList from './common/ToggleCategoriesList.vue'
import Popper from 'vue3-popper'
import DateRangeCriteria from './common/DateRangeCriteria.vue'
import ProductOptions from './common/ProductOptions.vue'
import FilterDay from '@/pages/common/FilterDay.vue'
import VueElementLoading from 'vue-element-loading'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { toggleSwitch, reduceData } from '@/helper/helper'
import {_} from 'vue-underscore';
am4core.useTheme(am4themes_animated)

export default defineComponent({
  name: 'Categories',
  // props: {
  //   refreshData: String,
  // },
  components: {
    CategoriesList,
    VueElementLoading,
    CategoriesSummary,
    Popper,
    DateRangeCriteria,
    ProductOptions,
    ToggleCategoriesList,
    FilterDay
  },
  //extends: Bar,
  data() {
    return {
      isChartActive: null,
      refreshData: null,
      dates: 'CurrYearToDate:PrevLastYear',
      product: 'All',
      selected: 1,
      resultRaw: {},
      processedRaw: {},
      forUi: {},
      show: {
        itemsSold1: true,
        itemsSold2: true,
        categoriesCategories: 1,
        categoriesItemsSold: 1,
        categoriesNetSales: 1,
        categoriesProducts: 1,
        categoriesOrders: 1,
      },
      toggleBar: null,
    }
  },
  mounted() {
    this.refreshData = this.dates + ':' + this.product
    this.loadData()
  },
  watch: {
    // refreshData() {
    //   console.log(this.refreshData)
    //   this.getDates(this.refreshData)
    // },
  },
  methods: {
    getDates(curr, prev) {
      this.dates = curr + ':' + prev
      this.refreshData = this.dates + ':' + this.product
      this.loadData()
    },
    getSelectedProduct(selectedProduct) {
      this.product = selectedProduct
      this.refreshData = this.dates + ':' + this.product
      this.loadData()
    },
    loadData() {
      const c = this.refreshData.split(':')
      const curr = c[0]
      const prev = c[1]
      const prod = c[2]
      this.isChartActive = true
      axios
        .get(`analytics/categories/${curr}/${prev}/${prod}`)
        .then((response) => {
          this.resultRaw = response.data // for reload original data 
          // const salesResult = this.resultRaw.sales
          const criteria = this.resultRaw.criteria          

          this.currentText = criteria.currentText
          this.previousText = criteria.previousText
          this.processedRaw = reduceData(this.resultRaw, 'categories')
          this.chartSource();
          this.renderGraph();  
        })
    },
    renderGraph() {
      const categoriesChart = am4core.create(
        this.$refs.categoriesChart,
        am4charts.XYChart
      )
      categoriesChart.paddingRight = 20

      categoriesChart.data = this.forUi
      const dateAxis = categoriesChart.xAxes.push(new am4charts.DateAxis())
      dateAxis.renderer.grid.template.location = 0

      // First value
      const valueAxis = categoriesChart.yAxes.push(new am4charts.ValueAxis())
      valueAxis.tooltip.disabled = true
      valueAxis.renderer.minWidth = 35

      const series = categoriesChart.series.push(new am4charts.LineSeries())
      series.dataFields.dateX = 'mdy2'
      series.dataFields.valueY = 'itemsSold1'
      series.strokeWidth = 1
      series.tensionX = 0.8
      series.fill = am4core.color('#239f4f91')
      series.fillOpacity = 0.2
      series.stroke = am4core.color('green')
      series.strokeOpacity = 0.5

      const fillModifier = new am4core.LinearGradientModifier()
      fillModifier.opacities = [1, 0]
      fillModifier.offsets = [0, 1]
      fillModifier.gradient.rotation = 90
      series.segments.template.fillModifier = fillModifier

      series.tooltipText = '{valueY.itemsSold1}'

      // Second value axis
      const valueAxis2 = categoriesChart.yAxes.push(new am4charts.ValueAxis())
      // valueAxis2.title.text = 'Units sold'
      valueAxis2.renderer.opposite = true
      valueAxis2.tooltip.disabled = true
      valueAxis2.renderer.minWidth = 35

      // Second series
      const series2 = categoriesChart.series.push(new am4charts.LineSeries())
      series2.dataFields.dateX = 'mdy2'
      series2.dataFields.valueY = 'itemsSold2'
      series2.strokeWidth = 3
      series2.yAxis = valueAxis2
      series2.strokeWidth = 1
      series2.tensionX = 0.8
      // series2.fill = am4core.color('#239f4f91')
      // series2.fillOpacity = 0.2
      series2.stroke = am4core.color('red')
      series2.strokeOpacity = 0.5

      series2.tooltipText = '{valueY.itemsSold2}'

      categoriesChart.cursor = new am4charts.XYCursor()

      const scrollbarX = new am4charts.XYChartScrollbar()
      scrollbarX.series.push(series)
      scrollbarX.series.push(series2)
      categoriesChart.scrollbarX = scrollbarX

      this.categoriesChart = categoriesChart
      this.hideLoader();
    },
    selectedSummary(selected) {
      this.selected = selected
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
        case "itemsSold1": // previous
          this.show.itemsSold1 = e.target.checked;
          break;
        case "itemsSold2": // current
          this.show.itemsSold2 = e.target.checked;
          break;
        default:
          this.show.itemsSold1 = true;
          this.show.itemsSold2 = true;
      }
      this.chartSource();
      this.renderGraph();        
      this.hideLoader();
    },
    chartSource() {
      this.forUi = this.processedRaw;
      if (!this.show.itemsSold1) {
        this.forUi = _.map(this.forUi, function(o) { return _.omit(o, 'itemsSold1'); });
      }
      if (!this.show.itemsSold2) {
        this.forUi = _.map(this.forUi, function(o) { return _.omit(o, 'itemsSold2'); });
      }
      console.log(this.forUi);
    },
    toggle(el) {
      const toggleTF = toggleSwitch(el)
      if (toggleTF) {

        if(el == 'categoriesCategories') {
          this.show.categoriesCategories = 1;
        }
        if(el == 'categoriesItemsSold') {
          this.show.categoriesItemsSold = 1;
        }
        if(el == 'categoriesNetSales') {
          this.show.categoriesNetSales = 1;
        }
        if(el == 'categoriesProducts') {
          this.show.categoriesProducts = 1;
        }
        if(el == 'categoriesOrders') {
          this.show.categoriesOrders = 1;
        }
       
      } else {

        if(el == 'categoriesCategories') {
          this.show.categoriesCategories = 0;
        }
        if(el == 'categoriesItemsSold') {
          this.show.categoriesItemsSold = 0;
        }
        if(el == 'categoriesNetSales') {
          this.show.categoriesNetSales = 0;
        }
        if(el == 'categoriesProducts') {
          this.show.categoriesProducts = 0;
        }
        if(el == 'categoriesOrders') {
          this.show.categoriesOrders = 0;
        }
      }
      this.toggleBar = `${this.show.categoriesCategories}:${this.show.categoriesItemsSold}:${this.show.categoriesNetSales}:${this.show.categoriesProducts}:${this.show.categoriesOrders}`;
    },    
  },
  beforeUnmount() {
    if (this.categoriesChart) {
      this.categoriesChart.dispose()
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
