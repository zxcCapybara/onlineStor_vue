<template>
  <router-link :to="`product/${item.id}`" class="flex flex-col gap-3">
    <img
      class="max-w-92 max-h-80 min-h-80 rounded-lg object-contain"
      :src="item.image"
      alt="image"
    />
    <span class="font-semibold text-xl truncate">
      {{ item.title }}
    </span>
    <span class="text-sm font-semibold leading-5"> {{ item.price }} $ </span>
    <div class="flex justify-end items-center gap-3">
      <vue-feather @click.prevent="addFavorites(item)" class="cursor-pointer" type="heart" />
      <vue-feather @click.prevent="addCart(item)" class="cursor-pointer" type="shopping-cart" />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  setup() {
    const addFavorites = (item) => {
      localStorage.setItem('favorites', JSON.stringify(item))
    }
    const addCart = (item) => {
      localStorage.setItem('cart', JSON.stringify(item))
    }
    return {
      addFavorites,
      addCart,
    }
  },
}
</script>

<style lang="scss" scoped></style>
