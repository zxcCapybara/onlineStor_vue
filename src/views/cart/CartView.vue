<template>
  <div class="flex flex-col justify-center items-center w-full">
    <h1 class="text-[36px] font-bold">Корзина</h1>
    <ProgressSpinner v-if="pending" />
    <div v-else class="flex flex-wrap gap-24 justify-center align-center w-full">
      <Product v-for="product in products" :item="product" :key="product.id" class="w-1/4 p-2" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Product from '@/components/product/Product.vue'

export default {
  setup() {
    const pending = ref(true)
    const products = ref([])
    const getData = () => {
      pending.value = true

      setTimeout(() => {
        const data = localStorage.getItem('cart')
        products.value.push(JSON.parse(data))
        pending.value = false
      }, 1000)
    }

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
