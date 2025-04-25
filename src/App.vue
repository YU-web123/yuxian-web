<template>
  <div class="min-h-screen flex flex-col">
    <!-- 导航栏 -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <nav class="flex justify-between items-center py-4">
          <router-link to="/" class="ml-8">
            <img :src="logo" alt="预先生物" class="h-20" />
          </router-link>
          <div class="ml-auto flex items-center gap-12">
            <router-link to="/" class="text-xl hover:text-primary transition-colors">首页</router-link>
            <router-link to="/about" class="text-xl hover:text-primary transition-colors">关于我们</router-link>
            <router-link to="/products" class="text-xl hover:text-primary transition-colors">产品中心</router-link>
            <router-link to="/contact" class="text-xl hover:text-primary transition-colors">联系我们</router-link>
          </div>
        </nav>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="flex-grow">
      <router-view></router-view>
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">联系我们</h3>
            <p class="mb-2">电话：0755-XXXXXXXX</p>
            <p class="mb-2">邮箱：contact@yuxian.com</p>
            <p>地址：深圳市南山区XXXX大厦</p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">快速链接</h3>
            <ul class="space-y-2">
              <li><router-link to="/about" class="hover:text-primary">关于我们</router-link></li>
              <li><router-link to="/products" class="hover:text-primary">产品中心</router-link></li>
              <li><router-link to="/contact" class="hover:text-primary">联系我们</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">关注我们</h3>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-primary">
                <span class="sr-only">微信</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zM8.5 15.5h-2v-7h2v7zm-1-8C7.224 7.5 7 7.276 7 7s.224-.5.5-.5.5.224.5.5-.224.5-.5.5zm7 8h-2v-4c0-.552-.448-1-1-1s-1 .448-1 1v4h-2v-7h2v1.241C11.882 8.541 12.419 8 13.5 8c1.381 0 2.5 1.119 2.5 2.5v5z"/>
                </svg>
              </a>
              <a href="#" class="hover:text-primary">
                <span class="sr-only">微博</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.5 15.5h-11v-2h11v2zm0-4h-11v-2h11v2zm0-4h-11v-2h11v2z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">公司简介</h3>
            <p class="text-sm">
              预先生物科技是一家专注于生物技术研发和应用的高新技术企业，致力于为农业发展提供绿色、环保、高效的解决方案。
            </p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 预先生物科技有限公司. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import logo from '@/assets/images/logo.jpg'
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  --primary-color: #10B981;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.router-link-active {
  color: #10B981;
}

.text-primary {
  color: #10B981;
}

.hover\:text-primary:hover {
  color: #10B981;
}

@media (min-width: 1280px) {
  .container {
    max-width: 1440px;
  }
}
</style> 