<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-12">应用案例</h1>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- 案例1 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-64">
          <img
            src="@/assets/images/case-1.jpg"
            alt="医疗诊断应用"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <span class="inline-block px-3 py-1 bg-green-100 text-primary text-sm font-medium rounded-full mb-4">
            医疗诊断
          </span>
          <h3 class="text-xl font-semibold mb-3">某三甲医院诊断系统升级项目</h3>
          <p class="text-gray-600 mb-4">
            为医院提供快速、准确的生物检测解决方案，显著提高诊断效率和准确率。
          </p>
          <div class="border-t pt-4">
            <h4 class="font-semibold mb-2">项目成果：</h4>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">诊断时间缩短60%</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">准确率提升至99.9%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 案例2 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-64">
          <img
            src="@/assets/images/case-2.jpg"
            alt="食品安全检测"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <span class="inline-block px-3 py-1 bg-green-100 text-primary text-sm font-medium rounded-full mb-4">
            食品安全
          </span>
          <h3 class="text-xl font-semibold mb-3">大型食品企业安全检测项目</h3>
          <p class="text-gray-600 mb-4">
            为食品企业提供全面的食品安全检测解决方案，保障食品质量安全。
          </p>
          <div class="border-t pt-4">
            <h4 class="font-semibold mb-2">项目成果：</h4>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">检测效率提升80%</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">质量问题预警率提升50%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 案例3 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-64">
          <img
            src="@/assets/images/case-3.jpg"
            alt="生物材料应用"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <span class="inline-block px-3 py-1 bg-green-100 text-primary text-sm font-medium rounded-full mb-4">
            生物材料
          </span>
          <h3 class="text-xl font-semibold mb-3">医疗器械创新材料应用</h3>
          <p class="text-gray-600 mb-4">
            为医疗器械企业提供创新生物材料解决方案，提升产品性能。
          </p>
          <div class="border-t pt-4">
            <h4 class="font-semibold mb-2">项目成果：</h4>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">产品性能提升40%</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">生物相容性显著提高</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 案例4 -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-64">
          <img
            src="@/assets/images/case-4.jpg"
            alt="科研机构合作"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <span class="inline-block px-3 py-1 bg-green-100 text-primary text-sm font-medium rounded-full mb-4">
            科研合作
          </span>
          <h3 class="text-xl font-semibold mb-3">重点实验室研发合作项目</h3>
          <p class="text-gray-600 mb-4">
            与科研机构合作开展生物技术创新研究，推动技术进步。
          </p>
          <div class="border-t pt-4">
            <h4 class="font-semibold mb-2">项目成果：</h4>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">获得3项发明专利</span>
              </li>
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600">发表多篇高水平论文</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 合作流程 -->
    <section class="mt-20">
      <h2 class="text-3xl font-bold text-center mb-12">合作流程</h2>
      <div class="relative">
        <div class="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
        <div class="relative z-10 flex justify-between">
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
            <h3 class="text-lg font-semibold mb-2">需求沟通</h3>
            <p class="text-gray-600 text-center w-32">了解客户具体需求</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
            <h3 class="text-lg font-semibold mb-2">方案制定</h3>
            <p class="text-gray-600 text-center w-32">定制解决方案</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
            <h3 class="text-lg font-semibold mb-2">项目实施</h3>
            <p class="text-gray-600 text-center w-32">专业团队执行</p>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
            <h3 class="text-lg font-semibold mb-2">持续服务</h3>
            <p class="text-gray-600 text-center w-32">长期技术支持</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script> 