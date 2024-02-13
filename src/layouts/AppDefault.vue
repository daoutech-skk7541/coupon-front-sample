<template>
  <!-- sidebar 가 필요한 화면인 경우 -->
  <div id="main">
    <div id="side">
      <side-bar></side-bar>
    </div>
    <div id="content">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script setup>
import SideBar from "@/components/common/SideBar.vue";
</script>

<style>
#main {
  display: flex;
  height: 100%;
}

#side {
  flex: 0;
}

#content {
  flex: 1;
  padding: 20px;
}
</style>