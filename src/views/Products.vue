<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold text-center mb-12">产品中心</h1>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- 富素负离子液 -->
      <router-link :to="{ name: 'ProductDetail', params: { id: 'fusulizi' }}" class="block group">
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img :src="product1" alt="富素负离子液" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">富素负离子液</h3>
            <p class="text-gray-600 mb-2">产品类型：植物营养液</p>
            <p class="text-gray-600">专业的植物营养解决方案，促进作物健康生长</p>
            <div class="mt-4 flex justify-end">
              <span class="text-primary group-hover:text-green-700 inline-flex items-center">
                了解更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </router-link>

      <!-- 新型高效功能性微生物复合菌肥 -->
      <router-link :to="{ name: 'ProductDetail', params: { id: 'junfei' }}" class="block group">
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img :src="product2" alt="新型高效功能性微生物复合菌肥" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">新型高效功能性微生物复合菌肥</h3>
            <p class="text-gray-600 mb-2">产品类型：生物肥料</p>
            <p class="text-gray-600">高效复合菌群技术，提升土壤肥力，促进作物生长</p>
            <div class="mt-4 flex justify-end">
              <span class="text-primary group-hover:text-green-700 inline-flex items-center">
                了解更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </router-link>

      <!-- 中医农业 -->
      <router-link :to="{ name: 'ProductDetail', params: { id: 'zhongyao' }}" class="block group">
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img :src="product3" alt="中医农业" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">中医农业（中药农药）</h3>
            <p class="text-gray-600 mb-2">产品类型：中药复方系列农资产品</p>
            <p class="text-gray-600">传统中医理念结合现代农业，打造绿色植保方案</p>
            <div class="mt-4 flex justify-end">
              <span class="text-primary group-hover:text-green-700 inline-flex items-center">
                了解更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <!-- 第二行产品 -->
    <div class="grid md:grid-cols-3 gap-8 mt-8">
      <!-- 改性可控降解塑料 -->
      <router-link :to="{ name: 'ProductDetail', params: { id: 'mcdp' }}" class="block group">
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img :src="product4" alt="改性可控降解塑料" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">改性可控降解塑料（MCDP）</h3>
            <p class="text-gray-600 mb-2">产品类型：降解塑料材料</p>
            <p class="text-gray-600">可控降解速度的塑料，适用于地膜、育苗容器袋等农业用途</p>
            <div class="mt-4 flex justify-end">
              <span class="text-primary group-hover:text-green-700 inline-flex items-center">
                了解更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </router-link>

      <!-- 智能喷爆喷混深施机 -->
      <router-link :to="{ name: 'ProductDetail', params: { id: 'spray' }}" class="block group">
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img :src="product5" alt="智能喷爆喷混深施机" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">智能喷爆喷混深施机</h3>
            <p class="text-gray-600 mb-2">产品类型：农用机械设备</p>
            <p class="text-gray-600">实现土壤深层施肥与药物注入，有效构建土壤生态系统</p>
            <div class="mt-4 flex justify-end">
              <span class="text-primary group-hover:text-green-700 inline-flex items-center">
                了解更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </router-link>

      <!-- 真菌类生物制剂 -->
      <router-link :to="{ name: 'ProductDetail', params: { id: 'fungus' }}" class="block group">
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img :src="product6" alt="真菌类生物制剂" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">真菌类生物制剂</h3>
            <p class="text-gray-600 mb-2">产品类型：生物农药及菌剂</p>
            <p class="text-gray-600">主导开发的"金龟子绿僵菌"、"球孢白僵菌"等广谱生物农药及菌剂产品</p>
            <div class="mt-4 flex justify-end">
              <span class="text-primary group-hover:text-green-700 inline-flex items-center">
                了解更多
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <!-- 产品优势 -->
    <div class="mt-20">
      <h2 class="text-3xl font-bold text-center mb-12">产品优势</h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">品质保证</h3>
          <p class="text-gray-600">严格的质量管理体系</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">技术领先</h3>
          <p class="text-gray-600">持续创新的研发能力</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">专业服务</h3>
          <p class="text-gray-600">完善的技术支持</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-2">快速响应</h3>
          <p class="text-gray-600">及时的需求反馈</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import product1 from '@/assets/images/product-1.jpg'
import product2 from '@/assets/images/product-2.jpg'
import product3 from '@/assets/images/product-3.jpg'
import product4 from '@/assets/images/product-4.jpg'
import product5 from '@/assets/images/product-5.jpg'
import product6 from '@/assets/images/product-6.jpg'
</script>

<style scoped>
.text-primary {
  color: #10B981;
}
</style> 