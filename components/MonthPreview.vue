<template>
  <generic-calendar :month="month">
    <template #weekday="{ weekday }">
      <p class="text-center text-sm font-light py-1 text-gray-500">
        {{ weekday[0] }}
      </p>
    </template>
    <template #day="{ day }"
      ><p class="text-center text-sm font-light text-gray-800">
        {{ day }}
      </p></template
    >
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
