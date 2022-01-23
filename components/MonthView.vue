<template>
  <generic-calendar class="h-full" :month="month">
    <template #weekday="{ weekday }">
      <p class="text-center text-sm text-gray-500 py-2">{{ weekday }}</p>
    </template>
    <template #day="{ day }">
      <div class="border border-gray-200 flex flex-col">
        <p class="text-center text-sm text-gray-500 py-1">
          {{ day }}
        </p>
      </div>
    </template>
  </generic-calendar>
</template>

<script>
export default {
  props: {
    month: {
      type: String,
      default: '',
    },
  },
}
</script>
