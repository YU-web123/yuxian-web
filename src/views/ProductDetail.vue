<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <!-- 产品标题 -->
      <h1 class="text-4xl font-bold mb-8">{{ product?.name || '产品详情' }}</h1>
      
      <!-- 产品图片和基本信息 -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="relative h-96">
          <img :src="product?.image" :alt="product?.name" class="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-bold mb-2">产品类型</h2>
            <p class="text-gray-600">{{ product?.type }}</p>
          </div>
          <div>
            <h2 class="text-xl font-bold mb-2">产品特点</h2>
            <ul class="space-y-2">
              <li v-for="(feature, index) in product?.features" :key="index" class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 产品详细描述 -->
      <div class="prose max-w-none">
        <h2 class="text-2xl font-bold mb-6">产品描述</h2>
        <div class="text-gray-600 space-y-4" v-html="product?.description"></div>
      </div>

      <!-- 应用场景 -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">应用场景</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(scene, index) in product?.applications" :key="index" class="bg-white rounded-lg shadow p-6">
            <h3 class="text-xl font-bold mb-3">{{ scene.title }}</h3>
            <p class="text-gray-600">{{ scene.description }}</p>
          </div>
        </div>
      </div>

      <!-- 技术参数 -->
      <div class="mt-12" v-if="product?.specifications">
        <h2 class="text-2xl font-bold mb-6">技术参数</h2>
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <table class="min-w-full">
            <tbody>
              <tr v-for="(value, key) in product?.specifications" :key="key" class="border-b">
                <td class="py-3 px-6 bg-gray-50 font-medium">{{ key }}</td>
                <td class="py-3 px-6">{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- PDF下载链接 -->
      <div class="mt-12 text-center">
        <a :href="product?.pdfUrl" 
           target="_blank" 
           class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-green-700 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          下载详细介绍
        </a>
      </div>

      <!-- 返回按钮 -->
      <div class="mt-12 text-center">
        <router-link to="/products" class="inline-flex items-center text-primary hover:text-green-700">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回产品列表
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref<any>(null)

// 模拟产品数据
const productData = {
  'fusulizi': {
    name: '富素负离子液',
    type: '植物营养液',
    image: '/src/assets/images/product-1.jpg',
    pdfUrl: '/pdfs/fusulizi.pdf',
    features: [
      '高效吸收，快速见效',
      '生态环保，零残留',
      '提高作物品质和产量',
      '增强植物抗逆性'
    ],
    description: `
      <p>富素负离子液是一款创新型植物营养液，采用先进的负离子技术，有效提升植物养分吸收效率。产品配方科学，养分全面，特别添加多种有益微量元素，能显著改善作物品质。</p>
      <p>本产品具有以下特点：</p>
      <ul>
        <li>快速补充作物所需营养元素</li>
        <li>提高光合作用效率</li>
        <li>增强作物抗病虫害能力</li>
        <li>改善土壤微生态环境</li>
      </ul>
    `,
    applications: [
      {
        title: '大田作物',
        description: '适用于水稻、小麦、玉米等大田作物的生长各个时期'
      },
      {
        title: '经济作物',
        description: '适用于果树、蔬菜等经济作物的营养调控'
      },
      {
        title: '设施农业',
        description: '适用于温室大棚等设施农业的精准施肥'
      }
    ],
    specifications: {
      '产品规格': '1L/瓶',
      '有效期': '24个月',
      'pH值': '6.5-7.5',
      '施用方法': '叶面喷施/滴灌',
      '储存条件': '常温避光保存'
    }
  },
  'junfei': {
    name: '新型高效功能性微生物复合菌肥',
    type: '生物肥料',
    image: '/src/assets/images/product-2.jpg',
    pdfUrl: '/pdfs/junfei.pdf',
    features: [
      '多菌种复合，功能互补',
      '活性持久，繁殖能力强',
      '改良土壤，提升地力',
      '促进根系发育'
    ],
    description: `
      <p>新型高效功能性微生物复合菌肥是一款集营养和改良功能于一体的生物制品，采用多种有益菌株复合发酵技术，能有效改善土壤环境，提高作物产量。</p>
      <p>主要功能：</p>
      <ul>
        <li>固氮解磷，提供养分</li>
        <li>分泌活性物质，促进生长</li>
        <li>抑制有害菌，保护作物</li>
        <li>改善土壤结构，提升肥力</li>
      </ul>
    `,
    applications: [
      {
        title: '土壤改良',
        description: '适用于退化土壤、盐碱地等问题土壤的改良'
      },
      {
        title: '种植培肥',
        description: '适用于各类作物的种植和培肥'
      },
      {
        title: '生态修复',
        description: '适用于农田生态系统的修复和重建'
      }
    ],
    specifications: {
      '产品规格': '20kg/袋',
      '有效期': '12个月',
      '菌落总数': '≥20亿/克',
      '施用方法': '撒施/条施',
      '储存条件': '阴凉干燥处保存'
    }
  },
  'zhongyao': {
    name: '中医农业（中药农药）',
    type: '中药复方系列农资产品',
    image: '/src/assets/images/product-3.jpg',
    pdfUrl: '/pdfs/zhongyao.pdf',
    features: [
      '纯天然提取，安全无害',
      '多重防治，功效显著',
      '生态友好，无农残',
      '适用范围广'
    ],
    description: `
      <p>中医农业产品系列是基于传统中医药理论研发的新型农业投入品，采用多种天然中草药提取物复合而成，具有防病、杀虫、增效等多重功能。</p>
      <p>产品优势：</p>
      <ul>
        <li>天然源料，安全环保</li>
        <li>多靶向防治，效果持久</li>
        <li>增强植物免疫力</li>
        <li>改善农产品品质</li>
      </ul>
    `,
    applications: [
      {
        title: '病害防治',
        description: '适用于多种农作物病害的预防和治疗'
      },
      {
        title: '虫害防治',
        description: '适用于主要农业害虫的防治'
      },
      {
        title: '品质提升',
        description: '提升农产品品质，增强市场竞争力'
      }
    ],
    specifications: {
      '产品规格': '500ml/瓶',
      '有效期': '36个月',
      '使用浓度': '500-1000倍液',
      '施用方法': '喷雾施用',
      '储存条件': '常温避光密封保存'
    }
  },
  'mcdp': {
    name: '改性可控降解塑料（MCDP）',
    type: '降解塑料材料',
    image: '/src/assets/images/product-4.jpg',
    pdfUrl: '/pdfs/mcdp.pdf',
    features: [
      '完全降解为无害小分子',
      '不产生微塑料',
      '提高作物成活率与产量'
    ],
    description: `
      <p>改性可控降解塑料（MCDP）是一种创新型环保材料，专门针对农业应用场景开发。该产品可在使用寿命结束后完全降解为对环境无害的小分子，不会产生微塑料污染，是传统农用塑料的理想替代品。</p>
      <p>产品特点：</p>
      <ul>
        <li>可控降解：根据使用需求调控降解周期</li>
        <li>环境友好：降解过程不产生有害物质</li>
        <li>性能稳定：使用期内保持优异物理性能</li>
        <li>成本效益：提高农作物产量，降低环境治理成本</li>
      </ul>
    `,
    applications: [
      {
        title: '农用地膜',
        description: '用于大田作物种植，可控降解，避免白色污染'
      },
      {
        title: '育苗容器',
        description: '适用于各类农作物育苗，降解后无需回收'
      },
      {
        title: '农业包装',
        description: '农用物资包装，使用后自然降解'
      }
    ],
    specifications: {
      '产品规格': '定制规格',
      '使用寿命': '3-12个月可调',
      '降解周期': '6-18个月可控',
      '适用温度': '-20℃至60℃',
      '储存条件': '避光、干燥环境'
    }
  },
  'spray': {
    name: '智能喷爆喷混深施机',
    type: '农用机械设备',
    image: '/src/assets/images/product-5.jpg',
    pdfUrl: '/pdfs/spray.pdf',
    features: [
      '深层施肥与药物注入',
      '提高农作物品质',
      '适用于多种果树产业'
    ],
    description: `
      <p>智能喷爆喷混深施机是一款创新型农业机械设备，采用先进的深层施肥技术，能够将肥料和农药精准注入土壤深层，显著提高利用效率。</p>
      <p>核心优势：</p>
      <ul>
        <li>精准定位：智能控制系统确保施用精度</li>
        <li>深层渗透：特殊喷头设计，确保养分深入土层</li>
        <li>均匀分布：创新喷混技术，保证养分均匀性</li>
        <li>智能调控：可根据土壤条件自动调节施用量</li>
      </ul>
    `,
    applications: [
      {
        title: '果园管理',
        description: '适用于各类果树的深层施肥和病虫害防治'
      },
      {
        title: '大田作物',
        description: '用于农作物根系营养供给和土壤改良'
      },
      {
        title: '设施农业',
        description: '温室大棚等设施农业的精准施肥施药'
      }
    ],
    specifications: {
      '工作效率': '2-4亩/小时',
      '施用深度': '20-60cm可调',
      '动力要求': '柴油/电力驱动',
      '容量': '200L药箱',
      '控制方式': '智能电控系统'
    }
  },
  'fungus': {
    name: '真菌类生物制剂',
    type: '生物农药及菌剂',
    image: '/src/assets/images/product-6.jpg',
    pdfUrl: '/pdfs/fungus.pdf',
    features: [
      '安全高效',
      '广谱应用',
      '绿色环保'
    ],
    description: `
      <p>真菌类生物制剂是以"金龟子绿僵菌"、"球孢白僵菌"等为核心的生物农药系列产品，采用先进的菌种培养和制剂工艺，具有高效、安全、环保的特点。</p>
      <p>产品优势：</p>
      <ul>
        <li>选择性强：针对性防治特定害虫</li>
        <li>持效期长：菌种活性持久</li>
        <li>无抗性：害虫不易产生抗性</li>
        <li>生态友好：对有益生物安全</li>
      </ul>
    `,
    applications: [
      {
        title: '害虫防治',
        description: '防治地下害虫、蛴螬等农业害虫'
      },
      {
        title: '土壤改良',
        description: '改善土壤微生态环境，提升土壤健康'
      },
      {
        title: '绿色防控',
        description: '有机农业和绿色食品生产基地病虫害防治'
      }
    ],
    specifications: {
      '有效活菌数': '≥20亿/克',
      '产品规格': '1kg/袋',
      '有效期': '12个月',
      '施用方法': '喷洒/土壤处理',
      '储存条件': '低温避光保存'
    }
  }
}

onMounted(() => {
  const productId = route.params.id as string
  product.value = productData[productId as keyof typeof productData]
})
</script>

<style scoped>
.text-primary {
  color: #10B981;
}
</style> 