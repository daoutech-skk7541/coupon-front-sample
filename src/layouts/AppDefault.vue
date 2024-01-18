<template>
  <!-- sidebar 가 필요한 화면인 경우 -->
  <div>
    <side-bar></side-bar>
  </div>
  <div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script setup>
import SideBar from "@/components/common/SideBar.vue";
</script>