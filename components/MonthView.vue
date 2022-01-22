<template>
  <generic-calendar class="h-full" :month="month"></generic-calendar>
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
