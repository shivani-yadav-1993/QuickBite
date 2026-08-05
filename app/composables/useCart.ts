import { storeToRefs } from 'pinia'

import { useCartStore } from '~stores/cart.store'

export const useCart = () => {
  const cartStore = useCartStore()

  const {
    items,
    totalItems
  } = storeToRefs(cartStore)

  return {
    items,
    totalItems,

    addItem: cartStore.addItem,
    clearCart: cartStore.clearCart
  }
}
