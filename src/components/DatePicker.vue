<template>
    <section class="calendar">
        <div class="calendar__inputs">
            <input :start="value" ref="datepick1" class="calendar__input" readonly="readonly" type="text" id="calendar-start" placeholder="Start Date">
            <label for="to">to</label>
            <input :end="value" ref="datepick2" class="calendar__input" readonly="readonly" type="text" id="calendar-end" placeholder="End Date">
        </div>
        <!-- Empty container for Pikaday Datepickers -->
        <div class="calendar__pikaday" id="calendar-container" ref="calendarContainer"></div>
        <!-- <button class="calendar__reset" id="calendar-clear">Reset</button> -->
    </section>
</template>

<script>
import Pikaday from "pikaday";


export default {
  props: {
    start: { require: true },
    end: { require: true },
    format: { default: "YYYY-MM-DD" },
    options: { default: {} },
  },
  mounted() {
    const datePicker1 = new Pikaday({
      bound: false,
      showWeekNumber: false,
      container: this.$refs.calendarContainer,
      field: this.$refs.datepick1,
      format: this.format,
      firstDay: 1,
      theme: 'calendar__start-wrapper',
      onSelect: () => {
        this.$emit("input", datePicker1.toString());
      },
      ...this.options
    });

    const datePicker2 = new Pikaday({
      bound: false,
      showWeekNumber: false,
      container: this.$refs.calendarContainer,
      field: this.$refs.datepick2,
      format: this.format,
      firstDay: 1,
      theme: 'calendar__start-wrapper',
      onSelect: () => {
        this.$emit("input", datePicker2.toString());
      },
      ...this.options
    });

    
  }
};
</script>