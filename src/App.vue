<template>
  <div class="common-layout">
    <el-container>
      <el-header height="70px"><Header /></el-header>
      <el-container>
        <el-aside :width="navBarWidth">
          <Navbar :UserMenu="data.UserMenu" />
        </el-aside>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import data from './assets/data'
const navBarWidth = ref(70)
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-header {
  background: linear-gradient(90deg, #416eb6 0%, #715ca8 100%);
}
</style>
