<template>
  <div v-if="props.show" class="modal">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
</style>