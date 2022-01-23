<template>
  <div v-if="calendar" class="flex flex-col">
    <div class="grid grid-cols-7">
      <template v-for="weekday in weekdays">
        <slot name="weekday" :weekday="weekday"
          ><p :key="weekday" class="text-center">{{ weekday }}</p></slot
        >
      </template>
    </div>
    <div class="flex-1 grid grid-cols-7" :class="bodyClass">
      <template v-for="day in days">
        <slot name="day" class="text-center" :day="day"
          ><p :key="day" class="text-center">
            {{ day }}
          </p></slot
        >
      </template>
    </div>
  </div>
</template>

<script>
import { Calendar } from '~/lib'
export default {
  props: {
    month: {
      type: String,
      default: '',
    },
    bodyClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      calendar: null,
      startWeekday: 0,
    }
  },
  async fetch() {
    const calendarData = await this.$content('calendar').fetch()

    this.calendar = new Calendar(
      calendarData.month_len,
      calendarData.weekdays,
      calendarData.first_day
    )

    const monthIndex = Object.keys(this.calendar).indexOf(this.month)

    this.startWeekday = this.calendar.getWeekdayForDate(monthIndex, 0)
  },
  computed: {
    days() {
      return Array(this.monthLength)
        .fill(null)
        .map((_, i) => i + 1)
    },
    weekdays() {
      if (!this.calendar?.weekdays) return []
      return this.calendar.weekdays
    },
    monthLength() {
      if (!this.calendar?.months) return 0
      return this.calendar.months[this.month]
    },
  },
}
</script>
