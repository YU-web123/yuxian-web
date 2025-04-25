<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-12">新闻资讯</h1>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- 新闻1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-48">
          <img
            src="@/assets/images/news-1.jpg"
            alt="公司新闻"
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            公司新闻
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            预先生物荣获"国家高新技术企业"认证
          </h3>
          <p class="text-gray-600 mb-4 line-clamp-2">
            近日，预先生物科技凭借强大的研发实力和创新能力，成功获得"国家高新技术企业"认证...
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">2024-04-15</span>
            <a href="#" class="text-primary hover:text-green-700 transition-colors">阅读更多</a>
          </div>
        </div>
      </div>

      <!-- 新闻2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-48">
          <img
            src="@/assets/images/news-2.jpg"
            alt="技术动态"
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            技术动态
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            预先生物成功研发新一代生物检测技术
          </h3>
          <p class="text-gray-600 mb-4 line-clamp-2">
            预先生物科技宣布成功研发新一代生物检测技术，该技术将大幅提升检测效率和准确性...
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">2024-04-10</span>
            <a href="#" class="text-primary hover:text-green-700 transition-colors">阅读更多</a>
          </div>
        </div>
      </div>

      <!-- 新闻3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-48">
          <img
            src="@/assets/images/news-3.jpg"
            alt="行业资讯"
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            行业资讯
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            2024生物技术产业发展趋势分析
          </h3>
          <p class="text-gray-600 mb-4 line-clamp-2">
            随着生物技术的不断发展，行业呈现出新的发展趋势。本文将深入分析2024年生物技术产业的主要发展方向...
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">2024-04-05</span>
            <a href="#" class="text-primary hover:text-green-700 transition-colors">阅读更多</a>
          </div>
        </div>
      </div>

      <!-- 新闻4 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-48">
          <img
            src="@/assets/images/news-4.jpg"
            alt="合作动态"
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            合作动态
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            预先生物与某知名医院达成战略合作
          </h3>
          <p class="text-gray-600 mb-4 line-clamp-2">
            预先生物科技与某知名三甲医院签署战略合作协议，共同推进生物技术在医疗领域的应用...
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">2024-03-28</span>
            <a href="#" class="text-primary hover:text-green-700 transition-colors">阅读更多</a>
          </div>
        </div>
      </div>

      <!-- 新闻5 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-48">
          <img
            src="@/assets/images/news-5.jpg"
            alt="研发进展"
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            研发进展
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            预先生物新型生物材料研发取得重要突破
          </h3>
          <p class="text-gray-600 mb-4 line-clamp-2">
            预先生物科技在新型生物材料研发方面取得重要突破，相关成果已申请多项发明专利...
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">2024-03-20</span>
            <a href="#" class="text-primary hover:text-green-700 transition-colors">阅读更多</a>
          </div>
        </div>
      </div>

      <!-- 新闻6 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-48">
          <img
            src="@/assets/images/news-6.jpg"
            alt="企业活动"
            class="w-full h-full object-cover"
          />
          <div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            企业活动
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            预先生物成功举办2024技术创新论坛
          </h3>
          <p class="text-gray-600 mb-4 line-clamp-2">
            预先生物科技成功举办2024技术创新论坛，来自全国各地的专家学者共同探讨行业发展...
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">2024-03-15</span>
            <a href="#" class="text-primary hover:text-green-700 transition-colors">阅读更多</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="flex justify-center mt-12">
      <nav class="flex items-center space-x-2">
        <a href="#" class="px-3 py-2 rounded-lg border text-gray-500 hover:text-primary hover:border-primary transition-colors">
          上一页
        </a>
        <a href="#" class="px-3 py-2 rounded-lg border bg-primary text-white">1</a>
        <a href="#" class="px-3 py-2 rounded-lg border text-gray-500 hover:text-primary hover:border-primary transition-colors">2</a>
        <a href="#" class="px-3 py-2 rounded-lg border text-gray-500 hover:text-primary hover:border-primary transition-colors">3</a>
        <span class="px-3 py-2 text-gray-500">...</span>
        <a href="#" class="px-3 py-2 rounded-lg border text-gray-500 hover:text-primary hover:border-primary transition-colors">10</a>
        <a href="#" class="px-3 py-2 rounded-lg border text-gray-500 hover:text-primary hover:border-primary transition-colors">
          下一页
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script> 