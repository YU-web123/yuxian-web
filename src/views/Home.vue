<template>
  <div class="relative">
    <!-- 主横幅区域 -->
    <div class="relative h-screen">
      <div class="absolute inset-0">
        <transition-group name="fade">
          <img v-for="(image, index) in bannerImages" 
               :key="image.src" 
               :src="image.src" 
               :alt="image.alt"
               v-show="currentImageIndex === index"
               class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000" />
        </transition-group>
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div class="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
        <h1 class="text-5xl font-bold mb-6">菌种多样 菌群稳定 绿色长效</h1>
        <p class="text-2xl mb-8 text-center w-full">预先生物菌群</p>
        <div class="flex space-x-6">
          <router-link to="/about" class="bg-primary hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors">
            了解更多
          </router-link>
          <router-link to="/contact" class="border-2 border-white hover:bg-white hover:text-primary px-8 py-3 rounded-full transition-colors">
            联系我们
          </router-link>
        </div>
      </div>
    </div>

    <!-- 公司简介 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">公司简介</h2>
          <div class="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div class="max-w-4xl mx-auto">
          <p class="text-xl text-gray-600 leading-relaxed text-center">
            海南预先生物技术有限公司致力于农业安全生产与绿色生防，是集应用技术研发、产品制造和综合服务于一体的高新技术企业。公司核心竞争力在于整合微生物技术、生物蛋白技术、中医药技术、负离子技术及先进材料装备等，构建完整的农业生态解决方案体系。
          </p>
        </div>
      </div>
    </section>

    <!-- 核心产品 -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">系列产品</h2>
          <div class="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <router-link to="/products" class="block group">
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img :src="product1" alt="富素负离子液" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">富素负离子液</h3>
                <p class="text-gray-600 mb-2">产品类型：植物营养液</p>
                <p class="text-gray-600">专业的植物营养解决方案，促进作物健康生长</p>
              </div>
            </div>
          </router-link>
          <router-link to="/products" class="block group">
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img :src="product2" alt="新型高效功能性微生物复合菌肥" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">新型高效功能性微生物复合菌肥</h3>
                <p class="text-gray-600 mb-2">产品类型：生物肥料</p>
                <p class="text-gray-600">高效复合菌群技术，提升土壤肥力，促进作物生长</p>
              </div>
            </div>
          </router-link>
          <router-link to="/products" class="block group">
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img :src="product3" alt="中医农业" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">中医农业（中药农药）</h3>
                <p class="text-gray-600 mb-2">产品类型：中药复方系列农资产品</p>
                <p class="text-gray-600">传统中医理念结合现代农业，打造绿色植保方案</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 导入轮播图
import banner1 from '@/assets/images/banner1.jpg'
import banner2 from '@/assets/images/banner2.jpg'
import banner3 from '@/assets/images/banner3.jpg'

// 导入产品图片
import product1 from '@/assets/images/product-1.jpg'
import product2 from '@/assets/images/product-2.jpg'
import product3 from '@/assets/images/product-3.jpg'

const bannerImages = [
  { src: banner1, alt: '智能大棚种植' },
  { src: banner2, alt: '绿色幼苗' },
  { src: banner3, alt: '智能设备' }
]

const currentImageIndex = ref(0)
let intervalId: number | null = null

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % bannerImages.length
}

onMounted(() => {
  intervalId = window.setInterval(nextImage, 3000) // 每3秒切换一次图片
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.primary {
  color: #10B981;
}
.bg-primary {
  background-color: #10B981;
}
.text-primary {
  color: #10B981;
}
.hover\:text-primary:hover {
  color: #10B981;
}
.border-primary {
  border-color: #10B981;
}
</style> 