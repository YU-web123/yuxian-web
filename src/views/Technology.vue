<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-12">核心技术</h1>

    <div class="grid md:grid-cols-2 gap-12 mb-16">
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">生物技术创新</h2>
          <p class="text-gray-600">
            我们在生物技术领域拥有多项自主知识产权，通过持续创新和技术突破，为客户提供领先的生物技术解决方案。
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-3">技术优势</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-600">自主研发的专利技术</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-600">先进的研发设备和实验室</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-600">经验丰富的研发团队</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative h-96">
        <img
          src="@/assets/images/tech-lab.jpg"
          alt="实验室"
          class="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>

    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-center mb-8">技术领域</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">生物制药</h3>
          <p class="text-gray-600">开发创新药物和生物制剂，提供全面的药物研发解决方案</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">生物检测</h3>
          <p class="text-gray-600">提供快速、准确的生物检测技术和设备</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">生物材料</h3>
          <p class="text-gray-600">研发新型生物材料，应用于医疗、环保等领域</p>
        </div>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-semibold text-center mb-8">研发流程</h2>
      <div class="relative">
        <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
        <div class="relative z-10 flex justify-between">
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
            <h3 class="text-lg font-semibold mb-2">需求分析</h3>
            <p class="text-gray-600 text-center w-48">深入了解客户需求</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
            <h3 class="text-lg font-semibold mb-2">方案设计</h3>
            <p class="text-gray-600 text-center w-48">制定研发方案</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
            <h3 class="text-lg font-semibold mb-2">技术开发</h3>
            <p class="text-gray-600 text-center w-48">实施研发计划</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
            <h3 class="text-lg font-semibold mb-2">测试验证</h3>
            <p class="text-gray-600 text-center w-48">全面测试验证</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script> 