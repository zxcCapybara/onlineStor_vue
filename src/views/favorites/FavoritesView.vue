<template>
  <div class="flex flex-col items-center justify-center w-full">
    <h1 class="text-[36px] font-bold mb-7">Избранное</h1>

    <ProgressSpinner v-if="pending" />
    <div v-else class="flex flex-wrap gap-24 justify-center align-center w-full">
      <Product v-for="product in products" :item="product" :key="product.id" class="w-1/4 p-2" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useFavorites } from '@/stores/favoritesProducts.js'

import Product from '@/components/product/Product.vue'

export default {
  setup() {
    const favoritesStore = useFavorites()
    const { getData } = favoritesStore
    const products = computed(() => favoritesStore.products)
    const pending = computed(() => favoritesStore.pending)

    onMounted(() => {
      getData()
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
