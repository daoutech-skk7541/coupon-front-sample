<template>
  <div>
    <h1>Modal Example</h1>
    <button @click="show = true">Show Modal</button>
    <BaseModal :show="show">
      <h2>Modal Content</h2>
      <p>This is a modal content.</p>
      <button @click="show = false">Close</button>
    </BaseModal>
  </div>
</template>

<script setup>
import BaseModal from "@/components/common/BaseModal.vue";
import {ref} from "vue";

let show = ref(false);

</script>