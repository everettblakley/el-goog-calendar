<template>
  <div class="h-screen w-screen flex flex-col">
    <header
      class="flex flex-grow-0 items-center justify-between px-4 py-2 border-b border-gray-200 shadow"
    >
      <nuxt-link to="/"><h3>El Goog Calendar</h3></nuxt-link>
      <div class="flex items-center">
        <div
          class="w-8 h-8 rounded-full ring-2 ring-green-600 ring-offset-2 bg-blue-400 bg-opacity-30"
        ></div>
      </div>
    </header>
    <div class="flex flex-1">
      <aside class="w-1/5 p-4 border-r border-gray-200 shadow-lg">
        <month-preview :month="currentMonth" />
      </aside>
      <main class="flex-grow flex-shrink-0">
        <p>Calendar</p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      calendar: {},
    }
  },
  async fetch() {
    this.calendar = await this.$content('calendar').fetch()
  },
  computed: {
    currentMonth() {
      if (this.calendar === {} || !this.calendar.months) return null
      const { notes } = this.calendar
      const defaultMonth = this.calendar.months[0]
      if (!notes) {
        return defaultMonth
      }
      const noteDates = Object.keys(notes)
      if (noteDates.length === 0) {
        return defaultMonth
      }
      const date = noteDates[0].split('-')
      return this.calendar.months[date[1]]
    },
  },
}
</script>
