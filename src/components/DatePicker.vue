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
  data() {
    return {
      datePicker1: null,
      datePicker2: null
    }
  },
  mounted() {
    this.datePicker1 = new Pikaday({
      container: this.$refs.calendarContainer,
      field: this.$refs.datepick1,
      format: this.format,
      theme: 'calendar__start-wrapper',
      onSelect: () => {
        this.$emit("input", this.datePicker1.toString());
        this.datePicker1.hide()
        this.datePicker2.show()
      },
      ...this.options
    });

    this.datePicker2 = new Pikaday({
      container: this.$refs.calendarContainer,
      field: this.$refs.datepick2,
      format: this.format,
      theme: 'calendar__start-wrapper',
      onSelect: () => {
        this.$emit("input", this.datePicker2.toString());
        this.datePicker1.show()
        this.datePicker2.hide()
      },
      ...this.options
    });

    this.datePicker2.hide()

    console.log('datePicker1', this.datePicker1)
    console.log('datePicker2', this.datePicker1)
  },
  methods: {
    
  },
};
</script>