<template>
  <header class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img src="@/assets/images/logo.svg" alt="预先生物" class="h-12" />
          </router-link>
        </div>

        <!-- 导航菜单 -->
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-primary transition-colors">首页</router-link>
          <router-link to="/about" class="text-gray-700 hover:text-primary transition-colors">关于我们</router-link>
          <router-link to="/products" class="text-gray-700 hover:text-primary transition-colors">产品中心</router-link>
          <router-link to="/news" class="text-gray-700 hover:text-primary transition-colors">新闻动态</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-primary transition-colors">联系我们</router-link>
        </nav>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-700 hover:text-primary">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link to="/" class="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">首页</router-link>
          <router-link to="/about" class="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">关于我们</router-link>
          <router-link to="/products" class="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">产品中心</router-link>
          <router-link to="/news" class="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">新闻动态</router-link>
          <router-link to="/contact" class="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">联系我们</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.router-link-active {
  color: #10B981;
}
</style> 