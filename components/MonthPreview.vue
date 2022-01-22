<template>
  <div v-if="!$fetchState.pending">
    <div :class="`grid grid-cols-${weekdays.length}`">
      <p v-for="day in weekdays" :key="day" class="text-center">{{ day[0] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthPreview',
  props: {
    month: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      weekdays: [],
    }
  },
  async fetch() {
    const calendar = await this.$content('calendar').fetch()
    this.weekdays = calendar.weekdays
  },
}
</script>
