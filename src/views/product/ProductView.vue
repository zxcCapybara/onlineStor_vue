<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-[36px] font-bold mb-12 max-w-96 text-center">
      {{ product.title }}
    </h1>

    <ProgressSpinner v-if="pending" />
    <div v-else class="flex justify-between items-start gap-52 w-full flex-wrap lg:flex-nowrap">
      <img class="max-w-96 rounded mx-auto" :src="product.image" alt="item" />

      <div class="flex flex-col gap-6 mx-auto">
        <p class="text-3xl max-w-[38rem]">
          {{ product.description }}
        </p>

        <div class="flex items-center gap-3 justify-between">
          <p class="text-[62px]">{{ product.price }} $</p>
          <div class="flex items-center gap-6">
            <vue-feather
              @click.prevent="addFavorites(product)"
              class="cursor-pointer w-9"
              type="heart"
            />
            <vue-feather
              @click.prevent="addCart(product)"
              class="w-9 cursor-pointer"
              type="shopping-cart"
            />
          </div>
          <div class="flex items-center gap-3">
            <vue-feather class="w-12" type="star" stroke="yellow" fill="yellow"></vue-feather>
            <span class="text-[42px]">{{ product.rating.rate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useProduct } from '@/stores/product.js'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const productStore = useProduct()

    const product = computed(() => productStore.product)
    const pending = computed(() => productStore.pending)

    const { getData } = productStore


    const addFavorites = (item) => {
      localStorage.setItem('favorites', JSON.stringify(item))
    }
    const addCart = (item) => {
      localStorage.setItem('cart', JSON.stringify(item))
    }

    onMounted(async () => {
      await getData(route.params.id)
    })

    return {
      product,
      pending,
      addFavorites,
      addCart,
    }
  },
}
</script>

<style lang="scss" scoped></style>
