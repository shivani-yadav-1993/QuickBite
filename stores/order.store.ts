import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Order } from '../types/order'

export const useOrderStore = defineStore('order', () => {
  const orders = ref<Order[]>([])

  return {
    orders
  }
})
