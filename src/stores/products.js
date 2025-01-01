import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getProducts } from '@/api/products.js'


export const useProducts = defineStore('products', () => {
  const products = ref([])
  const pending = ref(true)

  const getData = async () => {
      pending.value = true
      try {
        products.value = await getProducts()
      } catch (e) {
        console.log(e)
      } finally {
        pending.value = false
      }
    }

  return { products, pending, getData }
})
