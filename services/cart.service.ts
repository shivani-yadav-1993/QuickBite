import api from './api.service'

export const useCartService = () => {
  const getCart = () =>
    api.get('/cart')

  const addToCart = (payload: unknown) =>
    api.post('/cart', payload)

  const updateCart = (payload: unknown) =>
    api.put('/cart', payload)

  const removeFromCart = (id: number) =>
    api.delete(`/cart/${id}`)

  return {
    getCart,
    addToCart,
    updateCart,
    removeFromCart
  }
}
