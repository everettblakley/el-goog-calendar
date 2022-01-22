<template>
  <generic-calendar :month="month">
    <template #weekday="{ weekday }">
      <p class="text-center">{{ weekday[0] }}</p>
    </template>
    <template #day="{ day }"
      ><p class="text-center">{{ day }}</p></template
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
