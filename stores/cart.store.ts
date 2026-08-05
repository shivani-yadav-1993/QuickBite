import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { CartItem } from '~types/cart'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const totalItems = computed(() =>
    items.value.reduce(
      (sum, item) => sum + item.quantity,
      0
    )
  )

  const addItem = (item: CartItem) => {
    items.value.push(item)
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    totalItems,
    addItem,
    clearCart
  }
})
