<template>
  <BaseButton @click="login" text="로그인"></BaseButton>
</template>
<script setup>
import {useAuthStore} from "@/stores/auth.js";
import router from "@/router/index.js";
import BaseButton from "@/components/common/BaseButton.vue";

function login() {
  useAuthStore().login();

  if (useAuthStore().destinationPath !== null) {
    router.push(useAuthStore().destinationPath);
  }
}
</script>
