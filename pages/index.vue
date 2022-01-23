<template>
  <div class="h-screen w-screen flex flex-col">
    <header
      class="flex flex-grow-0 items-center justify-between px-4 py-3 border-b border-gray-200 shadow"
    >
      <nuxt-link to="/"><h3>El Goog Calendar</h3></nuxt-link>
      <div class="flex items-center">
        <div
          class="w-6 h-6 rounded-full ring-2 ring-green-600 ring-offset-2 bg-blue-400 bg-opacity-30"
        ></div>
      </div>
    </header>
    <div class="flex flex-1">
      <aside class="w-1/5 p-4 border-r border-gray-200 shadow-lg">
        <h3 class="text-lg font-medium text-gray-800">{{ currentMonth }}</h3>
        <month-preview :month="currentMonth" />
      </aside>
      <main class="flex-grow flex-shrink-0">
        <month-view :month="currentMonth" />
      </main>
    </div>
  </div>
</template>

<script>
import { Calendar } from '~/lib'
export default {
  name: 'IndexPage',
  data() {
    return {
      calendar: {},
      calendarData: {},
      notes: {},
      currentMonth: null,
    }
  },
  async fetch() {
    const calendarData = await this.$content('calendar').fetch()
    this.notes = calendarData.notes || {}

    this.calendar = new Calendar(
      calendarData.month_len,
      calendarData.weekdays,
      calendarData.first_day
    )

    this.initialize()
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.currentMonth = this.getCurrentMonth()
    },
    getCurrentMonth() {
      if (this.calendar === {} || !this.calendar.months) return null
      const defaultMonth = Object.keys(this.calendar.months)[0]
      if (!this.notes) {
        return defaultMonth
      }
      const noteDates = Object.keys(this.notes)
      if (noteDates.length === 0) {
        return defaultMonth
      }
      const date = noteDates[0].split('-')
      return Object.keys(this.calendar.months)[date[1]]
    },
  },
}
</script>
