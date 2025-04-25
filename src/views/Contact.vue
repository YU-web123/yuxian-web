<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-5xl font-bold text-center">联系我们</h1>
    
    <div class="grid md:grid-cols-2 gap-16 mt-20">
      <!-- 联系方式 -->
      <div class="space-y-16 px-8">
        <h2 class="text-3xl font-bold mb-16">联系方式</h2>
        
        <!-- 电话 -->
        <div class="flex items-start space-x-8">
          <div class="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-4">电话</h3>
            <p class="text-lg text-gray-600">400-123-4567</p>
          </div>
        </div>

        <!-- 邮箱 -->
        <div class="flex items-start space-x-8">
          <div class="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-4">邮箱</h3>
            <p class="text-lg text-gray-600">contact@yuxian.com</p>
          </div>
        </div>

        <!-- 地址 -->
        <div class="flex items-start space-x-8">
          <div class="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 class="text-2xl font-semibold mb-4">地址</h3>
            <p class="text-lg text-gray-600">深圳市南山区科技园创新大厦A座15楼</p>
          </div>
        </div>
      </div>

      <!-- 扫码添加微信 -->
      <div class="bg-white rounded-lg shadow-lg p-12 text-center">
        <h2 class="text-4xl font-bold mb-12">扫码添加微信</h2>
        <div class="flex flex-col items-center">
          <div class="w-64 h-64 mb-6 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <p class="text-gray-500">微信二维码待添加</p>
          </div>
          <p class="text-xl text-gray-600">扫描二维码，添加客服微信</p>
        </div>
      </div>
    </div>

    <!-- 地图 -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold mb-6">公司位置</h2>
      <div class="h-96 bg-gray-200 rounded-lg">
        <!-- 这里可以嵌入地图组件，如百度地图或高德地图 -->
        <div class="w-full h-full flex items-center justify-center text-gray-500">
          地图组件将在这里显示
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
const handleSubmit = (e: Event) => {
  e.preventDefault()
  // 处理表单提交逻辑
}
</script>

<style scoped>
.text-primary {
  color: #10B981;
}
</style> 