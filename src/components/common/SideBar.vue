<template>
  <div class="sidebar">
    <div class="sidebar_logo">
      <img src="@/assets/logo.svg" alt="logo" @click="router.push('/')"/>
    </div>
    <div class="sidebar_menu">
      <ul>
        <li>
          <router-link to="/">홈</router-link>
        </li>
        <li>
          <router-link to="/my-page">마이페이지</router-link>
        </li>
        <li>
          <router-link to="/product-list">상품</router-link>
        </li>
        <li>
          <router-link to="/order">주문</router-link>
        </li>
        <li>
          <router-link to="/organization">조직도</router-link>
        </li>
        <li>
          <router-link to="/login" v-if="!isLoggedIn">로그인</router-link>
          <router-link to="/logout" v-else @click="logout()">로그아웃</router-link>
        </li>
        <li>
          <router-link to="/gcp">GCP TEST</router-link>
        </li>
        <li>
          <router-link to="/drag-and-drop">Drag And Drop Sample</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import {useAuthStore} from "@/stores/auth.js";
import {computed} from "vue";
import router from "@/router/index.js";

const isLoggedIn = computed(() => {
  return useAuthStore().isLoggedIn === true;
});

console.log(import.meta.env.VITE_APP_KEY);

function logout() {
  useAuthStore().logout();
}
</script>

<style>
.sidebar {
  width: 200px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.sidebar_logo {
  padding: 20px 0;
  text-align: center;
}

.sidebar_logo img {
  width: 100px;
}
.sidebar_logo img:hover {
  cursor: pointer;
}

.sidebar_menu {
  padding: 20px 0;
}

.sidebar_menu ul {
  padding: 0;
  margin: 0;
}

.sidebar_menu ul li {
  list-style: none;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.sidebar_menu ul li a {
  color: #333;
  text-decoration: none;
}

.sidebar_menu ul li a:hover {
  color: #000;
}
</style>