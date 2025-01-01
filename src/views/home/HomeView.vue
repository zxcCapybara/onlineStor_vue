<template>
  <div class="flex flex-col items-center justify-center w-full">
    <h1 class="text-[36px] font-bold mb-7">Каталог</h1>

    <ProgressSpinner v-if="pending" />
    <div v-else class="flex flex-wrap gap-32 justify-center align-center w-full">
     <template v-if='products.length'>
      <Product
        v-for="product in products"
        :item="product"
        :key="product.id"
        class="w-full lg:w-1/4 sm:w-1/3 p-2"
      />
     </template>
    </div>
  </div>
</template>

<script>
import Product from '@/components/product/Product.vue'
import { useProducts } from '@/stores/products.js'
import { onMounted, computed } from 'vue'

export default {
  setup() {
    const productStore = useProducts()
    const { getData } = productStore
    const products = computed(() => productStore.products)
    const pending = computed(() => productStore.pending)

    onMounted(async () => {
      await getData()
    })

    return {
      products,
      pending,

    }
  },
  components: { Product },
}
</script>

<style lang="scss" scoped></style>
