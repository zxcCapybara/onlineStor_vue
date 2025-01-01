import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getProduct } from '@/api/products.js'


export const useProduct = defineStore('product', () => {
  const product = ref([])
  const pending = ref(true)

  const getData = async (id) => {
      pending.value = true
      try {
        product.value = await getProduct(id)
      } catch (e) {
        console.log(e)
      } finally {
        pending.value = false
      }
    }

    /*
    const addFavorites = (item) => {
      localStorage.setItem('favorites', JSON.stringify(item))
    }
    const addCart = (item) => {
      localStorage.setItem('cart', JSON.stringify(item))
    }
    */

  return { product, pending, getData }
})
