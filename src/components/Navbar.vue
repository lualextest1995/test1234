<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :unique-opened="true"
    @mouseover="() => (switchMenu = true)"
    @mouseleave="() => (switchMenu = false)"
    router
  >
    <el-menu-item index="/">
      <el-icon>
        <img src="../assets/Type=google, name=home.svg" alt="" />
      </el-icon>
      <span>首頁</span>
    </el-menu-item>
    <el-sub-menu v-for="item in props.UserMenu" :key="item.FuncId" :index="item.FuncId">
      <template #title>
        <el-icon>
          <img :src="icon(item.FuncId)" alt="" />
        </el-icon>
        <span>{{ item.FuncName }}</span>
      </template>
      <template v-if="item.FuncId === 'ID'">
        <el-menu-item
          v-for="subItem in item.subFuns"
          :key="subItem.FuncId"
          :index="subItem.FuncId"
          >{{ subItem.FuncName }}</el-menu-item
        >
      </template>
      <template v-else>
        <el-sub-menu v-for="subItem in item.subFuns" :key="subItem.FuncId" :index="subItem.FuncId">
          <template #title>
            <el-icon></el-icon>
            <span>{{ subItem.FuncName }}</span>
          </template>
          <el-menu-item v-for="i in subItem.subFuns" :key="i.FuncId" :index="i.FuncId">
            <el-icon></el-icon>
            {{ i.FuncName }}
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ID from '../assets/ID.svg'
import TV from '../assets/TV.svg'
import WO from '../assets/WO.svg'
import ML from '../assets/ML.svg'
import EQ from '../assets/EQ.svg'
import EH from '../assets/EH.svg'
const props = defineProps<{ UserMenu: any }>()
const switchMenu = ref(false)
const isCollapse = computed(() => (switchMenu.value ? false : true))
const icon = (FuncId: string) => {
  switch (FuncId) {
    case 'TV':
      return TV
    case 'WO':
      return WO
    case 'ML':
      return ML
    case 'EQ':
      return EQ
    case 'EH':
      return EH
    default:
      return ID
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: calc(100vh - 70px);
}
</style>
