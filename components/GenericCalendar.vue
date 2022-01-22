<template>
  <div class="grid grid-cols-7">
    <template v-for="weekday in weekdays">
      <slot name="weekday" :weekday="weekday"
        ><p :key="weekday" class="text-center">{{ weekday }}</p></slot
      >
    </template>
    <template v-for="day in days">
      <slot name="day" class="text-center" :day="day"
        ><p :key="day" class="text-center">
          {{ day }}
        </p></slot
      >
    </template>
  </div>
</template>

<script>
export default {
  props: {
    month: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      weekdays: [],
      monthLength: 0,
    }
  },
  async fetch() {
    const calendar = await this.$content('calendar').fetch()
    this.weekdays = calendar.weekdays
    this.monthLength = calendar.month_len[this.month] || 0
  },
  computed: {
    days() {
      return Array(this.monthLength)
        .fill(null)
        .map((_, i) => i + 1)
    },
  },
}
</script>
