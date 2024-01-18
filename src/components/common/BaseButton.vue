<template>
  <button class="base-button">{{ text }}</button>
</template>
<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
<style>
.base-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.base-button:hover {
  background-color: #3e8e41;
  cursor: pointer;
}
</style>