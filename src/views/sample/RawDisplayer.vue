<template>
  <div>
    <h3>{{ title }}</h3>
    <pre>{{ valueString }}</pre>
  </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    required: true
  }
});

const valueString = computed(() => {
  return JSON.stringify(props.value, null, 2);
});
</script>

<style scoped>
pre {
  text-align: start;
}
</style>
