<template>
  <div class="date-range-popup-main">
    <div class="date-range-pop-menu-main">
      <div class="date-range-pop-menu-inner-area">
        <div class="date-range-pop-menu-heading-area">
          <h2>SELECT DATE RANGE</h2>
        </div>
        <div class="data-range-tabs">
          <ul>
            <li @click="activeTab = 'present'" :class="{'data-range-active-tab' : activeTab === 'present'}
            ">Present</li>
            <li @click="activeTab = 'custom'" :class="{'data-range-active-tab' : activeTab === 'custom'} 
            ">Custom</li>
          </ul>
        </div>
        <div class="date-range-con-inner">
          <!-- <form :model="criteria"> -->
          <div class="date-range-list-area" v-show="activeTab == 'present' ">
            <ul>
              <li>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrToday', 'PrevYesterday')"
                  >
                    Today
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrToday', 'PrevYesterday')"
                  >
                    Yesterday
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrWeekToDate', 'PrevLastWeek')"
                  >
                    Week to Date
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrWeekToDate', 'PrevLastWeek')"
                  >
                    Last Week
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrMonthToDate', 'PrevLastMonth')"
                  >
                    Month to Date
                  </button>
                  <!-- <p class="date-range-active1">Month to Date</p> -->
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrMonthToDate', 'PrevLastMonth')"
                  >
                    Last Month
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrQuarterToDate', 'PrevLastQuarter')"
                  >
                    Quarter to Date
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrQuarterToDate', 'PrevLastQuarter')"
                  >
                    Last Quarter
                  </button>
                </div>
              </li>
              <li>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrYearToDate', 'PrevLastYear')"
                  >
                    Year to Date
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-light btn-lg"
                    @click="getDates('CurrYearToDate', 'PrevLastYear')"
                  >
                    Last Year
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div class="date-range-date-area" v-show="activeTab == 'custom' ">
            <date-picker
              id="date-picker"
              v-model="date"
              format="MMM DD, YYYY"
              :options="{firstDay: 1, showWeekNumber: false, bound: false}"
            ></date-picker>
          </div>
          <!-- </form> -->
        </div>
        <div class="date-range-con-footer">
          <div class="date-range-pop-menu-second-heading-area">
            <h2>COMPARE TO</h2>
          </div>
          <div class="date-range-con-inner">
            <div class="date-range-list-area">
              <ul>
                <li>
                  <div>
                    <button
                      type="button"
                      class="btn btn-light btn-lg"
                      @click="current('CurrPreviousPeriod', 'PrevPreviousYear')"
                    >
                      Previous Period
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-light btn-lg"
                      @click="previous('CurrPreviousPeriod', 'PrevPreviousYear')"
                    >
                      Previous Year
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="date-range-custom-date" v-show="activeTab == 'present' ">
            <h2>Custom Date Range</h2>
                <div class="date-range-custom-date-main">
                    <h3>Month to Date (Jun 1 - 29,2021)</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    <p>vs. Previous Year (Jun 1 - 29,2020)</p>
                </div>
          </div>
          <div class="date-range-custom-date-main-button">
            <button type="button" class="btn btn-primary btn-lg">
              Products
            </button>
            <!-- <p class="date-range-active2">Products</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "@/components/DatePicker.vue";

export default {
  name: 'OverDateRange',
  components: {DatePicker},
  props: {
    getDates: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      // criteria: {
      //   curr: '',
      //   prev: '',
      // },
      activeTab : "present",
      date: "",
    }
  },
  mounted() {
    // this.criteria.curr = 'Today'
    // this.criteria.prev = 'Yesterday'
  },
  methods: {},
}
</script>
<style scoped></style>
