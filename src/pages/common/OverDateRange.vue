<template>
  <div class="date-range-popup-main">
    <div class="date-range-pop-menu-main">
      <div class="date-range-pop-menu-inner-area">
        <div class="date-range-pop-menu-heading-area">
          <h2>SELECT DATE RANGE</h2>
        </div>
        <div class="date-range-con-inner">
          <!-- <form :model="criteria"> -->
          <div class="date-range-list-area">
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
          <!-- </form> -->
        </div>
        <div class="date-range-pop-menu-heading-area">
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
              <li>
                <div>
                  <button type="button" class="btn btn-primary btn-lg">
                    Products
                  </button>
                  <!-- <p class="date-range-active2">Products</p> -->
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverDateRange',
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
